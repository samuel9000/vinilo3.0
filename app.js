(function() {
    "use strict";

    // ===== DATOS DEL CATÁLOGO =====
    const productos = [
        {
            id: 1,
            categoria: "radio",
            titulo: "radio cassette corder cfs-715s",
            artista: "Omar Courtz",
            descripcion: "Edición limitada en vinilo de color azul translúcido. Incluye póster exclusivo y carpeta gatefold de lujo. Sonido remasterizado.",
            precioActual: 49,
            precioAntes: 69,
            moneda: "$",
            estado: "Nuevo",
            tags: ["Urbano", "Color LP"],
            oferta: true,
            disponible: true,
            rating: 10,
            maxRating: 10,
            imagenes: [
                "https://i.ytimg.com/vi/7Mdzn2jk78A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDaslLDw_JlHLzcDmQIZXJcouaaWA",
                "https://picsum.photos/id/101/600/600",
                "https://picsum.photos/id/102/600/600"
            ]
        },
        {
            id: 2,
            categoria: "vinilo",
            titulo: "POR SI MAÑANA NO ESTOY",
            artista: "Omar Courtz",
            descripcion: "Álbum debut en formato vinilo 180g. Producción impecable y carpeta con acabado mate.",
            precioActual: 59,
            precioAntes: 69,
            moneda: "$",
            estado: "Sellado",
            tags: ["Urbano"],
            oferta: true,
            disponible: true,
            rating: 9.8,
            maxRating: 10,
            imagenes: [
                "https://picsum.photos/id/103/600/600",
                "https://picsum.photos/id/104/600/600"
            ]
        },
        {
            id: 3,
            categoria: "vinilo",
            titulo: "Ameri",
            artista: "Duki",
            descripcion: "Vinilo importado, edición argentina. Incluye todas las colaboraciones del álbum.",
            precioActual: 69,
            precioAntes: null,
            moneda: "$",
            estado: "Nuevo",
            tags: ["Trap"],
            oferta: false,
            disponible: true,
            rating: 9.5,
            maxRating: 10,
            imagenes: [
                "https://picsum.photos/id/105/600/600",
                "https://picsum.photos/id/106/600/600"
            ]
        },
        {
            id: 4,
            categoria: "tocadisco",
            titulo: "AT-LP120XUSB",
            artista: "Audio-Technica",
            descripcion: "Tocadiscos profesional de tracción directa. Conexión USB para digitalizar vinilos. Brazo balanceado y cápsula AT-VM95E.",
            precioActual: 1999,
            precioAntes: 2200,
            moneda: "Bs",
            estado: "Nuevo",
            tags: ["USB", "DJ"],
            oferta: true,
            disponible: true,
            rating: 10,
            maxRating: 10,
            imagenes: [
                "https://picsum.photos/id/20/600/600",
                "https://picsum.photos/id/21/600/600",
                "https://picsum.photos/id/22/600/600"
            ]
        },
        {
            id: 5,
            categoria: "parlante",
            titulo: "Edifier R1280DB",
            artista: "Edifier",
            descripcion: "Parlantes activos de estantería. Sonido nítido con Bluetooth, óptico y RCA. Ideales para setup de vinilos.",
            precioActual: 750,
            precioAntes: 850,
            moneda: "Bs",
            estado: "Nuevo",
            tags: ["Bluetooth", "Madera"],
            oferta: true,
            disponible: true,
            rating: 9.9,
            maxRating: 10,
            imagenes: [
                "https://picsum.photos/id/24/600/600",
                "https://picsum.photos/id/25/600/600"
            ]
        },
        {
            id: 6,
            categoria: "accesorio",
            titulo: "Aguja Ortofon 2M Red",
            artista: "Ortofon",
            descripcion: "Cápsula fonográfica de alta precisión. Perfil elíptico para una lectura superior del surco.",
            precioActual: 520,
            precioAntes: 580,
            moneda: "Bs",
            estado: "Nuevo",
            tags: ["Aguja", "Hi-Fi"],
            oferta: true,
            disponible: true,
            rating: 9.7,
            maxRating: 10,
            imagenes: [
                "https://picsum.photos/id/28/600/600"
            ]
        },
        {
            id: 7,
            categoria: "vinilo",
            titulo: "Dark Side of the Moon",
            artista: "Pink Floyd",
            descripcion: "Edición 50 aniversario. Vinilo 180g remasterizado. Incluye pósteres y stickers originales.",
            precioActual: 55,
            precioAntes: 70,
            moneda: "$",
            estado: "Nuevo",
            tags: ["Rock Progresivo", "Clásico"],
            oferta: true,
            disponible: true,
            rating: 10,
            maxRating: 10,
            imagenes: [
                "https://picsum.photos/id/29/600/600",
                "https://picsum.photos/id/30/600/600",
                "https://picsum.photos/id/31/600/600"
            ]
        },
        {
            id: 8,
            categoria: "cd",
            titulo: "Meteora",
            artista: "Linkin Park",
            descripcion: "Edición especial 20 aniversario. Incluye demos inéditos y booklet de 40 páginas.",
            precioActual: 30,
            precioAntes: 35,
            moneda: "Bs",
            estado: "Muy Bueno",
            tags: ["Rock", "Nu Metal"],
            oferta: true,
            disponible: true,
            rating: 9.8,
            maxRating: 10,
            imagenes: [
                "https://picsum.photos/id/32/600/600",
                "https://picsum.photos/id/33/600/600"
            ]
        }
    ];

    // Generar productos adicionales para paginación
    const categorias = ["vinilo", "cd", "casette", "tocadisco", "parlante", "amplificador", "accesorio", "radio"];
    const emojis = {
        vinilo: "🎵",
        cd: "💿",
        casette: "📼",
        tocadisco: "🎚️",
        parlante: "🔊",
        amplificador: "⚡",
        accesorio: "🪡",
        radio: "📻"
    };

    for (let i = 9; i <= 200; i++) {
        const cat = categorias[i % categorias.length];
        const oferta = i % 3 === 0;
        const precioBase = cat === "vinilo" ? 39 : cat === "tocadisco" ? 1899 : 99;
        
        productos.push({
            id: i,
            categoria: cat,
            titulo: `Exclusivo Audia ${i}`,
            artista: `Artista ${["Internacional", "Nacional", "Clásico", "Indie"][i % 4]}`,
            descripcion: "Producto premium de la colección Audia Disco. Calidad garantizada y sonido excepcional. Ideal para coleccionistas y audiófilos.",
            precioActual: oferta ? Math.round(precioBase * 0.75) : precioBase,
            precioAntes: oferta ? precioBase : null,
            moneda: cat === "vinilo" ? "$" : "Bs",
            estado: ["Nuevo", "Sellado", "Como Nuevo"][i % 3],
            tags: ["Premium", "Garantía"],
            oferta: oferta,
            disponible: true,
            rating: 9.0 + (i % 10) * 0.1,
            maxRating: 10,
            imagenes: [
                `https://picsum.photos/id/${(i % 50) + 50}/600/600`,
                `https://picsum.photos/id/${(i % 50) + 70}/600/600`
            ],
            emoji: emojis[cat]
        });
    }

    // ===== ESTADO DE LA APLICACIÓN =====
    let currentFilter = "all";
    let currentSearch = "";
    let currentPage = 1;
    let itemsPerPage = 20;
    let currentProduct = null;
    let currentImageIndex = 0;

    // ===== FUNCIONES AUXILIARES =====
    function renderStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalf = rating % 1 >= 0.5;
        let stars = '';
        for (let i = 0; i < fullStars; i++) {
            stars += '<span class="star-filled">★</span>';
        }
        if (hasHalf) {
            stars += '<span class="star-filled">½</span>';
        }
        return stars;
    }

    function getFiltered() {
        const s = currentSearch.toLowerCase();
        return productos.filter(p => 
            (currentFilter === "all" || p.categoria === currentFilter) &&
            (!s || p.titulo.toLowerCase().includes(s) || 
             p.artista.toLowerCase().includes(s) || 
             p.descripcion.toLowerCase().includes(s) || 
             p.tags.some(t => t.toLowerCase().includes(s)))
        );
    }

    function renderPriceHTML(p) {
        if (p.oferta && p.precioAntes) {
            const discount = Math.round((1 - p.precioActual / p.precioAntes) * 100);
            return `<div class="price-container">
                <div class="old-price">${p.precioAntes} ${p.moneda}</div>
                <div class="price-sale-highlight">
                    <div class="current-price">${p.precioActual} ${p.moneda}</div>
                    <span class="sale-badge-text">🔥 -${discount}%</span>
                </div>
            </div>`;
        }
        return `<div class="current-price">${p.precioActual} ${p.moneda}</div>`;
    }

    function getEmoji(categoria) {
        return emojis[categoria] || "🎵";
    }

    // ===== RENDERIZAR CATÁLOGO =====
    function renderCatalog() {
        const filtered = getFiltered();
        const totalPages = Math.ceil(filtered.length / itemsPerPage);
        
        if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
        if (currentPage < 1) currentPage = 1;
        
        const start = (currentPage - 1) * itemsPerPage;
        const currentItems = filtered.slice(start, start + itemsPerPage);
        
        const grid = document.getElementById('productsGrid');
        const empty = document.getElementById('emptyState');
        const paginationContainer = document.getElementById('paginationContainer');
        const paginationInfo = document.getElementById('paginationInfo');
        
        document.getElementById('resultsCount').innerText = 
            `${filtered.length} producto${filtered.length !== 1 ? 's' : ''}`;
        
        if (filtered.length === 0) {
            grid.innerHTML = '';
            empty.style.display = 'block';
            paginationContainer.style.display = 'none';
            paginationInfo.style.display = 'none';
            return;
        }
        
        empty.style.display = 'none';
        paginationContainer.style.display = 'flex';
        paginationInfo.style.display = 'block';
        
        grid.innerHTML = currentItems.map(p => {
            const emoji = p.emoji || getEmoji(p.categoria);
            return `<div class="product-card" data-id="${p.id}">
                ${p.disponible ? '<span class="card-badge badge-disponible">✓ DISPONIBLE</span>' : '<span class="card-badge badge-agotado">✗ AGOTADO</span>'}
                ${p.oferta ? '<span class="card-badge badge-oferta">🔥 OFERTA</span>' : ''}
                <div class="card-img-wrap">
                    <img src="${p.imagenes[0]}" alt="${p.titulo}" loading="lazy" width="300" height="240">
                </div>
                <div class="card-body">
                    <div class="card-category">${emoji} ${p.categoria.toUpperCase()}</div>
                    <div class="card-title">${p.titulo}</div>
                    <div class="card-artist">${p.artista}</div>
                    <div class="rating-stars">
                        ${renderStars(p.rating)}
                        <span class="rating-value">${p.rating.toFixed(1)}/10</span>
                    </div>
                    <div class="card-description">${p.descripcion.substring(0, 65)}...</div>
                    <div class="card-meta">
                        ${p.tags.map(t => `<span class="meta-tag">${t}</span>`).join('')}
                        <span class="meta-tag">${p.estado}</span>
                    </div>
                </div>
                <div class="card-footer">
                    ${renderPriceHTML(p)}
                    <a href="https://wa.me/59176975874?text=Hola%20me%20interesa%20*${encodeURIComponent(p.titulo)}*%20de%20${encodeURIComponent(p.artista)}" 
                       class="btn-wsp" target="_blank" onclick="event.stopPropagation()">💬 Consultar</a>
                </div>
            </div>`;
        }).join('');
        
        // Event listeners para cards
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.closest('.btn-wsp')) return;
                const pid = parseInt(card.dataset.id);
                const prod = productos.find(p => p.id === pid);
                if (prod) openModal(prod);
            });
        });
        
        // Paginación
        let pagesHtml = '';
        const maxVisible = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
        let endPage = Math.min(totalPages, startPage + maxVisible - 1);
        if (endPage - startPage + 1 < maxVisible) {
            startPage = Math.max(1, endPage - maxVisible + 1);
        }
        
        for (let i = startPage; i <= endPage; i++) {
            pagesHtml += `<div class="page-number ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</div>`;
        }
        
        paginationContainer.innerHTML = `
            <button class="page-btn" id="prevPageBtn" ${currentPage === 1 ? 'disabled' : ''}>◀ Anterior</button>
            <div class="page-numbers">${pagesHtml}</div>
            <button class="page-btn" id="nextPageBtn" ${currentPage === totalPages ? 'disabled' : ''}>Siguiente ▶</button>
        `;
        
        document.getElementById('prevPageBtn')?.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderCatalog();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
        
        document.getElementById('nextPageBtn')?.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderCatalog();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
        
        document.querySelectorAll('.page-number').forEach(el => {
            el.addEventListener('click', () => {
                currentPage = parseInt(el.dataset.page);
                renderCatalog();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
        
        paginationInfo.innerHTML = `📄 Página ${currentPage} de ${totalPages} · Mostrando ${itemsPerPage} por página · Total: ${filtered.length} productos`;
    }

    // ===== MODAL DE PRODUCTO =====
    function openModal(product) {
        currentProduct = product;
        currentImageIndex = 0;
        const modal = document.getElementById('productModal');
        const inner = document.getElementById('modalInner');
        
        function updateModalImage(index) {
            const mainImg = document.getElementById('modalMainImg');
            if (mainImg) mainImg.src = currentProduct.imagenes[index];
            document.querySelectorAll('.thumbnail').forEach((t, i) => {
                t.classList.toggle('active', i === index);
            });
        }
        
        const thumbs = product.imagenes.map((img, idx) => 
            `<div class="thumbnail ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                <img src="${img}" alt="thumb ${idx + 1}">
            </div>`
        ).join('');
        
        const emoji = product.emoji || getEmoji(product.categoria);
        
        inner.innerHTML = `
            <div class="modal-grid">
                <div class="modal-gallery">
                    <div class="gallery-container">
                        <button class="gallery-arrow arrow-left" id="modalPrevImg">←</button>
                        <div class="main-image">
                            <img id="modalMainImg" src="${product.imagenes[0]}" alt="${product.titulo}">
                        </div>
                        <button class="gallery-arrow arrow-right" id="modalNextImg">→</button>
                    </div>
                    <div class="thumbnail-list">${thumbs}</div>
                </div>
                <div class="modal-details">
                    <h2>${product.titulo}</h2>
                    <div class="modal-artist">${emoji} ${product.artista}</div>
                    <div class="modal-rating">
                        ${renderStars(product.rating)} <strong>${product.rating.toFixed(1)}/10</strong>
                    </div>
                    <div class="modal-description">${product.descripcion}</div>
                    <div class="modal-tags">
                        ${product.tags.map(t => `<span class="modal-tag">#${t}</span>`).join('')}
                        <span class="modal-tag">${product.estado}</span>
                    </div>
                    <div class="modal-price">${renderPriceHTML(product)}</div>
                    <div>⭐ Disponibilidad: ${product.disponible ? '✓ Disponible en tienda' : '✗ Agotado temporalmente'}</div>
                    <a href="https://wa.me/59176975874?text=Hola%20quiero%20consultar%20*${encodeURIComponent(product.titulo)}*%20de%20${encodeURIComponent(product.artista)}" 
                       target="_blank" class="modal-wsp-btn">
                        💬 Consultar disponibilidad por WhatsApp
                    </a>
                </div>
            </div>
        `;
        
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Event listeners para navegación de imágenes
        document.getElementById('modalPrevImg').addEventListener('click', () => {
            currentImageIndex = currentImageIndex > 0 ? 
                currentImageIndex - 1 : currentProduct.imagenes.length - 1;
            updateModalImage(currentImageIndex);
        });
        
        document.getElementById('modalNextImg').addEventListener('click', () => {
            currentImageIndex = currentImageIndex < currentProduct.imagenes.length - 1 ? 
                currentImageIndex + 1 : 0;
            updateModalImage(currentImageIndex);
        });
        
        document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
            thumb.addEventListener('click', () => {
                currentImageIndex = i;
                updateModalImage(i);
            });
        });
    }

    function closeModal() {
        document.getElementById('productModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // ===== REPRODUCTOR DE AUDIO =====
    const audioConfig = {
        tracks: [
            { 
                title: "Welcome to Audia Disco", 
                artist: "Vinyl Vibes", 
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
            },
            { 
                title: "Dark Side Groove", 
                artist: "Pink Floyd Vibes", 
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" 
            },
            { 
                title: "Jazz Vinyl Session", 
                artist: "Herb Alpert Style", 
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" 
            },
            { 
                title: "What is Love", 
                artist: "90s", 
                src: "https://dl.bita-music.ir/Bita6/06.96/90s%20Party%20Hits/90s%20Party%20Hits/01%20What%20Is%20Love.mp3" 
            },
            { 
                title: "Beautiful Life", 
                artist: "90s", 
                src: "https://dl.bita-music.ir/Bita6/06.96/90s%20Party%20Hits/90s%20Party%20Hits/06%20Beautiful%20Life.mp3" 
            }
        ],
        currentTrack: 0,
        isPlaying: false
    };

    const audio = new Audio();
    audio.volume = 0.3;
    audio.preload = 'metadata';

    const playerElements = {
        vinylDisc: document.getElementById('vinylDisc'),
        title: document.getElementById('audioTitle'),
        artist: document.getElementById('audioArtist'),
        playPause: document.getElementById('audioPlayPause'),
        prev: document.getElementById('audioPrev'),
        next: document.getElementById('audioNext'),
        progress: document.getElementById('audioProgress'),
        mute: document.getElementById('audioMute'),
        volume: document.getElementById('volumeSlider')
    };

    function loadTrack(index) {
        audioConfig.currentTrack = index;
        const track = audioConfig.tracks[index];
        playerElements.title.textContent = track.title;
        playerElements.artist.textContent = track.artist;
        audio.src = track.src;
        audio.load();
        if (audioConfig.isPlaying) {
            audio.play().catch(e => console.log('Autoplay blocked'));
        }
    }

    function togglePlayPause() {
        if (audioConfig.isPlaying) {
            audio.pause();
        } else {
            audio.play().catch(e => console.log('Autoplay prevented'));
        }
    }

    function updatePlayState() {
        if (audioConfig.isPlaying) {
            playerElements.playPause.innerHTML = '⏸';
            playerElements.vinylDisc.classList.add('playing');
        } else {
            playerElements.playPause.innerHTML = '▶';
            playerElements.vinylDisc.classList.remove('playing');
        }
    }

    // Event listeners del reproductor
    playerElements.playPause.addEventListener('click', togglePlayPause);
    
    playerElements.prev.addEventListener('click', () => {
        const prevIndex = (audioConfig.currentTrack - 1 + audioConfig.tracks.length) % audioConfig.tracks.length;
        loadTrack(prevIndex);
    });
    
    playerElements.next.addEventListener('click', () => {
        const nextIndex = (audioConfig.currentTrack + 1) % audioConfig.tracks.length;
        loadTrack(nextIndex);
    });
    
    playerElements.mute.addEventListener('click', () => {
        audio.muted = !audio.muted;
        playerElements.mute.textContent = audio.muted ? '🔇' : '🔊';
    });
    
    playerElements.volume.addEventListener('input', (e) => {
        audio.volume = e.target.value / 100;
    });
    
    playerElements.progress.addEventListener('input', (e) => {
        const time = (e.target.value / 100) * audio.duration;
        audio.currentTime = time;
    });

    audio.addEventListener('play', () => {
        audioConfig.isPlaying = true;
        updatePlayState();
    });
    
    audio.addEventListener('pause', () => {
        audioConfig.isPlaying = false;
        updatePlayState();
    });
    
    audio.addEventListener('ended', () => {
        const nextIndex = (audioConfig.currentTrack + 1) % audioConfig.tracks.length;
        loadTrack(nextIndex);
    });
    
    audio.addEventListener('timeupdate', () => {
        if (audio.duration) {
            playerElements.progress.value = (audio.currentTime / audio.duration) * 100;
        }
    });
    
    audio.addEventListener('loadedmetadata', () => {
        playerElements.progress.max = 100;
    });

    // ===== EVENT LISTENERS GLOBALES =====
    
    // Búsqueda
    document.getElementById('searchInput').addEventListener('input', (e) => {
        currentSearch = e.target.value;
        currentPage = 1;
        renderCatalog();
    });
    
    // Items por página
    document.getElementById('perPageSelect').addEventListener('change', (e) => {
        itemsPerPage = parseInt(e.target.value);
        currentPage = 1;
        renderCatalog();
    });
    
    // Filtros y navegación
    document.querySelectorAll('.pill, .nav-cat').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            currentFilter = btn.dataset.filter;
            currentPage = 1;
            document.querySelectorAll('.pill').forEach(p => {
                p.classList.toggle('active', p.dataset.filter === currentFilter);
            });
            document.querySelectorAll('.nav-cat').forEach(n => {
                n.classList.toggle('active', n.dataset.filter === currentFilter);
            });
            renderCatalog();
        });
    });
    
    // Modal
    document.getElementById('closeModalBtn').addEventListener('click', closeModal);
    document.getElementById('productModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('productModal')) closeModal();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.getElementById('productModal').style.display === 'flex') {
            closeModal();
        }
    });
    
    // Colapsar header
    const header = document.getElementById('mainHeader');
    const collapseHeaderBtn = document.getElementById('collapseHeaderBtn');
    let headerCollapsed = false;
    
    collapseHeaderBtn.addEventListener('click', () => {
        headerCollapsed = !headerCollapsed;
        if (headerCollapsed) {
            header.classList.add('collapsed');
            collapseHeaderBtn.querySelector('.arrow').textContent = '▲';
            collapseHeaderBtn.title = 'Mostrar menú';
        } else {
            header.classList.remove('collapsed');
            collapseHeaderBtn.querySelector('.arrow').textContent = '▼';
            collapseHeaderBtn.title = 'Ocultar menú';
        }
    });
    
    // Colapsar filtros
    const collapseFiltersBtn = document.getElementById('collapseFiltersBtn');
    const filterCollapsibles = document.querySelectorAll('.filter-collapsible');
    let filtersCollapsed = false;
    
    collapseFiltersBtn.addEventListener('click', () => {
        filtersCollapsed = !filtersCollapsed;
        filterCollapsibles.forEach(el => {
            el.classList.toggle('collapsed', filtersCollapsed);
        });
        collapseFiltersBtn.classList.toggle('collapsed', filtersCollapsed);
        collapseFiltersBtn.title = filtersCollapsed ? 'Mostrar filtros' : 'Ocultar filtros';
    });
    
    // Scroll to top
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('show', window.scrollY > 500);
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Controles de mapa
    const mapIframe = document.querySelector('.map-wrapper iframe');
    document.getElementById('mapSmallBtn').addEventListener('click', () => {
        mapIframe.style.height = '260px';
    });
    
    document.getElementById('mapMediumBtn').addEventListener('click', () => {
        mapIframe.style.height = '380px';
    });
    
    document.getElementById('mapLargeBtn').addEventListener('click', () => {
        mapIframe.style.height = '520px';
    });

    // ===== INICIALIZACIÓN =====
    renderCatalog();
    loadTrack(0);
})();