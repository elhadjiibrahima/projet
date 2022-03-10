<div class="CreationQuestion">
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
            <img src="<?=WEB_PUBLIC."img/icones/ic-ajout-réponse.png"?>" alt="" class="imageajout" >
        </div>
        <div class="jsrep">
        <!-- <div class="reponse"> -->
            <!-- <label for="reponse">Reponse</label>
            <input type="text" name="reponse" id="rep">
            <input type="checkbox" name="checkbox" id="checkbox">
            <input type="radio" name="radio" id="radio"> -->
        <!-- </div> -->
        </div>
        <div class="enregister">
            <button type="submit">enregistrement</button>
        </div>
    </form>
</div>
</div>