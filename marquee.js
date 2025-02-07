const container = document.querySelector('.marquee-container');
const text = "KBYEEE GETAWAYS ";

// Configuration for each track
const positions = [
    { top: '1%', opacity: 0.05, duration: 400 },
    { top: '15%', opacity: 0.3, duration: 500 },
    { top: '29%', opacity: 0.6, duration: 600 },
    { top: '43%', opacity: 1, duration: 700 },
    { top: '57%', opacity: 0.6, duration: 600 },
    { top: '71%', opacity: 0.3, duration: 500 },
    { top: '85%', opacity: 0.05, duration: 400 }
];

// Create and initialize each track
positions.forEach((pos, index) => {
    // Create track element
    const track = document.createElement('div');
    track.className = 'marquee-track';
    
    // Apply styles from configuration
    track.style.top = pos.top;
    track.style.opacity = pos.opacity;
    track.style.setProperty('--duration', `${pos.duration}s`);

    // Create text content
    const content = text.repeat(30);
    const set1 = document.createElement('div');
    const set2 = document.createElement('div');
    set1.className = set2.className = 'marquee';
    set1.textContent = content;
    set2.textContent = content;

    // Assemble track
    track.appendChild(set1);
    track.appendChild(set2);

    // Set direction
    track.classList.add(index % 2 === 0 ? 'track-left' : 'track-right');
    
    // Add to container
    container.appendChild(track);
    
    // Initial position for right-moving tracks
    if (index % 2 === 1) {
        track.style.transform = 'translateX(-50%)';
    }
});