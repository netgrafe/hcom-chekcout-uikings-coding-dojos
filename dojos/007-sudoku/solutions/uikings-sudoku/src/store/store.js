import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);

/*

value
isReadOnly
isSelected (mégsem kell, úgy döntöttünk, inkább a tábla adata ez)
x
y
appearance (lehetséges értékek)
inactive
error (törlés gombbal lehet kikerülni belőle)
focused - sötétebb kék
highlighted - világoskék - a kijelölt cella sorában és oszlopában lévő cellák
grouped - vörös, azonos számok kijelölése

*/

export default new Vuex.Store({
    state: {
        challenges: null,
        board: null,
        selectedCell: null,
        pushedButton: null
    },
    mutations: {
        saveChallenges(state, challenges) {
            state.challenges = challenges;
        },
        startChallenge(state, challenge) {
            if (!challenge.board) return;

            let allFields = challenge.board.join('').split('');

            state.board = allFields.map((item, index) => {
                const isItemEmpty = item === '.' ? true : false;
                return {
                    value: isItemEmpty ? '' : item,
                    isReadOnly: !isItemEmpty,
                    x: Math.floor(index / 9),
                    y: index % 9,
                    appearance: 'inactive'
                }
            });

        },
        selectCell(state, cell) {
            state.selectedCell = cell;

            state.board.forEach(element => {
                element.appearance = 'inactive';
            });

            state.board.filter(el => ((el.x === cell.x || el.y === cell.y) && el !== cell)).forEach(el => {
                el.appearance = 'highlighted';
            });

            if (cell.value) {
                cell.appearance = 'grouped';

                state.board.filter(el => el.value === cell.value).forEach(el => {
                    el.appearance = 'grouped';
                });
            } else {
                cell.appearance = 'focused';
            }
        }
    },
    getters: {
        getRow(state) {
            return function (rowNumber) {
                return state.board.filter(cell => {
                    return cell.x == rowNumber;
                });
            }
        },
        getSection(state) {
            return function (index) {
                const topLeftX = Math.floor(index / 3) * 3;
                const topLeftY = (index - topLeftX) * 3;

                return state.board.filter(cell => {
                    return cell.x >= topLeftX && cell.x <= topLeftX + 2 &&
                        cell.y >= topLeftY && cell.y <= topLeftY + 2;
                })
            }
        },
        getSectionOf(state) {
            return function(cell) {
                let y = Math.floor(cell.y / 3)
                let x = Math.floor(cell.x / 3);
                return x * 3 + y;
            }
        },
        getColumn(state) {
            return function (colNumber) {
                return state.board.filter(cell => {
                    return cell.y == colNumber;
                });
            }
        },

        valueSelectors(state) {
            let valueSelectors = [
                {
                    value: '',
                    numberOfOccurences: null
                }
            ];

            for (let i = 1; i <= 9; i++) {
                let filteredElements = state.board.filter(element => i === parseInt(element.value));
                valueSelectors.push({
                    value: i,
                    numberOfOccurences: filteredElements.length
                });
            }

            return valueSelectors;
        },
        gameEnded(state, getters) {
            return state.board && getters.valueSelectors.slice(1).every(selector => selector.numberOfOccurences === 9)
        }
    },
    actions: {
        loadChallenges({
            commit,
            state
        }) {
            axios.get('/static/challenges.json').then(res => {
                commit('saveChallenges', res.data);
                console.log(res.data);
            }).then(() => {
                commit('startChallenge', state.challenges[0]);
            });

        },
        registerSelectedNumber({state, getters, commit}, selector){
            if (state.selectedCell !== null && !state.selectedCell.isReadOnly && state.selectedCell.value !== String(selector.value)){
                let col = getters.getColumn(state.selectedCell.y);
                let row = getters.getRow(state.selectedCell.x);
                let section = getters.getSection(getters.getSectionOf(state.selectedCell));
                let contains = cell => parseInt(cell.value) === parseInt(selector.value);

                if (col.some(contains) || row.some(contains) || section.some(contains)) {
                    state.selectedCell.value = '';
                    commit('selectCell', state.selectedCell);
                    state.selectedCell.appearance = 'invalid';
                } else {
                    state.selectedCell.appearance = '';
                    state.selectedCell.value = String(selector.value);
                    commit('selectCell', state.selectedCell);
                }
            }
        }
    }
});
