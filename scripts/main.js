let myImage=document.querySelector("img");

myImage.onclick=function(){
    let mySrc=myImage.getAttribute("src");
    if(mySrc==="images/sport.jpg"){
        myImage.setAttribute("src","images/aut.jpg");
    }else{
        myImage.setAttribute("src","images/sport.jpg");
    }
};

let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1");

function setUserName(){
    let myName=prompt("请输入你的名字");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name",myName);
        myHeading.textContent="JavaScipt is cool,"+myName;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    let storedName=localStorage.getItem("name");
    myHeading.textContent="JavaScipt is cool,"+storedName;
}

myButton.onclick=function(){
    setUserName();
}