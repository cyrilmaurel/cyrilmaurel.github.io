/* =====================================================================
   DONNÉES DU PORTFOLIO — c'est le SEUL fichier à modifier pour :
   - ton profil (PROFIL)
   - recenser tes réalisations (REALISATIONS)
   Les pages Réalisations, Tableau de synthèse et l'en-tête de chaque
   fiche se mettent à jour automatiquement.
   ===================================================================== */

const PROFIL = {
  prenom: "Cyril",
  nom: "Maurel",
  titre: "BTS SIO option SISR · Alternance 2026-2028",
  accroche: "Alternant technicien systèmes et réseaux chez Meldomys, au sein de la Direction Numérique & Logistique.",
  etablissement: "MyDigitalSchool Angers",
  session: "Session 2028",
  email: "cyrilmaurel010@gmail.com",
  linkedin: "https://www.linkedin.com/in/cyril-maurel1/",
  github: "https://github.com/cyrilmaurel",
  photo: "assets/img/photo.jpg",
  cv: "",                                       // mets "docs/cv.pdf" quand ton CV à jour est déposé dans docs/
  synthesePdf: "docs/tableau-synthese.pdf"      // export PDF du tableau
};

/* Compétences du bloc 1 (E5) et du bloc 2 SISR (E6) — ne pas modifier */
const COMPETENCES_E5 = [
  { code: "B1.1", court: "Patrimoine", nom: "Gérer le patrimoine informatique",
    sous: ["Recenser et identifier les ressources numériques", "Exploiter des référentiels, normes et standards adoptés par le prestataire informatique", "Mettre en place et vérifier les niveaux d’habilitation associés à un service", "Vérifier les conditions de la continuité d’un service informatique", "Gérer des sauvegardes", "Vérifier le respect des règles d’utilisation des ressources numériques"] },
  { code: "B1.2", court: "Incidents", nom: "Répondre aux incidents et aux demandes d’assistance et d’évolution",
    sous: ["Collecter, suivre et orienter des demandes", "Traiter des demandes concernant les services réseau et système, applicatifs", "Traiter des demandes concernant les applications"] },
  { code: "B1.3", court: "Présence en ligne", nom: "Développer la présence en ligne de l’organisation",
    sous: ["Participer à la valorisation de l’image de l’organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques", "Référencer les services en ligne de l’organisation et mesurer leur visibilité", "Participer à l’évolution d’un site Web exploitant les données de l’organisation"] },
  { code: "B1.4", court: "Mode projet", nom: "Travailler en mode projet",
    sous: ["Analyser les objectifs et les modalités d’organisation d’un projet", "Planifier les activités", "Évaluer les indicateurs de suivi d’un projet et analyser les écarts"] },
  { code: "B1.5", court: "Mise à disposition", nom: "Mettre à disposition des utilisateurs un service informatique",
    sous: ["Réaliser les tests d’intégration et d’acceptation d’un service", "Déployer un service", "Accompagner les utilisateurs dans la mise en place d’un service"] },
  { code: "B1.6", court: "Dév. professionnel", nom: "Organiser son développement professionnel",
    sous: ["Mettre en place son environnement d’apprentissage personnel", "Mettre en œuvre des outils et stratégies de veille informationnelle", "Gérer son identité professionnelle", "Développer son projet professionnel"] }
];

const COMPETENCES_E6 = [
  { code: "B2.1", court: "Concevoir", nom: "Concevoir une solution d’infrastructure réseau" },
  { code: "B2.2", court: "Installer / déployer", nom: "Installer, tester et déployer une solution d’infrastructure réseau" },
  { code: "B2.3", court: "Exploiter / superviser", nom: "Exploiter, dépanner et superviser une solution d’infrastructure réseau" }
];

/* ---------------------------------------------------------------------
   RÉALISATIONS
   cadre   : "formation" | "pro1" (entreprise, 1re année) | "pro2" (entreprise, 2e année)
   epreuve : "E5" ou "E6"
   debut / fin : format JJ/MM/AA (laisser "" tant que ce n'est pas fait)
   etat    : "à faire" | "en cours" | "terminée"
   Pour ajouter une réalisation : copie un bloc, change l'id,
   puis duplique realisations/_modele.html en realisations/<id>.html
   --------------------------------------------------------------------- */
const REALISATIONS = [
  { id: "r01", epreuve: "E5", cadre: "pro1", etat: "à faire", debut: "", fin: "",
    titre: "Support technique niveaux 1 et 2 auprès des utilisateurs",
    resume: "Assistance et conseil aux utilisateurs : prise en charge, diagnostic et résolution des incidents via GLPI.",
    competences: ["B1.2"],
    documents: ["Tickets GLPI documentés", "Comptes rendus d’intervention"] },
  { id: "r02", epreuve: "E5", cadre: "pro1", etat: "à faire", debut: "", fin: "",
    titre: "Support fonctionnel ERP, bureautique et outils collaboratifs",
    resume: "Support de niveau 1 sur les ERP métier (gestion locative, comptabilité, gestion technique) et Microsoft 365.",
    competences: ["B1.2"],
    documents: ["Tickets GLPI", "Réponses types / FAQ"] },
  { id: "r03", epreuve: "E5", cadre: "pro1", etat: "à faire", debut: "", fin: "",
    titre: "Maintenance corrective et préventive du matériel et des logiciels",
    resume: "Dépannage, mises à jour et entretien du parc informatique.",
    competences: ["B1.1", "B1.2"],
    documents: ["Fiches d’intervention", "Inventaire GLPI"] },
  { id: "r04", epreuve: "E5", cadre: "pro1", etat: "à faire", debut: "", fin: "",
    titre: "Installation et configuration des postes de travail",
    resume: "Préparation, installation et configuration des postes, puis mise à disposition des utilisateurs.",
    competences: ["B1.1", "B1.4", "B1.5"],
    documents: ["Procédure d’installation", "Cahier de tests", "Planning"] },
  { id: "r05", epreuve: "E5", cadre: "pro1", etat: "à faire", debut: "", fin: "",
    titre: "Rédaction de documents techniques et de supports utilisateurs",
    resume: "Documentation des procédures internes et guides à destination des utilisateurs.",
    competences: ["B1.1", "B1.5"],
    documents: ["Documentation technique", "Guide utilisateur"] },
  { id: "r06", epreuve: "E5", cadre: "pro1", etat: "à faire", debut: "", fin: "",
    titre: "Gestion des comptes et des droits d’accès des utilisateurs",
    resume: "Création, modification et désactivation des comptes Active Directory et des habilitations.",
    competences: ["B1.1"],
    documents: ["Procédure arrivée / départ", "Matrice des habilitations"] },
  { id: "r07", epreuve: "E5", cadre: "pro1", etat: "à faire", debut: "", fin: "",
    titre: "Supervision des serveurs hébergés et des réseaux locaux",
    resume: "Suivi de la disponibilité des serveurs et des équipements réseau, traitement des alertes.",
    competences: ["B1.1", "B1.2"],
    documents: ["Tableau de bord", "Alertes traitées"] },
  { id: "r08", epreuve: "E5", cadre: "pro1", etat: "à faire", debut: "", fin: "",
    titre: "Pilotage des demandes d’intervention auprès des hébergeurs",
    resume: "Suivi et escalade des demandes vers les prestataires d’hébergement.",
    competences: ["B1.2", "B1.4"],
    documents: ["Suivi des demandes", "Échanges avec l’hébergeur (anonymisés)"] },
  { id: "r09", epreuve: "E5", cadre: "pro1", etat: "à faire", debut: "", fin: "",
    titre: "Supervision de la messagerie d’entreprise",
    resume: "Surveillance et administration de la messagerie Microsoft 365 / Outlook.",
    competences: ["B1.1", "B1.2"],
    documents: ["Captures anonymisées", "Procédures"] },
  { id: "r10", epreuve: "E5", cadre: "formation", etat: "à faire", debut: "", fin: "",
    titre: "Site web d’une organisation : mentions légales, RGPD, référencement",
    resume: "Évolution d’un site web, conformité juridique et mesure de la visibilité.",
    competences: ["B1.3", "B1.4"],
    documents: ["Site en ligne", "Mentions légales", "Rapport de visibilité"] },
  { id: "r11", epreuve: "E5", cadre: "formation", etat: "en cours", debut: "", fin: "",
    titre: "Portfolio, veille technologique et identité professionnelle",
    resume: "Conception de ce portfolio, veille régulière et gestion de mon identité professionnelle.",
    competences: ["B1.6"],
    documents: ["Ce portfolio", "Page de veille", "Profil LinkedIn"] },
  { id: "e6a", epreuve: "E6", cadre: "formation", etat: "à faire", debut: "", fin: "",
    titre: "Infrastructure multisite sécurisée et haute disponibilité",
    resume: "Réalisation E6 à définir avec l’équipe pédagogique.",
    competences: ["B2.1", "B2.2", "B2.3"],
    documents: ["Schéma réseau", "Configurations", "Rapport de tests"] },
  { id: "e6b", epreuve: "E6", cadre: "formation", etat: "à faire", debut: "", fin: "",
    titre: "Supervision, sécurité et automatisation",
    resume: "Réalisation E6 à définir avec l’équipe pédagogique.",
    competences: ["B2.1", "B2.2", "B2.3"],
    documents: ["Dossier de choix", "Scripts", "Rapport de tests"] }
];

/* Certifications : etat = "obtenue" | "en cours" | "envisagée" */
const CERTIFICATIONS = [
  { nom: "PIX", organisme: "Pix, service public", detail: "Compétences numériques", etat: "obtenue", date: "", lien: "" },
  { nom: "SecNumacadémie", organisme: "ANSSI", detail: "Sensibilisation à la cybersécurité", etat: "envisagée", date: "", lien: "https://secnumacademie.gouv.fr/" },
  { nom: "Microsoft 365 Fundamentals (MS-900)", organisme: "Microsoft", detail: "Services et administration Microsoft 365", etat: "envisagée", date: "", lien: "" },
  { nom: "CCNA", organisme: "Cisco", detail: "Réseaux : routage, commutation, sécurité", etat: "envisagée", date: "", lien: "" }
];

/* Veille : ajoute une synthèse par mois (la plus récente en premier) */
const VEILLE = {
  sujet: "La donnée au service du logement social",
  pourquoi: "Chez Meldomys, trois ERP (gestion locative, comptabilité, gestion technique) produisent chacun leurs données, et un poste est dédié à leur qualité. Je veux comprendre comment les bailleurs sociaux exploitent ces données pour piloter leur patrimoine, rénover leurs logements et mieux servir leurs locataires, et quel rôle l’informatique joue dans ce travail.",
  outils: ["Google Alerts : 5 alertes hebdomadaires (« Union sociale pour l’habitat », « logement social » données, « bailleur social » numérique, PrioRéno, RPLS logement)"],
  sources: [
    { nom: "L’Union sociale pour l’habitat (USH)", url: "https://www.union-habitat.org/" },
    { nom: "data.gouv.fr : répertoire RPLS", url: "https://www.data.gouv.fr/datasets/donnees-detaillees-au-logement-du-repertoire-des-logements-locatifs-des-bailleurs-sociaux-rpls" },
    { nom: "Banque des Territoires", url: "https://www.banquedesterritoires.fr/" },
    { nom: "Enedis : actualités logement social", url: "https://www.enedis.fr/presse" }
  ],
  articles: [
    { date: "25/09/26",
      titre: "Logement social : la donnée devient un outil de pilotage",
      contenu: [
        "Les bailleurs sociaux disposent de nombreuses données sur leur parc, mais elles sont souvent dispersées entre plusieurs logiciels : gestion locative, comptabilité, suivi du patrimoine. Des plateformes se placent désormais entre ces outils pour produire des tableaux de bord communs, afin d’anticiper la vacance, de réduire les impayés et de prioriser les travaux.",
        "Ces données servent aussi à rendre des comptes. Chaque année, les bailleurs alimentent le répertoire national RPLS (surface, date de construction, diagnostic de performance énergétique de chaque logement), publié en données ouvertes par le service statistique du ministère. Depuis 2024, la plateforme PrioRéno Logement Social croise ces informations avec les consommations réelles d’électricité et de gaz d’Enedis et de GRDF pour aider les bailleurs à choisir quels bâtiments rénover en priorité. Douze organismes pilotes, représentant environ 1,7 million de logements, l’ont testée.",
        "Ce que ça change pour Meldomys : avec la loi Climat et résilience, les logements les plus énergivores sortent progressivement du marché locatif (classe G depuis 2025, F en 2028). Des données fiables sur le patrimoine deviennent indispensables pour planifier les rénovations. C’est tout l’enjeu du travail sur la qualité de la donnée mené à la DNL, et pour l’équipe informatique, cela passe par des ERP bien alimentés, des échanges fiables entre eux et des sauvegardes solides."
      ],
      sources: [
        { nom: "Qoridor, « Logement social : quand la data réinvente le pilotage des bailleurs » (mai 2026)", url: "https://blog.qoridor.fr/article/logement-social-quand-data" },
        { nom: "data.gouv.fr, RPLS (mise à jour du 21/09/2026)", url: "https://www.data.gouv.fr/datasets/donnees-detaillees-au-logement-du-repertoire-des-logements-locatifs-des-bailleurs-sociaux-rpls" },
        { nom: "Enedis, lancement de PrioRéno Logement Social (24/04/2024)", url: "https://www.enedis.fr/presse/la-banque-des-territoires-letat-lunion-sociale-pour-lhabitat-enedis-et-grdf-sassocient-pour" }
      ] }
  ]
};
