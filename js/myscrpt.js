console.log('Abbinato')


// dimensione della griglia 

const buttonElement = document.getElementById('button')

buttonElement.addEventListener('click', function () {



    let dimensioneGriglia = document.getElementById('dimensione');
    dimensioneGriglia = dimensioneGriglia.value


    // console.log(buttonElement)
    //  richiamo il tabellone 
    const tabelloneElement = document.querySelector('.tabellone')

    if (dimensioneGriglia == 10) {
        tabelloneElement.classList.remove('tabellone__medio')
        tabelloneElement.classList.remove('tabellone__difficile')
        tabelloneElement.classList.add('tabellone__facile')
    }else if (dimensioneGriglia == 9) {
        tabelloneElement.classList.remove('tabellone__facile')
        tabelloneElement.classList.remove('tabellone__difficile')
        tabelloneElement.classList.add('tabellone__medio')
    }else if(dimensioneGriglia==7){
        tabelloneElement.classList.remove('tabellone__medio')
        tabelloneElement.classList.remove('tabellone__facile')
        tabelloneElement.classList.add('tabellone__difficile')
    }

    console.log(dimensioneGriglia)
    // reset dello schermo 
    tabelloneElement.innerHTML = ''
    generaGriglia(dimensioneGriglia, tabelloneElement)

    // creo funzione per generare la griglia 
    function generaGriglia(dimensione, tabellone) {


        // numero di celle da fare 
        const celleDellaGriglia = dimensione ** 2

        // elementi div creati 
        const div = document.createElement('div')


        for (let i = 0; i < celleDellaGriglia; i++) {
            // console.log(i)
            // creo elemento square  con la Funzione
            const cella = getSquareElement()
            cella.innerHTML = [i + 1]
            // appendo a tabellone 
            tabellone.append(cella)


        }
        return div.innerHTML
    }


    // funzione che crea lo square e gli da le proprietà
    function getSquareElement() {
        const square = document.createElement('div')
        square.classList.add('square')

        // inserisco funzione click 
        square.addEventListener('click', clickHandler)

        return square
    }

    function clickHandler() {

        // uso il this per localizzare lo square 
        const square = this
        square.classList.toggle('clicked')
        console.log('Hai cliccato la cella n' + square.innerHTML)


        // essendo campo minato puoi cliccare solo una volta 
        square.removeEventListener('click', clickHandler)
    }

})
