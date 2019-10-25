import axios from '../libs/axios/index'
export default {
    getDate : function() {
        return axios.request({
            url: '/getData',
            method: 'get'
        })
    },
    getRead : function(url){
        return axios.request({
            url:"/"+url,
            method:'get'
        })
    },
    getNowRead : function(param){
        return axios.request({
            url:'/getNowRead',
            method:'post',
            params:param,
        })
    },

}