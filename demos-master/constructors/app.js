var opts = {
  name: "name here",
  health: 2000
}

function Character(options) {
  var options = options || {};
  this.name = options.name || "A. Person";
  this.health = options.health || 100;
  this.weapon = new Weapon({name: "pea shooter", damage: 1});
  this.equip = function (weapon) {
    this.weapon = weapon;
  };
  this.attack = function (enemy) {
    var randomInt = Math.floor(Math.random() * 10);
    if(randomInt < 4) {
      enemy.health = enemy.health - this.weapon.damage;
      console.log("OUCH! You've been hit " + enemy.name + ", your life is now at " + enemy.health);
      if(enemy.health <= 0) {
        enemy.health = 0;
        console.log("That was an epic blow, you are now dead " + enemy.name);
      }

  } else {
    console.log("Fly like the wind, you've been lucky " + enemy.name);
  }
  };


}

function Weapon(options) {
  this.name = options.name || "pea shooter";
  this.damage = options.damage;

}

function Magic() {

}
var jet = new Character({health: 100, name: "Jet"});
var dustin = new Character({health: 150, name: "Dustin"});
var crossbow = new Weapon({damage: 25, name: "crossbow"});
var slingshot = new Weapon({damage: 125, name: "slingshot 5000"});
jet.equip(slingshot);
dustin.equip(crossbow);
// function Person(name, defaultGreeting) {
//   this.greetingDefault = defaultGreeting || "Howdy ";
//   this.greet = function (noun) {
//     return this.greetingDefault + " " + noun;
//   };
//   this.name = name || 'generic person';
//   this.takeOff = "I'm flying";
// }
//
// var juan = new Person();
// var frank = new Person();
