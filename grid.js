// Animated Neon Grid Background
document.addEventListener('DOMContentLoaded', () => {
    const gridBg = document.querySelector('.grid-background');
    
    if (!gridBg) return;

    // Create canvas for better performance
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    gridBg.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width, height;

    function resize() {
        width = canvas.width = window.innerWidth * devicePixelRatio;
        height = canvas.height = window.innerHeight * devicePixelRatio;
        ctx.scale(devicePixelRatio, devicePixelRatio);
    }

    resize();
    window.addEventListener('resize', resize);

    const gridSize = 50;
    const lineColor = 'rgba(0, 255, 255, 0.1)';
    const glowColor = 'rgba(0, 255, 255, 0.3)';

    let time = 0;

    function draw() {
        ctx.clearRect(0, 0, width, height);

        // Moving grid lines
        const offsetX = (time * 0.5) % gridSize;
        const offsetY = (time * 0.3) % gridSize;

        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1;

        // Vertical lines
        for (let x = -gridSize + offsetX; x < window.innerWidth + gridSize; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, window.innerHeight);
            ctx.stroke();

            // Glow effect
            ctx.shadowBlur = 10;
            ctx.shadowColor = glowColor;
            ctx.stroke();
            ctx.shadowBlur = 0;
        }

        // Horizontal lines
        for (let y = -gridSize + offsetY; y < window.innerHeight + gridSize; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(window.innerWidth, y);
            ctx.stroke();

            ctx.shadowBlur = 10;
            ctx.shadowColor = glowColor;
            ctx.stroke();
            ctx.shadowBlur = 0;
        }

        time += 1;
        requestAnimationFrame(draw);
    }

    draw();

    // Optional: Add subtle particle dots at intersections
    function drawDots() {
        ctx.fillStyle = 'rgba(0, 255, 255, 0.4)';
        for (let x = offsetX; x < window.innerWidth; x += gridSize) {
            for (let y = offsetY; y < window.innerHeight; y += gridSize) {
                ctx.beginPath();
                ctx.arc(x, y, 2, 0, Math.PI * 2);
                ctx.fill();

                ctx.shadowBlur = 15;
                ctx.shadowColor = '#00ffff';
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }
    }

    // Uncomment below line if you want glowing dots
    // setInterval(drawDots, 100);
});// Hero Particle Background
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('hero-particles');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.3
        });
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 255, 255, ${p.opacity})`;
            ctx.shadowBlur = 20;
            ctx.shadowColor = '#00ffff';
            ctx.fill();

            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        });

        requestAnimationFrame(animateParticles);
    }

    animateParticles();

    // Mouse trail effect
    let mouse = { x: 0, y: 0 };
    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    function drawTrail() {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 20, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 255, 0.05)';
        ctx.fill();
        requestAnimationFrame(drawTrail);
    }
    drawTrail();
});