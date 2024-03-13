
/* dollar*/

function convert(){
    var mouth = document.querySelector("#mouth").value;
    var dollar = document.querySelector("#dollar");

    if(isNaN(mouth)){
        dollar.innerHTML="Enter number not text"
        return false;
    }else if(mouth==""){
        dollar.innerHTML="Enter number"
        return false;
    }else if(mouth==0){
        dollar.innerHTML="Enter anthor number rathar than 0"
        return false;
    }else if(mouth<0){
        dollar.innerHTML="Enter positive number"
        return false;
    }else{
        dollar.innerHTML = mouth * 50;
        return false;

    }

}

/*Riyal*/ 
function convertR(){
    var saudi = document.querySelector("#saudi").value;
    var Riyal = document.querySelector("#Riyal");

    if(isNaN(saudi)){
        Riyal.innerHTML="Enter number not text"
        return false;
    }else if(saudi==""){
        Riyal.innerHTML="Enter number"
        return false;
    }else if(saudi==0){
        Riyal.innerHTML="Enter anthor number rathar than 0"
        return false;
    }else if(saudi<0){
        Riyal.innerHTML="Enter positive number"
        return false;
    }else{
        Riyal.innerHTML = saudi * 13;
        return false;

    }

}

/*Yen*/
function convertY(){
    japan =document.querySelector("#japan").value;
    Yen =document.querySelector("#Yen");

    if(isNaN(japan)){
        Yen.innerHTML="Enter number not text"
        return false;
    }else if(japan==""){
        Yen.innerHTML="Enter number"
        return false;
    }else if(japan==0){
        Yen.innerHTML="Enter anthor number rathar than 0"
        return false;
    }else if(japan<0){
        Yen.innerHTML="Enter positive number"
        return false;
    }else{
        Yen.innerHTML = japan * 0.33;
        return false;
    }
}


/*Dinar*/
function convertD(){
    Kuwaiti =document.querySelector("#Kuwaiti").value;
    dinar =document.querySelector("#dinar");

    if(isNaN(Kuwaiti)){
        dinar.innerHTML="Enter number not text"
        return false;
    }else if(Kuwaiti==""){
        dinar.innerHTML="Enter number"
        return false;
    }else if(Kuwaiti==0){
        dinar.innerHTML="Enter anthor number rathar than 0"
        return false;
    }else if(Kuwaiti<0){
        dinar.innerHTML="Enter positive number"
        return false;
    }else{
        dinar.innerHTML = Kuwaiti * 157.71;
        return false;
    }
}

/*dirham*/
function convertDi(){
    Emirates =document.querySelector("#Emirates").value;
    dirham =document.querySelector("#dirham");

    if(isNaN(Emirates)){
        dirham.innerHTML="Enter number not text"
        return false;
    }else if(Emirates==""){
        dirham.innerHTML="Enter number"
        return false;
    }else if(Emirates==0){
        dirham.innerHTML="Enter anthor number rathar than 0"
        return false;
    }else if(Emirates<0){
        dirham.innerHTML="Enter positive number"
        return false;
    }else{
        dirham.innerHTML = Emirates * 13;
        return false;
    }
}

