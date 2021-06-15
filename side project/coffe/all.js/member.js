var vm = new Vue({
    el:'.memberALL',
    data:{
        logo:'coffee!',
        menu:['首頁', '產品列表' , '會員中心'],
        pageLink:{
            index:'index.html',
            product:'product.html',
            member:'member.html'
        },
        socialLink:{
            fb:'https://facebook.com/tiancai1228',
            ig:'https://www.instagram.com/tiancai_1228',
            github:'https://github.com/tiancai-1228'
        },
        log:{
            class:'log-content',
            title:'會員登入',
            color:'black',
            type:true,
        },
        reg:{
            class:'reg-content',
            title:'會員註冊',
            color:'gray',
            type:false,
        },
        email:'sky0975657713@gmail.com',

    },
    methods:{
        golog(){
            
            this.log.color='black';
            this.reg.color='gray';
            this.log.type=true;
            this.reg.type=false;
        },
        goreg(e){
            this.log.color='gray';
            this.reg.color='black';
            this.log.type=false;
            this.reg.type=true;
        }
    },

})