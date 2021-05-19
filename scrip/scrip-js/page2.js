var xhr =new XMLHttpRequest();
xhr.open('get','https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json',true);
xhr.send(null);
xhr.onload=function(){
    var data =JSON.parse(xhr.responseText).result.records;


var title =document.querySelector('.title');
var btn =document.querySelectorAll('.box');
var select=document.querySelector('.item')
var list =document.querySelector('.list')
var sel='';
var count =[];
for(var i=0;i<data.length;i++){
    count.push(data[i].Zone);
}
var result =Array.from(new Set(count));
console.log(result);
loaddata('苓雅區');
for(var i=0 ;i<btn.length;i++){
    btn[i].addEventListener('click',clickbtn);
    function clickbtn(e){
        if(e.target.nodeName !== "INPUT"){return}
        loaddata(e.target.value);
    }
}
select.addEventListener('change',function(e){
    loaddata(e.target.value);
});
function loaddata(local){
    var str='';
    title.innerHTML=local;
    for(var i=0;i<data.length;i++){
        if(data[i].Zone == local){
             str+='<li class="card"><div class="card-header"><img src="'+data[i].Picture1+'" alt=""><ul><li><h2>'+data[i].Name+'</h2></li><li>'+data[i].Zone+'</li> </ul></div><ul class="card-body"><li class="time"><img src="scrip-img/icons_clock.png" alt="">'+data[i].Opentime+'</li><li class="local"><img src="scrip-img/icons_pin.png" alt="">'+data[i].Add+'</li><li class="phon"><img src="scrip-img/icons_phone.png" alt="">'+data[i].Tel+'</li><div class="ticket"><img src="scrip-img/icons_tag.png" alt="">'+data[i].Ticketinfo+'</div></ul></li>'
        }
    }
    list.innerHTML=str;
}
function upselect(){
    for(var i=0;i<result.length;i++){
        sel+='<option class="text-center" href="#">'+result[i]+'</option>';
    }
    select.innerHTML=sel;
}
upselect();

}
