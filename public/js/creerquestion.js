const add_answer=document.querySelector(".cr-add-answerbtn");
const answer_contain=document.querySelector(".answer_contain");
// const simple =document.getElementById("simple");
// const texte=document.getElementById("texte");
// const multiple=document.getElementById("multiple");
const select=document.getElementById("select")

//**********************************************************************//
var i=1
var j=1

add_answer.addEventListener('click',function(){
    if(select.value=="simple"){
    // add_answer.style="display:block;"
var lab_reponse=document.createElement('label');
var input_text_reponse=document.createElement('input');
var input_radio_reponse=document.createElement('input');
var btn_delete_reponse=document.createElement('button');
var delet=document.createElement("img")
var cr_form_controller=document.createElement('div');
delet.src="../img/icones/ic-supprimer.png"
cr_form_controller.className="cr-form-controller";
input_text_reponse.type='text';
input_radio_reponse.type='radio';
input_text_reponse.id='cr-txt';
input_text_reponse.name="text"
input_radio_reponse.id='cr-rad';
input_radio_reponse.name='radio'
btn_delete_reponse.type='button';
btn_delete_reponse.className='cr-delete-answerbtn';
lab_reponse.innerText=`Reponse ${i}`;
cr_form_controller.appendChild(lab_reponse);
cr_form_controller.appendChild(input_text_reponse);
cr_form_controller.appendChild(input_radio_reponse);
cr_form_controller.appendChild(btn_delete_reponse);
btn_delete_reponse.appendChild(delet);
answer_contain.appendChild(cr_form_controller);
i++;
select.addEventListener("change",()=>{
    answer_contain.removeChild(cr_form_controller);
    add_answer.toggleAttribute("enabled")
});
}else if(select.value=="multiple"){
    // add_answer.style="display:block;"
    var lab_reponse=document.createElement('label');
    var input_text_reponse=document.createElement('input');
    var input_check_reponse=document.createElement('input');
    var btn_delete_reponse=document.createElement('button');
    var delet=document.createElement("img")
    var cr_form_controller=document.createElement('div');
    delet.src="../img/icones/ic-supprimer.png"
    cr_form_controller.className="cr-form-controller";
    input_text_reponse.type='text';
    input_text_reponse.name="text"
    input_check_reponse.type='checkbox';
    input_check_reponse.name='checkbox'
    input_text_reponse.id='cr-txt';
    input_check_reponse.id='cr-check';
    btn_delete_reponse.type='button';
    btn_delete_reponse.className='cr-delete-answerbtn';
    lab_reponse.innerText=`Reponse ${j}`;
    cr_form_controller.appendChild(lab_reponse);
    cr_form_controller.appendChild(input_text_reponse);
    cr_form_controller.appendChild(input_check_reponse);
    cr_form_controller.appendChild(btn_delete_reponse);
    btn_delete_reponse.appendChild(delet);
    answer_contain.appendChild(cr_form_controller);
    j++
    // console.log(input_check_reponse,checked)
    select.addEventListener("change",()=>{
        answer_contain.removeChild(cr_form_controller);
        add_answer.toggleAttribute("enabled");
    });
}
else if(select.value=="texte"){
    add_answer.style="display:none;"
    var lab_reponse=document.createElement('label');
    var input_text_reponse=document.createElement('input');
    var btn_delete_reponse=document.createElement('button');
    var delet=document.createElement("img")
    var cr_form_controller=document.createElement('div');
    delet.src="../img/icones/ic-supprimer.png"
    cr_form_controller.className="cr-form-controller";
    input_text_reponse.type='text';
    input_text_reponse.name="text"
    btn_delete_reponse.type='button';
    btn_delete_reponse.className='cr-delete-answerbtn';
    lab_reponse.innerText='Reponse' ;
    cr_form_controller.appendChild(lab_reponse);
    cr_form_controller.appendChild(input_text_reponse);
    cr_form_controller.appendChild(btn_delete_reponse);
    btn_delete_reponse.appendChild(delet);
    answer_contain.appendChild(cr_form_controller);
    select.addEventListener("change",()=>{
        answer_contain.removeChild(cr_form_controller);
        add_answer.style="display:block"
    });
}
else{
    add_answer.toggleAttribute("disabled");
}
btn_delete_reponse.addEventListener('click',function() {
    btn_delete_reponse.parentNode.remove();
    add_answer.style="display:block;"

})


});

select.addEventListener("change",()=>{
    answer_contain.removeChild()
    // add_answer.style="display:block;"
})













const cr_question=document.getElementById("question")
const nbrpt=document.getElementById("cr-point")
const formquestion=document.getElementById("cr-question-form")
formquestion.addEventListener("submit",function (e){
    // e.preventDefault()
    checkRequired(cr_question,nbrpt)
    
})









function showErrorReg(input, message) { //Afficher les messages d'erreur
    const formControlReg = input.parentElement;
    formControlReg.className = 'forms-group-inscrip  error';
    const small = formControlReg.querySelector('small');
    small.innerText = message;
}
// ! showSuccessReg
function showSuccessReg(input) {
    const formControlReg = input.parentElement;
    formControlReg.className = 'forms-group-inscrip  success';
}


// ! getFieldNameReg
function getFieldNameReg(input) {
    //Retour le nom de chaque input en se basant sur son id
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// !
function isValidEmail(email) {
    //Tester si l'email est valide
    // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const re=/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/
    re = /^[a-z0-9](\.?[a-z0-9]){4,}@g(oogle)?mail\.com$/;

    return re.test(String(email).toLowerCase());
    
}