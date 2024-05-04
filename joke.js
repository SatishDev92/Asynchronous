let jokeContainer= document.getElementById("joke")
const btn=document.getElementById("btn");
const url="https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,explicit&type=single"

btn.addEventListener("click", async function (){
    let raw= await fetch(url);
    let data= await raw.json();
    jokeContainer.innerHTML=`${data.joke}`
   })