import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuItemsList = [
    {
      label: "Documents",
      icon: `document-text`,
      isOffNav: false,
      hasExtLinks: true,
      dropItems:[
        {
          label: "Documents utiles",
          extLink: "https://aide.valorissimo.com/documents-utiles-prescripteurs",
        },
        {
          label: "Débuter sur Valorissimo",
          extLink: "https://aide.valorissimo.com/d%C3%A9buter-sur-valorissimo",
        },
        {
          label: "Questions fréquentes",
          extLink: "https://aide.valorissimo.com/questions-fr%C3%A9quentes",
        },
        {
          label: "Annonces",
          extLink: "https://aide.valorissimo.com/annonces",
        }
      ]
    },
    {
      label: "Tableau de bord",
      icon: `folder-open`,
      isOffNav: false,
      hasExtLinks: false,
      dropItems:[
        {
          label: "Options",
          route: "#",
        },
        {
          label: "Pré-réservations",
          route: "#",
        },
        {
          label: "Réservations",
          route: "#",
        },
        {
          label: "Prospects",
          route: "#",
        },
        {
          label: "Programmes",
          route: "#",
        },
        {
          label: "Conseiller",
          route: "#",
        }
      ]
    },
    {
      label: "Administration",
      icon: `cog`,
      isOffNav: false,
      hasExtLinks: false,
      dropItems:[
        {
          label: "Utilisateurs",
          route: "#",
        },
        {
          label: "Sociétés",
          route: "#",
        },
        {
          label: "Programmes",
          route: "#",
        },
        {
          label: "Offres spéciales",
          route: "#",
        }
      ]
    },
    {
      label: "Afficher/Cacher les honoraires",
      icon: `eye`,
      altIcon: "eye-off",
      isOffNav: true,
      hasExtLinks: false,
      isSwitch: true,
      dropItems:[
        {
          label: "Cacher les honoraires",
          altLabel: "Afficher les honoraires",
          action: "#",
        },
      ]
    },
    {
      label: "Activité",
      icon: `bell`,
      isOffNav: true,
      hasExtLinks: false,
      dropItems:[
        {
          label: "Notifications",
          route: "#",
        },
        {
          label: "Activité",
          route: "#",
        }
      ]
    },
    {
      label: "Contacts",
      icon: `phone`,
      isOffNav: true,
      hasExtLinks: false,
      dropItems:[
        {
          contacts: [
            {
              label: "Commercial",
              phoneNumber: "0651544837",
              phoneNumberAlt: "0651547654",
              email: "contact@valorissimo.com"
            },
            {
              label: "Mandat",
              phoneNumber: "0651544837",
              phoneNumberAlt: "0651542398",
              email: "mandat@valorissimo.com"
            }
          ]
        },
      ]
    },
    {
      label: "Utilisateur",
      icon: `user`,
      isOffNav: true,
      dropItems:[
        {
          label: "Centre d'aide",
          extLink: "https://aide.valorissimo.com/",
        },
        {
          label: "Déconnexion",
          twTxtColor: "text-red-600",
          action: "#",
        },
      ]
    },
  ] as const

}
