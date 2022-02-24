import {getTypeNavList} from '@/api'
const state = {
    categroyList:[]
}
// 只有在mutations中才可以更改state数据
const mutations = {
    getList(state,data){
        state.categroyList = data
    }
}
const actions = {
   async getCategroy({commit}){
       let result  = await getTypeNavList()
       if(result.data.code == 200){
            // commit  触发mutations方法
           commit('getList',result.data)
       }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}