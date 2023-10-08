const dinosaurs = [
	"carnotaurus",
	"triceratops",
	"stegosaurus",
	"parasaurolophus",
	"mosasaurus",
];

dinosaurs.forEach((dinosaur) => {
	const dinosaurObj = document.getElementById(`${dinosaur}-object`);
	dinosaurObj.onclick = () => {
		document
			.getElementById(`${dinosaur}-info-section`)
			.scrollIntoView({ behavior: "smooth" });
	};
});
