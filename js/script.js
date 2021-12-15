// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const title = new Vue(
    {
        el: `#title`,
        data : {
            message: `Hello world!`,
            color: `white`
        }
    }
)