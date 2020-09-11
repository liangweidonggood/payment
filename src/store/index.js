import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        httpHost:'/gem'
    },
    mutations:{
        set_token(state, token) {
            state.token = token;
            sessionStorage.token = token
        },
        del_token(state) {
            state.token = ''
            sessionStorage.removeItem('token')
        },
        changeNum(state,param){
            state.num = param
            console.log(localStorage.getItem('token'),3333)
        },
        changeMsgnum(state,param){
            state.msgnum = param
        },
        changeSelect(state,param){
            state.type=param;
        }
    }
})

export default store
