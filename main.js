import './style.css'
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { ThreexDomEvents } from 'three/examples/jsm/threex.domevents';
import { GrannyKnot,
	HeartCurve,
	VivianiCurve,
	KnotCurve,
	HelixCurve,
	TrefoilKnot,
	TorusKnot,
	CinquefoilKnot,
	TrefoilPolynomialKnot,
	FigureEightPolynomialKnot,
	DecoratedTorusKnot4a,
	DecoratedTorusKnot4b,
	DecoratedTorusKnot5a,
	DecoratedTorusKnot5c } from 'three/examples/jsm/curves/CurveExtras';
import { Clock } from 'three';
// Always remember that you have to import (GrannyKnot) beacuse it is exporting from Curvesextras
// this is the most important part you should consider before importing 
// these are different types of curves we can draw it by using CurveExtras





const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xc1b7bb , 1);
// set claer color is used to set a background color of the scene. It adds colors to the background.
document.body.appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry(10, 10, 10);
const material = new THREE.MeshNormalMaterial( { color: 0x00ff00 ,wireframe: true } );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(0 ,-30 ,0);
scene.add( cube );


const geometry1 = new THREE.SphereGeometry(10, 10, 10);
const material1= new THREE.MeshNormalMaterial( { color: 0x00ff00 ,wireframe: true } );
const cube1 = new THREE.Mesh( geometry1, material1 );
cube1.position.set(25 ,-30 ,0)
scene.add( cube1 );

// Adding bulb like object to the scene
const geometry2 = new THREE.SphereGeometry(10, 10, 10);
const material2 = new THREE.MeshNormalMaterial( { color: 0x00ff00 ,wireframe: true } );
const cube2 = new THREE.Mesh( geometry2, material2 );
cube2.position.set(-25 ,-30 ,0 );
scene.add( cube2 );
const yellow = new THREE.Color(0xe0c53a)
const bulb_geometry = new THREE.SphereGeometry(5);
const bulb_material = new THREE.MeshBasicMaterial({color: yellow});
const bulb = new THREE.Mesh( bulb_geometry, bulb_material);
bulb.position.set(0, 30, -30);
scene.add(bulb);


// Adding Curves to the Scene
// Curve 1 = Grannyknot Curve
const curve1 = new GrannyKnot();

const geometry3 = new THREE.TubeGeometry(curve1 , 100, 2, 8 ,true);
const material3 = new THREE.MeshBasicMaterial({
  color: 0xdf4c65,
  wireframe: true
});
const tube1 = new THREE.Mesh(geometry3 , material3);
tube1.position.set(0 ,0 ,0);
scene.add(tube1);

// Curve 2
// const curve2 = new HeartCurve();

// const geometry4 = new THREE.TubeGeometry(curve2 , 100, 2, 8 ,true);
// const material4 = new THREE.MeshBasicMaterial({
//   color: 0xf4555c,
//   wireframe: false
// });
// const tube2 = new THREE.Mesh(geometry4 , material4);
// tube2.position.set(0 ,0 ,0);
// scene.add(tube2);

// Curve 3
// const curve3 = new CinquefoilKnot();
// const geometry5 = new THREE.TubeGeometry(curve3 , 50 ,2 ,8 ,true);
// const material5 = new THREE.MeshNormalMaterial({
//   wireframe: false
// });
// const tube3 = new THREE.Mesh(geometry5 ,material5);
// scene.add(tube3);

// We can add different new shapes and curves

// const v1 = new THREE.Vector2(0 ,0);
// const v2 = new THREE.Vector2(5, 5);
// const linecurve = new THREE.LineCurve(v1 ,v2);
// const geo = new THREE.BufferGeometry();
// const mat = new THREE.LineBasicMaterial({color: 0xffffff});
// const curveobject = new THREE.Line(geo ,mat)
// scene.add(linecurve , curveobject);



// const curvenew = new THREE.CatmullRomCurve3( [
// 	new THREE.Vector3( -10, 0, 10 ),
// 	new THREE.Vector3( -5, 5, 5 ),
// 	new THREE.Vector3( 0, 0, 0 ),
// 	new THREE.Vector3( 5, -5, 5 ),
// 	new THREE.Vector3( 10, 0, 10 )
// ] );

// const points = curvenew.getPoints( 50 );
// const geometrynew = new THREE.BufferGeometry().setFromPoints( points );

// const materialnew = new THREE.LineBasicMaterial( { color: 0xff0000 } );

// // Create the final object to add to the scene
// const curveObject = new THREE.Line( geometrynew, materialnew );
// scene.add(curveObject);

const control = new OrbitControls(camera , renderer.domElement);


// Adding Eventlistener to the material(first import the require modules then use it in your code)
// const domevents = new ThreexDomEvents(camera , renderer.domElement); 
// domevents.addEventListener( cube , 'click' ,  ()=>{
//   material.wireframe = true
// });
// scene.add(domevents);



camera.position.z = 50;


// Updating Camera inside the curve
// function updatecamera(){
//   const time = Clock.getElapsedTime();
//   const looptime = 20;
//   const t = (time % looptime)/ looptime;
//   const t2 = ((time + 0.1) % looptime)/ looptime;
//   const pos = tube1.geometry.parameters.getPointsAt(t);
//   const pos2 = tube1.geometry.parameters.getPointsAt(t2);
//   camera.position.copy(pos);
//   camera.lookAt(pos2)
// }

// function update(){
//   requestAnimationFrame(update);
//   updatecamera();
//   renderer.render(scene , camera);

// }
function animate(){
  requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  cube1.rotation.x += 0.01;
  cube1.rotation.y += 0.01;

  cube2.rotation.x += 0.01;
  cube2.rotation.y += 0.01;

  
  renderer.render( scene, camera );
  control.update();
  update();
};

animate();
