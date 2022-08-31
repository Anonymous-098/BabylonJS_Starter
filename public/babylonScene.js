var canvas = document.getElementById("renderCanvas");
var createScene = function () {
	
	var scene = new BABYLON.Scene(engine);

	var camera = new BABYLON.ArcRotateCamera("camera",Math.PI/2,Math.PI/2,5,new BABYLON.Vector3(0,0,0));
	camera.attachControl(canvas,true);

	// var box = new BABYLON.MeshBuilder.CreateBox("box");

	var light = new BABYLON.HemisphericLight("light",new BABYLON.Vector3(1,1,0));
	
	// ONLINE HOSTED MODELS
	BABYLON.SceneLoader.Append("https://assets.babylonjs.com/meshes/","both_houses_scene.babylon",scene);

	// LOCAL MODELS
	BABYLON.SceneLoader.Append("./","cabinet.glb",scene,function(){

	});

    return scene;
};

var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
var scene = createScene();

   engine.runRenderLoop(function () {
	if (scene) {
		scene.render();
	}
});

// Resize
window.addEventListener("resize", function () {
	engine.resize();
});
