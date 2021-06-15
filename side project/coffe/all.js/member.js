var vm = new Vue({
    el:'.memberALL',
    data:{
        logo:'coffee!',
        menu:['首頁', '產品列表' , '會員中心'],
        account:'',
        password:'',
        Newaccount:'',
        Newpassword:'',
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
            type:true,
            class:'log-content',
            title:'會員登入',
            color:'black',
            Noaccount :false,
            Nopassword:false,
        },
        reg:{
            type:false,
            class:'reg-content',
            title:'會員註冊',
            color:'gray',
            Noaccount :false,
            Nopassword:false,
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
        goreg(){
            this.log.color='gray';
            this.reg.color='black';
            this.log.type=false;
            this.reg.type=true;
        },
        logcheck(e){
            if(this.account ==''&& this.password==''){
                e.preventDefault();
                this.log.Noaccount =true;
                this.log.Nopassword=true;
            }else if(this.account ==''){
                e.preventDefault();
                this.log.Noaccount =true;
                this.log.Nopassword=false;
            }else if(this.password==''){
                e.preventDefault();
                this.log.Noaccount =false;
                this.log.Nopassword=true;
            }else{
                this.log.Noaccount =false;
                this.log.Nopassword=false;
            }
        },
        regcheck(e){
            if(this.Newaccount ==''&& this.Newpassword==''){
                e.preventDefault();
                this.reg.Noaccount =true;
                this.reg.Nopassword=true;
            }else if(this.Newaccount ==''){
                e.preventDefault();
                this.reg.Noaccount =true;
                this.reg.Nopassword=false;
            }else if(this.Newpassword==''){
                e.preventDefault();
                this.reg.Noaccount =false;
                this.reg.Nopassword=true;
            }else{
                this.reg.Noaccount =false;
                this.reg.Nopassword=false;
            }
        }
    },

})