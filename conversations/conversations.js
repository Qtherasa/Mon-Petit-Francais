const conversations = [
  {
    id: "weather-walk",
    icon: "🌤️",
    title: "Le temps & une promenade",
    sub: "The weather & a walk",
    desc: "A simple conversation about the weather and making a plan to go outside.",
    lines: [
      {
        speaker: 1,
        fr: "Quel temps fait-il aujourd'hui ?",
        en: "What's the weather like today?",
        ph: "kel tahn feh-TEEL oh-zhoor-DWEE"
      },
      {
        speaker: 2,
        fr: "Il fait beau, mais c'est un peu venteux dehors.",
        en: "It's nice, but it's a little windy outside.",
        ph: "eel feh BOH, meh say uhn puh vahn-TUH duh-OR"
      },
      {
        speaker: 1,
        fr: "Oh, bien. Tu veux aller te promener ?",
        en: "Oh, good. Do you want to go for a walk?",
        ph: "oh, bee-AN. too vuh ah-LAY tuh prohm-NAY"
      },
      {
        speaker: 2,
        fr: "Oui, bonne idée ! Laisse-moi mettre un pull.",
        en: "Yes, good idea! Let me put on a sweater.",
        ph: "wee, bun ee-DAY! les-MWAH met-ruh uhn POOL"
      },
      {
        speaker: 1,
        fr: "D'accord, je t'attends ici.",
        en: "Okay, I'll wait for you here.",
        ph: "dah-KOR, zhuh tah-TAHN ee-SEE"
      },
      {
        speaker: 2,
        fr: "Je suis prête ! On y va ?",
        en: "I'm ready! Shall we go?",
        ph: "zhuh swee PRET! ohn ee VAH"
      }
    ],
    vocab: [
      { fr: "le temps",       en: "the weather",      ph: "luh TAHN" },
      { fr: "aujourd'hui",    en: "today",             ph: "oh-zhoor-DWEE" },
      { fr: "il fait beau",   en: "it's nice / sunny", ph: "eel feh BOH" },
      { fr: "venteux",        en: "windy",             ph: "vahn-TUH" },
      { fr: "dehors",         en: "outside",           ph: "duh-OR" },
      { fr: "se promener",    en: "to go for a walk",  ph: "suh prohm-NAY" },
      { fr: "un pull",        en: "a sweater",         ph: "uhn POOL" },
      { fr: "j'attends",      en: "I'm waiting",       ph: "zhuh tah-TAHN" },
      { fr: "prête",          en: "ready (f.)",        ph: "PRET" },
      { fr: "on y va",        en: "shall we go / let's go", ph: "ohn ee VAH" }
    ]
  },
  {
    id: "morning-routine",
    icon: "☀️",
    title: "Le matin à la maison",
    sub: "Morning at home",
    desc: "A cosy exchange to start the day — coffee, plans, and gentle small talk.",
    lines: [
      {
        speaker: 1,
        fr: "Bonjour ! Tu as bien dormi ?",
        en: "Good morning! Did you sleep well?",
        ph: "bon-ZHOOR! too ah bee-AN dor-MEE"
      },
      {
        speaker: 2,
        fr: "Oui, très bien merci. Et toi ?",
        en: "Yes, very well, thanks. And you?",
        ph: "wee, treh bee-AN mair-SEE. ay TWAH"
      },
      {
        speaker: 1,
        fr: "Pas mal ! Tu veux du café ?",
        en: "Not bad! Do you want some coffee?",
        ph: "pah MAL! too vuh doo kah-FAY"
      },
      {
        speaker: 2,
        fr: "Oui, s'il te plaît. Avec du lait.",
        en: "Yes, please. With some milk.",
        ph: "wee, seel tuh PLEH. ah-VEK doo LEH"
      },
      {
        speaker: 1,
        fr: "Voilà. Tu as faim ? Je peux faire des toasts.",
        en: "Here you go. Are you hungry? I can make some toast.",
        ph: "vwah-LAH. too ah FAN? zhuh puh fair day TOST"
      },
      {
        speaker: 2,
        fr: "Oui, ce serait super. Merci beaucoup !",
        en: "Yes, that would be great. Thank you so much!",
        ph: "wee, suh suh-REH soo-PAIR. mair-see boh-KOO"
      },
      {
        speaker: 1,
        fr: "Qu'est-ce que tu fais aujourd'hui ?",
        en: "What are you doing today?",
        ph: "kess-kuh too feh oh-zhoor-DWEE"
      },
      {
        speaker: 2,
        fr: "Je travaille ce matin, mais je suis libre cet après-midi.",
        en: "I'm working this morning, but I'm free this afternoon.",
        ph: "zhuh trah-VY suh mah-TAN, meh zhuh swee LEEBR set ah-preh mee-DEE"
      }
    ],
    vocab: [
      { fr: "bonjour",        en: "good morning / hello", ph: "bon-ZHOOR" },
      { fr: "dormir",         en: "to sleep",          ph: "dor-MEER" },
      { fr: "le café",        en: "coffee",             ph: "luh kah-FAY" },
      { fr: "le lait",        en: "milk",               ph: "luh LEH" },
      { fr: "avoir faim",     en: "to be hungry",       ph: "ah-VWAHR FAN" },
      { fr: "voilà",          en: "here you go / there it is", ph: "vwah-LAH" },
      { fr: "ce matin",       en: "this morning",       ph: "suh mah-TAN" },
      { fr: "après-midi",     en: "afternoon",          ph: "ah-preh mee-DEE" },
      { fr: "libre",          en: "free / available",   ph: "LEEBR" },
      { fr: "travailler",     en: "to work",            ph: "trah-VY-yay" }
    ]
  },
  {
    id: "dinner-plans",
    icon: "🥐",
    title: "Qu'est-ce qu'on mange ?",
    sub: "What shall we eat?",
    desc: "Deciding what to have for dinner — cooking in, ordering out, or going to a restaurant.",
    lines: [
      {
        speaker: 1,
        fr: "J'ai faim. Tu veux manger quoi ce soir ?",
        en: "I'm hungry. What do you want to eat tonight?",
        ph: "zhay FAN. too vuh mahn-ZHAY kwah suh SWAHR"
      },
      {
        speaker: 2,
        fr: "Je ne sais pas... On commande une pizza ?",
        en: "I don't know... Shall we order a pizza?",
        ph: "zhuh nuh say PAH... ohn koh-MAHND oon PEET-zah"
      },
      {
        speaker: 1,
        fr: "Bonne idée ! Tu préfères quelle sorte ?",
        en: "Good idea! What kind do you prefer?",
        ph: "bun ee-DAY! too pray-FAIR kel SORT"
      },
      {
        speaker: 2,
        fr: "Une pizza margherita, s'il te plaît. Simple mais délicieuse.",
        en: "A margherita pizza, please. Simple but delicious.",
        ph: "oon peet-zah mar-guh-REE-tah, seel tuh PLEH. SAN-pluh meh day-lee-SYUHZ"
      },
      {
        speaker: 1,
        fr: "D'accord ! Et tu veux quelque chose à boire ?",
        en: "Okay! And do you want something to drink?",
        ph: "dah-KOR! ay too vuh kel-kuh SHOHZ ah BWAHR"
      },
      {
        speaker: 2,
        fr: "De l'eau, merci. Ou peut-être un verre de vin rouge ?",
        en: "Some water, thanks. Or maybe a glass of red wine?",
        ph: "duh LOH, mair-SEE. oo puh-TET uhn VAIR duh van ROOZH"
      },
      {
        speaker: 1,
        fr: "Parfait. Je commande maintenant.",
        en: "Perfect. I'll order now.",
        ph: "par-FEH. zhuh koh-MAHND mant-NAHN"
      },
      {
        speaker: 2,
        fr: "Super ! Merci, mon amour.",
        en: "Great! Thank you, my love.",
        ph: "soo-PAIR! mair-SEE, mohn ah-MOOR"
      }
    ],
    vocab: [
      { fr: "manger",         en: "to eat",             ph: "mahn-ZHAY" },
      { fr: "commander",      en: "to order",           ph: "koh-mahn-DAY" },
      { fr: "ce soir",        en: "tonight / this evening", ph: "suh SWAHR" },
      { fr: "préférer",       en: "to prefer",          ph: "pray-fay-RAY" },
      { fr: "délicieux",      en: "delicious",          ph: "day-lee-SYUH" },
      { fr: "quelque chose",  en: "something",          ph: "kel-kuh SHOHZ" },
      { fr: "à boire",        en: "to drink / something to drink", ph: "ah BWAHR" },
      { fr: "un verre de vin", en: "a glass of wine",   ph: "uhn VAIR duh VAN" },
      { fr: "maintenant",     en: "now",                ph: "mant-NAHN" },
      { fr: "mon amour",      en: "my love",            ph: "mohn ah-MOOR" }
    ]
  },
  {
    id: "how-was-your-day",
    icon: "💬",
    title: "Comment s'est passée ta journée ?",
    sub: "How was your day?",
    desc: "Checking in with each other after a long day — the most important little conversation.",
    lines: [
      {
        speaker: 1,
        fr: "Salut ! Comment s'est passée ta journée ?",
        en: "Hey! How was your day?",
        ph: "sah-LUE! koh-MAHN say pah-SAY tah zhoor-NAY"
      },
      {
        speaker: 2,
        fr: "Pas terrible. J'ai eu une journée très difficile au travail.",
        en: "Not great. I had a really hard day at work.",
        ph: "pah teh-REEBL. zhay oo oon zhoor-NAY treh dee-fee-SEEL oh trah-VY"
      },
      {
        speaker: 1,
        fr: "Oh non, je suis désolé(e). Qu'est-ce qui s'est passé ?",
        en: "Oh no, I'm sorry. What happened?",
        ph: "oh NOHN, zhuh swee day-zoh-LAY. kess-kee say pah-SAY"
      },
      {
        speaker: 2,
        fr: "C'était stressant. Mais ça va mieux maintenant.",
        en: "It was stressful. But I feel better now.",
        ph: "say-TAY streh-SAHN. meh sah vah myuh mant-NAHN"
      },
      {
        speaker: 1,
        fr: "Je suis content(e) que tu sois à la maison.",
        en: "I'm glad you're home.",
        ph: "zhuh swee kon-TAHN kuh too swah ah lah may-ZOHN"
      },
      {
        speaker: 2,
        fr: "Moi aussi. Et toi, ta journée s'est bien passée ?",
        en: "Me too. And you, did you have a good day?",
        ph: "mwah OH-see. ay TWAH, tah zhoor-NAY say bee-AN pah-SAY"
      },
      {
        speaker: 1,
        fr: "Oui, ça allait. Rien de spécial.",
        en: "Yes, it was fine. Nothing special.",
        ph: "wee, sah ah-LEH. ree-AN duh spay-SYAL"
      },
      {
        speaker: 2,
        fr: "Ça va aller. Je t'aime.",
        en: "It'll be okay. I love you.",
        ph: "sah vah ah-LAY. zhuh TEM"
      }
    ],
    vocab: [
      { fr: "la journée",     en: "the day",            ph: "lah zhoor-NAY" },
      { fr: "le travail",     en: "work",               ph: "luh trah-VY" },
      { fr: "difficile",      en: "difficult / hard",   ph: "dee-fee-SEEL" },
      { fr: "désolé(e)",      en: "sorry",              ph: "day-zoh-LAY" },
      { fr: "stressant",      en: "stressful",          ph: "streh-SAHN" },
      { fr: "ça va mieux",    en: "I feel better",      ph: "sah vah MYUH" },
      { fr: "la maison",      en: "the house / home",   ph: "lah may-ZOHN" },
      { fr: "content(e)",     en: "happy / glad",       ph: "kon-TAHN" },
      { fr: "rien de spécial", en: "nothing special",   ph: "ree-AN duh spay-SYAL" },
      { fr: "je t'aime",      en: "I love you",         ph: "zhuh TEM" }
    ]
  },
  {
    id: "evening-together",
    icon: "🏠",
    title: "Une soirée à la maison",
    sub: "An evening at home",
    desc: "Settling in for a cosy night in — choosing a film, getting comfy, and relaxing together.",
    lines: [
      {
        speaker: 1,
        fr: "On regarde un film ce soir ?",
        en: "Shall we watch a film tonight?",
        ph: "ohn ruh-GARD uhn FEELM suh SWAHR"
      },
      {
        speaker: 2,
        fr: "Oui ! Tu veux regarder quoi ?",
        en: "Yes! What do you want to watch?",
        ph: "wee! too vuh ruh-gar-DAY kwah"
      },
      {
        speaker: 1,
        fr: "Je ne sais pas. Une comédie ? Ou un film d'action ?",
        en: "I don't know. A comedy? Or an action film?",
        ph: "zhuh nuh say PAH. oon koh-may-DEE? oo uhn feelm dak-SYOHN"
      },
      {
        speaker: 2,
        fr: "Une comédie, je préfère. Je suis fatiguée.",
        en: "A comedy, I prefer. I'm tired.",
        ph: "oon koh-may-DEE, zhuh pray-FAIR. zhuh swee fah-tee-GAY"
      },
      {
        speaker: 1,
        fr: "D'accord. Viens t'asseoir avec moi.",
        en: "Okay. Come sit with me.",
        ph: "dah-KOR. vyan tah-SWAHR ah-vek MWAH"
      },
      {
        speaker: 2,
        fr: "Une seconde — tu veux du pop-corn ?",
        en: "One second — do you want some popcorn?",
        ph: "oon suh-GOND — too vuh doo pop-KORN"
      },
      {
        speaker: 1,
        fr: "Oui, s'il te plaît ! Tu es parfait(e).",
        en: "Yes, please! You are perfect.",
        ph: "wee, seel tuh PLEH! too ay par-FEH"
      },
      {
        speaker: 2,
        fr: "Je sais. Allez, on commence !",
        en: "I know. Come on, let's start!",
        ph: "zhuh SAY. ah-LAY, ohn koh-MAHNS"
      }
    ],
    vocab: [
      { fr: "un film",        en: "a film / movie",     ph: "uhn FEELM" },
      { fr: "regarder",       en: "to watch",           ph: "ruh-gar-DAY" },
      { fr: "une comédie",    en: "a comedy",           ph: "oon koh-may-DEE" },
      { fr: "fatigué(e)",     en: "tired",              ph: "fah-tee-GAY" },
      { fr: "s'asseoir",      en: "to sit down",        ph: "sah-SWAHR" },
      { fr: "une seconde",    en: "one second",         ph: "oon suh-GOND" },
      { fr: "parfait(e)",     en: "perfect",            ph: "par-FEH" },
      { fr: "commencer",      en: "to start / begin",   ph: "koh-mahn-SAY" },
      { fr: "allez",          en: "come on / let's go", ph: "ah-LAY" },
      { fr: "je sais",        en: "I know",             ph: "zhuh SAY" }
    ]
  },
  {
    id: "making-plans",
    icon: "📅",
    title: "On fait quoi ce week-end ?",
    sub: "What shall we do this weekend?",
    desc: "Making plans for the weekend — suggestions, preferences, and getting excited together.",
    lines: [
      {
        speaker: 1,
        fr: "On fait quoi ce week-end ?",
        en: "What shall we do this weekend?",
        ph: "ohn feh kwah suh wee-KEND"
      },
      {
        speaker: 2,
        fr: "Je voudrais aller au marché samedi matin.",
        en: "I'd like to go to the market on Saturday morning.",
        ph: "zhuh voo-DREH ah-LAY oh mar-SHAY sahm-DEE mah-TAN"
      },
      {
        speaker: 1,
        fr: "Bonne idée ! Et ensuite, on pourrait déjeuner dehors.",
        en: "Good idea! And then we could have lunch outside.",
        ph: "bun ee-DAY! ay ahn-SWEET, ohn poo-REH day-zhuh-NAY duh-OR"
      },
      {
        speaker: 2,
        fr: "J'adore ça. Et dimanche ?",
        en: "I love that. And Sunday?",
        ph: "zhah-DOR sah. ay dee-MAHNSH"
      },
      {
        speaker: 1,
        fr: "Peut-être on pourrait rester à la maison et se reposer.",
        en: "Maybe we could stay home and rest.",
        ph: "puh-TET ohn poo-REH res-TAY ah lah may-ZOHN ay suh ruh-poh-ZAY"
      },
      {
        speaker: 2,
        fr: "Parfait. Un week-end tranquille, c'est exactement ce dont j'ai besoin.",
        en: "Perfect. A quiet weekend is exactly what I need.",
        ph: "par-FEH. uhn wee-KEND trahn-KEEL, say eg-zak-tuh-MAHN suh dohn zhay buh-ZWAN"
      },
      {
        speaker: 1,
        fr: "Moi aussi. Je suis content(e) qu'on soit ensemble.",
        en: "Me too. I'm glad we're together.",
        ph: "mwah OH-see. zhuh swee kon-TAHN kohn swah ahn-SAHML"
      }
    ],
    vocab: [
      { fr: "le week-end",    en: "the weekend",        ph: "luh wee-KEND" },
      { fr: "le marché",      en: "the market",         ph: "luh mar-SHAY" },
      { fr: "samedi",         en: "Saturday",           ph: "sahm-DEE" },
      { fr: "dimanche",       en: "Sunday",             ph: "dee-MAHNSH" },
      { fr: "déjeuner",       en: "to have lunch",      ph: "day-zhuh-NAY" },
      { fr: "ensuite",        en: "then / next",        ph: "ahn-SWEET" },
      { fr: "rester",         en: "to stay",            ph: "res-TAY" },
      { fr: "se reposer",     en: "to rest",            ph: "suh ruh-poh-ZAY" },
      { fr: "tranquille",     en: "quiet / calm",       ph: "trahn-KEEL" },
      { fr: "ensemble",       en: "together",           ph: "ahn-SAHML" }
    ]
  },
  {
    id: "compliments",
    icon: "🌸",
    title: "Tu es magnifique",
    sub: "You are gorgeous",
    desc: "A sweet exchange of compliments — because everyone deserves to hear nice things.",
    lines: [
      {
        speaker: 1,
        fr: "Tu es très belle / beau aujourd'hui.",
        en: "You look very beautiful / handsome today.",
        ph: "too ay treh BEL / BOH oh-zhoor-DWEE"
      },
      {
        speaker: 2,
        fr: "Vraiment ? Merci ! J'aime ta tenue aussi.",
        en: "Really? Thank you! I love your outfit too.",
        ph: "vray-MAHN? mair-SEE! zhem tah tuh-NOO oh-SEE"
      },
      {
        speaker: 1,
        fr: "Tu me rends heureux / heureuse, tu sais.",
        en: "You make me happy, you know.",
        ph: "too muh rahn uh-RUH / uh-RUHZ, too SAY"
      },
      {
        speaker: 2,
        fr: "Moi aussi, tu me rends très heureuse / heureux.",
        en: "Me too, you make me very happy.",
        ph: "mwah OH-see, too muh rahn treh uh-RUHZ / uh-RUH"
      },
      {
        speaker: 1,
        fr: "Je t'adore, tu sais.",
        en: "I adore you, you know.",
        ph: "zhuh tah-DOR, too SAY"
      },
      {
        speaker: 2,
        fr: "Je t'aime plus que tout.",
        en: "I love you more than anything.",
        ph: "zhuh TEM ploo kuh TOO"
      },
      {
        speaker: 1,
        fr: "Fais-moi un câlin !",
        en: "Give me a hug!",
        ph: "feh mwah uhn kah-LAN"
      },
      {
        speaker: 2,
        fr: "Toujours. Viens là.",
        en: "Always. Come here.",
        ph: "too-ZHOOR. vyan LAH"
      }
    ],
    vocab: [
      { fr: "belle / beau",   en: "beautiful / handsome", ph: "BEL / BOH" },
      { fr: "vraiment",       en: "really / truly",     ph: "vray-MAHN" },
      { fr: "la tenue",       en: "the outfit",         ph: "lah tuh-NOO" },
      { fr: "heureux / heureuse", en: "happy",          ph: "uh-RUH / uh-RUHZ" },
      { fr: "rendre heureux", en: "to make happy",      ph: "rahn-druh uh-RUH" },
      { fr: "je t'adore",     en: "I adore you",        ph: "zhuh tah-DOR" },
      { fr: "plus que tout",  en: "more than anything", ph: "ploo kuh TOO" },
      { fr: "un câlin",       en: "a hug",              ph: "uhn kah-LAN" },
      { fr: "toujours",       en: "always",             ph: "too-ZHOOR" },
      { fr: "viens là",       en: "come here",          ph: "vyan LAH" }
    ]
  },
  {
    id: "grocery-shopping",
    icon: "🧹",
    title: "On fait les courses",
    sub: "We're doing the shopping",
    desc: "A practical conversation about groceries — what you need, what you forgot, and what to eat.",
    lines: [
      {
        speaker: 1,
        fr: "On n'a plus de lait ni de pain.",
        en: "We're out of milk and bread.",
        ph: "ohn nah ploo duh LEH nee duh PAN"
      },
      {
        speaker: 2,
        fr: "Je vais au supermarché cet après-midi. Tu as besoin de quelque chose ?",
        en: "I'm going to the supermarket this afternoon. Do you need anything?",
        ph: "zhuh vay oh soo-pair-mar-SHAY set ah-preh mee-DEE. too ah buh-ZWAN duh kel-kuh SHOHZ"
      },
      {
        speaker: 1,
        fr: "Oui — du lait, du pain, et peut-être des œufs.",
        en: "Yes — some milk, some bread, and maybe some eggs.",
        ph: "wee — doo LEH, doo PAN, ay puh-TET day ZUH"
      },
      {
        speaker: 2,
        fr: "D'accord. Tu veux quelque chose pour dîner ce soir ?",
        en: "Okay. Do you want something specific for dinner tonight?",
        ph: "dah-KOR. too vuh kel-kuh SHOHZ poor dee-NAY suh SWAHR"
      },
      {
        speaker: 1,
        fr: "Des pâtes, peut-être ? C'est simple et délicieux.",
        en: "Pasta, maybe? It's simple and delicious.",
        ph: "day PAT, puh-TET? say SAN-pluh ay day-lee-SYUH"
      },
      {
        speaker: 2,
        fr: "Bonne idée. J'achète aussi des légumes pour la salade.",
        en: "Good idea. I'll also buy some vegetables for the salad.",
        ph: "bun ee-DAY. zhah-SHET oh-SEE day lay-GOOM poor lah sah-LAD"
      },
      {
        speaker: 1,
        fr: "Parfait. Merci, tu es le meilleur / la meilleure !",
        en: "Perfect. Thank you, you're the best!",
        ph: "par-FEH. mair-SEE, too ay luh meh-YUHR / lah meh-YUHR"
      }
    ],
    vocab: [
      { fr: "les courses",    en: "the shopping / groceries", ph: "lay KOORS" },
      { fr: "le supermarché", en: "the supermarket",    ph: "luh soo-pair-mar-SHAY" },
      { fr: "avoir besoin",   en: "to need",            ph: "ah-VWAHR buh-ZWAN" },
      { fr: "le lait",        en: "milk",               ph: "luh LEH" },
      { fr: "le pain",        en: "bread",              ph: "luh PAN" },
      { fr: "des œufs",       en: "eggs",               ph: "day ZUH" },
      { fr: "des pâtes",      en: "pasta",              ph: "day PAT" },
      { fr: "des légumes",    en: "vegetables",         ph: "day lay-GOOM" },
      { fr: "la salade",      en: "salad",              ph: "lah sah-LAD" },
      { fr: "le meilleur / la meilleure", en: "the best", ph: "luh meh-YUHR" }
    ]
  },
  {
    id: "cats",
    icon: "🐾",
    title: "Ces fichues chats",
    sub: "These damn cats",
    desc: "The important daily negotiations around cats who demand everything and give chaos in return.",
    lines: [
      {
        speaker: 1,
        fr: "Tu as nourri les chats ce matin ?",
        en: "Did you feed the cats this morning?",
        ph: "too ah noo-REE lay SHAH suh mah-TAN"
      },
      {
        speaker: 2,
        fr: "Oui, mais elles réclament encore à manger.",
        en: "Yes, but they're demanding food again.",
        ph: "wee, meh el ray-klahm ahn-KOR ah mahn-ZHAY"
      },
      {
        speaker: 1,
        fr: "Bien sûr. Le chat est sur le canapé encore ?",
        en: "Of course. Is the cat on the sofa again?",
        ph: "bee-AN SOOR. luh SHAH ay soor luh kah-nah-PAY ahn-KOR"
      },
      {
        speaker: 2,
        fr: "Évidemment. Elle dort toute la journée.",
        en: "Obviously. She sleeps all day.",
        ph: "ay-vee-dah-MAHN. el DOR toot lah zhoor-NAY"
      },
      {
        speaker: 1,
        fr: "Elle m'a griffé(e) ce matin ! Regarde !",
        en: "She scratched me this morning! Look!",
        ph: "el mah gree-FAY suh mah-TAN! ruh-GARD"
      },
      {
        speaker: 2,
        fr: "Oh non ! Mais elle est tellement mignonne quand même.",
        en: "Oh no! But she's so cute all the same.",
        ph: "oh NOHN! meh el ay tel-MAHN mee-NYOHN kahn MEM"
      },
      {
        speaker: 1,
        fr: "C'est vrai. Viens ici, mon minou. Je t'aime quand même.",
        en: "That's true. Come here, little kitty. I love you anyway.",
        ph: "say VREH. vyan ee-SEE, mohn mee-NOO. zhuh TEM kahn MEM"
      }
    ],
    vocab: [
      { fr: "le chat",        en: "the cat",            ph: "luh SHAH" },
      { fr: "nourrir",        en: "to feed",            ph: "noo-REER" },
      { fr: "réclamer",       en: "to demand / beg for", ph: "ray-klah-MAY" },
      { fr: "le canapé",      en: "the sofa",           ph: "luh kah-nah-PAY" },
      { fr: "encore",         en: "again / still",      ph: "ahn-KOR" },
      { fr: "évidemment",     en: "obviously",          ph: "ay-vee-dah-MAHN" },
      { fr: "griffer",        en: "to scratch",         ph: "gree-FAY" },
      { fr: "mignon(ne)",     en: "cute",               ph: "mee-NYOHN" },
      { fr: "quand même",     en: "even so / all the same", ph: "kahn MEM" },
      { fr: "mon minou",      en: "my little kitty",    ph: "mohn mee-NOO" }
    ]
  },
  {
    id: "i-miss-you",
    icon: "💕",
    title: "Tu me manques",
    sub: "I miss you",
    desc: "A tender conversation for when you're apart — or just feeling a little sentimental.",
    lines: [
      {
        speaker: 1,
        fr: "Tu me manques, tu sais.",
        en: "I miss you, you know.",
        ph: "too muh MAHNK, too SAY"
      },
      {
        speaker: 2,
        fr: "Tu me manques aussi. Quand est-ce que tu rentres ?",
        en: "I miss you too. When do you get back?",
        ph: "too muh MAHNK oh-SEE. kahn ess-kuh too RAHNTR"
      },
      {
        speaker: 1,
        fr: "Ce soir, vers dix-neuf heures.",
        en: "This evening, around 7pm.",
        ph: "suh SWAHR, vair deez-NUHF UHR"
      },
      {
        speaker: 2,
        fr: "Je serai là. Je pense à toi.",
        en: "I'll be here. I'm thinking of you.",
        ph: "zhuh suh-REH LAH. zhuh pahns ah TWAH"
      },
      {
        speaker: 1,
        fr: "Moi aussi. Je t'aime.",
        en: "Me too. I love you.",
        ph: "mwah OH-see. zhuh TEM"
      },
      {
        speaker: 2,
        fr: "Je t'aime aussi. À ce soir !",
        en: "I love you too. See you tonight!",
        ph: "zhuh TEM oh-SEE. ah suh SWAHR"
      }
    ],
    vocab: [
      { fr: "manquer",        en: "to miss (someone)",  ph: "mahn-KAY" },
      { fr: "tu me manques",  en: "I miss you (lit. you are missing to me)", ph: "too muh MAHNK" },
      { fr: "rentrer",        en: "to come back / return home", ph: "rahn-TRAY" },
      { fr: "vers",           en: "around / towards",   ph: "VAIR" },
      { fr: "je serai là",    en: "I'll be here",       ph: "zhuh suh-REH LAH" },
      { fr: "penser à",       en: "to think about",     ph: "pahn-SAY ah" },
      { fr: "à ce soir",      en: "see you tonight",    ph: "ah suh SWAHR" },
      { fr: "moi aussi",      en: "me too",             ph: "mwah OH-see" },
      { fr: "tu sais",        en: "you know",           ph: "too SAY" },
      { fr: "je t'aime",      en: "I love you",         ph: "zhuh TEM" }
    ]
  },
  {
    id: "wow-gaming",
    icon: "⚔️",
    title: "On fait un donjon ?",
    sub: "Shall we do a dungeon?",
    desc: "Convincing your partner to log on, checking their spec, and planning the raid — all in French.",
    lines: [
      {
        speaker: 1,
        fr: "Tu joues ce soir ?",
        en: "Are you playing tonight?",
        ph: "too ZHOO suh SWAHR"
      },
      {
        speaker: 2,
        fr: "Oui, je viens de me connecter. Tu veux faire un donjon ?",
        en: "Yes, I just logged on. Do you want to do a dungeon?",
        ph: "wee, zhuh vyan duh muh koh-nek-TAY. too vuh fair uhn don-ZHOHN"
      },
      {
        speaker: 1,
        fr: "Avec plaisir ! Quel personnage tu joues ?",
        en: "With pleasure! Which character are you playing?",
        ph: "ah-vek play-ZEER! kel pair-soh-NAZH too ZHOO"
      },
      {
        speaker: 2,
        fr: "Mon guerrier. Je joue tank ce soir.",
        en: "My warrior. I'm playing tank tonight.",
        ph: "mohn geh-RYAY. zhuh ZHOO TAHNK suh SWAHR"
      },
      {
        speaker: 1,
        fr: "Parfait. Ils ont nerfé ma mage, mais ça va.",
        en: "Perfect. They nerfed my mage, but it's fine.",
        ph: "par-FEH. eel zohn nair-FAY mah MAZH, meh sah VAH"
      },
      {
        speaker: 2,
        fr: "Encore ! C'est nul. Tu es prêt(e) ?",
        en: "Again! That's rubbish. Are you ready?",
        ph: "ahn-KOR! say NOOL. too ay PREH"
      },
      {
        speaker: 1,
        fr: "Je suis prêt(e) ! Pour la Horde !",
        en: "I'm ready! For the Horde!",
        ph: "zhuh swee PREH! poor lah ORD"
      },
      {
        speaker: 2,
        fr: "Pour la Horde ! On y va !",
        en: "For the Horde! Let's go!",
        ph: "poor lah ORD! ohn ee VAH"
      }
    ],
    vocab: [
      { fr: "jouer",          en: "to play",            ph: "ZHOO-ay" },
      { fr: "se connecter",   en: "to log on",          ph: "suh koh-nek-TAY" },
      { fr: "un donjon",      en: "a dungeon",          ph: "uhn don-ZHOHN" },
      { fr: "avec plaisir",   en: "with pleasure",      ph: "ah-vek play-ZEER" },
      { fr: "un personnage",  en: "a character",        ph: "uhn pair-soh-NAZH" },
      { fr: "un guerrier",    en: "a warrior",          ph: "uhn geh-RYAY" },
      { fr: "une mage",       en: "a mage",             ph: "oon MAZH" },
      { fr: "prêt(e)",        en: "ready",              ph: "PREH" },
      { fr: "c'est nul",      en: "that's rubbish",     ph: "say NOOL" },
      { fr: "pour la Horde",  en: "for the Horde",      ph: "poor lah ORD" }
    ]
  },
  {
    id: "au-restaurant",
    icon: "🍽️",
    title: "Au restaurant",
    sub: "At the restaurant",
    desc: "You've just been seated at a restaurant and the menus are open. Talk through the drinks, a possible starter, your main courses, and whether there's any room left for dessert.",
    lines: [
      {
        speaker: 1,
        fr: "Oh, c'est sympa ici ! J'adore l'ambiance.",
        en: "Oh, it's nice here! I love the atmosphere.",
        ph: "oh, say SAN-pah ee-SEE! zhah-DOR lahm-bee-AHNS"
      },
      {
        speaker: 2,
        fr: "Oui, c'est très joli. Regarde le menu — il a l'air bien.",
        en: "Yes, it's very lovely. Look at the menu — it looks good.",
        ph: "wee, say treh zhoh-LEE. ruh-GARD luh muh-NOO — eel ah lair bee-AN"
      },
      {
        speaker: 1,
        fr: "D'accord, je regarde. Mais d'abord, tu veux quelque chose à boire ?",
        en: "Okay, I'm looking. But first, do you want something to drink?",
        ph: "dah-KOR, zhuh ruh-GARD. meh dah-BOR, too vuh kel-kuh SHOHZ ah BWAHR"
      },
      {
        speaker: 2,
        fr: "Oui ! Je pense que je vais prendre un verre de vin blanc. Et toi ?",
        en: "Yes! I think I'll have a glass of white wine. And you?",
        ph: "wee! zhuh pahns kuh zhuh vay PRAHN-druh uhn VAIR duh van BLAHN. ay TWAH"
      },
      {
        speaker: 1,
        fr: "Je vais commencer avec de l'eau gazeuse, je crois. Peut-être un cocktail plus tard.",
        en: "I'll start with some sparkling water, I think. Maybe a cocktail later.",
        ph: "zhuh vay koh-mahn-SAY ah-vek duh LOH gah-ZUHZ, zhuh KWAH. puh-TET uhn kok-TEL ploo TAR"
      },
      {
        speaker: 2,
        fr: "Bonne idée. Alors, tu vois quelque chose qui te plaît comme entrée ?",
        en: "Good idea. So, do you see anything you like as a starter?",
        ph: "bun ee-DAY. ah-LOR, too vwah kel-kuh SHOHZ kee tuh PLEH kum ahn-TRAY"
      },
      {
        speaker: 1,
        fr: "Hmm... il y a une soupe à l'oignon et une salade de chèvre chaud. Les deux ont l'air délicieux.",
        en: "Hmm... there's a French onion soup and a warm goat's cheese salad. Both look delicious.",
        ph: "hm... eel ee ah oon SOOP ah lohn-YOHN ay oon sah-LAD duh SHEV-ruh SHOH. lay duh oh lair day-lee-SYUH"
      },
      {
        speaker: 2,
        fr: "Oh, j'adore la salade de chèvre chaud ! On pourrait partager une entrée ?",
        en: "Oh, I love warm goat's cheese salad! Could we share a starter?",
        ph: "oh, zhah-DOR lah sah-LAD duh SHEV-ruh SHOH! ohn poo-REH par-tah-ZHAY oon ahn-TRAY"
      },
      {
        speaker: 1,
        fr: "Oui, bonne idée — comme ça on a plus de place pour le plat principal !",
        en: "Yes, good idea — that way we have more room for the main course!",
        ph: "wee, bun ee-DAY — kum sah ohn ah ploo duh PLAS poor luh plah pran-see-PAL"
      },
      {
        speaker: 2,
        fr: "Exactement. Alors, qu'est-ce que tu penses prendre comme plat ?",
        en: "Exactly. So, what do you think you'll have as a main?",
        ph: "eg-zak-tuh-MAHN. ah-LOR, kess-kuh too pahns PRAHN-druh kum PLAH"
      },
      {
        speaker: 1,
        fr: "Je regarde le steak au poivre. Ça a l'air incroyable.",
        en: "I'm looking at the pepper steak. It looks incredible.",
        ph: "zhuh ruh-GARD luh STEK oh PWAH-vruh. sah ah lair an-krwah-YAB-luh"
      },
      {
        speaker: 2,
        fr: "Attends — regarde le prix. Trente-huit euros ! C'est assez cher, non ?",
        en: "Wait — look at the price. Thirty-eight euros! That's pretty expensive, isn't it?",
        ph: "ah-TAHN — ruh-GARD luh PREE. trahnt-WEET uh-ROH! say ah-SAY SHAIR, NOHN"
      },
      {
        speaker: 1,
        fr: "Tu as raison, c'est un peu cher. Mais c'est une occasion spéciale !",
        en: "You're right, it is a bit pricey. But it's a special occasion!",
        ph: "too ah ray-ZOHN, say uhn puh SHAIR. meh say oon oh-kah-ZYOHN spay-SYAL"
      },
      {
        speaker: 2,
        fr: "C'est vrai ! D'accord, profite-toi bien ! Moi, je pense prendre le saumon.",
        en: "That's true! Okay, treat yourself! I think I'll have the salmon.",
        ph: "say VREH! dah-KOR, proh-FEET twah bee-AN! mwah, zhuh pahns PRAHN-druh luh soh-MOHN"
      },
      {
        speaker: 1,
        fr: "Le saumon ! C'est combien ?",
        en: "The salmon! How much is it?",
        ph: "luh soh-MOHN! say kom-bee-AN"
      },
      {
        speaker: 2,
        fr: "Vingt-six euros. Raisonnable, je trouve.",
        en: "Twenty-six euros. Reasonable, I think.",
        ph: "van-SEE uh-ROH. ray-zohn-AB-luh, zhuh TROOV"
      },
      {
        speaker: 1,
        fr: "Oui, c'est bien. Est-ce que ça vient avec des légumes ou des frites ?",
        en: "Yes, that's good. Does it come with vegetables or chips?",
        ph: "wee, say bee-AN. ess-kuh sah vyan ah-VEK day lay-GOOM oo day FREET"
      },
      {
        speaker: 2,
        fr: "Je crois que oui — il y a écrit 'accompagné de légumes de saison'.",
        en: "I think so — it says 'served with seasonal vegetables'.",
        ph: "zhuh kwah kuh WEE — eel ee ah ay-KREE ah-kom-pahn-YAY duh lay-GOOM duh say-ZOHN"
      },
      {
        speaker: 1,
        fr: "Parfait. On est prêt(e)s à commander, je pense.",
        en: "Perfect. I think we're ready to order.",
        ph: "par-FEH. ohn ay PREH ah koh-mahn-DAY, zhuh PAHNS"
      },
      {
        speaker: 2,
        fr: "Oui. Oh — avant de commander, tu penses au dessert ?",
        en: "Yes. Oh — before we order, are you thinking about dessert?",
        ph: "wee. oh — ah-VAHN duh koh-mahn-DAY, too pahns oh deh-SAIR"
      },
      {
        speaker: 1,
        fr: "Peut-être ! Je vais voir comment je me sens après le plat principal.",
        en: "Maybe! I'll see how I feel after the main course.",
        ph: "puh-TET! zhuh vay VWAHR koh-MAHN zhuh muh SAHN ah-PREH luh plah pran-see-PAL"
      },
      {
        speaker: 2,
        fr: "Il y a une crème brûlée et un moelleux au chocolat. Je suis déjà tentée.",
        en: "There's a crème brûlée and a chocolate fondant. I'm already tempted.",
        ph: "eel ee ah oon KREM broo-LAY ay uhn mwel-YUH oh shoh-koh-LAH. zhuh swee day-ZHAH tahn-TAY"
      },
      {
        speaker: 1,
        fr: "Un moelleux au chocolat... oui, d'accord, on verra. Appelle le serveur !",
        en: "A chocolate fondant... yes, okay, we'll see. Call the waiter!",
        ph: "uhn mwel-YUH oh shoh-koh-LAH... wee, dah-KOR, ohn vair-AH. ah-PEL luh sair-VUHR"
      },
      {
        speaker: 2,
        fr: "Excusez-moi ! On est prêt(e)s à commander, s'il vous plaît.",
        en: "Excuse me! We're ready to order, please.",
        ph: "ex-koo-ZAY mwah! ohn ay PREH ah koh-mahn-DAY, seel voo PLEH"
      }
    ],
    vocab: [
      { fr: "le menu",        en: "the menu",           ph: "luh muh-NOO" },
      { fr: "une entrée",     en: "a starter",          ph: "oon ahn-TRAY" },
      { fr: "le plat principal", en: "the main course", ph: "luh plah pran-see-PAL" },
      { fr: "le dessert",     en: "dessert",            ph: "luh deh-SAIR" },
      { fr: "partager",       en: "to share",           ph: "par-tah-ZHAY" },
      { fr: "cher / chère",   en: "expensive",          ph: "SHAIR" },
      { fr: "le prix",        en: "the price",          ph: "luh PREE" },
      { fr: "c'est combien",  en: "how much is it",     ph: "say kom-bee-AN" },
      { fr: "le serveur",     en: "the waiter",         ph: "luh sair-VUHR" },
      { fr: "excusez-moi",    en: "excuse me (formal)", ph: "ex-koo-ZAY MWAH" }
    ]
  },
  {
    id: "feeling-tired",
    icon: "😴",
    title: "Je suis épuisé(e)",
    sub: "I'm exhausted",
    desc: "When you've both had a long week and just need to acknowledge it — together.",
    lines: [
      {
        speaker: 1,
        fr: "Je suis vraiment fatigué(e) ce soir.",
        en: "I'm really tired tonight.",
        ph: "zhuh swee vray-MAHN fah-tee-GAY suh SWAHR"
      },
      {
        speaker: 2,
        fr: "Moi aussi. C'était une longue semaine.",
        en: "Me too. It's been a long week.",
        ph: "mwah OH-see. say-TAY oon LOHNG suh-MEN"
      },
      {
        speaker: 1,
        fr: "J'ai besoin de me reposer. On va au lit tôt ce soir ?",
        en: "I need to rest. Shall we go to bed early tonight?",
        ph: "zhay buh-ZWAN duh muh ruh-poh-ZAY. ohn vah oh LEE TOH suh SWAHR"
      },
      {
        speaker: 2,
        fr: "Oui. Mais d'abord, tu veux une tasse de thé ?",
        en: "Yes. But first, do you want a cup of tea?",
        ph: "wee. meh dah-BOR, too vuh oon TASS duh TAY"
      },
      {
        speaker: 1,
        fr: "Ce serait parfait. Merci, tu es adorable.",
        en: "That would be perfect. Thank you, you're adorable.",
        ph: "suh suh-REH par-FEH. mair-SEE, too ay ah-dor-AHB-luh"
      },
      {
        speaker: 2,
        fr: "Je sais. Allez, viens t'asseoir avec moi.",
        en: "I know. Come on, come sit with me.",
        ph: "zhuh SAY. ah-LAY, vyan tah-SWAHR ah-vek MWAH"
      },
      {
        speaker: 1,
        fr: "Ça va aller. On est ensemble, c'est l'essentiel.",
        en: "It'll be okay. We're together — that's what matters.",
        ph: "sah vah ah-LAY. ohn ay ahn-SAHML, say less-ahn-SYEL"
      }
    ],
    vocab: [
      { fr: "fatigué(e)",     en: "tired",              ph: "fah-tee-GAY" },
      { fr: "épuisé(e)",      en: "exhausted",          ph: "ay-pwee-ZAY" },
      { fr: "une semaine",    en: "a week",             ph: "oon suh-MEN" },
      { fr: "se reposer",     en: "to rest",            ph: "suh ruh-poh-ZAY" },
      { fr: "aller au lit",   en: "to go to bed",       ph: "ah-LAY oh LEE" },
      { fr: "tôt",            en: "early",              ph: "TOH" },
      { fr: "d'abord",        en: "first / firstly",    ph: "dah-BOR" },
      { fr: "une tasse de thé", en: "a cup of tea",     ph: "oon TASS duh TAY" },
      { fr: "adorable",       en: "adorable",           ph: "ah-dor-AHB-luh" },
      { fr: "l'essentiel",    en: "what matters / the essential thing", ph: "less-ahn-SYEL" }
    ]
  }
];
