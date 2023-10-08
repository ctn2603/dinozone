const messages = [
	"Welcome To DinoZone",
	"Go back in time, discover the wild, and explore prehistoric life",
];

let messageIdx = 0;
function repeat(instance) {
	instance.destroy();
	setTimeout(() => {
		instance.reset();
		typeIt = new TypeIt("#intro-message", {
			strings: messages[++messageIdx % messages.length],
			speed: 60,
			afterComplete: repeat,
		}).go();
	}, 10000);
}

let typeIt = new TypeIt("#intro-message", {
	strings: messages[0],
	speed: 60,
	afterComplete: repeat,
}).go();
