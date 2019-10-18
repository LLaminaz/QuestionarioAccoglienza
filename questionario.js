var domande = new Array("Ti è chiaro il ruolo del coordinatore di classe? segna con una crocetta le risposte che ritieni giuste:","Sono state lette e commentate dall'insegnante alcune'Norme del buon vivere a scuola'.Crocetta quelle che tu metti già in pratica:","L'uscita didattica in ambiente naturale è servita a:(crocetta max due risposte)","La visita ai laborari è servita:","Gli interventi di sostegno e di recupero hanno lo scopo di prevenire l'insuccesso scolastico. E' chiaro come si svolgono in questo istituto le attività di sostegno e di recupero?","Il giudizio complessivo delle attività di accoglienza è:")
var risposte =new Array();

function risposte(a) {
    
    for (var i=0; i < a.length-1; i++) {
        if(a!=NULL)
    risposte.push(a[i]);
    }

    }

function risposta(a)
{
    if(a!=Null)
    risposte.push(a);
}
function risposta_doppia(a)
{
    var count=0;
    for (var i=0; i < a.length-1; i++) {
        if(a!=NULL && count<2)
        {
        risposte.push(a[i]);
        count++;
        }
        }
}