var xhr =new XMLHttpRequest();
xhr.open('get','https://data.epa.gov.tw/api/v1/aqx_p_432?format=json&limit=84&api_key=5e2fadc0-a851-4935-b1ec-161d08d5eb59',true);
xhr.send(null);
const list =document.querySelector('.list')
const title=document.querySelector('.title')
const cards=document.querySelectorAll('.card')
let str="";
xhr.onload=function(){
    var fields =JSON.parse(xhr.responseText).fields;
    var data =JSON.parse(xhr.responseText).records;
    var count =[];
    data.forEach(citie => {
    count.push(citie.County)
    });
    let country = Array.from(new Set(count));

    function updata(){
        for(var i=0;i<country.length;i++){
            str+=`<li>
            <button href="#" class="card" value='${country[i]}'>
            <img src="https://picsum.photos/250/100?random=${i}"name=${country[i]}>
            <p class="card-title" value='${country[i]}'>${country[i]}</p>
            </button>
            </li>`   
            
        }
        
        list.innerHTML=str;
        
    }
    function changepage(e){
        if(e.target.nodeName == "BUTTON"){
           title.innerHTML=e.target.value;
           str=`<li>
           123
           </li>`;
           list.innerHTML=str;
        }else if(e.target.nodeName == "P"){
            title.innerHTML=e.target.innerHTML;
            str=`<li>
            123
            </li>`;
            list.innerHTML=str;
        }else if(e.target.nodeName == "IMG"){
            title.innerHTML=e.target.name;
            str=`<li>
            123
            </li>`;
            list.innerHTML=str;
        }else{
            return;
        }
        
    }
            // var title =[];
            // fields.forEach(field => {
            //     title.push(field.info.label)
            // });
            // console.log(Array.from(new Set(title)));
            // console.log(data)

            
    list.addEventListener('click',changepage)
       
    updata()
}

// cards.forEach(card =>{
//     // changepage(btn.value);
//     this.addEventListener('click',function(){
       
//     })
// })
// console.log(cards)


