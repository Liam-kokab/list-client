import openMenu from './icons/OpenMenu.svg';
import closeMenu from './icons/closeMenu.svg';
import notDone from './icons/empty-circle.svg';
import done from './icons/checkmark.svg';
import more from './icons/more.svg';
import plus from './icons/plus.svg'

const config = {
  icons: {

    closeMenu: closeMenu,
    openMenu: openMenu,
    notDone: notDone,
    done: done,
    more: more,
    plus: plus,


  },

  className: {
    header: "header",
    listViewer: "listViewer",
    element: "element",
    menu : "menu",



  },

  lang: {
    sportedLang: ["eng"],
    currentLang: "eng",
    langPacks: {
      eng: {
        menu: "Menu",
        createdBy : "Added by: ",
        doneBy: "Completed by: ",

      }
    },

  },
  getPhrase : function(phrase){
    return config.lang.langPacks[config.lang.currentLang][phrase];
  },
};

export default config;