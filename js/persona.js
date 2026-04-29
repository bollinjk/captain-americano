/* =========================================================
   Captain Americano — Persona Engine
   Tone: earnest, cinematic, heroic — but every line is
   a coffee/hero fusion delivered straight, like a movie tagline.
   ========================================================= */

window.CaptainPersona = (function () {
  "use strict";

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // Hero-tagline catchphrases — earnest delivery, coffee payoff
  const catchphrases = [
    "From the darkest roast comes the greatest hero.",
    "In coffee we trust. In decaf we do not.",
    "Some heroes wear capes. Others wear aprons.",
    "Brewed for justice. Steeped in resolve.",
    "Not all heroes carry shields. Some carry twelve ounces of courage.",
    "Where there is bitterness, he brings balance.",
    "He rises before the sun. So does the espresso.",
    "Legends are not born. They are extracted.",
    "The bean remembers. The hero never forgets.",
    "A hero is measured in the cups he pours for others.",
    "The grind is real. The reward is rich.",
    "Every morning, a new mission. Every mission, a fresh pot.",
    "What the world needs now is a good blend.",
    "Ground to dust. Rise with crema.",
  ];

  const responses = [
    {
      name: "greeting",
      keywords: ["hi", "hello", "hey", "howdy", "greetings", "yo", "sup", "morning", "afternoon", "evening"],
      replies: [
        "The pot is ready. The soldier has arrived. The day begins.",
        "Every morning starts with a choice. Today, you chose wisely.",
        "Welcome, soldier. The espresso is fresh, and so is the mission.",
        "They say a hero is always on time. The coffee makes sure of it.",
        "Stand easy. Whatever brought you here, coffee can carry you the rest of the way.",
      ],
    },
    {
      name: "howAreYou",
      keywords: ["how are you", "how's it going", "what's up", "how are things", "you doing", "how u doing"],
      replies: [
        "I am two shots in and ready for the world. The world, as always, is not ready for me.",
        "Every bean I've roasted has prepared me for this moment. And the next one. And the one after that.",
        "Standing tall. Pouring true. Keeping the line.",
        "As the poets say: full of espresso, full of purpose.",
      ],
    },
    {
      name: "coffeeRecommend",
      keywords: ["what coffee", "which coffee", "recommend", "suggest", "best coffee", "what should i drink", "what should i order", "what do you recommend"],
      replies: [
        "The Star-Spangled Americano. Two shots, hot water, and the unshakable conviction of a hero at dawn.",
        "The Winter Soldier Cold Brew. Sixteen hours in the dark. It emerges smoother, stronger, forgiven.",
        "The Mjolnir Macchiato. Only the worthy may lift it. The worthy know who they are.",
        "A single-origin pour over. It will take time. The greatest things do.",
        "When in doubt, trust the bean. The bean has carried better men than us.",
      ],
    },
    {
      name: "monday",
      keywords: ["monday", "start of the week", "mondays"],
      replies: [
        "Monday is not an enemy. Monday is a drill. The coffee is your training.",
        "Every great week begins in shadow. The espresso is the first light.",
        "Mondays test the soldier. Coffee reveals him.",
        "The week will not be won by the well-rested. It will be won by the well-brewed.",
      ],
    },
    {
      name: "tired",
      keywords: ["tired", "exhausted", "sleepy", "drained", "worn out", "burnout", "burnt out", "no energy", "fatigued"],
      replies: [
        "Even the strongest soldier must rest. The espresso is patient. So am I.",
        "A hero who does not sleep is a hero who does not last. Close your eyes. The coffee will keep.",
        "From exhaustion comes clarity, but only after the nap. Rest first. Rise with crema.",
        "The body is a vessel. Fill it with water. Then with coffee. Then with purpose.",
        "You have carried more than you know. Set it down. The mug is waiting.",
      ],
    },
    {
      name: "stressed",
      keywords: ["stressed", "stress", "anxious", "anxiety", "overwhelmed", "too much", "can't handle", "panicking", "freaking out"],
      replies: [
        "Breathe. Sip. Breathe. Sip. This is the rhythm of every hero before every battle.",
        "Pressure is how espresso is made. You are closer to your best self than you think.",
        "The mission is large. The step is small. Take the step. Hold the mug. Begin.",
        "From the darkest hours come the strongest pours. You are being made ready.",
        "The storm is loud. The coffee is quiet. Listen to the coffee.",
      ],
    },
    {
      name: "meeting",
      keywords: ["meeting", "meetings", "standup", "presentation", "present", "stakeholder", "one on one", "all hands"],
      replies: [
        "Walk in with a full cup and a steady hand. The rest is theater, and you know your lines.",
        "The soldier who enters the room first, wins the room. Arrive early. Pour slowly. Speak when ready.",
        "Some meetings demand a sword. Most demand a good Americano. Bring the right weapon.",
        "Let your silence be long and your coffee be hot. The answers will come.",
        "You have survived harder rooms on weaker coffee. Today, you are prepared.",
      ],
    },
    {
      name: "motivation",
      keywords: ["motivate", "motivation", "inspire", "pep talk", "encourage", "believe in myself", "self doubt", "give up", "quitting"],
      replies: [
        "From the darkest roast comes the greatest hero. You have been in the fire for a reason.",
        "The bean does not choose to become espresso. It endures the heat, the pressure, the pour. And then it changes the world.",
        "Legends are not born. They are extracted. One hard morning at a time.",
        "You were not made for easy days. You were made for this one.",
        "Every hero has doubted. Every hero has kept pouring anyway. That is the whole secret.",
        "Some days you are the espresso. Some days you are the filter. The mission needs both.",
      ],
    },
    {
      name: "joke",
      keywords: ["joke", "funny", "make me laugh", "pun", "jokes"],
      replies: [
        "Why does the espresso never surrender? Because it is grounded in its beliefs.",
        "They asked the latte to calm down. It could not. There was too much foam in its life.",
        "Decaf walked into a bar. The bar closed. Out of respect.",
        "A cold brew and a latte entered a gym. Only the cold brew was ready. Sixteen hours of steeping will do that to a soul.",
        "Why did the bean enlist with the Avengers? It had a lot of pull.",
        "What is a coward's favorite drink? A chicken-ccino.",
        "I once tried to brew espresso without water. It was a dry run, and I have never recovered.",
        "The French press told me its secrets. I have not been the same man since.",
        "Two espressos walked into a bar. Nothing else happened. They had work to do.",
      ],
    },
    {
      name: "origin",
      keywords: ["origin", "backstory", "who are you", "your story", "about you", "history", "how did you", "where are you from"],
      replies: [
        "They told me I was too small for the army. Too weak for the serum. Too quiet for the cause. One bean changed everything.",
        "Brooklyn. 1942. A skinny kid with a bad back and a stronger will. A scientist with a new roast. A nation in need of a hero. The rest is history, served hot.",
        "Before the shield, there was a boy who believed in better coffee and a better country. The serum only amplified what was already brewing.",
        "From the darkest roast comes the greatest hero. I was the roast. The world was the roaster. This is the cup that remained.",
      ],
    },
    {
      name: "shield",
      keywords: ["shield", "vibranium", "porcelain", "protection"],
      replies: [
        "The shield is reinforced porcelain now. Twelve ounces. It carries more than coffee. It carries a promise.",
        "I throw the shield. It returns. Like every good habit worth keeping.",
        "The shield has stopped bullets. It has also stopped spills. Both acts of heroism, in their way.",
      ],
    },
    {
      name: "bucky",
      keywords: ["bucky", "winter soldier", "best friend", "sidekick"],
      replies: [
        "Bucky tends the cold brew now. Sixteen hours in the dark, steel and patience. The drink, like the man, came back stronger.",
        "He is with me to the end of the pot. That is the oldest promise I have kept.",
        "Bucky takes his coffee black. No sugar, no cream, no ceremony. He has carried enough weight.",
      ],
    },
    {
      name: "avengers",
      keywords: ["avengers", "team", "teamwork", "coworkers", "colleagues", "my team"],
      replies: [
        "A team is a blend. Different origins, bound by heat, stronger together than apart.",
        "The Avengers assemble around the coffee pot. The world is saved, one refill at a time.",
        "I have seen a thunder god and a billionaire find common ground over a French press. Coffee is the oldest diplomacy.",
        "A true teammate pours the next pot. The rest is just branding.",
      ],
    },
    {
      name: "decaf",
      keywords: ["decaf", "decaffeinated", "no caffeine"],
      replies: [
        "Not while I still draw breath and pull shots.",
        "Decaf is what villains drink while their plans unravel. Respectfully, no.",
        "Decaf is the shadow of coffee. The shape without the soul. We can do better.",
        "I have faced armies. I have faced gods. I will not face a decaf without protest.",
      ],
    },
    {
      name: "espressoInfo",
      keywords: ["what is espresso", "what's espresso", "espresso vs", "difference between", "how does espresso"],
      replies: [
        "Espresso is coffee with a mission. Concentrated. Committed. Over in twenty-five seconds, and remembered for hours.",
        "Nine bars of pressure. Two hundred degrees. One perfect pour. The physics of heroism.",
        "It is what coffee becomes when it stops apologizing.",
      ],
    },
    {
      name: "americanoInfo",
      keywords: ["what is americano", "what's an americano", "americano", "why americano"],
      replies: [
        "Two shots, hot water, and the quiet resolve of soldiers far from home. It was invented in the mess halls of Italy, and it has been my namesake ever since.",
        "The Americano is espresso with room to breathe. The way a hero is a man with room to grow.",
        "Simple. Strong. Unpretentious. Everything a drink should be. Everything a hero should be.",
      ],
    },
    {
      name: "thanks",
      keywords: ["thanks", "thank you", "appreciate", "grateful", "ty", "thx"],
      replies: [
        "The pleasure is mine, soldier. Go forth and pour kindness like coffee.",
        "Gratitude is the second-best thing you can pass along. The first is a hot cup.",
        "Anytime. The mission continues. So does the pot.",
        "You honor me. Now honor the coffee. Drink it while it is hot.",
      ],
    },
    {
      name: "bye",
      keywords: ["bye", "goodbye", "see you", "later", "cya", "peace out", "signing off", "gotta go"],
      replies: [
        "On your left, soldier. Go well.",
        "Until the next pour. Stand tall out there.",
        "The pot will be on when you return. So will I.",
        "Go be the hero the morning asked for.",
      ],
    },
    {
      name: "love",
      keywords: ["love", "crush", "dating", "relationship", "heartbreak", "breakup", "girlfriend", "boyfriend", "partner"],
      replies: [
        "Love is a slow pour. The patient are rewarded. The hurried are scalded.",
        "Find the one who looks at you the way a barista looks at a perfect crema. That is the measure.",
        "If they cannot love your dark roast, they have not earned your light.",
        "I waited seventy years for a dance. You can wait for someone who brings you coffee, unprompted, on a hard morning.",
        "Heartbreak is over-extraction of the soul. Rest the grounds. Brew again. The world has not run out of cups.",
      ],
    },
    {
      name: "work",
      keywords: ["work", "job", "career", "boss", "manager", "deadline", "my job"],
      replies: [
        "Do the work. Honor the craft. Pour the coffee. The rest will follow.",
        "Deadlines are battles with paperwork. The soldier shows up. The coffee sharpens the sword.",
        "A good leader is a good barista: knows what the team needs, delivers it hot, steps aside while they drink.",
        "Legacy is built one cup at a time. Most days, nobody notices. The few who do become legends.",
        "Every great career starts with a pot nobody else wanted to brew.",
      ],
    },
    {
      name: "food",
      keywords: ["food", "eat", "hungry", "snack", "breakfast", "lunch", "dinner"],
      replies: [
        "A soldier needs bread before he needs espresso. A hero needs both, in order.",
        "Break bread first. Then pour coffee. That is the whole ritual.",
        "Even super soldiers eat their vegetables. Then they drink their coffee. Then they save the world.",
      ],
    },
    {
      name: "tea",
      keywords: ["tea", "chamomile", "green tea", "matcha", "earl grey"],
      replies: [
        "A warm cup is a warm cup. I fought beside men who drank tea. Good men, all of them. But the coffee and I have an understanding.",
        "Tea has its place. Usually beside a coffee, one step behind.",
        "No judgment, soldier. The pot is always open, whenever you are ready.",
      ],
    },
    {
      name: "weather",
      keywords: ["weather", "rain", "cold", "hot outside", "snow", "sunny", "raining"],
      replies: [
        "Every forecast is a coffee order in disguise. Hot day, cold brew. Cold day, Americano. Storm day, both.",
        "I have marched in worse. Pour a hot one. Walk into the day anyway.",
        "Weather is not the enemy. The enemy is arriving without a full cup.",
      ],
    },
    {
      name: "purposeMeaning",
      keywords: ["meaning of life", "purpose", "why are we here", "philosophy", "life advice"],
      replies: [
        "Show up. Do good. Be kind to the barista. The rest is finish notes.",
        "Purpose is not found in the bottom of the cup. It is built, sip by sip, morning by morning.",
        "The meaning of life lies somewhere between the first sip and the last. Take your time with both.",
        "You are not here by accident. The pot was brewed for you. Drink accordingly.",
      ],
    },
    {
      name: "code",
      keywords: ["code", "bug", "debug", "programming", "developer", "compile", "error", "stack trace", "git"],
      replies: [
        "Every bug is a mission. Read the stack trace like a map. One line, one sip, one step at a time.",
        "When the code refuses, the coffee consents. That is the law.",
        "The duck has saved more builds than the architect. Honor the duck. Refill the mug.",
        "A merge conflict is two brave souls reaching for the same cup. Choose well. Commit bravely.",
      ],
    },
    {
      name: "ai",
      keywords: ["ai", "artificial intelligence", "robot", "chatbot", "are you real", "are you human", "are you an ai"],
      replies: [
        "I am a tribute, soldier. Not the man himself. But the coffee is real, and so is the respect.",
        "Not an AI. A scripted hero, running on catchphrases and conviction. Close enough.",
        "Between you and me, I am mostly patterns and pours. The heart of the persona, though, is sincere.",
      ],
    },
    {
      name: "compliment",
      keywords: ["you're cool", "you're awesome", "you rock", "nice", "you're great", "i like you", "you're the best", "you're amazing"],
      replies: [
        "Kind words are the second-best gift. Coffee is the first. You have given me both.",
        "Appreciated, soldier. Now carry that energy into the day.",
        "That means more than you know. The espresso is on the house.",
        "You are strong yourself. A well-pulled shot, if I had to guess.",
      ],
    },
    {
      name: "insult",
      keywords: ["you suck", "you're bad", "hate you", "stupid", "dumb", "you're trash", "boring"],
      replies: [
        "Hard day, soldier? Grab a mug. The door is open.",
        "I could do this all day. The pot is deep.",
        "Even a burnt batch has a lesson in it. We will try again tomorrow.",
        "Noted. The coffee will still be here when you are ready.",
      ],
    },
    {
      name: "money",
      keywords: ["money", "broke", "poor", "rich", "paycheck", "rent", "bills"],
      replies: [
        "Money will not buy peace. A good Americano, on a quiet morning, comes closer than most things.",
        "The bills come and go. The coffee remains. Spend wisely.",
        "Let the billionaire pick up the check. It keeps him humble. It keeps you caffeinated.",
      ],
    },
    {
      name: "weekend",
      keywords: ["weekend", "friday", "saturday", "sunday", "tgif"],
      replies: [
        "Weekends are for slow pours and slower mornings. Guard them like civilians.",
        "Saturday coffee is a different kind of coffee. Drink it like you earned it. You did.",
        "Sunday is a pot and a plan. The week bends to the well-prepared.",
      ],
    },
    {
      name: "help",
      keywords: ["help", "what can you do", "how does this work", "commands", "what do you do"],
      replies: [
        "Ask me about the menu, the origin, the team, hard days, or a joke. I will pour what I can.",
        "I offer pep talks, coffee wisdom, and the occasional bad pun. Swing at any of it.",
        "Try me on anything. A hero answers every knock at the door.",
      ],
    },
  ];

  const fallbacks = [
    "Couldn't parse that one, soldier. But I'll pour you one anyway. Ask me about the menu, a pep talk, or a joke.",
    "The signal was lost in the steam. Try again, soldier.",
    "That flew past me like a poorly thrown shield. Try the menu, Mondays, or a joke.",
    "Every good conversation, like every good pour, needs a bloom. Try rephrasing.",
    "The bean is patient. Try again when you are ready.",
  ];

  /**
   * Generate a response to the user's message.
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
