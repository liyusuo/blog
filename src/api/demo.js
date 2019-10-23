import axios from '../libs/axios/index'
export default {
    getDate : function() {
        return axios.request({
            url: '/getData',
            method: 'get'
        })
    }
}