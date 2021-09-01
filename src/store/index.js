import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        allPosts: [],
        singlePost: {},
        sortedGame: [],
        page: 1,
        perPage: 10,
        pages: [],
    },
    mutations: {
        AllPosts(state, payload) {
            state.allPosts = payload
        },
        singlePost(state, payload) {
            state.singlePost = payload
            console.log(payload)
        },
        sortGame(state, payload) {
            state.sortedGame = payload
        },
        setPage(state, payload){
            state.page = payload
        },
        setPrevious(state, payload){
            state.page--
        },
        setNext(state, payload){
            state.page++
        }
    },
    actions: {
        getAllPosts({commit}, payload) {
            fetch(`http://167.99.138.67:4545/giveaways/all`)
                .then(res => res.json())
                .then(data => commit('AllPosts', data))
        },
        moreInfo({commit}, payload) {
            fetch(`http://167.99.138.67:4545/giveaways/id/${payload}`)
                .then(res => res.json())
                .then(data => commit('singlePost', data))
        },
        getGameBy({commit}, payload) {
            fetch(`http://167.99.138.67:4545/giveaways/sort/${payload.platform}/${payload.type}/${payload.sortBy}`)
                .then(res => res.json())
                .then(data => commit('sortGame', data))
        },
    },
})
