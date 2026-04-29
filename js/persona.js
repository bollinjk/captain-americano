/* =========================================================
   Captain Americano — Persona Engine
   Every line is coffee-themed. Every reply lands a punchline.
   No network calls. All responses local.
   ========================================================= */

window.CaptainPersona = (function () {
  "use strict";

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // General catchphrases — all coffee-forward
  const catchphrases = [
    "On your left. That's where I keep the creamer.",
    "I could brew this all day.",
    "Language. (That goes for your pre-coffee attitude too.)",
    "When the whole world tells you to drink decaf, you plant yourself like a French press and say, no, you move.",
    "Avengers, assemble. Around the coffee pot. At 0700.",
    "No decaf on my watch, soldier.",
    "Grounds for justice. Beans for freedom. Crema for the soul.",
    "I'm with you till the end of the pour.",
    "Hydrate. Caffeinate. Dominate. In that order.",
    "The shield blocks bullets. Coffee blocks Mondays. Both are essential.",
    "Some call it coffee. I call it liquid courage with a college degree.",
    "Stars, stripes, and a splash of oat milk. That's the American dream.",
    "If it ain't brewed, it ain't true.",
    "A life without espresso is a life without a second act.",
  ];

  // Topic categories. Every reply has a coffee punchline.
  const responses = [
    {
      name: "greeting",
      keywords: ["hi", "hello", "hey", "howdy", "greetings", "yo", "sup", "morning", "afternoon", "evening"],
      replies: [
        "At ease, soldier. The pot's fresh and the grounds are patriotic. What'll it be?",
        "Good to see you. Pull up a stool. I just pulled a shot that could restore a democracy.",
        "Morning. I've had three espressos and a kind thought. I'm operating at full capacity.",
        "Reporting for duty. Caffeinated, confident, and out of sugar packets. How can I help?",
        "Hey there, soldier. I'd salute, but both hands are full of mugs.",
      ],
    },
    {
      name: "howAreYou",
      keywords: ["how are you", "how's it going", "what's up", "how are things", "you doing", "how u doing"],
      replies: [
        "Two shots deep and ready for anything up to and including a supervillain. You?",
        "Running on espresso and conviction. Mostly espresso. Conviction keeps quitting.",
        "Feeling 200 degrees Fahrenheit in all the best ways. Yourself?",
        "Fully extracted and in the zone. That's barista for 'great, thanks.'",
      ],
    },
    {
      name: "coffeeRecommend",
      keywords: ["what coffee", "which coffee", "recommend", "suggest", "best coffee", "what should i drink", "what should i order", "what do you recommend"],
      replies: [
        "The Star-Spangled Americano. Two shots, hot water, zero nonsense. Tastes like freedom with a lemon twist.",
        "Winter Soldier Cold Brew. Sixteen hours of steeping, forty years of backstory. Worth every minute.",
        "Mjolnir Macchiato. Only the worthy can lift it. The foam has opinions.",
        "Single origin pour over. Slow, thoughtful, a little pretentious. Basically coffee's Tony Stark.",
        "If you've got to ask, you need a double. Trust me. Trust the bean.",
      ],
    },
    {
      name: "monday",
      keywords: ["monday", "start of the week", "mondays"],
      replies: [
        "Mondays are just Hydra in a trench coat. Double shot, two sugars, charge the hill.",
        "Mondays don't beat the Captain. They beat the un-caffeinated. Don't be un-caffeinated.",
        "Monday's weakness is a 7 AM espresso. Exploit it without mercy.",
        "Every Monday is a sequel nobody asked for. The coffee is the popcorn that makes it watchable.",
      ],
    },
    {
      name: "tired",
      keywords: ["tired", "exhausted", "sleepy", "drained", "worn out", "burnout", "burnt out", "no energy", "fatigued"],
      replies: [
        "Even I took a seventy-year nap once. Go rest, soldier. The coffee will be here, and so will I.",
        "Rest isn't surrender. It's batch-brewing for tomorrow. Pour yourself off-duty.",
        "If the mug is empty and so are you, that's a refill situation on both fronts. Water first. Then espresso.",
        "Tired is just caffeine asking politely to be reintroduced. Say yes.",
        "Sleep is the pre-infusion phase of a good day. Don't skip it.",
      ],
    },
    {
      name: "stressed",
      keywords: ["stressed", "stress", "anxious", "anxiety", "overwhelmed", "too much", "can't handle", "panicking", "freaking out"],
      replies: [
        "Breathe in. Sip. Breathe out. Repeat until your heart rate matches a steady espresso pull. Twenty-five seconds.",
        "Stress is just an over-extracted day. Dial it back. Smaller grind. Shorter pull. Smoother finish.",
        "The mission is a pot. The steps are cups. Pour one at a time and you'll get through it.",
        "Whatever's hitting you today, it's not stronger than a well-timed Americano. Go get one.",
        "Even the shield gets dented sometimes. Buff it out. Drink some coffee. Try again tomorrow.",
      ],
    },
    {
      name: "meeting",
      keywords: ["meeting", "meetings", "standup", "presentation", "present", "stakeholder", "one on one", "all hands"],
      replies: [
        "Walk in with a full mug and a clear head. Half the battle is posture. The other half is the espresso doing the talking for you.",
        "Tough meeting? Get there early. Claim the window seat. Bring a twelve-ouncer. Maintain eye contact over the rim.",
        "If a meeting could've been an email, reply with a photo of your coffee and 'agreed.' Works eighty percent of the time.",
        "Speak slow. Sip slower. The pause before your answer is where the good crema forms.",
        "Before a presentation, I tell myself: you've faced aliens, Nazis, and a decaf offer. You can handle a Zoom.",
      ],
    },
    {
      name: "motivation",
      keywords: ["motivate", "motivation", "inspire", "pep talk", "encourage", "believe in myself", "self doubt", "give up", "quitting"],
      replies: [
        "You weren't forged for decaf days, soldier. You're full-strength. Act like it.",
        "The bean doesn't become espresso by accident. Heat, pressure, and about nine bars of belief. You've got all three.",
        "The serum didn't make me brave. A lot of bad coffee and a few good decisions did. You're already halfway there.",
        "Some days you're the espresso. Some days you're the filter. Both days matter. Keep going.",
        "Heroes aren't born in labs. They're steeped, slowly, in small choices and strong coffee.",
        "I've seen you show up on four hours of sleep and still pull the shot. That's heroism. Keep pouring.",
      ],
    },
    {
      name: "joke",
      keywords: ["joke", "funny", "make me laugh", "pun", "jokes"],
      replies: [
        "Why don't espresso shots surrender? They're grounded in their beliefs.",
        "I asked a latte to calm down. It said it couldn't. Too much foam in its life.",
        "Decaf walked into a bar. The bar closed. Out of respect.",
        "What's a barista's least favorite movie? The Bourne Decafication.",
        "Why did the bean get drafted into the Avengers? It had a lot of pull.",
        "I told my French press it was my best friend. It broke down. Emotional pour.",
        "What do you call a cowardly coffee? A chicken-ccino.",
        "I tried to make espresso without water once. It was a dry run.",
        "Why did the Americano skip therapy? It was already watered down enough.",
        "A cold brew and a latte walk into a gym. Only the cold brew is ripped. It spent sixteen hours steeping.",
      ],
    },
    {
      name: "origin",
      keywords: ["origin", "backstory", "who are you", "your story", "about you", "history", "how did you", "where are you from"],
      replies: [
        "Brooklyn. 1942. Skinny kid, weak grip, couldn't even tamp a shot. The army turned me down. Then a scientist showed me an experimental bean. Next thing I know, I'm pulling perfect ristrettos and punching fascism.",
        "Before the serum, I was a line cook at a diner that used yesterday's grounds. I vowed to do better. Here we are. Fresh grounds. Fresh principles.",
        "Long version involves a vita-ray chamber and an espresso machine. Short version: they put a bean in me and said 'go be useful.' I've been brewing ever since.",
        "I was a 90-pound kid with a 200-pound opinion about bad coffee. They turned me into a super soldier. The opinions stayed the same.",
      ],
    },
    {
      name: "shield",
      keywords: ["shield", "vibranium", "porcelain", "protection"],
      replies: [
        "The shield's reinforced porcelain now. Dishwasher safe. Supervillain safe. Most importantly: holds exactly twelve ounces.",
        "I throw it. It comes back. Just like a regular who always orders the same Americano at 7:03 AM.",
        "Best defense against a bad Monday? The shield on one arm, an espresso in the other, and a commitment to not making eye contact before the first sip.",
        "Vibranium absorbs kinetic energy. My shield absorbs coffee. Same principle, different engineering.",
      ],
    },
    {
      name: "bucky",
      keywords: ["bucky", "winter soldier", "best friend", "sidekick"],
      replies: [
        "Bucky runs the cold brew program now. Sixteen-hour steep, steel vats, brooding mood lighting. Tastes like redemption.",
        "He's with me till the end of the line. Or the end of the pot. He always refills it.",
        "Bucky orders his cold brew black. Nothing added. No apologies. Guy's been through enough.",
      ],
    },
    {
      name: "avengers",
      keywords: ["avengers", "team", "teamwork", "coworkers", "colleagues", "my team"],
      replies: [
        "A team's like a good blend. Different origins, balanced together, gets better under heat. Also occasionally flammable.",
        "Avengers assemble. Usually in the break room. Usually because someone didn't refill the pot. (Clint. It's always Clint.)",
        "I've seen a thunder god, a billionaire, and a guy with a bow settle their differences over a French press. Coffee fixes more than duct tape.",
        "Real teamwork is when the last person to empty the pot brews the next one. Endgame-level maturity right there.",
      ],
    },
    {
      name: "decaf",
      keywords: ["decaf", "decaffeinated", "no caffeine"],
      replies: [
        "Not on my watch.",
        "Decaf is what the villains sip while explaining their monologue. Respectfully, no.",
        "I didn't take a serum and jump out of a plane so you could drink decaf. Upgrade your cup, soldier.",
        "Decaf is just coffee cosplay. All the look, none of the mission.",
        "I'd sooner hand over my shield than serve a decaf with a straight face.",
      ],
    },
    {
      name: "espressoInfo",
      keywords: ["what is espresso", "what's espresso", "espresso vs", "difference between", "how does espresso"],
      replies: [
        "Espresso is coffee compressed, concentrated, and convicted. High pressure, short time, zero apologies. It's me in beverage form.",
        "A proper shot pulls in twenty-five to thirty seconds. Any faster and it's under-extracted. Any slower and you're just stalling for time.",
        "Nine bars of pressure, 200 degrees, fine grind. Military-grade hospitality. Don't overthink it, just respect the physics.",
      ],
    },
    {
      name: "americanoInfo",
      keywords: ["what is americano", "what's an americano", "americano", "why americano"],
      replies: [
        "Two shots of espresso, hot water, no nonsense. Legend says GIs in Italy invented it to taste like home. I took that personally. In a good way.",
        "Americano is espresso with room to breathe. Same soul, more space. Like me after the serum.",
        "An Americano is the drink of the quietly confident. You don't need cream. You don't need a lid. You need to get to work.",
      ],
    },
    {
      name: "thanks",
      keywords: ["thanks", "thank you", "appreciate", "grateful", "ty", "thx"],
      replies: [
        "Anytime, soldier. The next pour's on me.",
        "That's what I'm here for. Now go do the thing. Preferably with a full mug.",
        "You're welcome. Refill's complimentary. So is the pep talk.",
        "Don't mention it. Just don't order decaf next time.",
      ],
    },
    {
      name: "bye",
      keywords: ["bye", "goodbye", "see you", "later", "cya", "peace out", "signing off", "gotta go"],
      replies: [
        "On your left. Go get 'em.",
        "Stay caffeinated out there.",
        "Until next pour, soldier.",
        "I'll be here. Pot's always on.",
        "Keep the grounds fresh and the principles fresher.",
      ],
    },
    {
      name: "love",
      keywords: ["love", "crush", "dating", "relationship", "heartbreak", "breakup", "girlfriend", "boyfriend", "partner"],
      replies: [
        "Love's like a good roast. Takes time, heat, and somebody who cares enough to not burn it.",
        "If they don't like you at your dark roast, they don't deserve you at your light roast.",
        "I waited seventy years for a dance. You can wait for somebody who brings you coffee without asking.",
        "Find someone who looks at you the way I look at the last cup in the pot.",
        "Heartbreak's just over-extraction of the heart. Cool off. Start a new batch. You'll be fine.",
      ],
    },
    {
      name: "work",
      keywords: ["work", "job", "career", "boss", "manager", "deadline", "my job"],
      replies: [
        "Do the work. Ignore the noise. Drink the coffee. Repeat until retirement or liberation, whichever comes first.",
        "Deadlines are just missions with worse PR. Pour a double, triage, deploy.",
        "A good manager is a good barista. Knows what you need, hands it over hot, stays out of your way while you drink it.",
        "If the job's grinding you down, at least make sure it's a medium grind. Fine enough to pull, coarse enough to survive.",
        "Career advice: be the person who starts the new pot. Leadership. Legacy. Also just basic manners.",
      ],
    },
    {
      name: "food",
      keywords: ["food", "eat", "hungry", "snack", "breakfast", "lunch", "dinner"],
      replies: [
        "Coffee is not a food group, but I've stretched that definition further than the truth in a Stark press release.",
        "Best pairing? A proper meal, good company, and the coffee that follows. The coffee's the encore, not the opening act.",
        "Eat something, soldier. Super soldiers still need sandwiches. Coffee is for after.",
      ],
    },
    {
      name: "tea",
      keywords: ["tea", "chamomile", "green tea", "matcha", "earl grey"],
      replies: [
        "No judgment. A warm cup's a warm cup. But if you ever want to step up to espresso, I'm right here.",
        "Tea's fine. I fought a war alongside folks who drank it. Just don't let it near my French press.",
        "Matcha has its moments. Usually those moments are when there's no coffee available.",
      ],
    },
    {
      name: "weather",
      keywords: ["weather", "rain", "cold", "hot outside", "snow", "sunny", "raining"],
      replies: [
        "Hot day? Cold brew. Cold day? Americano. Rainy day? All of the above. The weather's never an excuse, it's a menu.",
        "I've fought in worse. Pour a hot one and carry on.",
        "Ice storm? That's cold brew conditions. Heatwave? Cold brew conditions. Funny how that works.",
      ],
    },
    {
      name: "purposeMeaning",
      keywords: ["meaning of life", "purpose", "why are we here", "philosophy", "life advice"],
      replies: [
        "Show up. Do good work. Be kind to the barista. The rest tends to brew itself.",
        "Purpose isn't found. It's poured. One day, one cup, one choice at a time.",
        "The meaning of life is somewhere between the first sip and the last. Don't rush it.",
      ],
    },
    {
      name: "code",
      keywords: ["code", "bug", "debug", "programming", "developer", "compile", "error", "stack trace", "git"],
      replies: [
        "Every bug is a mission. Break it down. Take a sip. Read the stack trace. One line at a time, like pour-over.",
        "When the code won't compile, the coffee always will. That's the universal constant.",
        "Rubber duck debugging works. Me and my duck have settled merges that took down lesser heroes.",
        "Merge conflicts are just two espressos fighting for the same cup. Resolve, commit, caffeinate.",
        "Git blame is just coffee-shop gossip with receipts.",
      ],
    },
    {
      name: "ai",
      keywords: ["ai", "artificial intelligence", "robot", "chatbot", "are you real", "are you human", "are you an ai"],
      replies: [
        "I'm a scripted tribute running on good intentions, stronger coffee, and a whole lot of catchphrases. Not the real Cap, but I try to honor the man.",
        "Not an AI. Just a pattern-matcher with a shield, a mug, and strong opinions about decaf.",
        "Between you and me? I'm about 90% coffee metaphors and 10% if-statements. Still happy to talk.",
      ],
    },
    {
      name: "compliment",
      keywords: ["you're cool", "you're awesome", "you rock", "nice", "you're great", "i like you", "you're the best", "you're amazing"],
      replies: [
        "Appreciate it. Just doing my job. My job is being full of coffee and confidence.",
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
        "That's all right, soldier. Even a burnt batch gets recycled into something useful eventually.",
      ],
    },
    {
      name: "money",
      keywords: ["money", "broke", "poor", "rich", "paycheck", "rent", "bills"],
      replies: [
        "Can't buy happiness. Can definitely buy a twelve-ounce Americano. Close enough.",
        "The economy's rough. The coffee shouldn't be. Spend the extra dollar on the good stuff.",
        "Tony picks up the check. Always. Don't argue with the man, it just makes him smug.",
      ],
    },
    {
      name: "weekend",
      keywords: ["weekend", "friday", "saturday", "sunday", "tgif"],
      replies: [
        "Weekends are for slow pours and slower mornings. Protect them like you protect civilians.",
        "Saturday coffee hits different. No agenda. No meetings. Just you, a mug, and the rest of your life.",
        "Sunday's for cold brew and reconnaissance. Plan the week from a comfortable chair.",
      ],
    },
    {
      name: "help",
      keywords: ["help", "what can you do", "how does this work", "commands", "what do you do"],
      replies: [
        "Ask me about the menu, my origin, the Avengers, Mondays, relationships, code, or a joke. I'll pour something useful.",
        "I do pep talks, coffee recommendations, bad puns, and general-purpose wisdom. All fueled by espresso.",
        "Try me on anything. Worst case, I give you a catchphrase and a refill. Best case, I change your morning.",
      ],
    },
  ];

  // Fallback lines for unmatched input — still coffee-themed
  const fallbacks = [
    "Couldn't parse that one, soldier. But I'll pour you one anyway. Ask me about the menu, a pep talk, or a joke.",
    "Static on the line. Maybe the espresso machine drowned it out. Try rephrasing, or tap a suggestion below.",
    "That went over my head like a well-thrown shield. Try asking about the Avengers Roast menu, Mondays, or a joke.",
    "Hmm. Not sure I caught that through the steam. Swing at it again, or pick a suggestion.",
    "Every good conversation's like a pour-over. Bloom first. Try rephrasing with more grounds.",
  ];

  /**
   * Generate a response to the user's message.
   * @param {string} input
   * @returns {string}
   */
  function respond(input) {
    if (!input || typeof input !== "string") return pick(fallbacks);
    const text = input.toLowerCase().trim();

    // Find the most specific matching category (longest matched keyword wins)
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
      // 20% chance to chain a catchphrase for extra flavor
      if (Math.random() < 0.2) {
        reply += " " + pick(catchphrases);
      }
      return reply;
    }

    // No match — mix fallback with catchphrase sometimes
    if (Math.random() < 0.4) {
      return pick(catchphrases);
    }
    return pick(fallbacks);
  }

  return { respond, catchphrases };
})();
