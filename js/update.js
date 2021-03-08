const update = (delta) => {
  if (game.camera.name === "devCamera") {
    let DEV_CAM_SPEED = 0.5 * delta;

    devCamera.rotation.y = -me.mouse.curr.x;
    devCamera.rotation.x = -me.mouse.curr.y;

    if (me.keyboard[87]) {
      //w
      devCamera.position.z -=
        DEV_CAM_SPEED * Math.sin(-devCamera.rotation.y + Math.PI / 2);
      devCamera.position.x += DEV_CAM_SPEED * Math.sin(-devCamera.rotation.y);
    }
    if (me.keyboard[65]) {
      //a
      devCamera.position.z += DEV_CAM_SPEED * Math.sin(devCamera.rotation.y);
      devCamera.position.x -=
        DEV_CAM_SPEED * Math.sin(devCamera.rotation.y + Math.PI / 2);
    }
    if (me.keyboard[83]) {
      //s
      devCamera.position.z +=
        DEV_CAM_SPEED * Math.sin(-devCamera.rotation.y + Math.PI / 2);
      devCamera.position.x -= DEV_CAM_SPEED * Math.sin(-devCamera.rotation.y);
    }
    if (me.keyboard[68]) {
      //d
      devCamera.position.z -= DEV_CAM_SPEED * Math.sin(devCamera.rotation.y);
      devCamera.position.x +=
        DEV_CAM_SPEED * Math.sin(devCamera.rotation.y + Math.PI / 2);
    }
  } else {
    ball.rotation.x += 0.01;
    ball.rotation.y += 0.01;

    //ball_mount.rotation.y = -me.mouse.curr.x;
    //ball_mount.rotation.x = -me.mouse.curr.y;

    if (player.hasBall) {
      if (me.mouse.down) {
        ball.position.z = 0;
        ballWorldMat.copy(ball.matrixWorld);
        player.remove(ball);
        player.hasBall = false;
        ball.isHeld = false;
        ball.isShot = true;
        scene.add(ball);
        ball.applyMatrix4(ballWorldMat);
        ball.scale.set(3, 3, 3);
        ball.getWorldDirection(launchVec);
        launchVec.negate();
        launchVec.normalize();
        launchVec.multiplyScalar(player.POWER);
      }
    }
    //console.log(ball.position, ball_mount.position, player.position);
    if (!ball.isHeld) {
      if (ball.isShot) {
        //backboard collision
        if (ball.position.x > 60.6) {
          if (ball.position.y > 10 && ball.position.y < 20) {
            if (ball.position.z > -6.5 && ball.position.z < 6.5) {
              launchVec.x = -(launchVec.x / 2);
              ball.position.x = 60.6;
            }
          }
        }
        ball.position.add(launchVec);
      }
      if (ball.position.y > 0.3) {
        ball.isFalling = true;
        ball.fallAcceleration += GRAVITY;
        ball.position.y -= ball.fallAcceleration;
      } else {
        ball.position.y = 0.3;
        ball.fallAcceleration = 0;
        ball.isFalling = false;
        ball.isShot = false;
        launchVec.set(0, 0, 0);
      }

      if (player.position.distanceTo(ball.position) < 4) {
        ball.isHeld = true;
        player.hasBall = true;
        ball.position.x = 1.5;
        ball.fallAcceleration = 0;
        ball.isFalling = false;
        ball.isShot = false;
        player.add(ball);
      }
    }

    if (player.isJumping) {
      player.fallAcceleration += GRAVITY;
      player.position.y += player.JUMP_FORCE - player.fallAcceleration;

      if (player.position.y <= 0) {
        player.position.y = 0;
        player.fallAcceleration = 0;
        player.isJumping = false;
      }
    }

    if (me.keyboard[32]) {
      //space
      if (!player.isJumping) {
        player.position.y += player.JUMP_FORCE;
        player.isJumping = true;
      }
    }

    if (me.keyboard[16]) {
      if (!player.isJumping) {
        player.isBoosted = true;
      }
    }

    let SPEED =
      player.BASE_SPEED * delta + player.isBoosted * player.BOOST_SPEED;

    if (me.keyboard[83]) {
      //s
      player.position.x += SPEED;
    }
    if (me.keyboard[68]) {
      //d
      player.position.z -= SPEED;
      player_sprite.rotation.y = -Math.PI / 2;
    }
    if (me.keyboard[87]) {
      //w
      player.position.x -= SPEED;
    }
    if (me.keyboard[65]) {
      //a
      player.position.z += SPEED;
      player_sprite.rotation.y = Math.PI / 2;
    }

    player.isBoosted = false;
  }
};
