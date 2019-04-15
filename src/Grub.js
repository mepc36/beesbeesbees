// Pseudoclassical style:
// invoke with "new"
// doesn't explicitly define or return the objectl
// uses the keyword "this";
// declares functions outside, at the .prototype property;

var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly'
};

Grub.prototype.eat = function() {
  return;
}