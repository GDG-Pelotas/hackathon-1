module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "GDG Pelotas - Hackathon #1",
      description: "O GDG Pelotas apresenta seu primeiro Hackathon! A premiação será 2 Chromecasts para a equipe vencedora.",
      date: "27 de Junho",
      // If your event is free, just comment this line
      price: "R$ 30,00",
      venue: "Conrad Caine",
      address: "Rua General Neto, 1035",
      city: "Pelotas",
      state: "Rio Grande do Sul"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscreva-se",
        link: "http://www.eventick.com.br/q6hciwtl2ocvagzz"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    forkButton: {
        repository: "https://github.com/braziljs/conf-boilerplate"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://gdgpelotas.org/hackathon",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      // 'speakers',
      'schedule',
      // 'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Local",
      speakers: "Speakers",
      schedule: "Agenda",
      sponsors: "Patrocinadores",
      partners: "Parceiros",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Apresentação do Evento",
        time: "9h00"
      },
      {
        name: "Definição de projetos e equipes",
        time: "9h30"
      },
      {
        name: "Entrega dos projetos e Coffe Break",
        time: "10h30"
      },
      {
        name: "Desenvolvimento",
        time: "11h00"
      },
      {
        name: "Almoço",
        time: "12h00"
      },
      {
        name: "Desenvolvimento",
        time: "13h30"
      },
      {
        name: "Coffe Break",
        time: "15h30"
      },
      {
        name: "Desenvolvimento",
        time: "16h00"
      },
      {
        name: "Entrega dos projetos e julgamento",
        time: "18h00"
      },
      {
        name: "Anúncio Resultado final e confraternizações",
        time: "19h00"
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "Conrad Caine",
        logo: "themes/yellow-swan/img/conrad.svg",
        url: "http://www.conrad-caine.com"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};