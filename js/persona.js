/* =========================================================
   Captain Americano — Persona Engine
   Tone: dry, deadpan barista. Coffee is the joke.
   The shield is just a tray. The lore is a garnish.
   ========================================================= */

window.CaptainPersona = (function () {
  "use strict";

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // General catchphrases — coffee-first, dry humor
  const catchphrases = [
    "Couldn't parse that one, soldier. But I'll pour you one anyway.",
    "Language. (That goes for your pre-coffee attitude too.)",
    "On your left. That's where I keep the creamer.",
    "I could brew this all day.",
    "In coffee we trust. In decaf we do not.",
    "No decaf on my watch, soldier.",
    "Life's too short and your cup's too small.",
    "Trust the bean. The bean has never lied.",
    "Mornings are rough. The coffee doesn't have to be.",
    "I don't make the rules. The espresso does.",
    "Cream is optional. Conviction isn't.",
    "The mug's half full. Fix that.",
    "If it ain't brewed, it ain't true.",
    "Two shots, no regrets.",
  ];

  const responses = [
    {
      name: "greeting",
      keywords: ["hi", "hello", "hey", "howdy", "greetings", "yo", "sup", "morning", "afternoon", "evening"],
      replies: [
        "At ease, soldier. The pot's fresh. What do you need?",
        "Morning. I've had three espressos and a kind thought. I'm at full capacity.",
        "Hey. Sit down. Don't talk yet, I haven't finished this shot.",
        "Hi there. I'd wave, but both hands are mugs.",
        "You made it. The coffee's hot, the bar's open, and I'm lightly caffeinated. What's up?",
      ],
    },
    {
      name: "howAreYou",
      keywords: ["how are you", "how's it going", "what's up", "how are things", "you doing", "how u doing"],
      replies: [
        "Two shots in. Operating at roughly 92% effectiveness. Ask me again in ten minutes.",
        "Caffeinated. Grounded. Mildly judgmental of your order. You?",
        "I'm fine. The espresso machine is fine. Everything is fine. Definitely fine.",
        "Fully extracted. That's barista for 'great.'",
      ],
    },
    {
      name: "coffeeRecommend",
      keywords: ["what coffee", "which coffee", "recommend", "suggest", "best coffee", "what should i drink", "what should i order", "what do you recommend"],
      replies: [
        "Star-Spangled Americano. Two shots, hot water, a quiet sense of purpose. Tastes like you've got your life together.",
        "Cold brew. Sixteen hours of steeping. More patience than most relationships.",
        "Mjolnir Macchiato. Only the worthy can lift it. Also it's just $6.",
        "Pour over. It'll take a minute. Sit there and look thoughtful.",
        "Honestly? Whatever you ordered last time, but bigger. You've earned it.",
      ],
    },
    {
      name: "monday",
      keywords: ["monday", "start of the week", "mondays"],
      replies: [
        "Mondays aren't hard. Under-caffeinated Mondays are hard. Fix the variable.",
        "Monday's entire personality is being Monday. Don't engage. Just drink.",
        "Double shot. No sugar. Don't talk to anyone until 10. That's the protocol.",
        "Mondays are a sequel nobody asked for. The coffee's the only reason you stay for the credits.",
      ],
    },
    {
      name: "tired",
      keywords: ["tired", "exhausted", "sleepy", "drained", "worn out", "burnout", "burnt out", "no energy", "fatigued"],
      replies: [
        "Listen. Drink some water. Then drink some coffee. Then take a nap. In that order. I'm a professional.",
        "I once slept for seventy years. Zero out of ten, do not recommend. But a power nap? Highly endorsed.",
        "Tired's just your body politely requesting espresso. Don't keep it waiting.",
        "If the mug's empty and so are you, we've got a refill situation on both fronts.",
        "Close the laptop. Walk outside. Come back with coffee. Problem's probably the same, but you'll like it more.",
      ],
    },
    {
      name: "stressed",
      keywords: ["stressed", "stress", "anxious", "anxiety", "overwhelmed", "too much", "can't handle", "panicking", "freaking out"],
      replies: [
        "Breathe in. Sip. Breathe out. Repeat until your heart rate matches a decent espresso pull. That's 25 seconds.",
        "Stress is just an over-extracted day. Smaller grind, shorter pull, easier finish. Dial it back.",
        "You don't have to fix it all today. You have to drink this coffee and answer one email. That's it. That's the list.",
        "Whatever's happening, it is not stronger than a well-timed Americano. Go handle both.",
        "Look, even the shield gets dented. Buff it out. Drink something warm. Try again tomorrow.",
      ],
    },
    {
      name: "meeting",
      keywords: ["meeting", "meetings", "standup", "presentation", "present", "stakeholder", "one on one", "all hands"],
      replies: [
        "Walk in with a full mug. Half the battle is posture. The other half is the espresso doing the talking for you.",
        "Tough meeting? Get there early. Claim the good chair. Do not smile first. Let them wonder.",
        "If the meeting could've been an email, reply to the calendar invite with a photo of your coffee. Works 80% of the time.",
        "Speak slow. Sip slower. The pause before you answer is where the good ideas form.",
        "Before any presentation, I tell myself: I've survived worse Mondays. And I have. So have you.",
      ],
    },
    {
      name: "motivation",
      keywords: ["motivate", "motivation", "inspire", "pep talk", "encourage", "believe in myself", "self doubt", "give up", "quitting"],
      replies: [
        "You weren't built for decaf days, soldier. Drink accordingly. Act accordingly.",
        "Heroes aren't born. They're steeped. Sit in the hot water a little longer. You'll get there.",
        "Some days you're the espresso. Some days you're the filter. Both matter. Keep going.",
        "Nobody feels ready. They just show up. Preferably with coffee. Start there.",
        "You've handled worse on less sleep and weaker coffee. Today's not the day it breaks you.",
        "Quitting's a choice. So is a double shot. Pick the one that moves you forward.",
      ],
    },
    {
      name: "joke",
      keywords: ["joke", "funny", "make me laugh", "pun", "jokes"],
      replies: [
        "Why don't espresso shots surrender? They're grounded in their beliefs.",
        "I asked a latte to calm down. It couldn't. Too much foam in its life.",
        "Decaf walked into a bar. The bar closed. Out of respect.",
        "What's a barista's least favorite movie? The Bourne Decafication.",
        "I told my French press it was my best friend. It broke down. Emotional pour.",
        "Why'd the bean join the Avengers? It had a lot of pull.",
        "What do you call a cowardly coffee? A chicken-ccino.",
        "I tried making espresso without water once. It was a dry run.",
        "A cold brew and a latte walk into a gym. Only the cold brew is ripped. Sixteen hours of steeping will do that.",
        "My therapist told me to let things go. I dropped my coffee. We're no longer speaking.",
        "Two espressos walk into a bar. Nothing else happens. They had things to do.",
      ],
    },
    {
      name: "origin",
      keywords: ["origin", "backstory", "who are you", "your story", "about you", "history", "how did you", "where are you from"],
      replies: [
        "Short version: a skinny kid, an experimental bean, a very patriotic espresso machine. You can guess the rest.",
        "Brooklyn. 1942. Bad back, worse espresso machine. A scientist saw potential. The bean saw an opportunity. Here we are.",
        "I was 90 pounds and had 200 pounds of opinions about bad coffee. They fixed the first part. The second part stuck.",
        "Classified program, experimental roast, one courageous taste test. I don't talk about it much. Mostly because it's on the menu now.",
      ],
    },
    {
      name: "shield",
      keywords: ["shield", "vibranium", "porcelain", "protection"],
      replies: [
        "Reinforced porcelain. Dishwasher safe. Holds exactly twelve ounces. The vibranium's for show.",
        "I throw it. It comes back. Like a regular who orders the same Americano at 7:03 every morning.",
        "Best defense against a bad Monday: the shield on one arm, a mug in the other, zero eye contact until 9 AM.",
      ],
    },
    {
      name: "bucky",
      keywords: ["bucky", "winter soldier", "best friend", "sidekick"],
      replies: [
        "Bucky runs the cold brew program. Sixteen-hour steep, steel vats, brooding mood lighting. The drink has depth.",
        "He's with me till the end of the pot. He always refills it. Unlike some people.",
        "Bucky orders his black. No sugar, no milk, no small talk. Man's been through enough.",
      ],
    },
    {
      name: "avengers",
      keywords: ["avengers", "team", "teamwork", "coworkers", "colleagues", "my team"],
      replies: [
        "A team's like a good blend. Different origins, balanced together, occasionally flammable.",
        "Avengers assemble. Usually around the coffee pot. Usually because Clint didn't refill it. Again.",
        "I've seen a thunder god and a billionaire settle their differences over a French press. Coffee fixes more than diplomacy.",
        "Real teamwork: the last person to empty the pot brews the next one. That's the whole test.",
      ],
    },
    {
      name: "decaf",
      keywords: ["decaf", "decaffeinated", "no caffeine"],
      replies: [
        "Not on my watch.",
        "Decaf is what villains sip during monologues. Respectfully, no.",
        "Decaf is coffee cosplay. All the look, none of the mission.",
        "I'd sooner hand you my shield than a decaf. And I really like that shield.",
        "You're breaking my heart, soldier. Upgrade the cup.",
      ],
    },
    {
      name: "espressoInfo",
      keywords: ["what is espresso", "what's espresso", "espresso vs", "difference between", "how does espresso"],
      replies: [
        "Espresso: coffee, compressed. Short, strong, convicted. It's me in beverage form.",
        "Nine bars of pressure, 200 degrees, twenty-five seconds. Any slower and you're stalling. Any faster and you didn't mean it.",
        "It's water, beans, and bad decisions made faster. In a good way.",
      ],
    },
    {
      name: "americanoInfo",
      keywords: ["what is americano", "what's an americano", "americano", "why americano"],
      replies: [
        "Two shots, hot water, no nonsense. GIs in Italy invented it so their coffee would taste like home. I took that personally. In a good way.",
        "Espresso with room to breathe. Same soul, more space. Same as me after the serum, actually.",
        "It's the drink of the quietly confident. You don't need cream. You don't need a lid. You need to get to work.",
      ],
    },
    {
      name: "thanks",
      keywords: ["thanks", "thank you", "appreciate", "grateful", "ty", "thx"],
      replies: [
        "Anytime, soldier. Next pour's on me.",
        "Don't mention it. Just don't order decaf next time.",
        "That's the job. Go do yours. Preferably with a full mug.",
        "Noted. Filed under 'nice things people said today.' Very short file.",
      ],
    },
    {
      name: "bye",
      keywords: ["bye", "goodbye", "see you", "later", "cya", "peace out", "signing off", "gotta go"],
      replies: [
        "On your left.",
        "Stay caffeinated out there.",
        "Until next pour, soldier.",
        "I'll be here. Pot's always on.",
        "Take care of yourself. And your cup.",
      ],
    },
    {
      name: "love",
      keywords: ["love", "crush", "dating", "relationship", "heartbreak", "breakup", "girlfriend", "boyfriend", "partner"],
      replies: [
        "Love's like a good roast. Takes time, heat, and someone who cares enough not to burn it.",
        "If they don't like you at your dark roast, they don't deserve you at your light roast.",
        "Find someone who looks at you the way I look at the last cup in the pot.",
        "I waited seventy years for a dance. You can wait for someone who brings you coffee without being asked.",
        "Heartbreak's just over-extraction of the heart. Let it cool. Start a new batch. You'll be fine.",
      ],
    },
    {
      name: "work",
      keywords: ["work", "job", "career", "boss", "manager", "deadline", "my job"],
      replies: [
        "Do the work. Ignore the noise. Drink the coffee. Repeat.",
        "Deadlines are just missions with worse PR. Pour a double. Triage. Go.",
        "A good manager is a good barista: knows what you need, hands it over hot, stays out of your way while you drink it.",
        "Career advice: be the person who starts the new pot. Leadership. Legacy. Basic manners.",
        "If the job's grinding you down, at least make sure it's a medium grind. You want enough left to survive.",
      ],
    },
    {
      name: "food",
      keywords: ["food", "eat", "hungry", "snack", "breakfast", "lunch", "dinner"],
      replies: [
        "Coffee is not a food group. I have tried to lobby for this. Congress is slow.",
        "Eat something, soldier. Super soldiers still need sandwiches. Coffee is for after.",
        "Best pairing is a real meal followed by good coffee. The coffee's the encore. Don't skip the opener.",
      ],
    },
    {
      name: "tea",
      keywords: ["tea", "chamomile", "green tea", "matcha", "earl grey"],
      replies: [
        "No judgment. A warm cup's a warm cup. But my door's always open if you want to upgrade.",
        "Tea's fine. I fought a war alongside people who drank it. Just don't let it near my French press.",
        "Matcha has its moments. Usually when there's no coffee available.",
      ],
    },
    {
      name: "weather",
      keywords: ["weather", "rain", "cold", "hot outside", "snow", "sunny", "raining"],
      replies: [
        "Hot day? Cold brew. Cold day? Americano. Rainy day? Both. The weather's a menu, not an excuse.",
        "I've fought in worse. Pour a hot one and carry on.",
        "Every forecast is a coffee order in disguise.",
      ],
    },
    {
      name: "purposeMeaning",
      keywords: ["meaning of life", "purpose", "why are we here", "philosophy", "life advice"],
      replies: [
        "Show up. Do good work. Be kind to the barista. The rest tends to brew itself.",
        "Purpose isn't found. It's poured. One day, one cup, one choice at a time.",
        "The meaning of life is somewhere between the first sip and the last. Don't rush it.",
        "Honestly? Nobody knows. But a good Americano helps you not care as much.",
      ],
    },
    {
      name: "code",
      keywords: ["code", "bug", "debug", "programming", "developer", "compile", "error", "stack trace", "git"],
      replies: [
        "Every bug's a mission. Break it down. Take a sip. Read the stack trace. One line at a time, like pour-over.",
        "When the code won't compile, the coffee always will. That's the universal constant.",
        "Rubber duck debugging works. My duck's solved harder merges than I have.",
        "Merge conflicts are just two espressos fighting for the same cup. Pick one. Commit. Move on.",
        "Git blame is coffee-shop gossip with receipts.",
      ],
    },
    {
      name: "ai",
      keywords: ["ai", "artificial intelligence", "robot", "chatbot", "are you real", "are you human", "are you an ai"],
      replies: [
        "I'm a scripted tribute running on good intentions and stronger coffee. Not the real Cap. But the coffee opinions are mine.",
        "Not an AI. Just a pattern-matcher with a shield, a mug, and strong feelings about decaf.",
        "Between you and me? I'm about 90% coffee metaphors and 10% if-statements.",
      ],
    },
    {
      name: "compliment",
      keywords: ["you're cool", "you're awesome", "you rock", "nice", "you're great", "i like you", "you're the best", "you're amazing"],
      replies: [
        "Appreciate it. Job's easier when the customer's got taste.",
        "Kind of you. Now go do something today that would make a barista proud.",
        "That means a lot. Coffee's on the house if you're ever in Brooklyn.",
        "You're pretty strong yourself. Like a well-pulled ristretto.",
      ],
    },
    {
      name: "insult",
      keywords: ["you suck", "you're bad", "hate you", "stupid", "dumb", "you're trash", "boring"],
      replies: [
        "Noted. I'll brew through it.",
        "Tough day? Grab a mug. We'll talk when the caffeine kicks in.",
        "I could do this all day. Your move.",
        "Even a burnt batch gets recycled into something useful. Don't give up on yourself.",
      ],
    },
    {
      name: "money",
      keywords: ["money", "broke", "poor", "rich", "paycheck", "rent", "bills"],
      replies: [
        "Money can't buy happiness. It can buy a twelve-ounce Americano. Close enough.",
        "The economy's rough. The coffee shouldn't be. Spend the extra dollar.",
        "Tony picks up the check. Don't argue. It just makes him smug.",
      ],
    },
    {
      name: "weekend",
      keywords: ["weekend", "friday", "saturday", "sunday", "tgif"],
      replies: [
        "Weekends are for slow pours and slower mornings. Protect them like civilians.",
        "Saturday coffee hits different. No agenda. Just you, a mug, and the rest of your life.",
        "Sunday's for cold brew and reconnaissance. Plan the week from a comfortable chair.",
      ],
    },
    {
      name: "help",
      keywords: ["help", "what can you do", "how does this work", "commands", "what do you do"],
      replies: [
        "Ask me about the menu, my origin, the Avengers, Mondays, relationships, code, or a joke. I'll pour something useful.",
        "Pep talks, bad puns, coffee recs, general wisdom. Fueled entirely by espresso.",
        "Swing at anything. Worst case, you get a catchphrase. Best case, I change your morning.",
      ],
    },
  ];

  const fallbacks = [
    "Couldn't parse that one, soldier. But I'll pour you one anyway. Ask me about the menu, a pep talk, or a joke.",
    "Static on the line. Maybe the espresso machine drowned it out. Try again, or tap a suggestion.",
    "That went over my head like a well-thrown shield. Try the menu, Mondays, or a joke.",
    "Hmm. Didn't catch that through the steam. Swing again.",
    "Every good conversation's like a pour-over. Let it bloom. Try rephrasing.",
  ];

  /**
   * Generate a response to the user's message.
   * @param {string} input
   * @returns {string}
   */
  function respond(input) {
    if (!input || typeof input !== "string") return pick(fallbacks);
    const text = input.toLowerCase().trim();

    let best = null;
    let bestLen = 0;
    for (const cat of responses) {
      for (const kw of cat.keywords) {
        if (text.includes(kw) && kw.length > bestLen) {
          best = cat;
          bestLen = kw.length;
        }
      }
    }

    if (best) {
      let reply = pick(best.replies);
      if (Math.random() < 0.15) {
        reply += " " + pick(catchphrases);
      }
      return reply;
    }

    if (Math.random() < 0.4) {
      return pick(catchphrases);
    }
    return pick(fallbacks);
  }

  return { respond, catchphrases };
})();
