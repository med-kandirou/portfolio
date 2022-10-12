let arr=["Full Stack","UI/UX Designer","Data analyst","lghder bda"];
let slides=document.getElementById("slides");

let index=0;
setInterval(function () {
    slides.innerText = arr[index];
    index++;
    if(index>3){
        index=0;
    }
}
,900);
