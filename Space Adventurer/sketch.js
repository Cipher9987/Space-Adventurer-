var player, player_Image;
var bullet, bullet_Image;
var enemy, enemy_Image1, enemy_Image2, enemy_Image3;


var enemies;
var bullets;


function preload() {

	player_Image = loadImage("Assets/Pl.png");

	enemy_Image1 = loadImage("Assets/1.png");
	enemy_Image2 = loadImage("Assets/2.png");
	enemy_Image3 = loadImage("Assets/3.png");
}

function setup() {

	player = createSprite(windowWidth / 2, 650, 70, 70);
	player.addImage(player_Image);
	player.scale = 0.12;
	player.x = player.position.x;
	player.y = player.position.y;

	enemies = new Group();
	bullets = new Group();

}


function draw() {

	createCanvas(windowWidth, windowHeight);
	background(0);


	if (keyWentDown("left")) {
		player.x = player.x - 280;
	}
	if (keyWentDown("right")) {
		player.x = player.x + 280;
	}


	if (player.x > windowWidth / 1.12) {
		player.x = windowWidth / 2;
	}
	if (player.x < windowWidth / 10) {

		player.x = windowWidth / 2;
	}


	if (keyWentDown("space")) {
		spawnBullet();
	}

	spawnEnemies();

	if(enemies.isTouching(bullets)){
		bullet.destroy();
		enemy.setLifetime = 0;
		console.log("Hello");
	}


	drawSprites();
}

function spawnBullet() {

	bullet = createSprite(player.x + 2, player.y, 8, 15);
	bullet.velocityY = -10;
	bullet.depth = player.depth;
	player.depth = player.depth + 1;
	
	bullets.add(bullet);
}


function spawnEnemies() {

	if (World.frameCount % 25 === 0) {
		enemy = createSprite(rand, -300, 80, 70);
		enemy.velocityY = 12;
		//enemy.scale = 0.12;
		
		var rand = Math.round(random(1, 5));
		switch (rand) {
			case 1: enemy.x = windowWidth / 2;
				break;
			case 2: enemy.x = windowWidth / 2 + 280;
				break;
			case 3: enemy.x = windowWidth / 2 + 560;
				break;
			case 4: enemy.x = windowWidth / 2 - 280;
				break;
			case 5: enemy.x = windowWidth / 2 - 560;
				break;
			default: break;
		}


		enemy.depth = player.depth;
		player.depth = player.depth + 1;

		enemies.add(enemy);
	}


}
