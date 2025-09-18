$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   // toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(600, 700, 200, 20);
    createPlatform(700, 400, 50, 50, "red");
    createPlatform(300, 500, 600, 30, "blue");
    createPlatform(400, 700, 400, 20, "green");
    createPlatform(900, 610, 400, 20, "orange");
    // TODO 3 - Create Collectables
    createCollectable("steve", 1100, 560);
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("diamond", 600,450)
    // TODO 4 - Create Cannons
    createCannon("top", 500, 1800);
    createCannon("right", 700, 1800);
    createCannon("top", 1000, 1800);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
