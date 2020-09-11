import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        num:0,
        msgnum:0,
        type:[],
        token:'',
        keyWords:""//搜索框用的
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
        },
        changeMsgnum(state,param){
            state.msgnum = param
        },
        changeSelect(state,param){
            state.type=param;
        },
        changesearche(state,param){
            state.keyWords=param;
        }
    }
})

export default store
