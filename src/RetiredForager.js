var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
RetiredForagerBee.prototype.forage = function() {
  var retired = 'I am too old, let me play cards instead'
  return retired;
}
RetiredForagerBee.prototype.gamble = function() {
  var newTreasure = 1;
  this.treasureChest.push(newTreasure);
}
