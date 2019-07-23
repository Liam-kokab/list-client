import openMenu from './icons/OpenMenu.svg';
import closeMenu from './icons/closeMenu.svg';
import notDone from './icons/empty-circle.svg';
import done from './icons/checkmark.svg';

const config = {
  icons: {

    closeMenu: closeMenu,
    openMenu: openMenu,
    notDone: notDone,
    done: done,


  },

  className: {
    header: "header",
    listViewer: "listViewer",
    element: "element",
    elementExtended: "element Extended",
    menu : "menu",


  },

  lang: {
    sportedLang: ["eng"],
    currentLang: "eng",
    langPacks: {
      "eng": {
        "menu": "menu",

      }
    },

  },
  getPhrase : function(phrase){
    return config.lang.langPacks[config.lang.currentLang][phrase];
  },
};

export default config;