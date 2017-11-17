import Vue from 'vue'
import Vuex from 'vuex'

Vue.user(Vuex)
const store = new Vue.Store({
    state:{
        site:{}
    },
    mutations:{
        changeThemeColor(){},
        addModule(){},
        sortModule(){},
        removeModule(){},
        updateModule(){}
    },
    actions:{
        getSite(){},
        saveSite(){}
    }
})