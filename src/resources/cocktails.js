import * as Spirits from './spirits';

const cocktails = {
  0: {
    name: 'Espresso Martini',
    spirits:
      Spirits.vodka |
      Spirits.coffeeLiquer,
    URL: 'https://www.kahlua.com/uk/classic-drinks/classic-drinks/espresso-martini/',
  },
  1: {
    name: 'Zombie',
    spirits:
      Spirits.whiteRum |
      Spirits.spicedRum |
      Spirits.orangeLiquer |
      Spirits.apricotBrandy,
    URL: 'https://uk.thebar.com/recipe/zombie',
  },
  2: {
    name: 'Mimosa',
    spirits: Spirits.champagne,
    URL: 'https://en.wikipedia.org/wiki/Mimosa_(cocktail)',
  },
  3: {
    name: 'Martini',
    spirits:
      Spirits.gin |
      Spirits.vermouth,
    URL: 'https://www.gordonsgin.com/en-gb/cocktails/gordons-dry-martini/',
  },
  4: {
    name: 'Mojito',
    spirits: Spirits.whiteRum,
    URL: 'https://www.captainmorgan.com/en-gb/serves/captain-mojito-recipe/',
  },
  5: {
    name: 'Bloody Mary',
    spirits: Spirits.vodka,
    URL: 'https://www.absolutdrinks.com/en/drinks/bloody-mary/',
  },
  6: {
    name: 'Negroni',
    spirits:
      Spirits.gin |
      Spirits.vermouth |
      Spirits.campari,
    URL: 'https://www.absolutdrinks.com/en/drinks/negroni/',
  },
  7: {
    name: 'Pina Colada',
    spirits: Spirits.spicedRum,
    URL: 'https://uk.thebar.com/recipe/pina-colada',
  },
  8: {
    name: 'Mai Tai',
    spirits:
      Spirits.darkRum |
      Spirits.orangeLiquer,
    URL: 'https://uk.thebar.com/recipe/captain-morgan-original-rum-mai-tai',
  },
  9: {
    name: 'Dark n Stormy',
    spirits: Spirits.darkRum,
    URL: 'https://www.captainmorgan.com/en-gb/serves/captain-ginger-recipe/',
  },
  10: {
    name: 'Kir Royale',
    spirits:
      Spirits.champagne |
      Spirits.raspberryLiquer,
    URL: 'http://www.chambordchannel.com/en-gb/cocktail-recipes/royale/',
  },
};

export default cocktails;
