Ceci est une revue de code conçernant le ***TP1*** du cours `Développement d'application web` de Gabriel Tremblay.

# Code

## Le code est-il lisible, clair ou est-il trop complexe ?
Oui, le code est généralement clair et lisible cépendant pourait faire preuve d'une meilleur indentation dans certain cas.
:::danger ***Indentation original***

```html
<div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
    <input v-model="searchQuery" v-on:input="filterBooks" type="text" class="form-control" placeholder="Rechercher..." aria-label="Recipient's username" aria-describedby="basic-addon2">
</div>
```

:::

:::tip ***Indentation corrigé***

```html
<div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
    <input 
        v-model="searchQuery" 
        v-on:input="filterBooks" 
        type="text" 
        class="form-control" 
        placeholder="Rechercher..." 
        aria-label="Recipient's username" 
        aria-describedby="basic-addon2"
    >
</div>
```

:::

## Le code est-il conforme aux bonnes pratiques de programmation ?
Oui, le code est comforme bien aux bonnes pratiques de programmation et ne contient aucune avertissements ou erreurs.

- **Noms significatifs** ✅
- **Éviter la répétition** ✅
- **Clarté et simplicité** ✅
- **Éviter les chaînes magiques** ✅
- **Une classe par fichier** ✅
- **Indentation du code** ✅
- **Tous les fichiers non utilisés par l'application** ✅
- **Les parties de code en commentaires** ✅
- **Les commentaires inutiles** ✅
- **Le code qui a été utilisé pour déboguer** ✅

Cependant, un modal de confirmation devrait apparaître avant de faire la suppression d'un livre.
:::danger Exemple de code
```html
<div v-if="isOpen" class="position-fixed top-50 start-50 translate-middle bg-white p-4 border border-danger rounded shadow-lg z-index-1030">
    <h2 class="text-danger text-center">Confirmer la suppression</h2>
    <p class="mt-2 text-center">Êtes-vous sûr de vouloir supprimer ce livre ? Cette action est irréversible.</p>
    <div class="mt-4 d-flex justify-content-center gap-2">
        <button @click="cancel" class="btn btn-secondary">Annuler</button>
        <button @click="confirm" class="btn btn-danger">Supprimer</button>
    </div>
</div>
```
:::


## Le code est-il conforme aux normes et standards de programmation ?
Oui, le code comforme généralement aux normes et standards de programmation. Cependant certaines normes selon le [site du cours](https://appweb.progwmj.ca/documentations/normes) n'a pas été respecter comme utiliser le suffixes **Component** dans le nom d'un classe représentant un composant.

- **Utilisez la camelCase lorsque vous nommez vos variables, objets, fonctions et instances** ✅
- **Utilisez la PascalCase lorsque vous nommez vos constructeurs ou vos classes** ✅
- **Utilisez le suffixes Component ou Composant dans le nom d'une classe représentant un composant** ❌

- **Utilisez des noms de variables significatifs et prononçables** ✅
- **Utilisez le même vocabulaire pour le même type de variable** ✅
- **Utilisez des valeurs nommées que l'on va pouvoir retrouver** ✅
- **Ne pas ajouter de contexte inutile** ✅
- **Utiliser des valeurs de variables par défaut au lieu de multiples if** ✅

- **Pas plus de deux paramètres par fonction** ✅
- **Les fonctions doivent faire une seule chose** ✅
- **Les noms de fonction doivent dire ce qu'ils font** ✅
- **Supprimer le code en double** ✅
- **Supprimer le code mort** ✅

:::danger Nom des composants originals
- AddBookForm
- BookDetails
- BookItems
- BookList
- BookManager
- ModifyBookForm
- SearchBook
:::

:::tip Nom des composants corrigés
- AddBookFormComponent
- BookDetailsComponent
- BookItemsComponent
- BookListComponent
- BookManagerComponent
- ModifyBookFormComponent
- SearchBookComponent
:::
---

# Autres

## Est-ce que la sécurité a été considérée (données sensibles, connexion HTTPS, etc.) ?
Aucune vulnérabilité.

## Le code est-il optimisé en termes de performance et de consommation de ressources ?
Avec mes recherches ainsi que mes connaissances personnelles, je ne crois pas qu'il y a quelque chose à faire pour optimiser en termes de performances et consommation de ressources.

## Est-ce qu'un algorithme peut être amélioré ?
Avec mes recherches ainsi que mes connaissances personnelles, je ne crois pas qu'il y a un algorithme à améliorer.

## Le code est-il testé et couvert par des tests unitaires et d’intégration ?

:::danger Aucun test!!!
Le code ne comporte aucun test pour le tester!!
:::
