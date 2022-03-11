<div class="cr-contain-create">
    <div class="cr-header">
        <h1>PARAMETRER VOTRE QUESTION</h1>
    </div>
    <div class="cr-contain-question">
        <form id="cr-question-form" action="" method="post">
            <div class="cr-head-quest">
                <div class="cr-Question">
                    <label for="question">Question</label>
                </div>
                <div class="cr-head-blanc-space">
                    <textarea name="" id="question"></textarea>
                </div>
            </div>
            <div class="cr-contain-form">
                <div class="cr-form-controller">
                    <label for="cr-point">Nombre de point</label>
                    <input type="number" name="" id="cr-point" min="1">
                </div>
                <div class="cr-form-controller">
                    <label for="">Type de réponse</label>
                    <select name="" id="select" value="here">
                        <option value="" id="donner">Donner le type de reponse</option>
                        <option value="simple" id="simple">Simple</option>
                        <option value="texte" id="texte">Texte</option>
                        <option value="multiple" id="multiple">Multiple</option>
                    </select>
                        <button class="cr-add-answerbtn" type="button">
                      <img src="<?=WEB_PUBLIC."img/icones/ic-ajout-réponse.png"?>" alt="" class="imageajout" >  
                        </button> 
                           
                </div>
                <div class="answer_contain">
                    <!-- <div class="cr-form-controller">
                         <label for="">Réponse 1</label>
                        <input type="text" id="cr-txt">
                        <input type="checkbox" name="" id="cr-check">
                        <input type="radio" name="" id="cr-rad">
                        <button class="cr-delete-answerbtn" type="button"></button>
                        <img src="<=WEB_PUBLIC."img/icones/ic-supprimer.png"?>" alt="" class="imageajout" >  
                    </div>  -->

                </div> 
                    <div class="cr-contain-btn">
                    <button>Enregistrer</button>
                </div>
            </form>
        </div>
    </div>
</div>




<!-- <div class="CreationQuestion">
<h1 >Parametrer votre question</h1>
<div class="creerquestion" >
    <form action="#" method="post" class="form">
        <div class="question" >
            <label for="teat">Question</label>
            <textarea name="teat" id="question" cols="80" rows="5"></textarea>
        </div>
        <div class="nbrReP">
            <label for="nombreRep">Nbre reponse</label>
            <input type="number" name="nombreReponse" id="nombreReponse">
        </div>
        <div class="typeRep">
            <label for="typeReponse">Type de reponse</label>
            <select name="typeReponse" id="typeReponse">
                <option value="">Donner le type de reponse</option>
                <option value="">simple</option>
                <option value="">multiple</option>
                <option value="">texte</option>
            </select>
            <img src="<=WEB_PUBLIC."img/icones/ic-ajout-réponse.png"?>" alt="" class="imageajout" >
        </div>
        <div class="jsrep">
         <div class="reponse"> 
            <!- <label for="reponse">Reponse</label>
            <input type="text" name="reponse" id="rep">
            <input type="checkbox" name="checkbox" id="checkbox">
            <input type="radio" name="radio" id="radio"> ->
        <!- </div> 
        </div>
        <div class="enregister">
            <button type="submit">enregistrement</button>
        </div>
    </form>
</div>
</div> -->