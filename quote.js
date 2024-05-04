let quote=document.querySelector("#quote");
let btn=document.querySelector("#btn")
let author=document.querySelector("#author")
let url="https://api.quotable.io/random"
async function a(){
    let raw= await fetch(url)
    let data= await raw.json();
    quote.innerHTML=`"${data.content}"`;
    author.innerHTML=data.author;
}
btn.addEventListener("click",a)