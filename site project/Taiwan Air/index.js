var xhr =new XMLHttpRequest();
xhr.open('get','https://data.epa.gov.tw/api/v1/aqx_p_432?format=json&limit=83&api_key=5e2fadc0-a851-4935-b1ec-161d08d5eb59',true);
xhr.send(null);
const list =document.querySelector('.list')
const title=document.querySelector('.title')
const cards=document.querySelectorAll('.card')
const back =document.querySelector('.back a')
let str="";
xhr.onload=function(){
    var fields =JSON.parse(xhr.responseText).fields;
    var data =JSON.parse(xhr.responseText).records;
    var count =[];
    data.forEach(citie => {
        count.push(citie.County)
    });
    let country = Array.from(new Set(count));
    let alldata= Array.from(new Set(data));
    // var title =[];
    // fields.forEach(field => {
    //     title.push(field.info.label)
    // });
    

    function updata(){
        str=``;
        for(var i=0;i<country.length;i++){
            str+=`<li>
            <button href="#" class="card" value='${country[i]}'>
            <img src="https://picsum.photos/250/100?random=${i}"name=${country[i]}>
            <p class="card-title" value='${country[i]}'>${country[i]}</p>
            </button>
            </li>`   
        }
        title.innerHTML='請選擇地區';
        back.style.display='none'
        list.innerHTML=str;
    }
    function upnewdata(cry){
        str=``;
        for(let i =0;i<cry.length;i++){
            str+=`<li class="item">
            <h2>${cry[i].SiteName}</h2>
            <p>狀態:${cry[i].Status}</p>
            <p>AQI:${cry[i].AQI}</p>
            <p>時間:${cry[i].PublishTime}</p>
        </li>`
        }
        back.style.display='flex'
        list.innerHTML=str;
    }
    function changepage(e){
        if(e.target.nodeName == "BUTTON"){
            title.innerHTML=e.target.value;
            let cry =alldata.filter(alldata => alldata.County==e.target.value)
            console.log(cry)
            upnewdata(cry);

        }else if(e.target.nodeName == "P"){
            title.innerHTML=e.target.innerHTML;
            let cry =alldata.filter(alldata => alldata.County==e.target.innerHTML)
            upnewdata(cry);
        }else if(e.target.nodeName == "IMG"){
            title.innerHTML=e.target.name;
            let cry =alldata.filter(alldata => alldata.County==e.target.name)
            upnewdata(cry);
        }else{
            return;
        }
        
    }
    function backpage(){
        str=``;
        for(var i=0;i<country.length;i++){
            str+=`<li>
            <button href="#" class="card" value='${country[i]}'>
            <img src="https://picsum.photos/250/100?random=${i}"name=${country[i]}>
            <p class="card-title" value='${country[i]}'>${country[i]}</p>
            </button>
            </li>`   
        }
        title.innerHTML='請選擇地區';
        back.style.display='none'
        list.innerHTML=str;
    }


    list.addEventListener('click',changepage)
    back.addEventListener('click',backpage)

    console.log(title)
    updata(country)
}

// cards.forEach(card =>{
//     // changepage(btn.value);
//     this.addEventListener('click',function(){
       
//     })
// })
// console.log(cards)


