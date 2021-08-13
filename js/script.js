

var head=document.getElementById("head");

function countDown (){

    //كل ثانية يقلل واحد
    head.textContent=head.textContent-1;

    //لو الرقم قل عن صفر اكتب done
    //بعدها هيجي NAN
    //عشان كدا لازم اوقف ال setInterval
    if(head.textContent < 0){
        head.textContent="Done...";

        clearInterval(timer);
    }
}
var timer= setInterval(countDown,1000);  //  1 seconds
