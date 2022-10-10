let arr=["Full Stack","UI/UX Designer","Data analyst","3ndi ma7al"];
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
