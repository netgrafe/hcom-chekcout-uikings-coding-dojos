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
appearence (lehetséges értékek)
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
        pushedButton: null,
        numberRegistry: []  // how many occurences are written from each number
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
                    value: isItemEmpty ? '' :  item,
                    isReadOnly: !isItemEmpty,
                    x: Math.floor(index / 9),
                    y: index % 9,
                    appearance: 'inactive'
                }
            });

            for (let i = 1; i <=9; i++) {
                let filteredElements = allFields.filter(element => i === parseInt(element));
                state.numberRegistry[i] = filteredElements.length;
            }
        }
    },
    getters: {
        getRow() {
            return function(index) {

            }
        },
        getSection(state) {
            return function(index) {
                const topLeftX = Math.floor(index / 3) * 3;
                const topLeftY = (index - topLeftX) * 3;

                return state.board.filter(cell => {
                    return cell.x >= topLeftX && cell.x <= topLeftX + 2 &&
                            cell.y >= topLeftY && cell.y <= topLeftY + 2;

                })

            /*    index % 3  0
                1 -> 1
                2 -> 4
                3 -> 7
                4 -> 28
                5 -> 31
                6 -> 34 */
            }
        },
        getColumn() {}
    },
    actions: {
        loadChallenges({ commit, state }) {
            axios.get('/static/challenges.json').then(res => {
                commit('saveChallenges', res.data);
                console.log(res.data);
            }).then(() => {
                commit('startChallenge', state.challenges[0]);
            });

        }
    }
});
