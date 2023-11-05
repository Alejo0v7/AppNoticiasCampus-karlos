import { createStore } from 'vuex'
export default createStore({
    state: {
        autor: 'Eduar',
    },
    getters: {
        getAutor(state){
            return state.autor
        }
    },
    mutations: {

    },
    actions: {

    }
})