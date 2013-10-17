window.onload = function() {
	var canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		ball = new Router(50, 'blue'),
		angle = 0,
		selfRotation = 0,
		centerX = canvas.width / 2,
		centerY = canvas.height / 2,
		radius = 150,
		speed = 0.05;
		rotSpd = 10;

	(function drawFrame() {
		window.requestAnimationFrame(drawFrame, canvas);
		context.clearRect(0, 0, canvas.width, canvas.height);
		ball.x = centerX + Math.sin(angle) * radius;
		ball.y = centerY + Math.cos(angle) * radius;
		angle += speed;
		selfRotation += rotSpd;
		ball.draw(context, selfRotation, centerX, centerY);
	}());
};