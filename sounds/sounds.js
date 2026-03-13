/* sounds.js — pronunciation guide data for Mon Petit Français */
const sounds = [
  {
    id: "a", letter: "A a", label: "A", sub: "as in 'father'", color: "rose", phonetic: "ah", ipa: "/a/",
    description: "Open your mouth wide and say a relaxed, bright 'ah' — like when the doctor asks you to open up. Not the 'ay' sound in English 'cat'. Mouth wide, tongue flat and low.",
    englishExamples: ["father", "spa", "bra", "la-la-la"],
    frenchWords: [
      { fr: "chat", en: "cat", ph: "SHAH" },
      { fr: "lac", en: "lake", ph: "LAK" },
      { fr: "ami", en: "friend", ph: "ah-MEE" },
      { fr: "papa", en: "dad", ph: "pah-PAH" },
      { fr: "là", en: "there", ph: "LAH" },
    ],
    variations: [{ letter: "Â â", id: "a-circumflex" }],
    note: "The letter A is very consistent in French — it almost always makes this same clean 'ah' sound, unlike English where A can be 'cat', 'cake', or 'car'!"
  },
  {
    id: "a-circumflex", letter: "Â â", label: "Â", sub: "longer, rounder 'ah'", color: "rose", phonetic: "ah (longer)", ipa: "/ɑː/",
    description: "The circumflex (the little hat ^ on top) makes the A slightly longer and rounder — like you're sighing contentedly. In modern French, many speakers barely distinguish it from regular A, so don't stress about it!",
    englishExamples: ["calm", "barn", "father (held longer)"],
    frenchWords: [
      { fr: "pâte", en: "pasta/dough", ph: "PAHT" },
      { fr: "château", en: "castle", ph: "sha-TOH" },
      { fr: "âme", en: "soul", ph: "AHM" },
      { fr: "âge", en: "age", ph: "AHJ" },
    ],
    relatedTo: [{ letter: "A a", id: "a" }],
    note: "The circumflex is a hat that shows the vowel is stretched. In old French, there was an 's' after it — 'pâte' was once 'paste'. You can see it in English cognates: château → castle, forêt → forest."
  },
  {
    id: "e", letter: "E e", label: "E", sub: "the tricky one!", color: "amber", phonetic: "uh (or silent)", ipa: "/ə/ or silent",
    description: "The plain letter E in French is a short, lazy 'uh' sound — like the 'a' in 'about'. Your mouth is barely open, relaxed. At the end of words, it's often completely silent. This is the most common French vowel sound!",
    englishExamples: ["about", "the", "sofa", "taken"],
    frenchWords: [
      { fr: "le", en: "the (m)", ph: "luh" },
      { fr: "de", en: "of/from", ph: "duh" },
      { fr: "me", en: "me", ph: "muh" },
      { fr: "que", en: "that/what", ph: "kuh" },
    ],
    variations: [{ letter: "É é", id: "e-acute" }, { letter: "È/Ê", id: "e-grave" }],
    note: "E by itself is the quiet, shy vowel. But add an accent and it changes completely — see É and È below!"
  },
  {
    id: "e-acute", letter: "É é", label: "É", sub: "as in 'say'", color: "amber", phonetic: "ay", ipa: "/e/",
    description: "The accent aigu (the upward stroke) on É makes a clean, bright 'ay' sound — like the English word 'say' or 'they', but without the trailing glide. Hold your lips in a slight smile and keep the sound pure.",
    englishExamples: ["say", "they", "café", "résumé"],
    frenchWords: [
      { fr: "été", en: "summer", ph: "ay-TAY" },
      { fr: "café", en: "coffee", ph: "kah-FAY" },
      { fr: "école", en: "school", ph: "ay-KOL" },
      { fr: "téléphone", en: "telephone", ph: "tay-lay-FON" },
    ],
    relatedTo: [{ letter: "E e", id: "e" }, { letter: "È/Ê", id: "e-grave" }],
    note: "É is one of the most common accented letters in French. Many French words ending in -er are pronounced with this sound — like 'parler' (to speak)."
  },
  {
    id: "e-grave", letter: "È è / Ê ê", label: "È", sub: "as in 'bed'", color: "amber", phonetic: "eh", ipa: "/ɛ/",
    description: "The accent grave (downward stroke) on È makes an open 'eh' sound — like English 'bed', 'get', or 'set'. The circumflex Ê makes the same sound. Mouth is slightly more open than É.",
    englishExamples: ["bed", "get", "set", "thread"],
    frenchWords: [
      { fr: "père", en: "father", ph: "PAIR" },
      { fr: "mère", en: "mother", ph: "MAIR" },
      { fr: "très", en: "very", ph: "TREH" },
      { fr: "tête", en: "head", ph: "TET" },
    ],
    relatedTo: [{ letter: "É é", id: "e-acute" }],
    note: "È and Ê sound the same in modern French. The circumflex ( ^ ) is the little hat. Both make the same open 'eh' sound."
  },
  {
    id: "i", letter: "I i", label: "I", sub: "as in 'see'", color: "sky", phonetic: "ee", ipa: "/i/",
    description: "A pure, bright 'ee' sound — like English 'see' or 'feet', but shorter and more tense. Lips spread into a slight smile, tongue high in the mouth. Very consistent in French — I almost always makes this sound.",
    englishExamples: ["see", "feet", "machine", "ski"],
    frenchWords: [
      { fr: "ici", en: "here", ph: "ee-SEE" },
      { fr: "livre", en: "book", ph: "LEE-vruh" },
      { fr: "ami", en: "friend", ph: "ah-MEE" },
      { fr: "midi", en: "noon", ph: "mee-DEE" },
      { fr: "lit", en: "bed", ph: "LEE" },
    ],
    variations: [{ letter: "Î î", id: "i-circumflex" }],
    note: "Good news: I is one of the most reliable French vowels. It almost never changes."
  },
  {
    id: "i-circumflex", letter: "Î î", label: "Î", sub: "same sound as I", color: "sky", phonetic: "ee", ipa: "/i/",
    description: "The circumflex hat on Î doesn't change the sound at all — it's still the same 'ee' as regular I. The hat is just a historical marker. Pronounce it exactly like I.",
    englishExamples: ["see", "feet", "ski"],
    frenchWords: [
      { fr: "île", en: "island", ph: "EEL" },
      { fr: "naître", en: "to be born", ph: "NET-ruh" },
      { fr: "gîte", en: "holiday cottage", ph: "ZHEET" },
    ],
    relatedTo: [{ letter: "I i", id: "i" }],
    note: "Île (island) shows the pattern: the English word 'isle' still has the S that disappeared in French!"
  },
  {
    id: "o", letter: "O o", label: "O", sub: "as in 'go' or 'hot'", color: "orange", phonetic: "oh", ipa: "/o/ or /ɔ/",
    description: "French O has two versions: a closed 'oh' (lips rounded and forward) and an open 'aw' (mouth more open). Don't worry too much about which is which — just round your lips and you'll be understood!",
    englishExamples: ["go (closed)", "hot (open)", "note", "cotton"],
    frenchWords: [
      { fr: "mot", en: "word", ph: "MOH" },
      { fr: "dos", en: "back", ph: "DOH" },
      { fr: "non", en: "no", ph: "NOHN" },
      { fr: "or", en: "gold", ph: "OR" },
      { fr: "photo", en: "photo", ph: "FOH-toh" },
    ],
    variations: [{ letter: "Ô ô", id: "o-circumflex" }],
    note: "When O comes at the end of a word or is followed by a silent consonant, it's usually the closed 'oh'. Round your lips and go for it!"
  },
  {
    id: "o-circumflex", letter: "Ô ô", label: "Ô", sub: "rounder, more closed 'oh'", color: "orange", phonetic: "oh (rounder)", ipa: "/o/",
    description: "The circumflex makes O more closed and rounded — lips pushed forward like you're blowing out a candle. It's a pure 'oh' with no drift.",
    englishExamples: ["go", "note (British English)", "bureau"],
    frenchWords: [
      { fr: "hôtel", en: "hotel", ph: "oh-TEL" },
      { fr: "côte", en: "coast/rib", ph: "KOHT" },
      { fr: "rôle", en: "role", ph: "ROHL" },
      { fr: "tôt", en: "early", ph: "TOH" },
    ],
    relatedTo: [{ letter: "O o", id: "o" }],
    note: "You already know hôtel — French for hotel! The circumflex is just a hat showing the vowel is a bit more refined."
  },
  {
    id: "u", letter: "U u", label: "U", sub: "no English equivalent!", color: "violet", phonetic: "ew (rounded)", ipa: "/y/",
    description: "This is THE most uniquely French sound. Start by saying 'ee' (like in 'see'), then WITHOUT moving your tongue, round your lips forward like you're about to say 'oo'. Hold that tension. It feels very strange at first — that's normal!",
    englishExamples: ["(no direct equivalent)", "a mix of 'ee' and 'oo'", "like German 'ü'"],
    frenchWords: [
      { fr: "tu", en: "you (casual)", ph: "TOO (but rounded)" },
      { fr: "rue", en: "street", ph: "ROO (rounded)" },
      { fr: "lune", en: "moon", ph: "LOON (rounded)" },
      { fr: "une", en: "a/one (f)", ph: "OON (rounded)" },
      { fr: "vu", en: "seen", ph: "VOO (rounded)" },
    ],
    variations: [{ letter: "Û û", id: "u-circumflex" }, { letter: "OU ou", id: "ou" }],
    note: "The trick: say 'ee', freeze your tongue, then round your lips. Practice with 'tu' (you) since you'll use it constantly!"
  },
  {
    id: "u-circumflex", letter: "Û û", label: "Û", sub: "same as U, just longer", color: "violet", phonetic: "ew (longer)", ipa: "/y/",
    description: "Exactly the same rounded 'ew' sound as regular U — the circumflex just marks a historical spelling change.",
    englishExamples: ["(same as U — the rounded 'ew')"],
    frenchWords: [
      { fr: "sûr", en: "sure/certain", ph: "SOOR (rounded)" },
      { fr: "mûr", en: "ripe/mature", ph: "MOOR (rounded)" },
      { fr: "dû", en: "due/owed", ph: "DOO (rounded)" },
    ],
    relatedTo: [{ letter: "U u", id: "u" }],
    note: "Û is rare — you'll barely encounter it. When you do, just treat it as a regular U."
  },
  {
    id: "ou", letter: "OU ou", label: "OU", sub: "as in 'you'", color: "violet", phonetic: "oo", ipa: "/u/",
    description: "When O and U sit together, they make a simple 'oo' sound — just like English 'you', 'boot', or 'moon'. Lips round and pushed forward. This is DIFFERENT from the French U — OU is the easier one!",
    englishExamples: ["you", "boot", "moon", "soup"],
    frenchWords: [
      { fr: "ou", en: "or", ph: "OO" },
      { fr: "où", en: "where", ph: "OO" },
      { fr: "nous", en: "we/us", ph: "NOO" },
      { fr: "sous", en: "under", ph: "SOO" },
      { fr: "tout", en: "all/everything", ph: "TOO" },
      { fr: "jour", en: "day", ph: "ZHOOR" },
    ],
    relatedTo: [{ letter: "U u", id: "u" }],
    note: "OU = 'oo' (easy!). U alone = the tricky rounded sound. This is one of the most common spelling traps — 'ou' is much simpler than it looks."
  },
  {
    id: "eu", letter: "EU eu / ŒU œu", label: "EU", sub: "like 'uh' with rounded lips", color: "teal", phonetic: "uh (rounded)", ipa: "/ø/ or /œ/",
    description: "EU and ŒU both make a rounded 'uh' sound — like English 'her' or 'bird', but with your lips pushed forward into a circle. Try saying 'uh' and then round your lips without changing your tongue position.",
    englishExamples: ["her", "bird", "word (British English)", "blur"],
    frenchWords: [
      { fr: "feu", en: "fire", ph: "FUH (rounded)" },
      { fr: "jeu", en: "game", ph: "ZHUH (rounded)" },
      { fr: "bleu", en: "blue", ph: "BLUH (rounded)" },
      { fr: "peur", en: "fear", ph: "PUHR (rounded)" },
      { fr: "deux", en: "two", ph: "DUH (rounded)" },
    ],
    note: "EU appears in 'deux' (two) and 'bleu' (blue). You'll recognise bleu from 'fromage bleu' — blue cheese! The ŒU combination (as in 'cœur', heart) makes the same sound."
  },
  {
    id: "oi", letter: "OI oi", label: "OI", sub: "as in 'wa!'", color: "pink", phonetic: "wah", ipa: "/wa/",
    description: "OI makes a 'wah' sound — like the English word 'was' or the exclamation 'wa!'. Start with a quick W glide and open into a bright 'ah'. It's a gliding sound, moving quickly from W to A.",
    englishExamples: ["was", "want", "wah! (baby sound)", "suave"],
    frenchWords: [
      { fr: "moi", en: "me/I", ph: "MWAH" },
      { fr: "toi", en: "you", ph: "TWAH" },
      { fr: "soi", en: "oneself", ph: "SWAH" },
      { fr: "roi", en: "king", ph: "RWAH" },
      { fr: "voilà", en: "there it is!", ph: "vwah-LAH" },
      { fr: "fois", en: "time (occasion)", ph: "FWAH" },
    ],
    note: "OI is everywhere in French and very consistent. Moi and toi (me and you) are essential words — and they both end with that satisfying 'wah' sound."
  },
  {
    id: "ai", letter: "AI ai / EI ei", label: "AI", sub: "as in 'bed'", color: "pink", phonetic: "eh", ipa: "/ɛ/",
    description: "AI makes an 'eh' sound — exactly the same as the accented È. It's the sound in English 'bed', 'get', or 'set'. Even though you see two letters, it's just one simple sound.",
    englishExamples: ["bed", "get", "set", "bread"],
    frenchWords: [
      { fr: "mai", en: "May", ph: "MAY" },
      { fr: "vrai", en: "true", ph: "VREH" },
      { fr: "lait", en: "milk", ph: "LEH" },
      { fr: "maison", en: "house", ph: "may-ZOHN" },
      { fr: "j'ai", en: "I have", ph: "ZHAY" },
      { fr: "fait", en: "done/made", ph: "FEH" },
    ],
    relatedTo: [{ letter: "È è / Ê ê", id: "e-grave" }],
    note: "'Lait' (milk) and 'fait' (done) — these rhyme in French! AI is very common and very consistent. J'ai (I have) is one of the first words you'll use constantly."
  },
  {
    id: "au", letter: "AU au / EAU eau", label: "AU / EAU", sub: "as in 'go'", color: "orange", phonetic: "oh", ipa: "/o/",
    description: "AU and EAU both make a clean 'oh' sound — exactly like a closed French O. EAU looks like a lot of letters for one sound, but just say 'oh'!",
    englishExamples: ["go", "note", "plateau", "bureau"],
    frenchWords: [
      { fr: "eau", en: "water", ph: "OH" },
      { fr: "beau", en: "beautiful (m)", ph: "BOH" },
      { fr: "gâteau", en: "cake", ph: "gah-TOH" },
      { fr: "au", en: "at the / to the", ph: "OH" },
      { fr: "aussi", en: "also/too", ph: "oh-SEE" },
      { fr: "bateau", en: "boat", ph: "bah-TOH" },
    ],
    relatedTo: [{ letter: "O o", id: "o" }],
    note: "'Eau' by itself means water and sounds like just 'oh'. Château, gateau, plateau, bureau — all these French words came into English with their EAU ending! You already knew this sound."
  },
  {
    id: "an", letter: "AN/AM · EN/EM", label: "AN", sub: "nasal 'ah' sound", color: "green", phonetic: "ahn (nasal)", ipa: "/ɑ̃/",
    description: "This is a NASAL vowel — air flows through your nose as well as your mouth. Say 'ah', then let some sound come out through your nose at the same time — but don't fully say the 'n'. AN, AM, EN, and EM all make this same nasal sound.",
    englishExamples: ["(no direct equivalent)", "like 'on' in French restaurant", "the 'an' in 'encore' with a French accent"],
    frenchWords: [
      { fr: "an", en: "year", ph: "AHN" },
      { fr: "dans", en: "in/inside", ph: "DAHN" },
      { fr: "grand", en: "big/tall", ph: "GRAHN" },
      { fr: "enfant", en: "child", ph: "ahn-FAHN" },
      { fr: "temps", en: "weather/time", ph: "TAHN" },
      { fr: "blanc", en: "white", ph: "BLAHN" },
    ],
    variations: [{ letter: "IN/IM · UN", id: "in" }, { letter: "ON/OM", id: "on" }],
    note: "Nasal vowels are one of the most distinctive French features! The key: you don't fully pronounce the N or M — they just 'nasalise' the vowel before them."
  },
  {
    id: "in", letter: "IN/IM · UN · AIN", label: "IN", sub: "nasal 'eh' sound", color: "green", phonetic: "an (nasal)", ipa: "/ɛ̃/",
    description: "Another nasal vowel — this time, say 'eh' (like in 'bed') and let it resonate through your nose without closing your lips to fully say the N. IN, IM, UN, AIN, AIM, EIN all make this same nasal sound.",
    englishExamples: ["(no direct equivalent)", "like 'in' in 'international' with a French accent"],
    frenchWords: [
      { fr: "vin", en: "wine", ph: "VAN" },
      { fr: "pain", en: "bread", ph: "PAN" },
      { fr: "main", en: "hand", ph: "MAN" },
      { fr: "fin", en: "end/fine", ph: "FAN" },
      { fr: "bien", en: "well/good", ph: "BYAN" },
      { fr: "un", en: "one/a (m)", ph: "AN" },
    ],
    relatedTo: [{ letter: "AN/AM · EN/EM", id: "an" }, { letter: "ON/OM", id: "on" }],
    note: "IN, UN, and AIN all sound the same in modern French — a nasal 'an'. So 'vin' (wine), 'pain' (bread), and 'main' (hand) all end with the same nasal sound."
  },
  {
    id: "on", letter: "ON/OM", label: "ON", sub: "nasal 'oh' sound", color: "green", phonetic: "ohn (nasal)", ipa: "/ɔ̃/",
    description: "The third nasal vowel — say 'oh' with rounded lips and let it hum through your nose simultaneously. ON and OM both make this sound. It's a round, resonant sound.",
    englishExamples: ["(no direct equivalent)", "like 'on' in 'encore' (French accent)", "bonus said very nasally"],
    frenchWords: [
      { fr: "on", en: "one/we (informal)", ph: "OHN" },
      { fr: "bon", en: "good", ph: "BOHN" },
      { fr: "mon", en: "my (m)", ph: "MOHN" },
      { fr: "son", en: "his/her/its", ph: "SOHN" },
      { fr: "nom", en: "name", ph: "NOHN" },
      { fr: "pont", en: "bridge", ph: "POHN" },
    ],
    relatedTo: [{ letter: "AN/AM · EN/EM", id: "an" }, { letter: "IN/IM · UN · AIN", id: "in" }],
    note: "ON is everywhere in French and easy to spot. 'Bonjour' (bon + jour) literally means 'good day' — and 'bon' has the nasal ON sound."
  },
  {
    id: "r", letter: "R r", label: "R", sub: "the famous French R", color: "red", phonetic: "r (guttural)", ipa: "/ʁ/",
    description: "The French R is made at the BACK of your throat — not the front like English R. Imagine gargling gently, or the sound you make when clearing your throat very softly. Your tongue stays flat; the back of your tongue rises toward your uvula.",
    englishExamples: ["(no equivalent — uniquely French!)", "similar to the sound before spitting (but much gentler)", "like the Spanish J in 'Juan'"],
    frenchWords: [
      { fr: "rouge", en: "red", ph: "ROOZH" },
      { fr: "rue", en: "street", ph: "ROO" },
      { fr: "mer", en: "sea", ph: "MAIR" },
      { fr: "rat", en: "rat", ph: "RAH" },
      { fr: "rire", en: "to laugh", ph: "REER" },
    ],
    note: "The French R is intimidating but becomes natural with practice. Until it does, a gentle English R at the back of the throat works fine. Don't let the R stop you from speaking!"
  },
  {
    id: "ch", letter: "CH ch", label: "CH", sub: "as in 'shoe'", color: "yellow", phonetic: "sh", ipa: "/ʃ/",
    description: "French CH makes a 'sh' sound — like English 'shoe', 'sheep', or 'push'. Important: it is NEVER a hard 'ch' like in English 'cheese' or 'church'.",
    englishExamples: ["shoe", "sheep", "push", "shh!"],
    frenchWords: [
      { fr: "chat", en: "cat", ph: "SHAH" },
      { fr: "chose", en: "thing", ph: "SHOHZ" },
      { fr: "chien", en: "dog", ph: "SHYAN" },
      { fr: "chef", en: "chief/chef", ph: "SHEF" },
      { fr: "chou", en: "cabbage (term of endearment!)", ph: "SHOO" },
    ],
    note: "'Mon petit chou' (my little cabbage) is an actual French term of endearment — isn't that adorable? 🥬 The CH = SH rule is very reliable in French."
  },
  {
    id: "gn", letter: "GN gn", label: "GN", sub: "as in 'canyon'", color: "yellow", phonetic: "ny", ipa: "/ɲ/",
    description: "GN makes a 'ny' sound — exactly like the N in English 'canyon' or 'onion'. Your tongue touches the roof of your mouth while making an N sound. It's the same as the Spanish Ñ.",
    englishExamples: ["canyon", "onion", "lasagna", "Español (Spanish N)"],
    frenchWords: [
      { fr: "agneau", en: "lamb", ph: "ah-NYOH" },
      { fr: "signe", en: "sign", ph: "SEE-nyuh" },
      { fr: "montagne", en: "mountain", ph: "mohn-TAH-nyuh" },
      { fr: "campagne", en: "countryside", ph: "cahm-PAH-nyuh" },
      { fr: "ligne", en: "line", ph: "LEE-nyuh" },
    ],
    note: "Montagne (mountain) gives us 'mountain' in English. Champagne — GN makes it 'sham-PAN-yuh'. You've been saying French sounds all along!"
  },
  {
    id: "j", letter: "J j", label: "J", sub: "like the S in 'measure'", color: "indigo", phonetic: "zh", ipa: "/ʒ/",
    description: "French J is NEVER like English J (which sounds like 'dge' in 'judge'). Instead it's a smooth, buzzing 'zh' — the sound in the middle of English 'measure', 'treasure', or 'television'.",
    englishExamples: ["measure", "treasure", "television", "genre", "beige"],
    frenchWords: [
      { fr: "je", en: "I", ph: "ZHUH" },
      { fr: "jour", en: "day", ph: "ZHOOR" },
      { fr: "joli", en: "pretty", ph: "zhoh-LEE" },
      { fr: "jambe", en: "leg", ph: "ZHAHMB" },
      { fr: "jaune", en: "yellow", ph: "ZHOHN" },
    ],
    relatedTo: [{ letter: "G g", id: "g" }],
    note: "'Je' (I) starts with this sound — and you'll say it hundreds of times! 'Je suis', 'je veux', 'je t'aime' — all start with that smooth ZH."
  },
  {
    id: "g", letter: "G g", label: "G", sub: "hard G or soft ZH", color: "indigo", phonetic: "g or zh", ipa: "/g/ or /ʒ/",
    description: "G follows the same pattern as C: before A, O, U it's a hard G (like 'go'). Before E, I, Y it's a soft 'zh' sound — like the S in English 'measure' or 'treasure'. This soft G is the same sound as the French J!",
    englishExamples: ["go (hard G)", "measure (soft ZH)", "treasure", "genre"],
    frenchWords: [
      { fr: "gare", en: "train station (hard G)", ph: "GAR" },
      { fr: "goût", en: "taste (hard G)", ph: "GOO" },
      { fr: "gens", en: "people (soft ZH)", ph: "ZHAHN" },
      { fr: "rouge", en: "red (soft ZH at end)", ph: "ROOZH" },
      { fr: "âge", en: "age (soft ZH)", ph: "AHJ" },
    ],
    variations: [{ letter: "J j", id: "j" }],
    note: "The word 'genre' came into English from French — and English kept the French soft G pronunciation! You already know this sound."
  },
  {
    id: "c", letter: "C c", label: "C", sub: "hard K or soft S", color: "indigo", phonetic: "k or s", ipa: "/k/ or /s/",
    description: "C in French has two sounds depending on the vowel that follows. Before A, O, or U: hard K sound (like 'cat'). Before E, I, or Y: soft S sound (like 'sun'). A simple rule: C + E/I/Y = soft S. C + A/O/U = hard K.",
    englishExamples: ["cat (hard K)", "cent (soft S)", "cycle (soft S)", "cup (hard K)"],
    frenchWords: [
      { fr: "café", en: "coffee (K sound)", ph: "kah-FAY" },
      { fr: "cou", en: "neck (K sound)", ph: "KOO" },
      { fr: "ce", en: "this/it (S sound)", ph: "SUH" },
      { fr: "ciel", en: "sky (S sound)", ph: "SYEL" },
      { fr: "coeur", en: "heart (K sound)", ph: "KUHR" },
    ],
    variations: [{ letter: "Ç ç", id: "cedilla" }],
    note: "This is the same rule as English! 'Cat' = hard C, 'cent' = soft C. You already know this — trust your instinct when you see C in French."
  },
  {
    id: "cedilla", letter: "Ç ç", label: "Ç", sub: "always sounds like S", color: "indigo", phonetic: "s", ipa: "/s/",
    description: "The cedilla (the little tail under the C) always makes a soft 'S' sound. Without the cedilla, C before A, O, or U makes a hard 'K' sound. The cedilla is a reminder: 'I'm a soft C!'",
    englishExamples: ["sun", "soft", "salad"],
    frenchWords: [
      { fr: "ça", en: "that/it", ph: "SAH" },
      { fr: "garçon", en: "boy/waiter", ph: "gar-SOHN" },
      { fr: "français", en: "French", ph: "frahn-SAY" },
      { fr: "leçon", en: "lesson", ph: "luh-SOHN" },
      { fr: "façon", en: "way/manner", ph: "fah-SOHN" },
    ],
    relatedTo: [{ letter: "C c", id: "c" }],
    note: "'Ça' is one of the most common words in French — 'ça va?' (how's it going?). You'll see Ç everywhere and now you know: it's always a soft S!"
  },
  {
    id: "h", letter: "H h", label: "H", sub: "almost always silent", color: "slate", phonetic: "(silent)", ipa: "Ø or /h/",
    description: "In French, H is almost always completely silent — you simply ignore it. 'Heure' (hour) = 'uh'. There are two types: H muet (silent H) and H aspiré — but for beginners, just treat all H as silent and you'll be right most of the time.",
    englishExamples: ["(like the silent H in 'honest' or 'honour')", "hour", "heir"],
    frenchWords: [
      { fr: "heure", en: "hour", ph: "UHR" },
      { fr: "homme", en: "man", ph: "OM" },
      { fr: "hiver", en: "winter", ph: "ee-VAIR" },
      { fr: "histoire", en: "story/history", ph: "ees-TWAHR" },
      { fr: "hôtel", en: "hotel", ph: "oh-TEL" },
    ],
    note: "English has silent H too — 'honest', 'hour', 'heir'. French just does it much more often!"
  },
  {
    id: "silent", letter: "Letters silencieuses", label: "Silent Letters", sub: "what you don't say", color: "slate", phonetic: "(silence)", ipa: "Ø",
    description: "French has many silent letters — especially at the ends of words. The most common silent letters are: S at the end of words, T at the end of words, D at the end of words, X at the end of words, and H at the beginning of words. When in doubt, don't say the final consonant!",
    englishExamples: ["(no equivalent)", "like the silent K in 'knife'", "like the silent B in 'lamb'"],
    frenchWords: [
      { fr: "chat", en: "cat (silent T)", ph: "SHAH" },
      { fr: "vous", en: "you (silent S)", ph: "VOO" },
      { fr: "grand", en: "big (silent D)", ph: "GRAHN" },
      { fr: "heure", en: "hour (silent H)", ph: "UHR" },
      { fr: "beaux", en: "beautiful pl. (silent X)", ph: "BOH" },
      { fr: "trop", en: "too much (silent P)", ph: "TROH" },
    ],
    note: "The rule of thumb: in French, the LAST consonant is usually silent — except R, L, F, and C (remember: CaReFuL). So 'chat' = SHA, 'vous' = VOO, but 'mer' = MAIR (R is pronounced)!"
  },
  {
    id: "liaison", letter: "La liaison", label: "Liaison", sub: "words that link together", color: "slate", phonetic: "(linking sounds)", ipa: "—",
    description: "Liaison is when a normally silent final consonant DOES get pronounced because the next word starts with a vowel. It's a linking sound that makes French flow smoothly. For example, 'nous avons' (we have) — the S in 'nous' links to 'avons' to make 'noo-ZAH-vohn'.",
    englishExamples: ["'an apple' vs 'a apple' — English does this too with a/an!", "like how 'the end' links together naturally"],
    frenchWords: [
      { fr: "nous avons", en: "we have", ph: "noo-ZAH-vohn" },
      { fr: "les amis", en: "the friends", ph: "lay-ZAH-mee" },
      { fr: "mon ami", en: "my friend", ph: "moh-NAH-mee" },
      { fr: "c'est un", en: "it's a", ph: "say-TAN" },
      { fr: "vous êtes", en: "you are", ph: "voo-ZET" },
    ],
    note: "Don't stress about mastering liaison right away — just notice it when you hear it. As you listen more to French, your ear will start to catch these natural links. It's what makes French sound so melodic and flowing!"
  }
];
