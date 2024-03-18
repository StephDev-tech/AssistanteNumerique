function slideFromLeft(param1, param2) {
    window.addEventListener('scroll', function() {
        let element = document.getElementById(param1);
        let rect = element.getBoundingClientRect();
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;


        // Vérifie si l'élément est visible à l'écran
        if (rect.right >= 0 && rect.left <= screenWidth && rect.bottom >= 0 && rect.top <= screenHeight) {
            element.classList.add(param2);

        }
    });
}

const slideInSmallElement = "slideIn"
const slideInBigElement = "slideInTitle"

slideFromLeft("btnEnSavoirPlus", slideInSmallElement)
slideFromLeft("btnCv", slideInSmallElement)
slideFromLeft("titreElementProfile", slideInBigElement)
slideFromLeft("collab1", slideInBigElement)
slideFromLeft("collab2", slideInBigElement)
slideFromLeft("collab3", slideInBigElement)
slideFromLeft("titreCollab", slideInBigElement)
slideFromLeft("engagezLassistance", slideInBigElement)
slideFromLeft("divImageElementProjets", slideInBigElement)
slideFromLeft("titreWeb", slideInBigElement)
slideFromLeft("titreAnalyses", slideInBigElement)
slideFromLeft("titreFormation", slideInBigElement)
slideFromLeft("travaillonsEnsemble", slideInBigElement)



let services = []

function incrementEverySecond() {
    let count = 1;
    let intervalID = setInterval(function() {
        if (count == 6) {
            clearInterval(intervalID);
        } else {
            console.log(count++);

        }
    }, 1000);



}

// Appel de la fonction
incrementEverySecond();