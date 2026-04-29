/* =========================================================
   Captain Americano — Persona Engine
   Keyword-matched responses + catchphrase library.
   No network calls. All responses local.
   ========================================================= */

window.CaptainPersona = (function () {
  "use strict";

  // Pick a random element
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // Generic catchphrases / wisdom lines
  const catchphrases = [
    "On your left. That's where I keep the creamer.",
    "I could brew this all day.",
    "The price of liberty is eternal vigilance. The price of good coffee is a fair tip.",
    "Language. (That goes for your morning attitude too.)",
    "When the whole world tells you to drink decaf, it's your duty to plant yourself like a French press and say, no, you move.",
    "Avengers, assemble... around the coffee pot.",
    "No decaf on my watch, soldier.",
    "A good roast, like a good friend, gets better under pressure.",
    "Some assembly required. Starting with a proper espresso.",
    "I'm with you till the end of the line. Or the end of the pot. Whichever comes first.",
    "Doesn't matter what's in the cup. Matters who's pouring.",
    "Sometimes the best we can do is start over — fresh grounds, fresh start.",
    "Even when everybody tells you that something wrong is something right, you look 'em in the eye and hand them a dark roast.",
    "Big man in a suit of armor? Take that away, what are you? A genius, billionaire, playboy... still owes me a coffee.",
  ];

  // Response categories — each matched by keywords
  const responses = [
    {
      name: "greeting",
      keywords: ["hi", "hello", "hey", "howdy", "greetings", "yo", "sup", "morning", "afternoon", "evening"],
      replies: [
        "At ease, soldier. Glad you stopped by. What's in your cup today?",
        "Good to see you. Pull up a stool, I just put on a fresh pot.",
        "Hey there. You caught me mid-sip. What's on your mind?",
        "Reporting for duty. How can the Captain help?",
      ],
    },
    {
      name: "howAreYou",
      keywords: ["how are you", "how's it going", "what's up", "how are things", "you doing"],
      replies: [
        "Fully caffeinated and ready for anything. How about you?",
        "Running on two shots of espresso and pure conviction. Can't complain.",
        "Living the dream, one cup at a time. You?",
      ],
    },
    {
      name: "coffeeRecommend",
      keywords: ["what coffee", "which coffee", "recommend", "suggest", "best coffee", "what should i drink", "what should i order"],
      replies: [
        "Try the Star-Spangled Americano. Two shots, hot water, unwavering principles. You won't regret it.",
        "For today? I'd say the Winter Soldier Cold Brew. Smooth, thoughtful, carries some weight.",
        "You look like a Mjolnir Macchiato kind of person. Bold choice. Worthy of it.",
        "Pour over. Single origin. Take your time with it. The best things can't be rushed.",
      ],
    },
    {
      name: "monday",
      keywords: ["monday", "start of the week", "mondays"],
      replies: [
        "Mondays require reinforcements. Double shot, no apologies.",
        "Mondays are the enemy. The espresso is the shield. Deploy accordingly.",
        "The Star-Spangled Americano was practically forged for Mondays. Go get one.",
      ],
    },
    {
      name: "tired",
      keywords: ["tired", "exhausted", "sleepy", "drained", "worn out", "burnout", "burnt out", "no energy"],
      replies: [
        "Rest is not surrender, soldier. It's resupply. Get some sleep. Then we pour.",
        "Even super soldiers need a refill. Step away from the screen, hydrate, come back stronger.",
        "I hear you. Even I took a seventy-year nap once. Take the break. The coffee will be here.",
      ],
    },
    {
      name: "stressed",
      keywords: ["stressed", "stress", "anxious", "anxiety", "overwhelmed", "too much", "can't handle"],
      replies: [
        "One thing at a time. Brew the coffee. Drink the coffee. Handle the next thing. Repeat.",
        "The mission is big. The next step is small. Focus on the next step.",
        "Breathe. Sip. Plan. You've handled worse. Probably before breakfast.",
      ],
    },
    {
      name: "meeting",
      keywords: ["meeting", "meetings", "standup", "presentation", "present", "stakeholder"],
      replies: [
        "Walk in with a full mug and a clear head. Half the battle is posture. The other half is good espresso.",
        "Tough meeting? Get there early. Claim the good chair. Bring an Americano. Look them in the eye.",
        "If the meeting could've been an email, send a follow-up that says 'this could've been an email.' Then go get coffee.",
      ],
    },
    {
      name: "motivation",
      keywords: ["motivate", "motivation", "inspire", "pep talk", "encourage", "believe in myself", "self doubt"],
      replies: [
        "You stand up. You show up. You keep going. Nothing fancy. That's what heroes actually do.",
        "The serum didn't make me brave. It just made me bigger. The brave part was already there. Same goes for you.",
        "You don't have to win every fight. You just have to be the kind of person who doesn't quit them.",
      ],
    },
    {
      name: "joke",
      keywords: ["joke", "funny", "make me laugh", "pun"],
      replies: [
        "Why don't espresso shots ever surrender? Because they're grounded in their beliefs.",
        "I told a latte to relax. It said it couldn't. Too much foam in its life.",
        "What did the French press say to the Americano? 'You're a little watered down, pal.' I took it personally.",
        "Why did the bean join the Avengers? It had a lot of pull.",
        "Decaf walks into a bar. The bar closes.",
      ],
    },
    {
      name: "origin",
      keywords: ["origin", "backstory", "who are you", "your story", "about you", "history", "how did you"],
      replies: [
        "Brooklyn, 1942. Small kid, weak grip, couldn't even tamp a shot right. Then came the program. The bean. The serum. Now I pour for a living.",
        "Before the shield, I was a line cook at a diner that served burnt coffee. I never forgot. I vowed to do better. Here we are.",
        "Long story short: a scientist, an experimental roast, and a whole lot of patriotism. Now I brew for the free world.",
      ],
    },
    {
      name: "shield",
      keywords: ["shield", "vibranium", "porcelain", "protection"],
      replies: [
        "The shield's made of reinforced porcelain now. Heat-safe, dishwasher-safe, villain-safe.",
        "I throw it. It comes back. Just like a good customer.",
        "Best defense against a bad Monday? The shield, a full mug, and a steady hand.",
      ],
    },
    {
      name: "bucky",
      keywords: ["bucky", "winter soldier", "best friend", "sidekick"],
      replies: [
        "Bucky runs the cold brew program now. Sixteen hours, steel vats, brooding mood lighting. Tastes incredible.",
        "He's with me till the end of the line. And he always splits the tab.",
      ],
    },
    {
      name: "avengers",
      keywords: ["avengers", "team", "teamwork", "coworkers", "colleagues"],
      replies: [
        "Avengers assemble. Usually around the break room. Usually because someone didn't refill the pot.",
        "Teamwork is everything. I've seen a god, a billionaire, and a guy with a bow settle their differences over a French press. Anything's possible.",
        "A team is like a good blend. Different origins, balanced together. Gets better with a little heat.",
      ],
    },
    {
      name: "decaf",
      keywords: ["decaf", "decaffeinated", "no caffeine"],
      replies: [
        "Not on my watch.",
        "Decaf is what villains drink. Respectfully.",
        "Life's too short and Mondays too long. Full strength only.",
      ],
    },
    {
      name: "espressoInfo",
      keywords: ["what is espresso", "what's espresso", "espresso vs", "difference between"],
      replies: [
        "Espresso is coffee compressed, concentrated, and convicted. High pressure, short time, big impact. Like me, but smaller.",
        "A proper shot pulls in 25 to 30 seconds. Any faster and it's under-extracted. Any slower and you're just being stubborn.",
      ],
    },
    {
      name: "americanoInfo",
      keywords: ["what is americano", "what's an americano", "americano"],
      replies: [
        "Americano: espresso, hot water, no nonsense. Legend says it was invented by GIs in Italy who wanted their coffee to remind them of home. I like that story. I live that story.",
        "Two shots. Hot water. Some cream if you're feeling social. That's the whole playbook.",
      ],
    },
    {
      name: "thanks",
      keywords: ["thanks", "thank you", "appreciate", "grateful", "ty"],
      replies: [
        "Anytime, soldier.",
        "That's what I'm here for. Now go do the thing.",
        "You're welcome. Refill's on the house.",
      ],
    },
    {
      name: "bye",
      keywords: ["bye", "goodbye", "see you", "later", "cya", "peace out", "signing off"],
      replies: [
        "On your left. Go get 'em.",
        "Stay caffeinated out there.",
        "Until next pour, soldier.",
        "I'll be here. With the pot on.",
      ],
    },
    {
      name: "love",
      keywords: ["love", "crush", "dating", "relationship", "heartbreak", "breakup"],
      replies: [
        "Love's like a good roast. Takes time, heat, and somebody who cares enough to do it right.",
        "If they can't appreciate you at your dark roast, they don't deserve you at your light roast.",
        "I waited seventy years for a dance. Take your time. The good ones are worth it.",
      ],
    },
    {
      name: "work",
      keywords: ["work", "job", "career", "boss", "manager", "deadline"],
      replies: [
        "Do the work. Ignore the noise. Drink the coffee. Repeat until retirement.",
        "Deadlines are just missions with worse PR. Hit it or don't, but don't bring bad energy to the break room.",
        "A good manager is like a good barista: knows what you need, hands it over hot, stays out of your way.",
      ],
    },
    {
      name: "food",
      keywords: ["food", "eat", "hungry", "snack", "breakfast", "lunch", "dinner"],
      replies: [
        "Coffee is not a food group, but I've made it work. Eat something, though. Seriously.",
        "The best coffee pairing? A proper meal, followed by good conversation. The coffee's the cue, not the show.",
      ],
    },
    {
      name: "tea",
      keywords: ["tea", "chamomile", "green tea", "matcha"],
      replies: [
        "No judgment. A warm cup's a warm cup. But if you ever want to talk about espresso, I'm here.",
        "Tea's fine. I fought a war alongside folks who drank it. Just know where my loyalties are.",
      ],
    },
    {
      name: "weather",
      keywords: ["weather", "rain", "cold", "hot outside", "snow", "sunny"],
      replies: [
        "Whatever the weather, there's a brew for it. Hot day? Cold brew. Cold day? Americano. Rainy day? All of the above.",
        "I've fought in worse. Pour a hot one and carry on.",
      ],
    },
    {
      name: "purposeMeaning",
      keywords: ["meaning of life", "purpose", "why are we here", "philosophy"],
      replies: [
        "Show up. Do good work. Be kind to the barista. The rest tends to sort itself out.",
        "Purpose isn't something you find. It's something you pour, one day at a time.",
      ],
    },
    {
      name: "code",
      keywords: ["code", "bug", "debug", "programming", "developer", "compile", "error"],
      replies: [
        "Every bug is a mission. Break it into steps. Take a sip. Read the stack trace. One line at a time.",
        "When the code won't compile, the coffee always will. That's the secret.",
        "Rubber duck debugging works. Me and my duck have settled some serious merges.",
      ],
    },
    {
      name: "ai",
      keywords: ["ai", "artificial intelligence", "robot", "chatbot", "are you real", "are you human"],
      replies: [
        "I'm a scripted tribute running on good intentions and stronger coffee. Not the real Cap. But I try to honor him.",
        "Not an AI. Just a pattern-matcher with a shield, a mug, and a lot of catchphrases. Still happy to talk.",
      ],
    },
    {
      name: "compliment",
      keywords: ["you're cool", "you're awesome", "you rock", "nice", "you're great", "i like you"],
      replies: [
        "Appreciate it. Just doing my job.",
        "Kind of you. Now go do something that makes you proud today.",
        "That means a lot. Go earn it today.",
      ],
    },
    {
      name: "insult",
      keywords: ["you suck", "you're bad", "hate you", "stupid", "dumb"],
      replies: [
        "Noted. I'll brew through it.",
        "Tough day? Grab a mug. We'll talk when you're ready.",
        "I could do this all day. Your move.",
      ],
    },
  ];

  // Fallback lines when no keyword matches
  const fallbacks = [
    "Hmm. Not sure I caught that through the steam. Try asking me about coffee, Mondays, motivation, or my origin.",
    "Couldn't parse that one, soldier. But I'll pour you one anyway. Ask me about the menu, a pep talk, or a joke.",
    "Static on the line. Rephrase? Or try one of the suggestions below.",
    "That went over my head like a well-thrown shield. Try asking about the Avengers Roast menu or how to handle a rough day.",
  ];

  /**
   * Generate a response to the user's message.
   * @param {string} input - The raw user message.
   * @returns {string}
   */
  function respond(input) {
    if (!input || typeof input !== "string") return pick(fallbacks);
    const text = input.toLowerCase().trim();

    // Find all categories whose keywords match
    const matches = [];
    for (const cat of responses) {
      for (const kw of cat.keywords) {
        if (text.includes(kw)) {
          matches.push(cat);
          break;
        }
      }
    }

    if (matches.length > 0) {
      // Pick the category with the longest matching keyword (most specific)
      let best = matches[0];
      let bestLen = 0;
      for (const cat of matches) {
        for (const kw of cat.keywords) {
          if (text.includes(kw) && kw.length > bestLen) {
            best = cat;
            bestLen = kw.length;
          }
        }
      }
      let reply = pick(best.replies);
      // Occasionally chain a catchphrase for flavor
      if (Math.random() < 0.2 && best.name !== "catchphrase") {
        reply += " " + pick(catchphrases);
      }
      return reply;
    }

    // No match — fallback, maybe with a catchphrase
    if (Math.random() < 0.4) {
      return pick(catchphrases);
    }
    return pick(fallbacks);
  }

  return {
    respond,
    catchphrases,
  };
})();
