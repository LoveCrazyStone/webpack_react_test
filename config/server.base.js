var server={
    ip:'localhost',
    port:8088,
    url:function(){
        return 'http://'+this.ip+':'+this.port
    }
};
module.exports=server;