const axios = require('axios')

describe('接口测试',function(){
    it("test接口测试",function(){
        axios.get("http://192.168.1.135:8092/api/v1/admin/myentaccount")
        .then(function(res){
            if(res.status == 20000){
                done()
            }else{
                done(new Error('请求出错'))
            }
        })
        .catch(function(){
            done(new Error('请求出错'))
        })
    })
})