let parallax1 = document.getElementById('parallax1');
let parallax2 = document.getElementById('parallax2');
let parallax3 = document.getElementById('parallax3');

window.addEventListener('scroll', () => {
    let offset1 = window.pageYOffset;
    parallax1.style.backgroundPositionY = offset1 * 0.014 + "em";
    parallax2.style.backgroundPositionY = (32 - (offset1 * 0.014)) + "em";
    parallax3.style.backgroundPositionY = (62 - (offset1 * 0.014)) + "em";
});

// rand gend

list = {
        0: "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
        1: "I talk a lot, so I've learned to just tune myself out...",
        2: "I am BeyoncÃ© always.",
        3: "Oh, it is on, like a prawn who yawns at dawn.",
        4: "I am running away from my responsibilities and it feels good.",
        5: "Should have burned this place down when I had the chance.",
        6: "One day Michael came in and complained about a speed bump on the highway. I wonder who he ran over then.",
        7: "Mini cupcakes? As in the mini version of regular cupcakes? Which is already a mini version of cake?",
        8: "I don't care what they say about me. I just want to eat.",
        9: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
        10: "Whenever I'm about to do something, I think, 'Would an idiot do that?' and if they would, I do not do that thing",
        11: "I stopped caring a long time ago",
        12: "It takes an advanced sense of humor. I don't expect everybody to understand.",
        13: "I'm not superstitious, but I am a little stitious.",
        14: "You only live once? False. You live every day. You only die once.",
        15: "Bears, beets, Battlestar Galactica.",
        16: "I understand nothing.",
        17: "i need a weapon.",
        18: "Ara-Ara",
    }
    // rand gen 1 in 289 chance
let x = Math.floor(Math.random() * Object.keys(list).length);
let temp = document.getElementById("quote");
temp.innerHTML = list[x] + "<cite> - Quote</cite>";
temp.style.fontSize = '1.4rem';
temp.style.fontFamily = 'monospace';