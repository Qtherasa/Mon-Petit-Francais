const topics = [
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
    id: "home-life",
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
  }
];
