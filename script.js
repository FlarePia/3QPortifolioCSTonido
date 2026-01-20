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
    description: "Ash is the determined and courageous leader of the group. With a strong sense of justice and an unwavering commitment to his friends, he faces challenges head-on and inspires those around him."
  },
  'Clown': {
    name: "Clown",
    quote: "“But here's the thing. Parrot. We really are the same.”",
    description: "Clown is the heart of the group, always ready with a joke or a prank to lighten the mood. Beneath his playful exterior lies a sharp mind and a deep loyalty to his friends."
  },
  'Dean': {
    name: "Dean",
    quote: "“What if you just die, and I'm stuck here, and nobody ever trusts me again.”",
    description: "Dean is the intellectual of the group, always curious and eager to learn. His analytical mind and resourcefulness often help the team navigate complex situations."
  },
  'Derapchu': {
    name: "Derapchu",
    quote: "“...”",
    description: "Derapchu is the strong and silent type, known for his physical prowess and unwavering sense of honor. He is a dependable ally who values loyalty above all else."
  },
  'Director': {
    name: "Director",
    quote: "“You can't win against someone who doesn't exist.”",
    description: "Director is the strategic thinker of the group, always planning several steps ahead. His leadership and tactical skills are crucial in guiding the team through their adventures."
  },
  'Eggchan': {
    name: "Eggchan",
    quote: "“You might get better but you're never gonna be perfect.”",
    description: "Eggchan is the creative force of the group, always coming up with innovative ideas and solutions. Her artistic talents and imaginative thinking inspire those around her."
  },
  'Flame': {
    name: "Flame",
    quote: "“Better an honest enemy than a false friend I guess”",
    description: "Flame is known for being one of the best pvpers on the server, being able to take outnumbered fights multiple times as a solo player. However, when he starts considering a player named Jaden as his friend, Jaden uses Flame’s skill to get what he wanted, and when he had everything he betrayed Flame. This led to Flame attempting to trust other players but for some reason, all of them manipulated him into using his skill for their personal gain. Flame didn’t appreciate being used, and so he went back to what he knew best: being a solo player."
  },
  'Jumper': {
    name: "Jumper",
    quote: "“There’s something about the truth that keeps it from being perfect”",
    description: "Jumper is the adventurous spirit of the group, always eager to explore new places and take risks. His enthusiasm and courage inspire others to step out of their comfort zones."
  },
  'Leo': {
    name: "Leo",
    quote: "“No matter what situation you’re in, you always have someone that has your back.”",
    description: "Leo is the natural leader of the group, known for his charisma and ability to inspire others. His sense of responsibility and dedication to his friends make him a trusted figure."
  },
  'Lomedy': {
    name: "Lomedy",
    quote: "“The farmers don't kill. That's farmer code”",
    description: "Lomedy is the comedic relief of the group, always ready with a joke or a funny story. His lighthearted nature and positive attitude help keep spirits high during tough times."
  },
  'Mane': {
    name: "Lost cause.",
    quote: "“Strength comes from unity.”",
    description: "Mane is the dependable and strong member of the group. Known for his physical strength and protective nature, he is a steadfast ally who values friendship and teamwork."
  },
  'Mapicc': {
    name: "Mapicc",
    quote: "“Spoke- who are you bro?”",
    description: "Mapicc is the skilled and precise member of the group. Known for his expertise in combat and strategy, he is a reliable ally who approaches challenges with focus and determination."
  },
  'Minute': {
    name: "Minute",
    quote: "“Meeting you guys was one of the best things I’ve ever done since I left the mafia”",
    description: "Minute is the punctual and organized member of the group. Known for his time management skills and reliability, he ensures that the team stays on track and meets their goals."
  },
  'Nufuli': {
    name: "Nufuli",
    quote: "“...”",
    description: "Nufuli is the adaptable and resourceful member of the group. Known for his ability to think on his feet and adjust to changing situations, he is a valuable asset in any adventure."
  },
  'Parrot': {
    name: "Parrot",
    quote: "“Thank you for being my friend”",
    description: "ParrotX2 is very selfless and truly cares about others. He decides to prioritize the lives of others before his own, even if that means risking his own life multiple times in the process. However, when his best friend, Wifies, dies, he decides to start focusing on himself, because without friends on the server it was easier to trust himself instead of opening himself up to others to be hurt all over again. But eventually he decides to take a chance on new friends (BAT members), although more walled off than he had been before. Soon after, he then becomes close friends with a previous acquaintance, Theo, and together as a new duo they are exploring the server to help save it."
  },
  'Spoke': {
    name: "Spoke",
    quote: "“I will get revenge for you. I will avenge all of the players he's either captured or killed, and the destroyed bases!”",
    description: "Spoke was a character that didn’t have bad intentions. He truly wanted to help the server and save it from a new group that was taking over: the Mafia. But on this quest for self-righteousness, he starts justifying actions that are very questionable. He justifies killing players for saving the server. But luckily, his friends are able to bring him back to his senses that these actions aren’t worth his humanity, which gets him to stop. He has some encounters with the Mafia’s leader, Ash, who tells Spoke that he has a lot of potential to become as evil as he (Ash) did. This comment then causes Spoke to go on a spiral of insanity as he starts breaking into people’s bases, stalking them for days on end and killing innocent players that witnessed his heinous acts. People on the server are after him, but every time he comes up with a plan to manipulate his way out of bad situations."
  },
  'Theo': {
    name: "Theo",
    quote: "“I'd rather die in a fight than stay and wait for the fight to come here.”",
    description: "Theo is the inventive and forward-thinking member of the group. Known for his creativity and problem-solving skills, he constantly seeks new ways to improve and innovate."
  },
  'Wemmbu': {
    name: "Wemmbu",
    quote: "“This is an Orbital Strike Cannon - and after spending a month questing through the Minecraft Farlands, I've come into possession of a hundred of these cannons.”",
    description: "Wemmbu was first seen as someone who could easily be pushed around. But after creating civilizations, helping defeat the mafia and learning new techniques, he had come to learn what would be known as his signature skill: elytra macing. After mastering this new skill, and getting access to multiple orbital cannons, he then became someone that people respected for his power. He wanted to claim the title of the most powerful on the server, a title that belonged to FlameFrags. But after defeating Flame in a battle, he no longer had any purpose on the server. So he decided to go fully invisible and create a new identity, which was eventually uncovered by Flame himself. But after working together with Flame, he decided that keeping the title wasn’t worth it, and accepted the fact that he wasn’t the strongest and most powerful player anymore. Wemmbu didn’t need to prove it to anyone else, and he was confident that he was in fact, one of the strongest."
  },
  'Wifies': {
    name: "Wifies",
    quote: "“How can I put you in a situation where I know there’s no winning. I need you to win”",
    description: "Wifies is known for his tactical decisions and calm approach under pressure. He coordinates plans, forms alliances, and always thinks two steps ahead."
  }


}


function openOverlay(name) {
  document.getElementById("active-character").alt = name;
  document.getElementById("active-character").src = "assets/" + name + "/front.png";

  document.getElementById('json-name').innerText = characters[name].name;
  document.getElementById('json-quote').innerText = characters[name].quote;
  document.getElementById('json-description').innerText = characters[name].description;

  const overlay = document.getElementById('overlay');
  overlay.style.display = 'flex';
}



