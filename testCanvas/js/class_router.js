// create a router class

function Router(radius, color) {
	if(radius === undefined) radius = 40;
	if(color === undefined) color = "#ff0000";
	this.x = 0;
	this.y = 0;
	this.radius = radius;
	this.scaleX = 1;
	this.scaleY = 1;
	this.color = utils.parseColor(color);
	this.lineWidth = 0;
  Router.prototype.draw = function (context, rotation, cX, cY) {
  context.save();

  // context.moveTo(cX, cY);
  context.lineTo(this.x + this.radius/2, this.y + this.radius/2);
  context.strokeStyle = 'red';
  context.stroke();

  context.translate(this.x, this.y);
  context.scale(this.scaleX, this.scaleY);
  
  context.lineWidth = this.lineWidth;
  context.fillStyle = this.color;
  // context.beginPath();
  //x, y, radius, start_angle, end_angle, anti-clockwise
  // context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
  context.fillRect(0, 0, this.radius, this.radius);
  // context.closePath();
  // context.fill();
  context.restore();
};
}
// create draw function
Router.prototype.draw = function (context, rotation, cX, cY) {
  context.save();

  // context.moveTo(cX, cY);
  context.lineTo(this.x + this.radius/2, this.y + this.radius/2);
  context.strokeStyle = 'red';
  context.stroke();

  context.translate(this.x, this.y);
  context.scale(this.scaleX, this.scaleY);
  
  context.lineWidth = this.lineWidth;
  context.fillStyle = this.color;
  // context.beginPath();
  //x, y, radius, start_angle, end_angle, anti-clockwise
  // context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
  context.fillRect(0, 0, this.radius, this.radius);
  // context.closePath();
  // context.fill();
  context.restore();
};