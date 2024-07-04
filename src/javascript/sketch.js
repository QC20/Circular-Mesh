let scene, camera, renderer, mesh;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
    camera.position.z = 5;
}

function animate() {
    requestAnimationFrame(animate);
    
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

init();
animate();