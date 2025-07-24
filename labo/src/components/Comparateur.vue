<template>
  
    <h2> Mon comparateur personnalisé - juillet 2025</h2>
    <!-- je créer un input pour récupérer la valeur de l'utilisateur -->
    <input v-model="userInput" placeholder="Entrez une valeur" @keyup.enter="openInNewWindow(userInput)"/>

    <!-- je créer un bouton pour ouvrir les résultats dans deux nouvelles fenêtres  -->
    <button @click="openInNewWindow(userInput)" >Ouvrir dans deux nouvelles fenêtres en 1 click</button>
    <!-- je créer une div qui disparait au bout de 15 secondes-->
    <p v-if="limitedTime">Les résultats s'afficheront ici pendant {{ remainingTime }} secondes.</p>    
    <p v-else>Les résultats ne sont plus disponibles. Afin d'éviter les requêtes excessives, veuillez réessayer plus tard.</p>
    <div class="site-a-comparer" v-if="limitedTime">
        <!-- je créer deux fenetre affichant les sites à comparer en modifiant dynamiquement l'url -->
        <iframe class="site" :src="`https://fd15-courses.leclercdrive.fr/magasin-974601-974601-Le-Lamentin/recherche.aspx?TexteRecherche=${userInput}`" frameborder="0"></iframe>
        <iframe class="site" :src="`https://martinique.123-click.com/?q=${userInput}`" frameborder="0"></iframe>
    </div>

<div class="explications">


    <h2>Explications et solutions alternatives</h2>

    <p>
      Si les résultats ne s'affichent pas correctement, cela peut être dû aux restrictions mises en place par certains sites web pour empêcher leur affichage dans des <em>iframes</em>.<br />
      C’est notamment le cas du site de <strong>Leclerc</strong>, qui utilise une politique de sécurité stricte pour protéger ses pages.
    </p>

    <section>
      <h2>🔒 Pourquoi cette protection ?</h2>
      <ul>
        <li>
          Il bloque les attaques de <strong>clickjacking</strong>, une technique qui consiste à piéger les utilisateurs en superposant une interface invisible sur une page.
        </li>
        <li>
          Il empêche le <strong>vol de contenu</strong> et limite l’intégration dans des plateformes tierces non autorisées.
        </li>
      </ul>
    </section>

    <section>
      <h2>⚠️ Limites de ce système</h2>
      <ul>
        <li>Le contenu ne peut pas être affiché dans une interface externe (comme un agrégateur ou une application centralisée).</li>
        <li>Cela réduit l’interopérabilité avec d’autres services ou outils de comparaison.</li>
      </ul>
    </section>

<section>
      <h2>💡 Solution proposée</h2>
      <p>
        Pour contourner cette restriction, j’ai mis en place un <strong>bouton qui ouvre les résultats dans deux nouvelles fenêtres</strong>.<br />
        Vous pouvez aussi simplement appuyer sur Entrée pour lancer la recherche.
      </p>
       <p>
        🔎 J’y ai également ajouté mes <strong>filtres préférés</strong>, avec un tri par <strong>prix croissant</strong> pour faciliter la comparaison.
      </p>
    </section>
    <section>
      <h2>🧪 Retour d’expérience</h2>
      <p>
        J’ai constaté que l’ouverture des résultats dans des fenêtres séparées <strong>ne permet pas une comparaison côte à côte idéale</strong>.<br />
        Cependant, cette solution offre l’avantage de :
      </p>
      <ul>
        <li>Garder les résultats ouverts pendant que vous explorez d’autres options.</li>
        <li>Simplifier la navigation si vous souhaitez consulter plusieurs sites rapidement.</li>
      </ul>
      <p>
        💼 C’est particulièrement utile, par exemple, pour préparer les achats de la <strong>rentrée scolaire</strong>.
      </p>
    </section>

    <section>
      <h2>🖱️ Astuce rapide</h2>
      <p>
        Fermez un onglet actif avec <strong>Ctrl + W</strong> (ou <strong>Cmd + W</strong> sur Mac) pour garder votre navigation fluide.
      </p>
    </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const userInput = ref('')
// je créer une variable pour afficher le temps restant
const remainingTime = ref(15)
setInterval(() => {
  if (remainingTime.value > 0) {
    remainingTime.value--
  }
}, 1000)

// je créer une variable pour limiter l'affichage de la div à 15 secondes
const limitedTime = ref(true)
setTimeout(() => {
  limitedTime.value = false
}, 15000)

function openInNewWindow(input) {
  // je créer les urls dynamiquement en fonction de l'input de l'utilisateur  
  const url1 = `https://fd15-courses.leclercdrive.fr/magasin-974601-974601-Le-Lamentin/recherche.aspx?TexteRecherche=${encodeURIComponent(input)}&tri=4`
  const url2 = `https://martinique.123-click.com/?q=${encodeURIComponent(input)}&or=min_price%20ASC`
  // je créer une troisième url qui dirige vers la version mobile de leclerc
  const url3 = `https://m-courses.leclercdrive.fr/magasin-974601/recherche/${encodeURIComponent(input)}?tri=4`


  // je créer une fonction pour ouvrir les urls dans deux nouvelles fenêtres
  const createAndClickLink = (url) => {
    const link = document.createElement('a')
    link.href = url
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  createAndClickLink(url2)
   setTimeout(() => {
    //selon la taille de l'écran, j'ouvre la version mobile de leclerc
    if (window.innerWidth <= 768) {
      createAndClickLink(url3)
    } else {
      createAndClickLink(url1)
    }
  }, 1000)
}

</script>

<style scoped>
.site-a-comparer {
  display: flex;
  justify-content: space-between;
}
.site {
  width: 48%;
  height: 600px;
}
.explications {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  max-width: 500px;
  margin: 0 auto;
}
/* je créer un style qui fusionne l'input et le bouton */
input, button {
  width: 50%;
  padding: 10px;    
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

button {
  background-color: #4943e8;
  color: white;
  cursor: pointer;
}
button:hover {
  background-color: #605ce5;
}

</style>