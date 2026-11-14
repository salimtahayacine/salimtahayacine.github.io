# Salim Taha Yacine – Portfolio

Portfolio personnel de **Salim Taha Yacine**, développeur Full-Stack (Java / Spring Boot, Angular, Vue.js, React Native) basé à Temara / Rabat, Maroc.

🌐 **En ligne :** [salimtahayacine.github.io](https://salimtahayacine.github.io)

## Contenu

- `index.html` – page principale (à propos, compétences, parcours, projets, services, contact)
- `portfolio-details.html` – détail des projets professionnels
- `assets/cv/CV-Salim-Taha-Yacine.pdf` – CV téléchargeable (généré depuis `assets/cv/cv.html`)
- `assets/css/style.css`, `assets/js/main.js` – styles et scripts du site
- `assets/js/contact-form.js` – envoi du formulaire de contact via [FormSubmit](https://formsubmit.co)
- `assets/vendor/` – bibliothèques (Bootstrap, AOS, GLightbox, Isotope, Typed.js, PureCounter)

## Formulaire de contact

GitHub Pages n'exécute pas de PHP : le formulaire passe par FormSubmit, gratuit et sans compte.
**Au tout premier envoi**, FormSubmit envoie un e-mail d'activation à `salimtahayacine@gmail.com` : il faut cliquer sur le lien de confirmation une seule fois, ensuite les messages arrivent directement dans la boîte mail.

## Mettre à jour le CV

1. Modifier `assets/cv/cv.html`.
2. Régénérer le PDF, par exemple avec Chrome : ouvrir le fichier, *Imprimer* → *Enregistrer au format PDF* (A4, marges par défaut), puis remplacer `assets/cv/CV-Salim-Taha-Yacine.pdf`.

## Tester en local

```bash
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000.

## Crédits

Design basé sur le template gratuit [MyResume](https://bootstrapmade.com/free-html-bootstrap-template-my-resume/) de BootstrapMade.
