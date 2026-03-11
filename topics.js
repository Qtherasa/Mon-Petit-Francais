const topics = [
 {
    id: "common",
    icon: "✨",
    title: "Common Phrases",
    sub: "The essentials",
    desc: "The phrases that pop up in almost every conversation — start here if you're not sure where to begin.",
    sections: [
      {
        label: "Everyday essentials",
        phrases: [
          { fr: "Oui.", en: "Yes.", ph: "WEE" },
          { fr: "Non.", en: "No.", ph: "NOHN" },
          { fr: "Peut-être.", en: "Maybe.", ph: "puh-TET-ruh" },
          { fr: "Merci !", en: "Thank you!", ph: "mair-SEE" },
          { fr: "Merci beaucoup !", en: "Thank you very much!", ph: "mair-see boh-KOO" },
          { fr: "De rien.", en: "You're welcome.", ph: "duh ree-AN" },
          { fr: "S'il te plaît.", en: "Please. (casual)", ph: "seel tuh PLEH" },
          { fr: "Pardon / Excuse-moi.", en: "Sorry / Excuse me.", ph: "par-DOHN / ex-KOOZ mwah" },
          { fr: "Ce n'est pas grave.", en: "It's no big deal / Don't worry.", ph: "suh neh pah GRAHV" },
        ]
      },
      {
        label: "When you're learning",
        phrases: [
          { fr: "Je ne comprends pas.", en: "I don't understand.", ph: "zhuh nuh kom-PRAHN pah" },
          { fr: "Tu peux répéter ?", en: "Can you repeat that?", ph: "too puh ray-pay-TAY" },
          { fr: "Tu peux parler plus lentement ?", en: "Can you speak more slowly?", ph: "too puh par-LAY ploo lahnt-MAHN" },
          { fr: "Comment dit-on... en français ?", en: "How do you say... in French?", ph: "koh-MAHN dee-tohn... ahn frahn-SAY" },
          { fr: "J'apprends le français.", en: "I'm learning French.", ph: "zhah-PRAHN luh frahn-SAY" },
          { fr: "Mon français n'est pas parfait !", en: "My French isn't perfect!", ph: "mohn frahn-SAY neh pah par-FEH", note: "But it's getting better every day 💪" },
        ]
      }
    ]
  },
  {
    id: "greetings",
    icon: "👋",
    title: "Greetings",
    sub: "Say hello & goodbye",
    desc: "The building blocks of any conversation — how to greet someone warmly and leave gracefully.",
    sections: [
      {
        label: "Saying hello",
        phrases: [
          { fr: "Bonjour !", en: "Hello! / Good morning!", ph: "bon-ZHOOR" },
          { fr: "Bonsoir !", en: "Good evening!", ph: "bon-SWAHR" },
          { fr: "Salut !", en: "Hi! (casual)", ph: "sah-LUE", note: "Use with friends, not strangers" },
          { fr: "Coucou !", en: "Hey there! (very casual)", ph: "koo-KOO", note: "Sweet & playful — perfect between partners 💛" },
          { fr: "Ça va ?", en: "How are you? / You okay?", ph: "sah VAH" },
          { fr: "Ça va bien, merci !", en: "I'm doing well, thanks!", ph: "sah vah bee-AN, mair-SEE" },
          { fr: "Et toi ?", en: "And you?", ph: "ay TWAH" },
        ]
      },
      {
        label: "Saying goodbye",
        phrases: [
          { fr: "Au revoir !", en: "Goodbye!", ph: "oh ruh-VWAHR" },
          { fr: "À bientôt !", en: "See you soon!", ph: "ah bee-an-TOH" },
          { fr: "À tout à l'heure !", en: "See you later (today)!", ph: "ah toot ah LUHR" },
          { fr: "À demain !", en: "See you tomorrow!", ph: "ah duh-MAN" },
          { fr: "Bonne nuit !", en: "Good night!", ph: "bun NWEE" },
          { fr: "Bisous !", en: "Kisses! (very affectionate)", ph: "bee-ZOO", note: "Great for texts and goodbyes with loved ones 💋" },
        ]
      }
    ]
  },
  {
    id: "day",
    icon: "☀️",
    title: "Talk About Your Day",
    sub: "Share & listen",
    desc: "Simple phrases to share how your day went and ask about theirs.",
    sections: [
      {
        label: "Sharing your day",
        phrases: [
          { fr: "J'ai eu une bonne journée.", en: "I had a good day.", ph: "zhay oo oon bun zhoor-NAY" },
          { fr: "J'ai eu une journée difficile.", en: "I had a hard day.", ph: "zhay oo oon zhoor-nay dee-fee-SEEL" },
          { fr: "Je suis fatigué(e).", en: "I'm tired.", ph: "zhuh swee fah-tee-GAY", note: "Add an 'e' if you're feminine" },
          { fr: "J'ai beaucoup travaillé aujourd'hui.", en: "I worked a lot today.", ph: "zhay boh-KOO trav-eye-YAY oh-zhoor-DWEE" },
          { fr: "C'était bien !", en: "It was good!", ph: "say-TAY bee-AN" },
          { fr: "C'était nul.", en: "It was bad / rubbish.", ph: "say-TAY nool" },
          { fr: "C'était stressant.", en: "It was stressful.", ph: "say-TAY stres-AHN" },
          { fr: "Je suis content(e) d'être à la maison.", en: "I'm glad to be home.", ph: "zhuh swee kon-TAHN deh-truh ah lah may-ZOHN" },
        ]
      },
      {
        label: "Asking about their day",
        phrases: [
          { fr: "Comment s'est passée ta journée ?", en: "How was your day?", ph: "koh-MAHN say pah-SAY tah zhoor-NAY" },
          { fr: "Tu as passé une bonne journée ?", en: "Did you have a good day?", ph: "too ah pah-SAY oon bun zhoor-NAY" },
          { fr: "Qu'est-ce que tu as fait aujourd'hui ?", en: "What did you do today?", ph: "kess-kuh too ah fay oh-zhoor-DWEE" },
          { fr: "Vraiment ? Raconte-moi.", en: "Really? Tell me more.", ph: "vray-MAHN? rah-KOHNT mwah", note: "Shows you're genuinely interested 🙂" },
          { fr: "C'est bien !", en: "That's great!", ph: "say bee-AN" },
          { fr: "Oh non, je suis désolé(e).", en: "Oh no, I'm sorry.", ph: "oh nohn, zhuh swee day-zoh-LAY" },
        ]
      }
    ]
  },
  {
    id: "food",
    icon: "🥐",
    title: "Discuss Food",
    sub: "Eat, enjoy, explore",
    desc: "France is all about food. Learn to talk about what you love, want, and taste.",
    sections: [
      {
        label: "Expressing opinions",
        phrases: [
          { fr: "C'est délicieux !", en: "It's delicious!", ph: "say day-lee-SYUH" },
          { fr: "C'est très bon !", en: "It's very good!", ph: "say treh BON" },
          { fr: "J'adore ça.", en: "I love this.", ph: "zhah-DOR sah" },
          { fr: "C'est pas terrible.", en: "It's not great.", ph: "say pah teh-REEBL" },
          { fr: "J'ai faim.", en: "I'm hungry.", ph: "zhay FAN" },
          { fr: "J'ai soif.", en: "I'm thirsty.", ph: "zhay SWAHF" },
          { fr: "Je suis rassasié(e).", en: "I'm full.", ph: "zhuh swee rah-sah-ZYAY" },
        ]
      },
      {
        label: "At the table",
        phrases: [
          { fr: "Tu veux manger quoi ce soir ?", en: "What do you want to eat tonight?", ph: "too vuh mahn-ZHAY kwah suh swahr" },
          { fr: "On commande une pizza ?", en: "Shall we order a pizza?", ph: "ohn koh-MAHND oon PEET-zah" },
          { fr: "Je vais cuisiner.", en: "I'm going to cook.", ph: "zhuh vay kwee-zee-NAY" },
          { fr: "C'est prêt !", en: "It's ready!", ph: "say PREH" },
          { fr: "Bon appétit !", en: "Enjoy your meal!", ph: "bon ah-pay-TEE" },
          { fr: "Tu veux encore ?", en: "Do you want more?", ph: "too vuh ahn-KOR" },
          { fr: "Oui, s'il te plaît !", en: "Yes, please!", ph: "wee, seel tuh PLEH", note: "'s'il te plaît' = please (casual/informal)" },
        ]
      }
    ]
  },
  {
    id: "flirt",
    icon: "💕",
    title: "Flirt",
    sub: "Sweet nothings",
    desc: "French is the language of love for a reason. These phrases will make your partner smile.",
    sections: [
      {
        label: "Compliments",
        phrases: [
          { fr: "Tu es belle / beau.", en: "You are beautiful / handsome.", ph: "too ay BEL / BOH" },
          { fr: "Tu es magnifique.", en: "You are gorgeous.", ph: "too ay mah-nyee-FEEK" },
          { fr: "Tu as de beaux yeux.", en: "You have beautiful eyes.", ph: "too ah duh boh ZYUH" },
          { fr: "Tu me rends heureux / heureuse.", en: "You make me happy.", ph: "too muh rahn uh-RUH / uh-RUHZ" },
          { fr: "Tu sens bon.", en: "You smell nice.", ph: "too sahn BON" },
          { fr: "Tu as l'air d'une star.", en: "You look like a star.", ph: "too ah lair doon STAR", note: "A fun, playful compliment 😄" },
        ]
      },
      {
        label: "Affection",
        phrases: [
          { fr: "Je t'aime.", en: "I love you.", ph: "zhuh TEM", note: "The big one — means deep love" },
          { fr: "Je t'adore.", en: "I adore you.", ph: "zhuh tah-DOR", note: "Slightly lighter than 'je t'aime'" },
          { fr: "Tu me manques.", en: "I miss you.", ph: "too muh MAHNK", note: "Literally: 'you are missing from me' — très romantique" },
          { fr: "Je pense à toi.", en: "I'm thinking of you.", ph: "zhuh pahns ah TWAH" },
          { fr: "Tu es mon chéri / ma chérie.", en: "You are my darling.", ph: "too ay mon shay-REE / mah shay-REE", note: "Chéri (m) / Chérie (f)" },
          { fr: "Fais-moi un câlin.", en: "Give me a hug.", ph: "feh mwah un kah-LAN" },
          { fr: "Je suis fou / folle de toi.", en: "I'm crazy about you.", ph: "zhuh swee FOO / FOL duh twah" },
        ]
      }
    ]
  },
  {
    id: "home",
    icon: "🏠",
    title: "Around the House",
    sub: "Daily life at home",
    desc: "Practical phrases for everyday moments at home — chores, plans, and cosy evenings.",
    sections: [
      {
        label: "Daily tasks",
        phrases: [
          { fr: "Je fais la vaisselle.", en: "I'm doing the dishes.", ph: "zhuh feh lah veh-SEL" },
          { fr: "Tu peux faire le ménage ?", en: "Can you do the cleaning?", ph: "too puh fair luh may-NAZH" },
          { fr: "J'ai fait la lessive.", en: "I did the laundry.", ph: "zhay feh lah leh-SEEV" },
          { fr: "C'est le bazar ici !", en: "It's a mess in here!", ph: "say luh bah-ZAR ee-SEE" },
          { fr: "Je range la maison.", en: "I'm tidying the house.", ph: "zhuh rahnzh lah may-ZOHN" },
          { fr: "On fait les courses ?", en: "Shall we do the shopping?", ph: "ohn feh lay KOORS" },
        ]
      },
      {
        label: "Relaxing",
        phrases: [
          { fr: "Je regarde la télé.", en: "I'm watching TV.", ph: "zhuh ruh-GARD lah tay-LAY" },
          { fr: "On regarde un film ce soir ?", en: "Shall we watch a film tonight?", ph: "ohn ruh-GARD un FEELM suh swahr" },
          { fr: "Je lis un livre.", en: "I'm reading a book.", ph: "zhuh lee un LEEVR" },
          { fr: "J'ai besoin de me reposer.", en: "I need to rest.", ph: "zhay buh-ZWAN duh muh ruh-poh-ZAY" },
          { fr: "Viens t'asseoir avec moi.", en: "Come sit with me.", ph: "vyan tah-SWAHR ah-vek MWAH" },
          { fr: "On va au lit ?", en: "Shall we go to bed?", ph: "ohn vah oh LEE" },
        ]
      }
    ]
  },
  {
    id: "feelings",
    icon: "💬",
    title: "Express Feelings",
    sub: "Share what's inside",
    desc: "Words for emotions — being able to say how you feel is one of the most important things.",
    sections: [
      {
        label: "Positive feelings",
        phrases: [
          { fr: "Je suis heureux / heureuse.", en: "I am happy.", ph: "zhuh swee uh-RUH / uh-RUHZ", note: "Heureux (m) / Heureuse (f)" },
          { fr: "Je suis excité(e) !", en: "I'm excited!", ph: "zhuh swee ex-see-TAY" },
          { fr: "Je me sens bien.", en: "I feel good.", ph: "zhuh muh sahn bee-AN" },
          { fr: "Je suis reconnaissant(e).", en: "I am grateful.", ph: "zhuh swee ruh-koh-neh-SAHN" },
          { fr: "Ça me fait sourire.", en: "It makes me smile.", ph: "sah muh feh soo-REER" },
        ]
      },
      {
        label: "Harder feelings",
        phrases: [
          { fr: "Je suis triste.", en: "I am sad.", ph: "zhuh swee TREEST" },
          { fr: "Je me sens seul(e).", en: "I feel lonely.", ph: "zhuh muh sahn SUL" },
          { fr: "Je suis stressé(e).", en: "I'm stressed.", ph: "zhuh swee streh-SAY" },
          { fr: "Je suis inquiet / inquiète.", en: "I'm worried.", ph: "zhuh swee an-KYAY / an-KYET" },
          { fr: "J'ai besoin de toi.", en: "I need you.", ph: "zhay buh-ZWAN duh TWAH" },
          { fr: "Je ne sais pas quoi dire.", en: "I don't know what to say.", ph: "zhuh nuh say pah kwah DEER" },
          { fr: "Ça va aller.", en: "It'll be okay.", ph: "sah vah ah-LAY", note: "A gentle, reassuring phrase 🤍" },
        ]
      }
    ]
  },
  {
    id: "plans",
    icon: "📅",
    title: "Make Plans",
    sub: "What shall we do?",
    desc: "Phrases for suggesting, agreeing, and making plans together.",
    sections: [
      {
        label: "Suggestions",
        phrases: [
          { fr: "On fait quoi aujourd'hui ?", en: "What shall we do today?", ph: "ohn feh kwah oh-zhoor-DWEE" },
          { fr: "On sort ce soir ?", en: "Shall we go out tonight?", ph: "ohn sor suh SWAHR" },
          { fr: "Tu veux aller au restaurant ?", en: "Do you want to go to a restaurant?", ph: "too vuh ah-LAY oh res-toh-RAHN" },
          { fr: "On va se promener ?", en: "Shall we go for a walk?", ph: "ohn vah suh prohm-NAY" },
          { fr: "Bonne idée !", en: "Good idea!", ph: "bun ee-DAY" },
          { fr: "Je préfère rester à la maison.", en: "I prefer to stay home.", ph: "zhuh pray-FAIR res-TAY ah lah may-ZOHN" },
          { fr: "Allons à la bibliothèque. N'oublie pas ton livre !", en: "Let's go to the library. Don't forget your book!", ph: "ah-LOHN ah lah beeb-lee-oh-TEK. noo-BLEE pah tohn LEEVR" },
        ]
      },
      {
        label: "Timing",
        phrases: [
          { fr: "Maintenant ?", en: "Now?", ph: "mant-NAHN" },
          { fr: "Plus tard.", en: "Later.", ph: "ploo TAR" },
          { fr: "Ce soir.", en: "This evening.", ph: "suh SWAHR" },
          { fr: "Ce week-end.", en: "This weekend.", ph: "suh wee-KEND" },
          { fr: "Quand tu veux.", en: "Whenever you like.", ph: "kahn too VUH" },
          { fr: "Je suis prêt(e) !", en: "I'm ready!", ph: "zhuh swee PREH" },
        ]
      }
    ]
  },
  {
    id: "weather",
    icon: "🌤️",
    title: "Talk About Weather",
    sub: "A classic opener",
    desc: "A gentle topic to practice small talk — French people love discussing the weather too!",
    sections: [
      {
        label: "Describing the weather",
        phrases: [
          { fr: "Il fait beau aujourd'hui !", en: "The weather is nice today!", ph: "eel feh BOH oh-zhoor-DWEE" },
          { fr: "Il fait chaud.", en: "It's hot.", ph: "eel feh SHOH" },
          { fr: "Il fait froid.", en: "It's cold.", ph: "eel feh FWAH" },
          { fr: "Il pleut.", en: "It's raining.", ph: "eel PLUH" },
          { fr: "Il neige !", en: "It's snowing!", ph: "eel NEZH" },
          { fr: "Il y a du soleil.", en: "It's sunny.", ph: "eel ee ah doo soh-LAY" },
          { fr: "Il y a des nuages.", en: "It's cloudy.", ph: "eel ee ah day noo-AZH" },
          { fr: "C'est venteux.", en: "It's windy.", ph: "say vahn-TUH" },
        ]
      },
      {
        label: "Reactions",
        phrases: [
          { fr: "Quel beau temps !", en: "What lovely weather!", ph: "kel boh TAHN" },
          { fr: "Quel temps horrible !", en: "What horrible weather!", ph: "kel tahn oh-REEBL" },
          { fr: "J'adore la pluie.", en: "I love the rain.", ph: "zhah-DOR lah PLWEE" },
          { fr: "Je déteste le froid.", en: "I hate the cold.", ph: "zhuh day-TEST luh FWAH" },
          { fr: "Prends ton manteau !", en: "Take your coat!", ph: "prahn tohn mahn-TOH" },
        ]
      }
    ]
  },
  {
    id: "compliments",
    icon: "🌸",
    title: "Give Compliments",
    sub: "Make someone's day",
    desc: "Sprinkle kindness freely — here's how to compliment and encourage.",
    sections: [
      {
        label: "Appearance & style",
        phrases: [
          { fr: "J'aime ta tenue !", en: "I love your outfit!", ph: "zhem tah tuh-NOO" },
          { fr: "Cette couleur te va très bien.", en: "That colour suits you very well.", ph: "set koo-LUHR tuh vah treh bee-AN" },
          { fr: "Tu as une belle coiffure.", en: "You have a nice hairstyle.", ph: "too ah oon bel kwah-FYOOR" },
          { fr: "Tu es élégant(e).", en: "You look elegant.", ph: "too ay ay-lay-GAHN" },
        ]
      },
      {
        label: "Character & skills",
        phrases: [
          { fr: "Tu es très intelligent(e).", en: "You are very intelligent.", ph: "too ay treh an-tel-ee-ZHAHN" },
          { fr: "Tu es si drôle !", en: "You are so funny!", ph: "too ay see DROHL" },
          { fr: "Tu es courageux / courageuse.", en: "You are brave.", ph: "too ay koo-rah-ZHUH / koo-rah-ZHOOZ" },
          { fr: "Tu fais ça très bien !", en: "You do that very well!", ph: "too feh sah treh bee-AN" },
          { fr: "Je suis fier / fière de toi.", en: "I'm proud of you.", ph: "zhuh swee fee-YAY / fee-YAIR duh twah", note: "Fier (m) / Fière (f) — a beautiful thing to say 🤍" },
          { fr: "Tu progresses vraiment bien !", en: "You're really making progress!", ph: "too proh-GRESS vray-MAHN bee-AN", note: "This one's for you 💪🇫🇷" },
        ]
      }
    ]
  },
   {
    id: "kids-pets",
    icon: "🐾",
    title: "Kids & Pets",
    sub: "Family chaos & cuddles",
    desc: "Essential phrases for wrangling children, cats, and guinea pigs — the full household circus.",
    sections: [
      {
        label: "Talking about the kids",
        phrases: [
          { fr: "Les enfants jouent dehors.", en: "The kids are playing outside.", ph: "lay zan-FAHN zhoo duh-OR" },
          { fr: "C'est l'heure de faire les devoirs.", en: "It's time to do homework.", ph: "say luhr duh fair lay duh-VWAHR" },
          { fr: "Tu as mangé ?", en: "Did you eat?", ph: "too ah mahn-ZHAY" },
          { fr: "Va te coucher !", en: "Go to bed!", ph: "vah tuh koo-SHAY" },
          { fr: "Je suis fier / fière de toi.", en: "I'm proud of you.", ph: "zhuh swee fee-YAY / fee-YAIR duh twah" },
          { fr: "Arrête de te disputer avec ta sœur / ton frère !", en: "Stop arguing with your sister / brother!", ph: "ah-RET duh tuh dees-poo-TAY ah-vek tah SUHR / tohn frair" },
          { fr: "C'est bien, mon grand / ma grande !", en: "Well done, big kid!", ph: "say bee-AN, mohn grahn / mah grahnd", note: "A warm, encouraging phrase for older kids 🌟" },
          { fr: "Ils grandissent trop vite.", en: "They grow up too fast.", ph: "eel grahn-DEES troh VEET" },
        ]
      },
      {
        label: "Talking about the cats",
        phrases: [
          { fr: "Le chat est sur le canapé encore.", en: "The cat is on the sofa again.", ph: "luh shah ay soor luh kah-nah-PAY ahn-KOR" },
          { fr: "Tu as nourri les chats ?", en: "Did you feed the cats?", ph: "too ah noo-REE lay SHAH" },
          { fr: "Elle ronronne.", en: "She's purring.", ph: "el rohn-RON" },
          { fr: "Elle m'a griffé(e) !", en: "She scratched me!", ph: "el mah gree-FAY" },
          { fr: "Viens ici, mon minou.", en: "Come here, little kitty.", ph: "vyan ee-SEE, mohn mee-NOO", note: "Minou = affectionate word for a cat 🐱" },
          { fr: "Elle dort toute la journée.", en: "She sleeps all day.", ph: "el dor toot lah zhoor-NAY" },
          { fr: "Ce chat est tellement gros ! Il adore manger.", en: "This cat is so fat! He loves to eat.", ph: "suh shah ay tel-MAHN groh! eel ah-DOR mahn-ZHAY" },
          { fr: "Elle est une jolie petite dame.", en: "She is a pretty little lady.", ph: "el ay oon zhoh-LEE puh-TEET DAM" },
          { fr: "Ugh, tu es tellement puant(e) !", en: "Ugh, you are so stinky!", ph: "ugh, too ay tel-MAHN poo-AHN / poo-AHNT", note: "Puant (m) for the boy, puante (f) for the girls — equally insulting in both genders 😄" },
        ]
      },
      {
        label: "Talking about the guinea pigs",
        phrases: [
          { fr: "Les cochons d'Inde font du bruit.", en: "The guinea pigs are making noise.", ph: "lay koh-shohn DAND fohn doo BRWEE", note: "The word cochon d'Inde literally means 'pig of India'" },
          { fr: "Tu as nettoyé leur cage ?", en: "Did you clean their cage?", ph: "too ah net-wah-YAY luhr KAZH" },
          { fr: "Elle couine !", en: "She's squeaking!", ph: "el KWEEN" },
          { fr: "Elles ont faim, je crois.", en: "I think they're hungry.", ph: "el zohn FAN, zhuh kwah" },
          { fr: "Va chercher des légumes pour les cochons d'Inde.", en: "Go get some veggies for the guinea pigs.", ph: "vah shair-SHAY day lay-GOOM poor lay koh-shohn DAND" },
          { fr: "C'est trop mignon !", en: "They're so cute!", ph: "say troh mee-NYOHN" },         
        ]
      }
    ]
  },
  {
    id: "numbers",
    icon: "🔢",
    title: "Numbers & Counting",
    sub: "Count like a local",
    desc: "Numbers are everywhere — prices, ages, time, scores. Start here and build fast.",
    sections: [
      {
        label: "1 to 20",
        phrases: [
          { fr: "Un, deux, trois", en: "One, two, three", ph: "uhn, duh, twah" },
          { fr: "Quatre, cinq, six", en: "Four, five, six", ph: "KAT-ruh, sank, sees" },
          { fr: "Sept, huit, neuf, dix", en: "Seven, eight, nine, ten", ph: "set, weet, nuhf, dees" },
          { fr: "Onze, douze, treize", en: "Eleven, twelve, thirteen", ph: "ohnz, dooz, trez" },
          { fr: "Quatorze, quinze, seize", en: "Fourteen, fifteen, sixteen", ph: "kah-TORZ, kanz, sez" },
          { fr: "Dix-sept, dix-huit, dix-neuf, vingt", en: "Seventeen, eighteen, nineteen, twenty", ph: "dee-SET, deez-WEET, deez-NUHF, van", note: "Vingt (20) is silent at the end — sounds like 'van'" },
        ]
      },
      {
        label: "Bigger numbers",
        phrases: [
          { fr: "Trente, quarante, cinquante", en: "Thirty, forty, fifty", ph: "trahnt, kah-RAHNT, san-KAHNT" },
          { fr: "Soixante, soixante-dix", en: "Sixty, seventy", ph: "swah-SAHNT, swah-sahnt-DEES", note: "Soixante-dix literally means 'sixty-ten' — French numbers get creative!" },
          { fr: "Quatre-vingts, quatre-vingt-dix", en: "Eighty, ninety", ph: "kat-ruh-VAN, kat-ruh-van-DEES", note: "Quatre-vingts = 'four twenties'. Oui, vraiment." },
          { fr: "Cent, mille", en: "One hundred, one thousand", ph: "sahn, meel" },
          { fr: "Dix mille", en: "Ten thousand", ph: "dee MEEL" },
          { fr: "Cent mille", en: "One hundred thousand", ph: "sahn MEEL" },
          { fr: "Un million", en: "One million", ph: "uhn meel-YOHN" },
          { fr: "Deux cent cinquante-trois", en: "Two hundred and fifty-three (253)", ph: "duh sahn san-KAHNT twah", note: "Hundreds + tens + units — just stack them in order" },
          { fr: "Sept mille cent vingt-neuf", en: "Seven thousand, one hundred and twenty-nine (7,129)", ph: "set meel sahn van-NUHF" },
          { fr: "Vingt-trois mille quatre cent douze", en: "Twenty-three thousand, four hundred and twelve (23,412)", ph: "van-twah meel kat-ruh sahn DOOZ" },
        ]
      },
      
      {
        label: "Using numbers in conversation",
        phrases: [
          { fr: "J'ai deux enfants.", en: "I have two children.", ph: "zhay duh zan-FAHN" },
          { fr: "Nous avons trois chats.", en: "We have three cats.", ph: "noo zah-VOHN twah SHAH" },
          { fr: "Il a quel âge ?", en: "How old is he?", ph: "eel ah kel AZH" },
          { fr: "Elle a sept ans.", en: "She is seven years old.", ph: "el ah set AHN" },
          { fr: "C'est combien ?", en: "How much does it cost?", ph: "say kom-bee-AN" },
          { fr: "Le premier / la première", en: "The first (m/f)", ph: "luh pruh-MYAY / lah pruh-MYAIR" },
          { fr: "Ça fait quarante-sept dollars et quatre-vingt-dix-neuf cents.", en: "That comes to forty-seven dollars and ninety-nine cents.", ph: "sah feh kah-RAHNT set doh-LAR ay kat-ruh-van-deez-NUHF sahn" },
          { fr: "C'est douze euros et cinquante centimes.", en: "That's twelve euros and fifty cents.", ph: "say dooz UH-roh ay san-KAHNT sahn-TEEM", note: "In French, euro cents are called 'centimes' — same word as the old French franc coins 🪙" },
        ]
      }
    ]
  },
  {
    id: "wow",
    icon: "⚔️",
    title: "World of Warcraft",
    sub: "Pour la Horde (ou l'Alliance)",
    desc: "Talk about Azeroth in French — quests, raiding, and the eternal faction debate.",
    sections: [
      {
        label: "Getting into the game",
        phrases: [
          { fr: "Tu joues à World of Warcraft ?", en: "Do you play World of Warcraft?", ph: "too zhoo ah world of warcraft" },
          { fr: "Je joue depuis des années.", en: "I've been playing for years.", ph: "zhuh zhoo duh-PWEE day zah-NAY" },
          { fr: "Quel est ton personnage principal ?", en: "What's your main character?", ph: "kel ay tohn pair-soh-NAZH pran-see-PAL" },
          { fr: "Il joue un guerrier / une mage / un paladin.", en: "He plays a warrior / a mage / a paladin.", ph: "eel zhoo uhn geh-RYAY / oon MAZH / uhn pah-lah-DAN" },
          { fr: "Je joue tank.", en: "I play tank.", ph: "zhuh zhoo TAHNK", note: "'Tank' is used directly in French gaming — no translation needed 🛡️" },
          { fr: "Je joue sur un serveur Hardcore Classic.", en: "I play on a hardcore classic server.", ph: "zhuh zhoo soor uhn sair-VUHR hard-KOR kla-SEEK", note: "Serveur (server) is the one French word here — the rest is pure gamer universal 🎮" },
          { fr: "Tu es Horde ou Alliance ?", en: "Are you Horde or Alliance?", ph: "too ay ORD oo ah-lee-AHNS", note: "The most important question in Azeroth ⚔️" },
          { fr: "Pour la Horde !", en: "For the Horde!", ph: "poor lah ORD" },
          { fr: "Pour l'Alliance !", en: "For the Alliance!", ph: "poor lah-lee-AHNS" },
        ]
      },
      {
        label: "Questing & gameplay",
        phrases: [
          { fr: "J'ai une nouvelle quête.", en: "I have a new quest.", ph: "zhay oon noo-VEL KET" },
          { fr: "On fait un donjon ?", en: "Shall we do a dungeon?", ph: "ohn feh uhn don-ZHOHN" },
          { fr: "Tu veux faire un raid ce soir ?", en: "Do you want to do a raid tonight?", ph: "too vuh fair uhn RAID suh swahr", note: "French gaming slang borrows heavily from English — words like nerf, loot, patch, raid, and boss are used directly, so those will feel very familiar!"},
          { fr: "J'ai besoin de meilleur équipement.", en: "I need better gear.", ph: "zhay buh-ZWAN duh may-YUHR ay-keep-MAHN" },
          { fr: "Je suis mort(e) encore.", en: "I died again.", ph: "zhuh swee MOR / MORT ahn-KOR" },
          { fr: "C'est un boss difficile.", en: "It's a hard boss.", ph: "say uhn bos dee-fee-SEEL" },
          { fr: "On recommence ?", en: "Shall we try again?", ph: "ohn ruh-koh-MAHNS" },
        ]
      },
      {
        label: "Talking about the game together",
        phrases: [
          { fr: "Tu as regardé le dernier patch ?", en: "Did you see the latest patch?", ph: "too ah ruh-gar-DAY luh dair-NYAY PATCH" },
          { fr: "Ils ont nerfé ma classe.", en: "They nerfed my class.", ph: "eel zohn nair-FAY mah KLAS", note: "'Nerfed' is used directly in French gaming slang 🎮" },
          { fr: "J'ai enfin eu le loot que je voulais.", en: "I finally got the loot I wanted.", ph: "zhay ahn-FAN oo luh LOOT kuh zhuh voo-LAY" },
          { fr: "La prochaine extension a l'air incroyable.", en: "The next expansion looks incredible.", ph: "lah proh-SHEN ex-tahn-SYOHN ah lair an-krwah-YAHBL" },
          { fr: "On joue ensemble ce week-end ?", en: "Shall we play together this weekend?", ph: "ohn zhoo ahn-SAHML suh wee-KEND", note: "The best sentence in any language 🎮💕" },
        ]
      }
    ]
  },
  {
    id: "chores",
    icon: "🧹",
    title: "Household Chores",
    sub: "Keep the house running",
    desc: "The phrases you need for the everyday tasks that keep the household going.",
    sections: [
      {
        label: "Dishes",
        phrases: [
          { fr: "Je fais la vaisselle.", en: "I'm doing the dishes.", ph: "zhuh feh lah veh-SEL" },
          { fr: "Tu peux faire la vaisselle ?", en: "Can you do the dishes?", ph: "too puh fair lah veh-SEL" },
          { fr: "Je lave les assiettes à la main.", en: "I'm washing the plates by hand.", ph: "zhuh lahv lay ah-SYET ah lah MAN" },
          { fr: "Tu peux mettre ça dans le lave-vaisselle ?", en: "Can you put that in the dishwasher?", ph: "too puh met-ruh sah dahn luh lahv-veh-SEL" },
          { fr: "Le lave-vaisselle est plein.", en: "The dishwasher is full.", ph: "luh lahv-veh-SEL ay PLAN" },
          { fr: "Le lave-vaisselle est fini.", en: "The dishwasher is done.", ph: "luh lahv-veh-SEL ay fee-NEE" },
        ]
      },
      {
        label: "Laundry",
        phrases: [
          { fr: "Je fais la lessive.", en: "I'm doing the laundry.", ph: "zhuh feh lah leh-SEEV" },
          { fr: "La machine est en marche.", en: "The washing machine is running.", ph: "lah mah-SHEEN ay ahn MARSH" },
          { fr: "Le linge est propre.", en: "The laundry is clean.", ph: "luh lanzh ay PROPR" },
          { fr: "Tu peux plier le linge ?", en: "Can you fold the laundry?", ph: "too puh plee-YAY luh LANZH" },
          { fr: "N'oublie pas de mettre le linge à sécher.", en: "Don't forget to put the laundry out to dry.", ph: "noo-BLEE pah duh met-ruh luh lanzh ah say-SHAY" },
        ]
      },
      {
        label: "Sweeping & tidying",
        phrases: [
          { fr: "Je balaye le sol.", en: "I'm sweeping the floor.", ph: "zhuh bah-LAY luh SOL" },
          { fr: "Est-ce que tu peux balayer ?", en: "Can you sweep?", ph: "ess kuh too puh bah-lay-YAY" },
          { fr: "C'est le bazar ici !", en: "It's a mess in here!", ph: "say luh bah-ZAR ee-SEE" },
          { fr: "Je range le salon.", en: "I'm tidying the living room.", ph: "zhuh rahnzh luh sah-LOHN" },
          { fr: "Tu peux ranger tes affaires ?", en: "Can you tidy up your things?", ph: "too puh rahn-ZHAY tay ah-FAIR" },
          { fr: "La maison est propre maintenant !", en: "The house is clean now!", ph: "lah may-ZOHN ay PROPR mant-NAHN" },
        ]
      },
      {
        label: "Groceries",
        phrases: [
          { fr: "On doit faire les courses.", en: "We need to do the groceries.", ph: "ohn dwah fair lay KOORS" },
          { fr: "Tu peux faire une liste ?", en: "Can you make a list?", ph: "too puh fair oon LEEST" },
          { fr: "On n'a plus de lait.", en: "We're out of milk.", ph: "ohn nah ploo duh LEH" },
          { fr: "On n'a plus de pain.", en: "We're out of bread.", ph: "ohn nah ploo duh PAN" },
          { fr: "Je vais au supermarché.", en: "I'm going to the supermarket.", ph: "zhuh vay oh soo-pair-mar-SHAY" },
          { fr: "Tu as besoin de quelque chose ?", en: "Do you need anything?", ph: "too ah buh-ZWAN duh kel-kuh SHOHZ" },
          { fr: "J'ai tout acheté !", en: "I bought everything!", ph: "zhay too ash-TAY" },
        ]
      }
    ]
  },
 {
  id: "time",
  icon: "🕰️",
  title: "Time & Dates",
  sub: "Days, months & more",
  desc: "Tell the time, name the day, talk about the seasons — the building blocks for making plans and sharing your life.",
  sections: [
    {
      label: "Time of day",
      phrases: [
        { fr: "Quelle heure est-il ?", en: "What time is it?", ph: "kel uhr ay-TEEL" },
        { fr: "Il est huit heures.", en: "It's eight o'clock.", ph: "eel ay weet UHR" },
        { fr: "Il est midi.", en: "It's noon.", ph: "eel ay mee-DEE" },
        { fr: "Il est minuit.", en: "It's midnight.", ph: "eel ay mee-NWEE" },
        { fr: "Il est trois heures et demie.", en: "It's half past three.", ph: "eel ay twah zuhr ay duh-MEE" },
        { fr: "Il est six heures et quart.", en: "It's quarter past six.", ph: "eel ay see zuhr ay KAR" },
        { fr: "Il est dix heures moins le quart.", en: "It's quarter to ten.", ph: "eel ay dee zuhr mwan luh KAR" },
        { fr: "Le matin / L'après-midi / Le soir", en: "Morning / Afternoon / Evening", ph: "luh mah-TAN / lah-preh-mee-DEE / luh SWAHR" },
        { fr: "Tôt le matin.", en: "Early in the morning.", ph: "toh luh mah-TAN" },
        { fr: "Tard le soir.", en: "Late at night.", ph: "tar luh SWAHR" },
      ]
    },
    {
      label: "Days of the week",
      phrases: [
        { fr: "lundi", en: "Monday", ph: "luhn-DEE" },
        { fr: "mardi", en: "Tuesday", ph: "mar-DEE" },
        { fr: "mercredi", en: "Wednesday", ph: "mair-kruh-DEE" },
        { fr: "jeudi", en: "Thursday", ph: "zhuh-DEE" },
        { fr: "vendredi", en: "Friday", ph: "vahn-druh-DEE" },
        { fr: "samedi", en: "Saturday", ph: "sahm-DEE" },
        { fr: "dimanche", en: "Sunday", ph: "dee-MAHNSH", note: "Days of the week are not capitalised in French 🇫🇷" },
        { fr: "Aujourd'hui, c'est lundi.", en: "Today is Monday.", ph: "oh-zhoor-DWEE, say luhn-DEE" },
        { fr: "On est quel jour ?", en: "What day is it?", ph: "ohn ay kel ZHOOR" },
        { fr: "le week-end", en: "the weekend", ph: "luh wee-KEND" },
        { fr: "en semaine", en: "on a weekday", ph: "ahn suh-MEN" },
      ]
    },
    {
      label: "Months of the year",
      phrases: [
        { fr: "janvier, février, mars", en: "January, February, March", ph: "zhahn-VYAY, fay-VRYAY, MARS" },
        { fr: "avril, mai, juin", en: "April, May, June", ph: "ah-VREEL, MAY, ZHWAN" },
        { fr: "juillet, août, septembre", en: "July, August, September", ph: "zhwee-YEH, OOT, sep-TAHMBR" },
        { fr: "octobre, novembre, décembre", en: "October, November, December", ph: "ok-TOBR, noh-VAHMBR, day-SAHMBR", note: "Months are also lowercase in French — no capital letters needed 📅" },
        { fr: "On est en novembre.", en: "It's November.", ph: "ohn ay ahn noh-VAHMBR" },
        { fr: "Mon anniversaire est en juillet.", en: "My birthday is in July.", ph: "mohn ah-nee-vair-SAIR ay ahn zhwee-YEH" },
      ]
    },
    {
      label: "Seasons",
      phrases: [
        { fr: "le printemps", en: "spring", ph: "luh pran-TAHN" },
        { fr: "l'été", en: "summer", ph: "lay-TAY" },
        { fr: "l'automne", en: "autumn / fall", ph: "loh-TUN" },
        { fr: "l'hiver", en: "winter", ph: "lee-VAIR" },
        { fr: "J'adore l'été.", en: "I love summer.", ph: "zhah-DOR lay-TAY" },
        { fr: "En hiver, il fait froid.", en: "In winter, it's cold.", ph: "ahn ee-VAIR, eel feh FWAH" },
        { fr: "Le printemps est ma saison préférée.", en: "Spring is my favourite season.", ph: "luh pran-TAHN ay mah say-ZOHN pray-fay-RAY" },
      ]
    },
    {
      label: "Saying the year",
      phrases: [
        { fr: "mille neuf cent quatre-vingt-quatre (1984)", en: "nineteen eighty-four", ph: "meel nuhf sahn kat-ruh-van-KAT-ruh", note: "Years before 2000 use 'mille neuf cent' (one thousand nine hundred) + the rest" },
        { fr: "mille neuf cent quatre-vingt-huit (1988)", en: "nineteen eighty-eight", ph: "meel nuhf sahn kat-ruh-van-WEET" },
        { fr: "deux mille quatorze (2014)", en: "two thousand and fourteen", ph: "duh meel kah-TORZ", note: "Years from 2000 onwards start with 'deux mille' (two thousand) — much simpler!" },
        { fr: "deux mille dix-sept (2017)", en: "two thousand and seventeen", ph: "duh meel dee-SET" },
        { fr: "deux mille vingt (2020)", en: "two thousand and twenty", ph: "duh meel VAN" },
        { fr: "En quelle année ?", en: "In what year?", ph: "ahn kel ah-NAY" },
        { fr: "C'était en deux mille vingt.", en: "It was in 2020.", ph: "say-TAY ahn duh meel VAN" },
      ]
    }
  ]
},
  {
  id: "slang",
  icon: "🤌",
  title: "Slang & Swearing",
  sub: "The real stuff",
  desc: "The words they don't teach in textbooks — everyday slang, expressions, and yes, the swear words. Quebec French included.",
  sections: [
    {
      label: "Everyday French slang",
      phrases: [
        { fr: "C'est cool.", en: "That's cool.", ph: "say KOOL", note: "Yep, they just use 'cool' directly 😄" },
        { fr: "C'est nul.", en: "That sucks / It's rubbish.", ph: "say NOOL" },
        { fr: "C'est ouf !", en: "That's crazy / wild!", ph: "say OOF", note: "'Ouf' is 'fou' (crazy) said backwards — a type of French slang called verlan" },
        { fr: "C'est relou.", en: "It's annoying / such a drag.", ph: "say ruh-LOO", note: "Verlan for 'lourd' (heavy/annoying)" },
        { fr: "T'inquiète.", en: "Don't worry about it.", ph: "tan-KYET", note: "Short for 'ne t'inquiète pas' — very casual" },
        { fr: "Laisse tomber.", en: "Forget it / drop it.", ph: "les tom-BAY" },
        { fr: "Carrément !", en: "Absolutely! / Totally!", ph: "kah-ray-MAHN" },
        { fr: "C'est chelou.", en: "That's sketchy / weird.", ph: "say shuh-LOO", note: "Verlan for 'louche' (shady)" },
        { fr: "Je m'en fous.", en: "I don't care. / I don't give a damn.", ph: "zhuh mahn FOO", note: "Casual to mildly rude depending on tone — use carefully!" },
        { fr: "Ça me saoule.", en: "It's driving me crazy / boring me to death.", ph: "sah muh SOOL" },
        { fr: "Un truc", en: "A thing / a whatsit", ph: "uhn TROOK", note: "The French word for 'thingy' — you'll use this constantly" },
        { fr: "Un mec / une meuf", en: "A guy / a girl (or partner)", ph: "uhn MEK / oon MUHF", note: "'Meuf' is verlan for 'femme' — both are very casual" },
        { fr: "Bouffer", en: "To eat / to chow down", ph: "boo-FAY", note: "Casual version of 'manger' — as in 'on va bouffer ?' (shall we eat?)" },
        { fr: "Kiffer", en: "To really like / to love something", ph: "kee-FAY", note: "Very popular in modern French slang — 'je kiffe trop ce film !' (I love this film!)" },
        { fr: "Flemme", en: "Can't be bothered / laziness", ph: "FLEM", note: "'J'ai la flemme' = I can't be bothered. A deeply relatable phrase." },
      ]
    },
    {
      label: "French swear words",
      phrases: [
        { fr: "Merde !", en: "Shit!", ph: "MAIRD", note: "The all-purpose French swear — works in almost any situation 💩" },
        { fr: "Putain !", en: "F*ck! / Damn! / Wow!", ph: "poo-TAN", note: "Extremely versatile — can express shock, frustration, or even delight. The Swiss Army knife of French swearing." },
        { fr: "Putain, c'est beau.", en: "F*ck, that's beautiful.", ph: "poo-TAN say BOH", note: "Yes, this is a genuine compliment in French 😂" },
        { fr: "La vache !", en: "Wow! / Holy cow!", ph: "lah VASH", note: "Literally 'the cow' — a milder exclamation of surprise" },
        { fr: "Zut !", en: "Darn! / Shoot!", ph: "ZOOT", note: "The polite version — safe around the kids 😅" },
        { fr: "Mince !", en: "Shoot! / Dang!", ph: "MANSS", note: "Another mild one — literally means 'thin'" },
        { fr: "Bordel !", en: "What a mess! / For f*ck's sake!", ph: "bor-DEL", note: "Literally means 'brothel' — used to express chaos or frustration" },
        { fr: "Va te faire foutre.", en: "Go f*ck yourself.", ph: "vah tuh fair FOO-truh", note: "Strong — use only when you really mean it 🔥" },
        { fr: "Nom de Dieu !", en: "Good God! / Jesus Christ!", ph: "nohn duh DYUH", note: "Old-fashioned but dramatic — very satisfying to say" },
      ]
    },
    {
      label: "Quebec slang (sacres & expressions)",
      phrases: [
        { fr: "Câlice !", en: "F*ck! (strong Quebec expletive)", ph: "KAH-liss", note: "Quebec swearing (called 'sacres') comes from Catholic church objects — taboo in a very different way than French swearing. This is one of the strongest." },
        { fr: "Tabarnac !", en: "F*cking hell! (very strong)", ph: "tah-bar-NAK", note: "From 'tabernacle' — probably the most iconic Quebec swear. Can be stretched out for emphasis: 'Tabarnaaaaac'" },
        { fr: "Ostie !", en: "Holy sh*t! (very strong)", ph: "OS-tee", note: "From 'hostie' (communion wafer) — another powerful sacre" },
        { fr: "Câline !", en: "Dang! (softer version)", ph: "KAH-leen", note: "A softened version of câlice — safe-ish around kids" },
        { fr: "Crisse !", en: "Christ! (strong)", ph: "KREESE", note: "From 'Christ' — used the same way as the English equivalent" },
        { fr: "C'est le boutte !", en: "It's the best! / That's awesome!", ph: "say luh BOOT", note: "Pure Quebec slang — if something is 'le boutte', it's fantastic" },
        { fr: "Chu tanné(e).", en: "I'm fed up. / I'm sick of it.", ph: "shoo tah-NAY", note: "'Chu' is Quebec spoken shorthand for 'je suis' — you'll hear this constantly" },
        { fr: "Pantoute !", en: "Not at all! / No way!", ph: "pahn-TOOT", note: "Quebec version of 'pas du tout' — very satisfying to say" },
        { fr: "C'est de valeur.", en: "That's a shame / too bad.", ph: "say duh vah-LUHR", note: "A uniquely Quebec expression — you won't hear this in France" },
        { fr: "Aweille !", en: "Come on! / Hurry up! / Let's go!", ph: "ah-WAY", note: "From the English 'away' — used to urge someone on" },
        { fr: "Avoir du fun.", en: "To have fun.", ph: "ah-VWAHR doo FUN", note: "Quebec French borrows 'fun' directly from English — France would say 's'amuser'" },
        { fr: "Maganer", en: "To beat up / to wear out / to damage", ph: "mah-gah-NAY", note: "Uniquely Quebec — 'je suis magané(e)' means 'I'm worn out / beat'" },
        { fr: "Un dépanneur", en: "A convenience store", ph: "uhn day-pah-NUHR", note: "In France, they'd say 'épicerie' — in Quebec, the dep is a way of life 🏪" },
      ]
    },
    {
      label: "Playful insults & banter",
      phrases: [
        { fr: "Espèce d'idiot(e) !", en: "You idiot!", ph: "es-PES dee-YOH / dee-YOT", note: "The classic — 'espèce de' + any insult intensifies it" },
        { fr: "T'es vraiment casse-pieds.", en: "You're such a pain.", ph: "tay vray-MAHN kas-PYAY", note: "Literally 'foot-breaker' — a satisfying mild insult" },
        { fr: "Quelle tête de mule !", en: "What a mule-head! (stubborn)", ph: "kel tet duh MOOL" },
        { fr: "T'es un boulet.", en: "You're a deadweight / a drag.", ph: "tay uhn boo-LEH", note: "Literally a cannonball — said with affection between friends" },
        { fr: "Arrête de faire le clown !", en: "Stop clowning around!", ph: "ah-RET duh fair luh KLOON" },
        { fr: "Mon petit monstre.", en: "My little monster.", ph: "mohn puh-TEE MON-struh", note: "An affectionate one for the kids 👾" },
      ]
    }
  ]
}
 
];
