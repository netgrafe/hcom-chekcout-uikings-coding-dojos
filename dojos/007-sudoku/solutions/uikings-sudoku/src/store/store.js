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
                let filteredElements = state.board.filter(element => i === parseInt(element));
                valueSelectors.push({
                    value: i,
                    numberOfOccurences: filteredElements.length
                });
            }

            return valueSelectors;
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
        registerSelectedNumber({state, getters}, selector){
            if (state.selectedCell !== null && !state.selectedCell.isReadOnly){
                console.log('registerSelectedNumber');
                let col = getters.getColumn(state.selectedCell.x);
                let row = getters.getRow(state.selectedCell.y);
                let section = getters.getSection(getters.getSectionOf(state.selectedCell));
                //ezeken vegigmenni, es megnezni hogy szerepel-e bennuk a selector erteke
                console.log(col, row, section);
            }
        }
    }
});
