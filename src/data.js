const tgsimple = "simple";
const tgsunny = "sunny";
const tgstormy = "stormy";
const tgspace = "space";
const tgsolid = "solid";
const tgsound = "sound";
const tgspecial = "special";
const tgspooky = "spooky";
const tgsilly = "silly";
const tgbugs = "sick";
const tgsparkle = "sparkle";
const tgsomething = "something";
const tgNOTYPE = "NO";

export const species = {
  lileaf: {
    tgname: "Lileaf",
    tgmodel: "lileaf",
    tgtype: tgsunny,
    default: "bulbasaur",
    tgspec: "leafy",
    tgdesc: "It hides shyly behind its leaf as it uses it to gather sunlight.",
    tgbase: {
      tghp: 8,
      tgatk: 6,
      tgdef: 6,
      tgluck: 8,
      tgskill: 6,
      tgspeed: 6,
    },
    tgability: "none",
    tgbmoves: ["pollendust", "leafscatter", "stunseed", "none"],
  },

  poppianna: {
    tgname: "Poppianna",
    tgmodel: "tempstars/poppianna",
    tgtype: tgsunny,
    default: "ivysaur",
    tgspec: "floral",
    tgdesc: "It always looks on the bright side of life.",
    tgbase: {
      tghp: 10,
      tgatk: 8,
      tgdef: 8,
      tgluck: 10,
      tgskill: 8,
      tgspeed: 8,
    },
    tgability: "none",
    tgbmoves: ["pollendust", "leafscatter", "stunseed", "none"],
  },

  frollop: {
    tgname: "Frollop",
    tgmodel: "tempstars/frollop",
    tgtype: tgstormy,
    default: "froakie",
    tgspec: "froggy",
    tgdesc: "It loves nothing more than splashing in puddles on a rainy day.",
    tgbase: {
      tghp: 8,
      tgatk: 6,
      tgdef: 8,
      tgluck: 6,
      tgskill: 6,
      tgspeed: 6,
    },
    tgability: "none",
    tgbmoves: ["highkick", "dropkick", "splash", "none"],
  },

  gargantoad: {
    tgname: "Gargantoad",
    tgmodel: "tempstars/gargantoad",
    tgtype: tgstormy,
    default: "muk",
    tgspec: "",
    tgdesc: "",
    tgbase: {
      tghp: 10,
      tgatk: 8,
      tgdef: 10,
      tgluck: 8,
      tgskill: 8,
      tgspeed: 8,
    },
    tgability: "none",
    tgbmoves: ["highkick", "dropkick", "splash", "none"],
  },

  odduck: {
    tgname: "Odduck",
    tgmodel: "tempstars/odduck",
    tgtype: tgspace,
    default: "ducklett",
    tgspec: "",
    tgdesc: "",
    tgbase: {
      tghp: 8,
      tgatk: 6,
      tgdef: 6,
      tgluck: 6,
      tgskill: 8,
      tgspeed: 6,
    },
    tgability: "none",
    tgbmoves: ["spacelazer", "swiftsmack", "superburst", "none"],
  },

  reducks: {
    tgname: "Reducks",
    tgmodel: "tempstars/reducks",
    tgtype: tgspace,
    default: "golduck",
    tgspec: "",
    tgdesc: "",
    tgbase: {
      tghp: 10,
      tgatk: 8,
      tgdef: 8,
      tgluck: 8,
      tgskill: 10,
      tgspeed: 8,
    },
    tgability: "none",
    tgbmoves: ["spacelazer", "swiftsmack", "superburst", "none"],
  },

  ritty: {
    tgname: "Ritty",
    tgmodel: "tempstars/ritty",
    tgtype: tgsimple,
    default: "pachirisu",
    tgspec: "scriggly",
    tgdesc:
      "It waves its tail in complex patterns to communicate with others of its kind.",
    tgbase: {
      tghp: 8,
      tgatk: 6,
      tgdef: 6,
      tgluck: 8,
      tgskill: 6,
      tgspeed: 6,
    },
    tgability: "none",
    tgbmoves: ["swiftsmack", "swishsweep", "", ""],
  },

  furtail: {
    tgname: "Furtail",
    tgmodel: "tempstars/furtail",
    tgtype: tgsimple,
    default: "furret",
    tgspec: "",
    tgdesc: "",
    tgbase: {
      tghp: 8,
      tgatk: 6,
      tgdef: 6,
      tgluck: 8,
      tgskill: 6,
      tgspeed: 6,
    },
    tgability: "none",
    tgbmoves: ["swiftsmack", "swishsweep", "", ""],
  },

  petweet: {
    tgname: "Petweet",
    tgmodel: "tempstars/petweet",
    tgtype: tgsound,
    default: "pidgey",
    tgspec: "",
    tgdesc: "",
    tgbase: {
      tghp: 8,
      tgatk: 6,
      tgdef: 6,
      tgluck: 8,
      tgskill: 6,
      tgspeed: 6,
    },
    tgability: "none",
    tgbmoves: ["", "", "", ""],
  },

  raucaw: {
    tgname: "Raucaw",
    tgmodel: "tempstars/raucaw",
    tgtype: tgsound,
    default: "pidgeotto",
    tgspec: "",
    tgdesc: "",
    tgbase: {
      tghp: 8,
      tgatk: 6,
      tgdef: 6,
      tgluck: 8,
      tgskill: 6,
      tgspeed: 6,
    },
    tgability: "none",
    tgbmoves: ["", "", "", ""],
  },

  screagle: {
    tgname: "Screagle",
    tgmodel: "tempstars/screagle",
    tgtype: tgsound,
    default: "pidgeot",
    tgspec: "",
    tgdesc: "",
    tgbase: {
      tghp: 8,
      tgatk: 6,
      tgdef: 6,
      tgluck: 8,
      tgskill: 6,
      tgspeed: 6,
    },
    tgability: "none",
    tgbmoves: ["", "", "", ""],
  },

  eggry: {
    tgname: "Eggry",
    tgmodel: "eggry",
    tgtype: tgsunny,
    default: "exeggcute",
    tgspec: "",
    tgdesc: "",
    tgbase: {
      tghp: 4,
      tgatk: 6,
      tgdef: 4,
      tgluck: 3,
      tgskill: 3,
      tgspeed: 7,
    },
    tgability: "none",
    tgbmoves: ["claw", "chomp", "hotspit", ""],
  },

  faberious: {
    tgname: "Faberious",
    tgmodel: "tempstars/faberious",
    tgtype: tgsunny,
    default: "exeggcute",
    tgspec: "",
    tgdesc: "",
    tgbase: {
      tghp: 8,
      tgatk: 6,
      tgdef: 6,
      tgluck: 8,
      tgskill: 6,
      tgspeed: 6,
    },
    tgability: "none",
    tgbmoves: ["claw", "chomp", "hotspit", "eggshelllance"],
  },

  shleep: {
    tgname: "Shleep",
    tgmodel: "shleep",
    tgtype: tgspecial,
    default: "mareep",
    tgspec: "",
    tgdesc: "",
    tgbase: {
      tghp: 8,
      tgatk: 6,
      tgdef: 6,
      tgluck: 8,
      tgskill: 6,
      tgspeed: 6,
    },
    tgability: "none",
    tgbmoves: ["brainwave", "", "", ""],
  },

  lunaram: {
    tgname: "Lunaram",
    tgmodel: "tempstars/lunaram",
    tgtype: tgspecial,
    default: "mareep",
    tgspec: "",
    tgdesc: "",
    tgbase: {
      tghp: 8,
      tgatk: 6,
      tgdef: 6,
      tgluck: 8,
      tgskill: 6,
      tgspeed: 6,
    },
    tgability: "none",
    tgbmoves: ["brainwave", "", "", ""],
  },

  slowcone: {
    tgname: "Slowcone",
    tgmodel: "slocone_1",
    tgtype: tgsilly,
    default: "vanilite",
    tgspec: "",
    tgdesc: "",
    tgbase: {
      tghp: 8,
      tgatk: 4,
      tgdef: 5,
      tgluck: 5,
      tgskill: 5,
      tgspeed: 4,
    },
    tgability: "none",
    tgbmoves: ["sprinkle", "coldone", "", ""],
  },

  powaffle: {
    tgname: "Powaffle",
    tgmodel: "tempstars/powaffle",
    tgtype: tgsilly,
    default: "vaniluxe",
    tgspec: "",
    tgdesc: "",
    tgbase: {
      tghp: 8,
      tgatk: 6,
      tgdef: 6,
      tgluck: 8,
      tgskill: 6,
      tgspeed: 6,
    },
    tgability: "none",
    tgbmoves: ["sprinkle", "coldone", "dropkick", ""],
  },

  riffraft: {
    tgname: "Riffraft",
    tgmodel: "rifraft",
    tgtype: tgsolid,
    default: "carvanha",
    tgspec: "raft",
    tgdesc: "",
    tgbase: {
      tghp: 8,
      tgatk: 6,
      tgdef: 7,
      tgluck: 5,
      tgskill: 4,
      tgspeed: 3,
    },
    tgability: "none",
    tgbmoves: ["splash", "splashzone", "", ""],
  },

  boatsam: {
    tgname: "Boatsam",
    tgmodel: "rifraft",
    tgtype: tgsolid,
    default: "sharpedo",
    tgspec: "boat",
    tgdesc: "",
    tgbase: {
      tghp: 8,
      tgatk: 6,
      tgdef: 7,
      tgluck: 5,
      tgskill: 4,
      tgspeed: 3,
    },
    tgability: "none",
    tgbmoves: ["splash", "splashzone", "", ""],
  },

  magnut: {
    tgname: "Magnut",
    tgmodel: "magnut",
    tgtype: tgspace,
    default: "magnemite",
    tgspec: "",
    tgdesc: "",
    tgbase: {
      tghp: 5,
      tgatk: 7,
      tgdef: 7,
      tgluck: 3,
      tgskill: 3,
      tgspeed: 5,
    },
    tgability: "none",
    tgbmoves: ["nutshot", "chomp", "swiftsmack", ""],
  },

  hydraulich: {
    tgname: "Hydraulich",
    tgmodel: "magnut",
    tgtype: tgspace,
    default: "magneton",
    tgspec: "",
    tgdesc: "",
    tgbase: {
      tghp: 5,
      tgatk: 7,
      tgdef: 7,
      tgluck: 3,
      tgskill: 3,
      tgspeed: 5,
    },
    tgability: "none",
    tgbmoves: ["nutshot", "chomp", "", ""],
  },

  flyder: {
    tgname: "Flyder",
    tgmodel: "flyder",
    tgtype: tgspace,
    default: "spinarak",
    tgspec: "",
    tgdesc: "",
    tgbase: {
      tghp: 5,
      tgatk: 5,
      tgdef: 5,
      tgluck: 8,
      tgskill: 5,
      tgspeed: 7,
    },
    tgability: "none",
    tgbmoves: ["flybite", "swiftsmack", "", ""],
  },

  airachnid: {
    tgname: "Airachnid",
    tgmodel: "flyder",
    tgtype: tgspace,
    default: "ariados",
    tgspec: "airstring",
    tgdesc: "",
    tgbase: {
      tghp: 5,
      tgatk: 5,
      tgdef: 5,
      tgluck: 8,
      tgskill: 5,
      tgspeed: 7,
    },
    tgability: "none",
    tgbmoves: ["bonk", "", "", ""],
  },

  nandummy: {
    tgname: "nandummy",
    tgmodel: "nandummy",
    tgtype: tgNOTYPE,
    default: "ditto",
    tgspec: "",
    tgdesc: "",
    tgbase: {
      tghp: 5,
      tgatk: 5,
      tgdef: 5,
      tgluck: 8,
      tgskill: 5,
      tgspeed: 7,
    },
    tgability: "none",
    tgbmoves: ["bonk", "", "", ""],
  },
};
