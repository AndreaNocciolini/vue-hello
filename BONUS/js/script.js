// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const title = new Vue(
    {
        el: `#title`,
        data : {
            message: `Hello world!`,
            color: `white`
        },
    }
)

const text = new Vue(
    {
    el: `#text`,
    data : {
        text: ``,
        placeHolder: `Write here...` 
        }
    }
)

const img = new Vue (
    {
        el: "#container-img",
        data : {
            image: `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Oryctolagus_cuniculus_Rcdo.jpg/1200px-Oryctolagus_cuniculus_Rcdo.jpg`,
            number: 1
        },
        methods : {
            addOne: function() {
                this.number += 1
            },
            removeOne: function() {
                if (this.number > 1) {
                   this.number -= 1 
                }
            }
        }
    }
)


// Inseriamo un input per visualizzare in pagina un testo inserito da un utente.
// Inseriamo una immagine e accanto un numero che identifica il numero di prodotti desiderati, i dati devono venire da Vue.
// Poi aggiungiamo un pulsante per aumentare questo numero.