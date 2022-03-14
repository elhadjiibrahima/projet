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
                    <textarea name="question" id="question"></textarea>
                    <small>  </small>
                </div>
            </div>
            <div class="cr-contain-form">
                <div class="cr-form-controller">
                    <label for="cr-point">Nombre de point</label>
                    <input type="number" name="cr-point" id="cr-point" min="1">
                    <small> </small>
                </div>
                <div class="cr-form-controller">
                    <label for="">Type de réponse</label>
                    <select name="select" id="select" value="here">
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
                    <button type="submit">Enregistrer</button>
                </div>
            </form>
        </div>
    </div>
</div>
