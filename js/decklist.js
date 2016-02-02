
//creates a minion
var minion = function(name, mana, power, health) {
	this.name = name;
	this.mana = mana;
	this.power = power;
	this.health = health;
	this.mechanics = [];
}

minion.prototype.attack = function(){
	console.log("name: "+this.name);
	console.log("mana: "+this.mana);
	console.log("power: "+this.power);
	console.log("health: "+this.health);

}

//effect minion constructor
function effectMinion(owner, name, mana, power, health){
	//calls minion constructor (inheritence)
	minion.call(this, name, mana, power, health);
	//sets this zombie chow's owner
	this.owner = owner;
}


effectMinion.prototype = Object.create(minion.prototype);

effectMinion.prototype.constructor = effectMinion;

//sets new effect
effectMinion.prototype.effect = function(){
	console.log("an effect");
}

var palDeckCount= {
	"Zombie Chow": 2,
	"Ironbeak Owl": 1,
	"Knife Juggler": 2,
	"Big Game Hunter": 1,
	"Piloted Shredder": 2,
	"Antique Healbot": 1,
	"Harrison Jones": 1,
	"Sludge Belcher": 2,
	"Sylvanas Windrunner": 1,
	"Dr. Boom": 1,
	"Equality": 1,
	"Shielded Minibot": 2,
	"Coghammer": 1,
	"Muster for Battle": 2,
	"Aldor Peacekeeper": 2,
	"Truesilver Champion": 1,
	"Consecration": 2,
	"Keeper of Uldaman": 2,
	"Quartermaster": 1,
	"Lay on Hands": 1,
	"Tirion Fordring": 1,
};




var cardlist = [];
var paladinDeck = [];
var shuffPalDeck = [];
var typePaladinDeck = [];

var constructPaladin = function(){
	for(name in palDeckCount){
		for (var i=0; i<palDeckCount[name];i++){
			//console.log("name: "+name+" count: "+palDeckCount[name]);
			paladinDeck.push(cardlist.filter(function(card){
				//if (card.name == name) console.log(card.name);
				return card.name== name;
			}));
		}
	}
	console.log(paladinDeck.length);
}

var mapDeck = function(rawDeck, newDeck){
	newDeck = rawDeck.map(function(minion){
		//console.log(minion);
		if (minion[0].type == "MINION"){
			console.log("it's a minion");
			var nMinion= new effectMinion("paladin", minion[0].name, minion[0].cost, minion[0].attack,minion[0].health);
			nMinion.effect = function(){
				console.log("new effect");
			}

			return nMinion;
		}
		else return minion;
	});
	return newDeck;
}

var shuffle = function(){
	while (paladinDeck.length){
		var ind = Math.floor(Math.random()*paladinDeck.length);
		shuffPalDeck.push(paladinDeck[ind]);
		paladinDeck.splice(ind, 1);
	}
	//console.log(shuffPalDeck);
}



$(document).ready(function() {

	$.get('https://api.hearthstonejson.com/v1/latest/enUS/cards.json').done(function(api) {
		api.forEach(function(card){
			cardlist.push(card);
			//console.log(cardlist.length);
		});
		constructPaladin();
		//shuffle();
		typePaladinDeck= mapDeck(paladinDeck, typePaladinDeck);
		console.log(typePaladinDeck);
	});

	

});















// //effect minion constructor
// function effectMinion(owner, name, mana, power, health){
// 	//calls minion constructor (inheritence)
// 	minion.call(this, name, mana, power, health);
// 	//sets this zombie chow's owner
// 	this.owner = owner;
// }


// effectMinion.prototype = Object.create(minion.prototype);

// effectMinion.prototype.constructor = effectMinion;

// //sets new effect
// effectMinion.prototype.effect = function(){
// 	console.log("an effect");
// }

// //battlecry minion constructor
// function battlecryMinion(owner, name, mana, power, health){
// 	//calls minion constructor (inheritence)
// 	minion.call(this, name, mana, power, health);
// 	//sets this zombie chow's owner
// 	this.owner = owner;
// }


// battlecryMinion.prototype = Object.create(minion.prototype);

// battlecryMinion.prototype.constructor = battlecryMinion;

// //sets new battlecry
// battlecryMinion.prototype.battlecry = function(){
// 	console.log("a battlecry");
// }


// function deathrattleMinion(owner, name, mana, power, health){
// 	//calls minion constructor (inheritence)
// 	minion.call(this, name, mana, power, health);
// 	//sets this zombie chow's owner
// 	this.owner = owner;
// }


// deathrattleMinion.prototype = Object.create(minion.prototype);

// deathrattleMinion.prototype.constructor = deathrattleMinion;

// //sets new deathrattle
// deathrattleMinion.prototype.deathrattle = function(){
// 	console.log("a deathrattle");
// }
















// //instantiates zombieChow 1
// var zombieChow1= new deathrattleMinion("paladin", "zombie chow", 1,2,3);
// var zombieChow2= new deathrattleMinion("paladin", "zombie chow", 1,2,3);

// zombieChow1.deathrattle = function(){
// 	console.log("restore health");
// }

// zombieChow2.deathrattle = function(){
// 	console.log("restore health");
// }



// var ironbeak1 = new battlecryMinion("paladin", "Ironbeak Owl", 2,2,1);

// ironbeak1.battlecry = function(){
// 	console.log("silence");
// }


// var juggler1 = new effectMinion("paladin", "Knife Juggler", 2,3,2);
// var juggler2 = new effectMinion("paladin", "Knife Juggler", 2,3,2);

// juggler1.effect = function(){
// 	console.log("juggle");
// }

// juggler2.effect = function(){
// 	console.log("juggle");
// }

// var bgh1 = new battlecryMinion("paladin", "Big Game Hunter", 3,4,2);

// bgh1.battlecry = function(){
// 	console.log("snipe");
// }

// var shredder1= new deathrattleMinion("paladin", "Piloted Shredder", 4,4,3);
// var shredder2= new deathrattleMinion("paladin", "Piloted Shredder", 4,4,3);

// shredder1.deathrattle = function(){
// 	console.log("surprise pilot");
// }

// shredder2.deathrattle = function(){
// 	console.log("surprise pilot");
// }

// var healbot1 = new battlecryMinion("paladin", "Antique Healbot", 5,3,3);

// healbot1.battlecry = function(){
// 	console.log("healing");
// }

// var harrison1 = new battlecryMinion("paladin", "Harrison Jones", 5,5,4);

// harrison1.battlecry = function(){
// 	console.log("that belongs in a museum");
// }

// var belcher1= new deathrattleMinion("paladin", "Sludge Belcher", 5,3,5);
// var belcher2= new deathrattleMinion("paladin", "Sludge Belcher", 5,3,5);

// belcher1.deathrattle = function(){
// 	console.log("slime");
// }

// belcher2.deathrattle = function(){
// 	console.log("slime");
// }



// zombieChow1.attack();
// zombieChow1.deathrattle();

// zombieChow2.attack();
// zombieChow2.deathrattle();


// console.log(zombieChow1 instanceof minion);  // true 
// console.log(zombieChow1 instanceof deathrattleMinion); // true
// console.log(zombieChow2 instanceof minion);  // true 
// console.log(zombieChow2 instanceof deathrattleMinion); // true

// ironbeak1.attack();
// ironbeak1.battlecry();

// console.log(ironbeak1 instanceof minion);  // true 
// console.log(ironbeak1 instanceof battlecryMinion); // true





