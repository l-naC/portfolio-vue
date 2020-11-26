import * as THREE from 'three'
// passed in container id within which this animation will be shown
export function createBoxRotationContext(container) {
var ctx = new Object();
ctx.init = function init() {
    ctx.container = container;
    ctx.camera = new THREE.PerspectiveCamera(70, ctx.container.clientWidth/ctx.container.clientHeight, 0.01, 10);
    ctx.camera.position.z = 1;

    ctx.scene = new THREE.Scene();

    let geometry = new THREE.BoxGeometry(0.3, 0.4, 0.5);
    let material = new THREE.MeshNormalMaterial();
    ctx.box = new THREE.Mesh(geometry, material);

    ctx.fnhelper   = new THREE.FaceNormalsHelper(ctx.box, 0.3, 0x0000ff, 0.1);
    ctx.axes = new THREE.AxesHelper(5);

    ctx.scene.add(ctx.box);
    ctx.scene.add(ctx.axes);
    ctx.scene.add(ctx.fnhelper);

    ctx.renderer = new THREE.WebGLRenderer({antialias: true});
    ctx.renderer.setSize(ctx.container.clientWidth, ctx.container.clientHeight);
    ctx.container.appendChild(ctx.renderer.domElement);
},
ctx.animate = function animate() {
    requestAnimationFrame(animate);
    ctx.box.rotation.x += 0.01;
    ctx.box.rotation.y += 0.02;
    ctx.fnhelper.update();
    ctx.renderer.render(ctx.scene, ctx.camera);
}
return ctx;
};