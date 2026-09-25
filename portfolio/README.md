# Portfolio BTS SIO SISR

## Recenser une réalisation (le plus important)

1. Ouvre `assets/js/data.js`.
2. Dans `REALISATIONS`, copie un bloc et modifie :
   - `id` : identifiant court (ex. `r09`)
   - `cadre` : `formation`, `pro1` (entreprise 1re année) ou `pro2` (entreprise 2e année)
   - `epreuve` : `E5` ou `E6`
   - `debut` / `fin` : format `JJ/MM/AA`
   - `competences` : ex. `["B1.1", "B1.2"]`
   - `etat` : `à faire`, `en cours` ou `terminée`
3. Duplique `realisations/_modele.html` en `realisations/<id>.html`, puis change
   `data-real="_modele"` en `data-real="<id>"` et remplis la fiche.

La page Réalisations, le tableau de synthèse et les compteurs se mettent à jour tout seuls.

## Où mettre les fichiers

- Photo : `assets/img/photo.jpg` (puis remplace le bloc « avatar » dans `index.html`)
- Captures : `assets/img/<id>/` (anonymisées !)
- CV, PDF, attestations, export du tableau de synthèse : `docs/`

## Exporter le tableau de synthèse en PDF

Page « Tableau de synthèse » → bouton « Imprimer / enregistrer en PDF » (format paysage),
enregistre-le sous `docs/tableau-synthese.pdf`.

## Mettre en ligne sur GitHub Pages

1. Crée un compte GitHub, puis un dépôt public nommé `<ton-pseudo>.github.io`.
2. Envoie le contenu de ce dossier à la racine du dépôt (bouton « Add file → Upload files »
   ou `git push`).
3. Settings → Pages → Source : « Deploy from a branch », branche `main`, dossier `/ (root)`.
4. Ton site est en ligne sur `https://<ton-pseudo>.github.io` après 1 à 2 minutes.

Tester en local : ouvre simplement `index.html` dans ton navigateur.

## Ajouter ou valider une certification

Dans `assets/js/data.js`, section `CERTIFICATIONS` : passe `etat` à `"obtenue"`,
ajoute la `date`, et dépose l'attestation dans `docs/` (lien dans `lien`).
