// Condo Data (6-8 images per condo)
const condos = {
    // Condo #1
    condo1: {
        title: "Condo #1",
        location: "Colimilla, La Culebra Col.",
        details: "2 Bed | 1 Bath | 4 People",
        price: "$2,200 MXN Per Night",
        images: [
            "images/condo1/1.webp",
            "images/condo1/2.webp",
            "images/condo1/3.webp",
            "images/condo1/4.webp",
            "images/condo1/5.webp",
            "images/condo1/6.webp",
            "images/condo1/7.webp",
            "images/condo1/8.webp",
            "images/condo1/9.webp",
            "images/condo1/10.webp",
            "images/condo1/11.webp",
            "images/condo1/12.webp",
            "images/condo1/13.webp",
            "images/condo1/14.webp",
            "images/condo1/15.webp"
        ]
    },

    // Condo #2
    condo2: {
        title: "Condo #2",
        location: "Colimilla, La Culebra Col.",
        details: "2 Bed | 1 Bath | 4 People",
        price: "$2,200 MXN Per Night",
        images: [
            "images/condo2/1.webp",
            "images/condo2/2.webp",
            "images/condo2/3.webp",
            "images/condo2/4.webp",
            "images/condo2/5.webp",
            "images/condo2/6.webp",
            "images/condo2/7.webp",
            "images/condo2/8.webp",
            "images/condo2/9.webp",
            "images/condo2/10.webp",
            "images/condo2/11.webp"
        ]
    },

    // Single Room #1
    condo3: {
        title: "Private Room #3",
        location: "Colimilla, La Culebra Col.",
        details: "1 Bed | 1 Bath | 2 People",
        price: "$650 MXN Per Night",
        images: [
            "images/condo3/1.webp",
            "images/condo3/2.webp",
            "images/condo3/3.webp",
            "images/condo3/4.webp",
            "images/condo3/5.webp"
        ]
    },

    // Single Room #2
    condo4: {
        title: "Private Room #4",
        location: "Colimilla, La Culebra Col.",
        details: "1 Bed | 1 Bath | 2 People",
        price: "$650 MXN Per Night",
        images: [
            "images/condo4/1.webp",
            "images/condo4/2.webp",
            "images/condo4/3.webp",
            "images/condo4/4.webp"
        ]
    }
};
// ============== CARD GENERATION ==============
function generateCondoCards() {
    const container = document.getElementById('condo-container');
    container.innerHTML = ''; // Clear existing content
    
    Object.entries(condos).forEach(([id, condo]) => {
        container.innerHTML += `
            <div class="condo-card" onclick="openModal('${id}')">
                <img src="${condo.images[0]}" alt="${condo.title}" class="condo-img">
                <div class="condo-info">
                    <h3>${condo.title}</h3>
                    <p>${condo.location}</p>
                    <p>${condo.details}</p>
                    <p class="price">${condo.price}</p>
                </div>
            </div>
        `;
    });
}

// ============== MODAL FUNCTIONS ======
function openModal(condoId) {
    const condo = condos[condoId];
    const modal = document.getElementById('modal');
    const modalInfo = document.getElementById('modal-info');
    const gallery = document.getElementById('gallery');

    // Set condo info
    modalInfo.innerHTML = `
        <h2>${condo.title}</h2>
        <p>${condo.location}</p>
        <p>${condo.details}</p>
        <p class="price">${condo.price}</p>
    `;

    // Add images to gallery
    gallery.innerHTML = condo.images.map(img => 
        `<img src="${img}" alt="${condo.title}">`
    ).join('');

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling

     // Add click-outside listener
     modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });    
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';// Re-enable scrolling
}

// ============== INITIALIZATION ==============
document.addEventListener('DOMContentLoaded', () => {
    // 1. Generate condo cards
    generateCondoCards();
    
    // 2. Setup modal with PROPER event delegation
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');
  
    // Close button click
    closeBtn.addEventListener('click', closeModal);
  
    // Click outside to close (better implementation)
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  
    // Escape key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
      }
    });
  });
  
  // ============== MODAL FUNCTIONS ==============
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  }