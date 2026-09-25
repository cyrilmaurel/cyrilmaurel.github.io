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
  titre: "Étudiant en BTS SIO option SISR",
  accroche: "Alternant au service informatique de Meldomys : support utilisateurs, administration systèmes et réseaux, supervision.",
  etablissement: "MyDigitalSchool [campus]",
  session: "[Session 20XX]",
  email: "prenom.nom@exemple.fr",               // [À compléter]
  linkedin: "https://www.linkedin.com/in/[ton-profil]",
  github: "https://github.com/cyrilmaurel",
  cv: "docs/cv.pdf",                            // dépose ton CV ici
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
    titre: "Gestion du cycle de vie des comptes AD et des droits d’accès",
    resume: "Création, modification et désactivation des comptes utilisateurs, gestion des groupes et des habilitations.",
    competences: ["B1.1", "B1.2"],
    documents: ["Procédure arrivée / départ", "Matrice des habilitations", "Captures anonymisées"] },

  { id: "r02", epreuve: "E5", cadre: "pro1", etat: "à faire", debut: "", fin: "",
    titre: "Support N1/N2 et escalade vers les hébergeurs",
    resume: "Prise en charge des tickets, diagnostic, résolution ou escalade vers les prestataires d’hébergement.",
    competences: ["B1.2"],
    documents: ["3 tickets documentés", "Comptes rendus d’intervention"] },

  { id: "r03", epreuve: "E5", cadre: "pro1", etat: "à faire", debut: "", fin: "",
    titre: "Support fonctionnel ERP et bureautique + guide utilisateur",
    resume: "Assistance niveau 1 sur l’ERP, la bureautique et les outils collaboratifs, rédaction d’un support utilisateur.",
    competences: ["B1.2", "B1.5"],
    documents: ["Tickets", "Guide utilisateur / FAQ"] },

  { id: "r04", epreuve: "E5", cadre: "pro1", etat: "à faire", debut: "", fin: "",
    titre: "Inventaire du parc et maintenance préventive",
    resume: "Recensement du matériel et des logiciels dans l’outil de gestion de parc, plan de maintenance.",
    competences: ["B1.1"],
    documents: ["Export GLPI / OCS", "Plan de maintenance", "Fiches d’intervention"] },

  { id: "r05", epreuve: "E5", cadre: "pro1", etat: "à faire", debut: "", fin: "",
    titre: "Déploiement de postes de travail",
    resume: "Préparation d’un master, installation et configuration de postes, tests et accompagnement des utilisateurs.",
    competences: ["B1.4", "B1.5"],
    documents: ["Planning", "Procédure de déploiement", "Cahier de tests", "Bilan des écarts"] },

  { id: "r06", epreuve: "E5", cadre: "pro1", etat: "à faire", debut: "", fin: "",
    titre: "Supervision des serveurs, du réseau et de la messagerie",
    resume: "Suivi des alertes, vérification de la disponibilité des services et des sauvegardes.",
    competences: ["B1.1", "B1.2"],
    documents: ["Tableau de bord", "Alertes traitées", "Contrôle des sauvegardes"] },

  { id: "r07", epreuve: "E5", cadre: "formation", etat: "à faire", debut: "", fin: "",
    titre: "Site web d’une organisation : mentions légales, RGPD, référencement",
    resume: "Évolution d’un site web, conformité juridique et mesure de la visibilité. À faire chez Meldomys si possible.",
    competences: ["B1.3", "B1.4"],
    documents: ["Site en ligne", "Mentions légales", "Rapport de visibilité"] },

  { id: "r08", epreuve: "E5", cadre: "formation", etat: "en cours", debut: "", fin: "",
    titre: "Portfolio, veille technologique et identité professionnelle",
    resume: "Conception de ce portfolio, veille régulière et gestion de mon identité professionnelle.",
    competences: ["B1.6"],
    documents: ["Ce portfolio", "Page de veille", "Profil LinkedIn", "Certifications"] },

  { id: "e6a", epreuve: "E6", cadre: "formation", etat: "à faire", debut: "", fin: "",
    titre: "Infrastructure multisite sécurisée et haute disponibilité",
    resume: "AD redondant, DHCP en basculement, pfSense en CARP, VLAN, DMZ, VPN intersite et répartition de charge.",
    competences: ["B2.1", "B2.2", "B2.3"],
    documents: ["Schéma réseau", "Plan d’adressage", "Configurations", "Rapport de tests"] },

  { id: "e6b", epreuve: "E6", cadre: "formation", etat: "à faire", debut: "", fin: "",
    titre: "Supervision, sécurité et automatisation",
    resume: "Zabbix, IDS Suricata, sauvegarde, analyse de trames et scripts d’administration.",
    competences: ["B2.1", "B2.2", "B2.3"],
    documents: ["Dossier de choix", "Tableau de bord", "Scripts", "Rapport de tests"] }
];

/* Articles de veille : ajoute-en un par mois (le plus récent en premier) */
const VEILLE = {
  sujet: "[Ton sujet de veille]",
  pourquoi: "[Pourquoi ce sujet, en lien avec ton poste chez Meldomys]",
  outils: ["Feedly (flux RSS)", "Google Alerts", "LinkedIn"],
  sources: [
    { nom: "CERT-FR", url: "https://www.cert.ssi.gouv.fr/" },
    { nom: "ANSSI", url: "https://cyber.gouv.fr/" },
    { nom: "Cybermalveillance.gouv.fr", url: "https://www.cybermalveillance.gouv.fr/" },
    { nom: "IT-Connect", url: "https://www.it-connect.fr/" }
  ],
  articles: [
    { date: "JJ/MM/AA", titre: "[Titre de ta première synthèse]", resume: "[3 à 5 lignes : ce qui s’est passé, pourquoi c’est important, ce que ça change pour une organisation comme Meldomys]", sources: [] }
  ]
};
