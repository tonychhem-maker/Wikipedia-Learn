// ─── Stars background ───────────────────────────────────────────────────
const starsCanvas = document.getElementById('stars');
const sc = starsCanvas.getContext('2d');
starsCanvas.width = window.innerWidth;
starsCanvas.height = window.innerHeight;

const stars = Array.from({ length: 160 }, () => ({
  x: Math.random() * starsCanvas.width,
  y: Math.random() * starsCanvas.height,
  r: Math.random() * 1.2 + 0.2,
  a: Math.random(),
  speed: Math.random() * 0.005 + 0.002
}));

function drawStars() {
  sc.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
  stars.forEach(s => {
    s.a += s.speed;
    const alpha = (Math.sin(s.a) + 1) / 2 * 0.7 + 0.1;
    sc.beginPath();
    sc.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    sc.fillStyle = `rgba(255,255,255,${alpha})`;
    sc.fill();
  });
  requestAnimationFrame(drawStars);
}
drawStars();

// ─── Custom cursor ───────────────────────────────────────────────────────
const cursor = document.getElementById('cursor');
const container = document.getElementById('canvas-container');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});
container.addEventListener('mouseenter', () => cursor.classList.add('hover'));
container.addEventListener('mouseleave', () => cursor.classList.remove('hover'));

// ─── Three.js Globe ──────────────────────────────────────────────────────
const W = 220, H = 220;
const canvas = document.getElementById('three-canvas');
canvas.width  = W;
canvas.height = H;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(W, H);
renderer.setClearColor(0x000000, 0);

const scene  = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
camera.position.z = 3.2;

// Sphere base
const geo = new THREE.SphereGeometry(1, 64, 64);
const mat = new THREE.MeshPhongMaterial({
  color: 0xf8f9fa,
  specular: 0xaaaaaa,
  shininess: 60,
  transparent: true,
  opacity: 0.97
});
const sphere = new THREE.Mesh(geo, mat);
scene.add(sphere);

// Wireframe latitude/longitude lines
const wireGeo = new THREE.SphereGeometry(1.005, 24, 24);
const wireMat = new THREE.MeshBasicMaterial({
  color: 0x888888,
  wireframe: true,
  transparent: true,
  opacity: 0.18
});
const wire = new THREE.Mesh(wireGeo, wireMat);
scene.add(wire);

// Puzzle piece arcs
function addArc(radius, thetaStart, thetaLen, axis, color, opacity) {
  const g = new THREE.TorusGeometry(radius, 0.006, 8, 80, thetaLen);
  const m = new THREE.MeshBasicMaterial({ color, transparent: true, opacity });
  const mesh = new THREE.Mesh(g, m);
  if (axis === 'y') mesh.rotation.y = thetaStart;
  if (axis === 'x') mesh.rotation.x = thetaStart;
  if (axis === 'z') mesh.rotation.z = thetaStart;
  scene.add(mesh);
}
const arcColor = 0x555555;
addArc(1.008, 0,    Math.PI * 0.8, 'y', arcColor, 0.5);
addArc(1.008, 1.2,  Math.PI * 0.9, 'y', arcColor, 0.5);
addArc(1.008, 0.3,  Math.PI * 0.7, 'x', arcColor, 0.4);
addArc(1.008, -0.5, Math.PI * 0.6, 'x', arcColor, 0.4);

// Glyph sprites
function makeLabel(text, x, y, z, size) {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 32;
  const ctx = c.getContext('2d');
  ctx.fillStyle = 'rgba(0,0,0,0)';
  ctx.fillRect(0, 0, 64, 32);
  ctx.font = `bold ${size}px serif`;
  ctx.fillStyle = '#333333';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 32, 16);
  const tex = new THREE.CanvasTexture(c);
  const spriteMat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.85 });
  const sprite = new THREE.Sprite(spriteMat);
  sprite.position.set(x, y, z);
  sprite.scale.set(0.32, 0.16, 1);
  scene.add(sprite);
}
makeLabel('W',    0.0,   0.4,   0.9,  20);
makeLabel('文',   0.6,   0.2,   0.75, 16);
makeLabel('Аа',  -0.65,  0.2,   0.72, 14);
makeLabel('あ',   0.0,  -0.35,  0.93, 16);
makeLabel('ع',   -0.5,  -0.2,   0.82, 16);
makeLabel('한',   0.55, -0.3,   0.78, 14);

// Lights
scene.add(new THREE.AmbientLight(0xffffff, 0.6));
const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(3, 3, 5);
scene.add(dirLight);
const rimLight = new THREE.DirectionalLight(0x6699ff, 0.3);
rimLight.position.set(-3, -1, -2);
scene.add(rimLight);

// Mouse tracking for tilt
let targetRotX = 0, targetRotY = 0;
let currentRotX = 0, currentRotY = 0;
const rect = container.getBoundingClientRect();

document.addEventListener('mousemove', e => {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top  + rect.height / 2;
  const dx = (e.clientX - cx) / (window.innerWidth / 2);
  const dy = (e.clientY - cy) / (window.innerHeight / 2);
  targetRotY =  dx * 1.2;
  targetRotX = -dy * 1.0;
});

// Click → Wikipedia
container.addEventListener('click', () => {
  const ripple = document.createElement('div');
  ripple.className = 'click-ripple';
  container.appendChild(ripple);
  setTimeout(() => ripple.remove(), 700);
  setTimeout(() => window.open('https://www.wikipedia.org', '_blank'), 300);
});

// Hover state
let hovered = false;
container.addEventListener('mouseenter', () => { hovered = true; });
container.addEventListener('mouseleave', () => {
  hovered = false;
  targetRotX = 0;
  targetRotY = 0;
});

// Animation loop
let autoAngle = 0;
function animate() {
  requestAnimationFrame(animate);
  autoAngle += 0.004;

  currentRotX += (targetRotX - currentRotX) * 0.06;
  currentRotY += (targetRotY - currentRotY) * 0.06;

  sphere.rotation.y = autoAngle + currentRotY;
  sphere.rotation.x = currentRotX;
  wire.rotation.y   = autoAngle + currentRotY;
  wire.rotation.x   = currentRotX;

  const s = hovered ? 1.04 + Math.sin(Date.now() * 0.003) * 0.01 : 1.0;
  sphere.scale.setScalar(s);
  wire.scale.setScalar(s);

  renderer.render(scene, camera);
}
animate();
