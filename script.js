let albums = [
{
	"album": "I'VE MINE",
	"year": 2023,
	"img": "https://upload.wikimedia.org/wikipedia/en/5/5b/Ive_-_I%27ve_Mine.png",
	"songs": ["OFF THE RECORD", "BADDIE", "EITHER WAY", "HOLY MOLY", "OTT", "PAYBACK"]
},
{
	"album": "I'VE IVE",
	"year": 2023,
	"img": "https://upload.wikimedia.org/wikipedia/commons/9/90/Ive_-_I%27ve_Ive.png",
	"songs": ["BLUE BLOOD", "I AM", "KITSCH", "LIPS", "HEROINE", "MINE", "HYPONOSIS", "NOT YOUR GIRL", "NEXT PAGE", "CHERISH", "SHINE WITH ME"]
},
{
	"album": "AFTER LIKE",
	"year": 2022,
	"img": "https://upload.wikimedia.org/wikipedia/en/8/81/Ive_%E2%80%93_After_Like.png",
	"songs": ["AFTER LIKE", "MY SATISFACTION"]
}, 
{
	"album": "LOVE DIVE",
	"year": 2022,
	"img": "https://upload.wikimedia.org/wikipedia/en/7/79/Ive_%E2%80%93_Love_Dive.jpg",
	"songs": ["LOVE DIVE", "ROYAL"]
}, 
{
	"album": "ELEVEN",
	"year": 2021,
	"img": "https://upload.wikimedia.org/wikipedia/en/1/1f/Ive_-_Eleven.png",
	"songs": ["ELEVEN", "TAKE IT"]
}
];

document.addEventListener("DOMContentLoaded", function() {
	let content = document.getElementById("content");

	for (var i = 0; i < albums.length; i++) {
		createElementProper(albums[i]);
	};
});

function createElementProper(incomingJSON) {
	let createContent = document.createElement("div");
	createContent.classList.add("createContent");

	let createAlbum = document.createElement("h2");
	createAlbum.innerText = incomingJSON["album"];
	createContent.appendChild(createAlbum);

	let createYear = document.createElement("h3");
	createYear.innerText = incomingJSON["year"];
	createContent.appendChild(createYear);

	let createImg = document.createElement("img");
	createImg.src = incomingJSON["img"];
	createContent.appendChild(createImg);

	let createSongList = document.createElement("ul");
	createContent.appendChild(createSongList);

	for (var i = 0; i < incomingJSON["songs"].length; i++) {
		let song = incomingJSON["songs"][i];
		let createSong = document.createElement("li");
		createSong.innerText = song;
		createSongList.appendChild(createSong);
	};

	content.appendChild(createContent);

};

