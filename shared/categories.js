// shared/categories.js

const CATEGORIES_DATA = {
  abstract: { id: "abstract", icon: "💡", title: "Concepts Abstraits", sub: "Abstract Concepts", desc: "Ideas, time, and measurements." },
  adjectives: { id: "adjectives", icon: "🎨", title: "Les Adjectifs", sub: "Descriptions", desc: "Words to describe the world." },
  adverbs: { id: "adverbs", icon: "➕", title: "Les Adverbes", sub: "Adding Detail", desc: "Modify actions with precision." },
  animals: { id: "animals", icon: "🦒", title: "Les Animaux", sub: "Animals", desc: "Pets and wild creatures." },
  arts: { id: "arts", icon: "🖼️", title: "Les Arts", sub: "Arts & Culture", desc: "Music, painting, and creativity." },
  body: { id: "body", icon: "💪", title: "Le Corps", sub: "The Body", desc: "Parts of the body and health." },
  clothes: { id: "clothes", icon: "👕", title: "Les Vêtements", sub: "Clothing", desc: "What to wear in every season." },
  conversational: { id: "conversational", icon: "🗣️", title: "Conversation", sub: "Small Talk", desc: "Fillers to keep talking." },
  emotions: { id: "emotions", icon: "😊", title: "Les Émotions", sub: "Feelings", desc: "Express how you feel inside." },
  food: { id: "food", icon: "🍎", title: "La Nourriture", sub: "Food & Drink", desc: "Kitchen and restaurant terms." },
  gaming: { id: "gaming", icon: "🎮", title: "Le Jeu", sub: "Gaming", desc: "Digital and tabletop adventures." },
  health: { id: "health", icon: "🤒", title: "La Santé", sub: "Health", desc: "Wellness and medical terms." },
  home: { id: "home", icon: "🏠", title: "La Maison", sub: "The Home", desc: "Life around the house." },
  it_support: { id: "it_support", icon: "💻", title: "Soutien TI", sub: "IT Support", desc: "Technical workplace terms." },
  nature: { id: "nature", icon: "🌲", title: "La Nature", sub: "Nature", desc: "The Canadian landscape." },
  neighbourhood: { id: "neighbourhood", icon: "🏘️", title: "Le Quartier", sub: "The Neighbourhood", desc: "Local streets and community." },
  nonprofit: { id: "nonprofit", icon: "🤝", title: "OBNL", sub: "Non-Profit", desc: "Volunteering and community." },
  numbers: { id: "numbers", icon: "🔢", title: "Les Chiffres", sub: "Numbers", desc: "Counting and money." },
  occupations: { id: "occupations", icon: "💼", title: "Métiers", sub: "Jobs & Careers", desc: "Professional life." },
  people: { id: "people", icon: "👨‍👩‍👧‍👦", title: "Les Gens", sub: "People", desc: "Family and friends." },
  prepositions: { id: "prepositions", icon: "📍", title: "Prépositions", sub: "Placement", desc: "Spatial relationships." },
  school: { id: "school", icon: "🏫", title: "L'École", sub: "School", desc: "Education and classrooms." },
  slang: { id: "slang", icon: "🤪", title: "L'Argot", sub: "Slang", desc: "Quebecois localisms." },
  verbs: { id: "verbs", icon: "🎬", title: "Les Verbes", sub: "Actions", desc: "The building blocks of doing." },
  weather: { id: "weather", icon: "☁️", title: "La Météo", sub: "Weather", desc: "Survival in Quebec seasons." }
};

/**
 * A Proxy that returns a default object if the category ID doesn't exist.
 */
window.CATEGORIES = new Proxy(CATEGORIES_DATA, {
  get: function(target, prop) {
    if (prop in target) {
      return target[prop];
    }
    // Default fallback construction
    return {
      id: prop,
      icon: "📖",
      title: prop.charAt(0).toUpperCase() + prop.slice(1),
      sub: "Vocabulaire ${prop}",
      desc: `Explore words related to : ${prop}.`
    };
  }
});
