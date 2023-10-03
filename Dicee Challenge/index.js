

document.querySelector("body").addEventListener('click',()=>{
var number1=rndm();
var number2=rndm();
var link1=("images/dice"+number1+".png");
var link2=("images/dice"+number2+".png");
imageChanger(link1,link2);
});

function rndm(){
    var nmbr=Math.round(Math.random()*6) ;
    if(0===nmbr){
        return 6;
    }else{
        return nmbr;}
}

function imageChanger(link1,link2){

document.querySelector(".img1").setAttribute("src",link1);
document.querySelector(".img2").setAttribute("src",link2);
if(link1==link2){
    document.querySelector("h1").innerHTML="Draw";
}
else if(link1>link2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(link1<link2){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
}
