<template>
    <h2> Mon comparateur personnalisé </h2>
    <!-- je créer un input pour récupérer la valeur de l'utilisateur -->
    <input v-model="userInput" placeholder="Entrez une valeur" />
    <!-- je créer une div qui disparait au bout de 15 secondes-->
    <p v-if="limitedTime">Les résultats s'afficheront ici pendant {{ remainingTime }} secondes.</p>    
    <p v-else>Les résultats ne sont plus disponibles. Afin d'éviter les requêtes excessives, veuillez réessayer plus tard.</p>
    <div class="site-a-comparer" v-if="limitedTime">
        <!-- je créer deux fenetre affichant les sites à comparer en modifiant dynamiquement l'url -->
        <iframe class="site" :src="`https://fd15-courses.leclercdrive.fr/magasin-974601-974601-Le-Lamentin/recherche.aspx?TexteRecherche=${userInput}`" frameborder="0"></iframe>
        <iframe class="site" :src="`https://martinique.123-click.com/?q=${userInput}`" frameborder="0"></iframe>
    </div>
    <h2>Explications et solutions alternatives</h2>
    <!-- j'explique ce qui n'a pas fonctionné dans un paragraphe-->
    <p>
  Si les résultats ne s'affichent pas correctement, cela peut être dû à des restrictions imposées par certains sites web concernant l'affichage de leur contenu.
  <br />
  C'est notamment le cas du site de Leclerc, qui utilise un système de sécurité empêchant l'intégration de ses pages dans des <code>iframe</code>.
  <br />
  <strong>Avantages :</strong>
  <br />
  - Ce système protège les données sensibles des utilisateurs contre des attaques malveillantes, en particulier le <em>clickjacking</em>. Le clickjacking consiste à superposer une interface invisible ou trompeuse au-dessus d'une page web, incitant l'utilisateur à cliquer sur quelque chose qu'il ne voit pas, à son insu.
  <br />
  - Il empêche aussi le vol de contenu et limite les tentatives de chargement du site dans des environnements non contrôlés, renforçant ainsi la sécurité globale de la navigation.
  <br />
  <strong>Inconvénients :</strong>
  <br />
  - Ce blocage rend impossible l'affichage du site dans une interface externe (comme un agrégateur ou une plateforme centralisée), ce qui peut nuire à l'expérience utilisateur si l’objectif est de proposer une navigation simplifiée regroupant plusieurs sites.
  <br />
  - Il limite l'interopérabilité entre services, en empêchant certaines intégrations ou automatisations pourtant utiles dans des contextes commerciaux ou informatifs.
</p>


    <p>Pour contourner ce problème, j'ai créé un bouton qui ouvre les résultats dans deux nouvelles fenêtres. 
    <br />J'y ai par ailleurs ajouter mes filtres préférés afin de trier les articles par ordre de prix croissant.
    <br> Je vous laisser tester!</p>
    <!-- je créer un bouton pour ouvrir les résultats dans deux nouvelles fenêtres -->

    <button @click="openInNewWindow(userInput)">Ouvrir dans deux nouvelles fenêtres en 1 click</button>
    <p><i>Petite astuce: vous pouvez fermer l'onglet actif avec le raccourci Ctrl + W (Cmd + W sur Mac)</i></p>

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
  const url1 = `https://fd15-courses.leclercdrive.fr/magasin-974601-974601-Le-Lamentin/recherche.aspx?TexteRecherche=${encodeURIComponent(input)}&tri=4`
  const url2 = `https://martinique.123-click.com/?q=${encodeURIComponent(input)}&or=min_price%20ASC`

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
    createAndClickLink(url1)
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
</style>