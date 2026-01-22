const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide]?.classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide]?.classList.add('active');
}, 3000);

const faders = document.querySelectorAll('.fade-up');

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

faders.forEach(el => appearOnScroll.observe(el));

document.querySelectorAll('.creator-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('pulse-active');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('pulse-active');
  });
});

// Episode toggle feature
document.querySelectorAll('.ep-card .more').forEach(btn => {
  btn.addEventListener('click', e => {
    const card = e.target.closest('.ep-card');
    card.classList.toggle('active');
    btn.textContent = card.classList.contains('active') ? 'View Less' : 'View More';
  });
});

function runQuiz() {
  const q1 = document.getElementById('q1').value;
  const q2 = document.getElementById('q2').value;
  const resultCard = document.getElementById('resultCard');
  const quizResult = document.getElementById('quizResult');

  let character = {};

  if ((q1 === 'sword' && q2 === 'strategic') || q2 === 'strategic') {
    character = {
      name: 'Parrot',
      role: 'The Strategist',
      img: 'assets/Parrot/front.png',
      desc: 'Calm, tactical, and always two steps ahead — you embody Parrot’s precision and leadership. You care more about others than yourself and always think of the bigger picture. When someone is in danger,  you will do everything in your power to save them because to you, every life is precious and should be protected.'
    };
  } else if (q1 === 'tnt' || q2 === 'explosive') {
    character = {
      name: 'Flame',
      role: 'The Wildcard',
      img: 'assets/Flame/front.png',
      desc: 'You’re explosive and unpredictable — a true agent of chaos like Flame!'
    };
  } else if (q1 === 'pickaxe' || q2 === 'creative') {
    character = {
      name: 'Wemmbu',
      role: 'The Builder',
      img: 'assets/Wemmbu/front.png',
      desc: 'Creative, patient, and precise — you think in blueprints and bring worlds to life.'
    };
  } else {
    character = {
      name: 'Spoke',
      role: 'The Enforcer',
      img: 'assets/Spoke/front.png',
      desc: 'You’re fearless, bold, and thrive in chaos — Spoke would be proud.'
    };
  }

  resultCard.innerHTML = `
    <img src="${character.img}" alt="${character.name}">
    <h4>${character.name}</h4>
    <p><strong>${character.role}</strong></p>
    <p>${character.desc}</p>
  `;

  resultCard.classList.add('show');
  quizResult.scrollIntoView({ behavior: 'smooth' });
}


function characterTurns(isLeft) {
  const activeCharacter = document.getElementById("active-character").alt;

  const images = [
    "assets/" + activeCharacter + "/front.png",
    "assets/" + activeCharacter + "/left.png",
    "assets/" + activeCharacter + "/back.png",
    "assets/" + activeCharacter + "/right.png"
  ]

  const currentImage = document.getElementById("active-character").src;

  let index = 0;
  for (let i = 0; i < images.length; i++) {
    if (currentImage.endsWith(images[i])) {
      index = i;
      break;
    }
  }

  let direction = -1;
  if (isLeft) direction = 1;

  let newIndex = (index + direction + images.length) % images.length;
  document.getElementById("active-character").src = images[newIndex];
}

function closeOverlay() {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
}

/* for character quotes and descriptions */
const characters = {
  'Ash': {
    name: "Ash",
    quote: "“It’s the people we love the most that tear us apart”",
    reference: "(ParrotX2: Unstable SMP: Doomsday)",
    personality: "Personality: calculating, controlling, emotionally manipulative",
    strengths: "Strengths: strategic, precise, calm under pressure",
    weaknesses: "Weaknesses: vulnerable when opposition unites",
    friends: "Friends: Squiddo (lover)",
    allies: "Allies: Clown (tactical alliance)",
    enemies: "Enemies: All on the server",
    motivations: "Motivations: Take over the server to save it",
    arcs: "Arcs: Mafia Arc, Secret Base Arc",
    personalityArc: "Personality Arc: First seen as an innocent player → revealed to be leader of a group called the mafia → mafia rises to power → the mafia falls from the unity of people against it → resorts to living in a private base with his girlfriend"
  },

  'Clown': {
    name: "Clown",
    quote: "“You think I care about reputation?”",
    reference: "(ParrotX2: I Got Hunted by Minecraft’s Deadliest Players)",
    personality: "Personality: dominating, leader of the nether",
    strengths: "Strengths: elite swordsmanship, tactical aggression",
    weaknesses: "Weaknesses: emotional attachment to a small inner circle (Branzy and Ferre)",
    friends: "Friends: Branzy, Ferre",
    allies: "Allies: Ash, Zam",
    enemies: "Enemies: all marked targets",
    motivations: "Motivations: acquire resources and money at all costs",
    arcs: "Arcs: Prisons Arc, Mafia Arc, Treasure Arc",
    personalityArc: "Personality Arc: hired assassin hunting for kills → hired by Ash as an ally for his mafia → became king of the nether"
  },

  'Dean': {
    name: "Dean",
    quote: "“What if you just die, and I'm stuck here, and nobody ever trusts me again.”",
    reference: "(ParrotX2: Unstable SMP: The First War)",
    personality: "Personality: timid, cowardly",
    strengths: "Strengths: funny",
    weaknesses: "Weaknesses: not loyal, constantly betraying",
    friends: "Friends: Parrot",
    allies: "Allies: Wifies",
    enemies: "Enemies: Ash",
    motivations: "Motivations: stay alive",
    arcs: "Arcs: Mafia Arc",
    personalityArc: "Personality Arc: joined mafia → found by Parrot and Wifies → joined them on missions → secretly leaking location → found out by Wifies → found out by Parrot → kicked out of friend group → joined back into the mafia → betrayed mafia → killed by Parrot (unknowingly)"
  },

  'Derapchu': {
    name: "Derapchu",
    quote: "“Whenever you mess up, nobody cares. Whenever I mess up, that’s literally what everyone remembers me for”",
    reference: "(ParrotX2: I Got Hunted by a Minecraft Redstone Genius)",
    personality: "Personality: defensive",
    strengths: "Strengths: loyal, hardworking",
    weaknesses: "Weaknesses: self-doubt, low self confidence",
    friends: "Friends: Leo, Jumper, Nufuli, Parrot",
    allies: "Allies: Woogie, Ro",
    enemies: "Enemies: Ash, Flame, The Director",
    motivations: "Motivations: be seen as someone who can accomplish something",
    arcs: "Arcs: Prisons Arc, Mafia Arc, Director Arc",
    personalityArc: "Personality Arc: makes mistakes → low self esteem → Parrot joins BAT and is admired → Cube sets a trap in the base while Derap should be patrolling → gets scolded → gets strapped to a bomb by Cube → Parrot saves him → BAT’s valuables are all missing → Parrot and Derap hunt the items down → Derap asks to take all credit for getting it back, Parrot refuses → when Parrot and Cube are alone, Derap jumps in and takes Cube in for questioning → started gaining self confidence in himself"
  },

  'Director': {
    name: "Director",
    quote: "“We will meet each other soon, Parrot, whether you want to or not. Because that’s the story I wrote, and I don’t write stories where I lose.”",
    reference: "(ParrotX2: I Got Hunted by a Minecraft Redstone Genius)",
    personality: "Personality: obsessive, protective",
    strengths: "Strengths: calculated, manipulative",
    weaknesses: "Weaknesses: overconfident",
    friends: "Friends: Parrot (at this point Parrot no longer considers him one)",
    allies: "Allies: Ash, Wemmbu",
    enemies: "Enemies: anyone who tries to hurt Parrot",
    motivations: "Motivations: Protect Parrot from the worlds at all costs so that he doesn't hurt himself.",
    arcs: "Arcs: Director Arc",
    personalityArc: "Personality Arc: kind and caring Wifies → protective Wifies → fakes his death → kills his old self to protect Parrot → traps Parrot in his prison to protect him → almost succeeds in outsmarting Parrot → last flaw in his prison is himself → Parrot escapes and he dies"
  },

  'Eggchan': {
    name: "Eggchan",
    quote: "“You might get better but you're never gonna be perfect.”",
    reference: "(Wemmbu: I Mastered Minecraft Combat)",
    personality: "Personality: calm, unintentionally funny",
    strengths: "Strengths: loyal, always finds ways to help Wemmbu out",
    weaknesses: "Weaknesses: bad at pvp",
    friends: "Friends: Wemmbu, Minute",
    allies: "Allies: Manepear, Jaden",
    enemies: "Enemies: Clown, Lettuce",
    motivations: "Motivations: help Wemmbu as much as he can",
    arcs: "Arcs: Zam Empire Arc, Invis Mafia Arc, Pirate Arc, Power Arc, Fake Identity Arc, Kings Arc",
    personalityArc: "Personality Arc: went on journeys with Wemmbu → visited the Farlands → saved Wemmbu from being unknowingly hit into a portal, taking the hit himself → stuck in the end for a long while → Wemmbu got him out → started going on adventures again → always served as Wemmbu’s moral compass",

  },

  'Flame': {
    name: "Flame",
    quote: "“Better an honest enemy than a false friend I guess”",
    reference: "(FlameFrags: I Got Betrayed on the Unstable SMP)",
    personality: "Personality: disciplined, short-tempered, rational under pressure",
    strengths: "Strengths: elite swordsmanship",
    weaknesses: "Weaknesses: cares about his title too much",
    friends: "Friends: Wemmbu (former rival)",
    allies: "Allies: Lomedy",
    enemies: "Enemies: Jaden (former friend), Lettuce",
    motivations: "Motivations: be the best player on the server",
    arcs: "Arcs: Toxic War arc, Betrayal Arc, Skill vs Power Arc, Kings Arc",
    personalityArc: "Personality arc: overconfident → fought players alone → got betrayed by a friend → made a new friend (Lomedy) → helped Lomedy out → trusted him again → got hunted by the LAW → accepted he needs help to get better"
  },

  'Jumper': {
    name: "Jumper",
    quote: "“There’s something about the truth that keeps it from being perfect”",
    reference: "(ParrotX2: I Got Hunted by Minecraft Bounty Hunters)",
    personality: "Personality: curious, questioning, truth seeker, cares about her team",
    strengths: "Strengths: kind, sneaky, smart, good leader, loyal friend",
    weaknesses: "Weaknesses: the identities of her spies is a liability",
    friends: "Friends: Nufuli, Derapchu, Parrot",
    allies: "Allies: Leo (former friend), Ro, Woogie",
    enemies: "Enemies: Clown, The Director",
    motivations: "Motivations: to find the truth",
    arcs: "Arcs: Prisons Arc, Mafia Arc, Director Arc, BAT Arc, Kings Arc",
    personalityArc: "Personality Arc: member of Leo’s bounty team earlier on → learning to work with others → learning how to hunt down players → became an expert, enough to lead her own team of spies → helped Parrot reveal his innocence (about not being the Director) when no one else on BAT believed him → killed one of her spies to know the truth → stayed true to her morals no matter what"
  },

  'Leo': {
    name: "Leo",
    quote: "“No matter what situation you’re in, you always have someone that has your back.”",
    reference: "(ParrotX2: I Got Hunted by the World’s Best Minecraft Player)",
    personality: "Personality: leader, aggressive, commands attention",
    strengths: "Strengths: effectively puts plans into action",
    weaknesses: "Weaknesses: breaks trust with his closest teammates",
    friends: "Friends: Nufuli (dead)",
    allies: "Allies: Jumper (former friend), Derapchu (former friend), Parrot (former friend), Lettuce",
    enemies: "Enemies: Clown, The Director, Spoke, Wemmbu, Flame",
    motivations: "Motivations: successfully take down all targets",
    arcs: "Arcs: Prisons Arc, Mafia Arc, Director Arc, BAT Arc, Kings Arc",
    personalityArc: "Personality Arc: had an original bounty team to kill Clown with Parrot→ failed and got captured → escaped → came across Parrot again who refused to join BAT → kept trying and saved Parrot’s life → Parrot joins BAT thanks to Leo’s persistence → the longer Parrot stays at BAT, the more Leo loses → loses his wealth, his base and his friend → blames Parrot for everything → attempts an assassination when they’re alone → saves Parrot at the end → level of mistrust with all members of BAT → Parrot and Leo work together for the last time to save Jumper and Derap from Director → last time Leo works with Jumper and Derapchu → Leo is alone with a few spies from Jumper → teams up with the LAW to serve justice to the server"
  },

  'Lettuce': {
    name: "Lettuce",
    quote: "“What Unstable needs… is a king”",
    reference: "(FlameFrags: Solo Player VS 1000 Minecraft Hunters)",
    personality: "Personality: carefully masks true intentions",
    strengths: "Strengths: good personal image",
    weaknesses: "Weaknesses: image eventually starts slipping",
    friends: "Friends: Deputy Ace",
    allies: "Allies: N/A",
    enemies: "Enemies: Parrot, Spoke, Wemmbu, Flame",
    motivations: "Motivations: to help the server by getting rid of those who break his meaning of justice",
    arcs: "Arcs: Mafia Arc, Kings Arc",
    personalityArc: "Personality Arc:  being a normal person on the server → working his way up to leader of an organization called the LAW → LAW was defeated multiple times → slowly worked its way up into power"
  },

  'Lomedy': {
    name: "Lomedy",
    quote: "“The farmers don't kill. That's farmer code”",
    reference: "(Flame: Unstable SMP: The Great Farm War)",
    personality: "Personality: peaceful, helpful, kind, refuses to kill, passive",
    strengths: "Strengths: heart of gold",
    weaknesses: "Weaknesses: easily manipulated and tricked",
    friends: "Friends: Flame",
    allies: "Allies: N/A",
    enemies: "Enemies: Spongs, Willi, Jaden",
    motivations: "Motivations: be the best farmer out there",
    arcs: "Arcs: Betrayal Arc, Skill vs Power Arc, Kings Arc",
    personalityArc: "Personality Arc: had a friend who once protected him (unnamed) → they died during the mafia → farming alone for a while while competing with toxic farmers → Flame came to his farm one day and fought → Flame taught him some pvp and brought him along on adventures → Flame reminded him of his old friend → they became friends → would help Flame with his projects → Flame helped him become the best farmer and deal with the toxic players"
  },

  'Mane': {
    name: "Mane",
    quote: "“I like having fun. You need a reason to play the game.”",
    reference: "(Flame: I Got trained by a Minecraft Spear Master)",
    personality: "Personality: chaotic, comedic, easily ragebaited",
    strengths: "Strengths: Spear master, comes up with tactical strategies",
    weaknesses: "Weaknesses: isn’t involved in main server matters",
    friends: "Friends: Flame, Wemmbu, Egg",
    allies: "Allies: N/A",
    enemies: "Enemies: Zam",
    motivations: "Motivations: have fun on the server",
    arcs: "Arcs: Zam Empire Arc, Mafia Arc, Kings Arc",
    personalityArc: "Personality Arc: royal guard of PrinceZam → mentor of Wemmbu in combat → disappearing for a year → living in a cave → teaching Flam the secrets of the spear → reuniting with a brother again (Flame) after so long"
  },

  'Mapicc': {
    name: "Mapicc",
    quote: "“Spoke- who are you bro?”",
    reference: "(Spoke: I Infiltrated the Minecraft Mafia)",
    personality: "Personality: logical, thoughtful, concerned",
    strengths: "Strengths: kind, incredibly loyal, sticks by Spoke’s side no matter what",
    weaknesses: "Weaknesses: fails to see when his kindness is being abused by Spoke",
    friends: "Friends: Spoke, Minute, Planet, Zam, Jamato",
    allies: "Allies: N/A",
    enemies: "Enemies: Leo(former friend), Ash, Lettuce",
    motivations: "Motivations: keep Spoke on the morally good side of the server",
    arcs: "Arcs: Exploit Arc, Mafia Arc, Secret Base Arc, BAT Arc",
    personalityArc: "Personality Arc: with Spoke since the beginning of the server → trusted Ash originally → was chased around with Spoke by Ash’s mafia → became a close friend of Minute’s → when Spoke pushed everyone away, Mapicc still stayed → when Mapicc was presumed dead, Spoke nearly destroyed the server → when he was found alive, Spoke swore to use his manipulation to keep his friends close"
  },

  'Minute': {
    name: "Minute",
    quote: "“Meeting you guys was one of the best things I’ve ever done since I left the mafia”",
    reference: "(Spoke: I Got Hunted by the Minecraft Mafia)",
    personality: "Personality: wise, protective, strategic",
    strengths: "Strengths: elite swordsman, tactical fights",
    weaknesses: "Weaknesses: overpowered by multiple enemies (he fights alone)",
    friends: "Friends: Wemmbu, Mapicc, Egg",
    allies: "Allies: Spoke, Planet",
    enemies: "Enemies: Flame, Ash",
    motivations: "Motivations: to protect those who are under his wing",
    arcs: "Arcs: Mafia Arc, Power Arc, Fake Identity Arc",
    personalityArc: "Personality Arc: Part of the original mafia → mafia fell to Ash → left the mafia and continuously got hunted → helped Spoke and Mapicc escape → became a friend and mentor → left when Spoke insulted his help → returned when Spoke and Mapicc defeated the mafia → became protector of the End"

  },
  'Nufuli': {
    name: "Nufuli",
    quote: "“Sometimes it feels like I don’t even know who I am, man. I’m tired of trying to be you”",
    reference: "(ParrotX2: I Got Hunted by a Minecraft Hacker)",
    personality: "Personality: loyal, calm, always follows Leo’s plans",
    strengths: "Strengths: successfully executes anything he’s told by Leo",
    weaknesses: "Weaknesses: doesn’t think for himself, instead tries to be someone he’s not",
    friends: "Friends: Leo, Jumper, Derapchu, Parrot",
    allies: "Allies: N/A",
    enemies: "Enemies: The Director",
    motivations: "Motivations: to be like Leo (before), to find out who he is (after)",
    arcs: "Arcs:  Director Arc",
    personalityArc: "Personality Arc: always followed Leo’s every command → seen as a reliable teammate and brother by Leo → Meeting Parrot, he started seeing himself more → saved Parrot’s life by being creative → realized he wanted to figure himself out → decided to leave BAT to go on a mission of self discovery → killed seconds later by the Director"
  },

  'Parrot': {
    name: "Parrot",
    quote: "“Thank you for being my friend”",
    reference: "(ParrotX2: Unstable SMP: Doomsday)",
    personality: "Personality: selfless, puts others before himself",
    strengths: "Strengths: leadership, charitable",
    weaknesses: "Weaknesses: always sees his assumptions of people as right(is someone evil or good)",
    friends: "Friends: Wifies(dead), Dean(dead), Luigi(dead), Theo(alive)",
    allies: "Allies: Leo, Derapchu, Jumper, Nufuli",
    enemies: "Enemies: Clown, Ash, The Director, LettuceK",
    motivations: "Motivations: help / save the server",
    arcs: "Arcs: Prisons Arc, Mafia Arc, Director Arc, Treasure Arc, Kings Arc",
    personalityArc: "Personality Arc: too selfless → always getting in harm’s way → losing Wifies → becomes more guarded → loses more friends → finds a new Friend in Theo → finds trust again",
  },

  'Spoke': {
    name: "Spoke",
    quote: "“What I’m doing right now is nothing compared to what they have been doing for months on end. I don’t have a home anymore. I don’t have a friend anymore!”",
    reference: "(SpokeIsHere: My Best Friend Died on the Unstable SMP)",
    personality: "Personality: manipulative, psychotic",
    strengths: "Strengths: persistence",
    weaknesses: "Weaknesses: losing Mapicc",
    friends: "Friends: Mapicc (alive), Zam (alive)",
    allies: "Allies: Planet, Squiddo, Jepexx, Minute",
    enemies: "Enemies: Flame, JamatoP (former friend), Ash, Leo (former friend), Lettuce",
    motivations: "Motivations: wants power",
    arcs: "Arcs: Exploit Arc, Mafia Arc, Secret Base Arc, BAT Arc ",
    personalityArc: "Personality Arc: too self-absorbed → betrays morals → Mapicc gets him to think otherwise → creates an empire about himself → backfires → loses Mapicc → about to destroy the server → finds him → manipulates his friends to stay with him",

  },

  'Theo': {
    name: "Theo",
    quote: "“I'd rather die in a fight than stay and wait for the fight to come here.”",
    reference: "(ParrotX2: Unstable SMP: The First War)",
    personality: "Personality: protective, defends his friends, stands up for what he believes in",
    strengths: "Strengths: master of carting",
    weaknesses: "Weaknesses: egotistical",
    friends: "Friends: Parrot",
    allies: "Allies: Wifies (previously)",
    enemies: "Enemies: Ash, Purpled, Lettuce",
    motivations: "Motivations: have fun, protect his friends",
    arcs: "Arcs: Mafia Arc, Pirate Arc, Treasure Arc, Kings Arc",
    personalityArc: "Personality Arc: one of the best fighters in the Farlands → boasted to Parrot → realized Parrot was a good leader → protected Parrot from attempted assassination → defended Parrot and saw him as a leader → joined Parrot’s anti-mafia group → lost touch after mafia → met up with Parrot at spawn again → joined him on adventures to find treasure and to make Parrot king"
  },

  'Wemmbu': {
    name: "Wemmbu",
    quote: "“This is an Orbital Strike Cannon - and after spending a month questing through the Minecraft Farlands, I've come into possession of a hundred of these cannons.”",
    reference: "(Wemmbu: Orbital Strike Cannon vs Unstable SMP)",
    personality: "Personality: chaotic, lively",
    strengths: "Strengths: unpredictable, clever, talented at macing",
    weaknesses: "Weaknesses: loss of purpose without being the best",
    friends: "Friends: Egg (alive), Flame",
    allies: "Allies: Jaden, Minute",
    enemies: "Enemies: Clown, Lettuce",
    motivations: "Motivations: survive on the server",
    arcs: "Arcs: Zam Empire Arc, Mafia Arc, Pirate Arc, Power Arc, Fake Identity Arc, Kings Arc",
    personalityArc: "Personality Arc: cause chaos on the server → show dominance and power to be the best → realize that being the best isn’t everything → live as a secret identity → get revealed by Parrot and Flame to be Wemmbu → accepted defeat that he wasn’t the best and was humble → became enemies with the LAW for his actions → teamed with Flame to fight 1000 players who wanted to kill them → now on the run fighting back against the LAW",

  },
  'Wifies': {
    name: "Wifies",
    quote: "“How can I put you in a situation where I know there’s no winning. I need you to win”",
    reference: "(ParrotX2: Unstable SMP: Doomsday)",
    personality: "Personality: smart, reflective, supportive, protective",
    strengths: "Strengths: effective support",
    weaknesses: "Weaknesses: relies on other people making the first move",
    friends: "Friends: Parrot",
    allies: "Allies: Kenadian, Wato",
    enemies: "Enemies: Dean (betrayal endangered Parrot), Clown, Ash",
    motivations: "Motivations: protect Parrot and keep him safe",
    arcs: "Arcs: Prisons Arc, Mafia Arc, Director Arc",
    personalityArc: "Personality Arc: smartest player → met Parrot → joined him on journeys → became a trustworthy friend → became overprotective of Parrot → wants Parrot to be more selfish for his own good"

  }


}

function openOverlay(name) {
  document.getElementById("active-character").alt = name;
  document.getElementById("active-character").src = "assets/" + name + "/front.png";

  document.getElementById('json-name').innerText = characters[name].name;
  document.getElementById('json-quote').innerText = characters[name].quote;
  document.getElementById('json-reference').innerText = characters[name].reference;
  document.getElementById('json-personality').innerText = characters[name].personality;
  document.getElementById('json-strengths').innerText = characters[name].strengths;
  document.getElementById('json-weaknesses').innerText = characters[name].weaknesses;
  document.getElementById('json-friends').innerText = characters[name].friends;
  document.getElementById('json-allies').innerText = characters[name].allies;
  document.getElementById('json-enemies').innerText = characters[name].enemies;
  document.getElementById('json-motivations').innerText = characters[name].motivations;
  document.getElementById('json-arcs').innerText = characters[name].arcs;
  document.getElementById('json-personalityArc').innerText = characters[name].personalityArc;

  const target = document.getElementById('json-personality');
  setTimeout(() => {
    target.scrollIntoView({ behavior: 'smooth' });
  }, 100);

  const overlay = document.getElementById('overlay');
  overlay.style.display = 'flex';
}

/*
function startCardGame() {
  const cardGameSection = document.getElementById('card-game-section');
  const pictures = ['assets/Creator-pics/flame.png', 'assets/Creator-pics/parrot.png', 'assets/Creator-pics/spoke.png', 'assets/Creator-pics/wemmbu.png']
  const cards = ['assets/Creator-pics/flame.png', 'assets/Creator-pics/parrot.png', 'assets/Creator-pics/spoke.png', 'assets/Creator-pics/wemmbu.png', 'assets/Creator-pics/flame.png', 'assets/Creator-pics/parrot.png', 'assets/Creator-pics/spoke.png', 'assets/Creator-pics/wemmbu.png'];

  // shuffle cards 
  cards.sort(() => Math.random() - 0.5);

  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;

  cards.forEach(value => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = "?";
    card.dataset.value = value;

    card.addEventListener("click", () => handleCardClick(card));
    cardGameSection.appendChild(card);

    function handleCardClick(card) {
      if (lockBoard) return;
      if (card === firstCard) return;
      if (card.classList.contains("flipped")) return;

      function flipCard(card) {
        card.classList.add("flipped");
      }

      flipCard(card);

      if (!firstCard) {
        firstCard = card;
      } else {
        secondCard = card;
        function checkMatch() {
          if (firstCard.dataset.value === secondCard.dataset.value) {
            firstCard.removeEventListener("click", handleCardClick);
            secondCard.removeEventListener("click", handleCardClick);
            resetBoard();
          } else {
            lockBoard = true;
            setTimeout(() => {
              firstCard.classList.remove("flipped");
              secondCard.classList.remove("flipped");
              resetBoard();
            }, 1000);
          }
        };
      }
    }

  });
};
*/

function filterItems(selectedTags) {
  let count = 1;
  const cards = document.querySelectorAll('.ep-card');
  for (const card of cards) {
    for (const selectedTag of selectedTags) {
      if (card.classList.contains(selectedTag)) {
        card.querySelector('.episode-number').innerHTML = count;
        count++;
        card.style.display = 'block';
        break;
      } else {
        card.style.display = 'none';
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bg-music");

  // Set volume max
  bgMusic.volume = 1.0;

  // Try to play immediately
  bgMusic.play().catch(err => {
    console.log("Autoplay blocked, will start on first click.", err);

    // Fallback: play on first click anywhere
    document.body.addEventListener("click", () => {
      bgMusic.play().catch(err => console.log("Play failed:", err));
    }, { once: true });
  });
});
