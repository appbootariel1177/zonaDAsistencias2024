const urls = [
    'https://appbootariel1177.github.io/cajasasistencias/',
    'https://appbootariel1177.github.io/electronica2024/',
    'https://appbootariel1177.github.io/Mecanica2024/',
    'https://appbootariel1177.github.io/hidraulica2024/',
    'https://appbootariel1177.github.io/neumatica2024/'
];
let currentIndex = 0;

function loadIframe() {
    document.getElementById('contentFrame').src = urls[currentIndex];
}

function prevPage() {
    if (currentIndex > 0) {
        currentIndex--;
        loadIframe();
    }
}

function nextPage() {
    if (currentIndex < urls.length - 1) {
        currentIndex++;
        loadIframe();
    }
}

// Cargar la primera página al cargar la página web
loadIframe();
