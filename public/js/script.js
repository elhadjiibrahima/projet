const granddiv=document.querySelector(".form");
const granddi=document.querySelector(".question");
const grandd=document.querySelector(".nbrReP");
const grand=document.querySelector(".typeRep");
// const reponse=document.querySelector(".reponse");
const imageajout=document.querySelector(".imageajout");
const jsrep=document.querySelector(".jsrep")


///////////////////////////////////////
/* <label for="reponse">Reponse</label>
<input type="text" name="reponse" id="rep">
<input type="checkbox" name="checkbox" id="checkbox">
<input type="radio" name="radio" id="radio">  */
////////////////////////////////////
imageajout.addEventListener("click",()=>{
    const reponse=document.createElement('div')
    const label=document.createElement("label")
    const rep=document.createElement("input")
    const checkboxe=document.createElement("input")
    const radioe=document.createElement("input")
    const imag=document.createElement("img")
    // jsrep.appendChild(reponse)
    jsrep.appendChild(reponse)
    reponse.appendChild(label);
    reponse.appendChild(rep);
    reponse.appendChild(checkboxe);
    reponse.appendChild(radioe);
    reponse.appendChild(imag);
    label.innerText="reponse";

    reponse.setAttribute("class","reponse")
    imag.setAttribute("src","<?=WEB_PUBLIC.'img'.DIRECTORY_SEPARATOR.'icones'.DIRECTORY_SEPARATOR.'ic-supprimer.png'?>")
    rep.setAttribute("id","rep");
    checkboxe.setAttribute("id","checkbox")
    checkboxe.setAttribute("type","checkbox")
    radioe.setAttribute("id","radio")
    radioe.setAttribute("type","radio")
    radioe.setAttribute("name","radio")


imag.addEventListener("click",()=>{
    jsrep.removeChild(reponse)
})
    
})

