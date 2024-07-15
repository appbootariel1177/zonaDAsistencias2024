const urls = [
    'https://appbootariel1177.github.io/cajasasistencias/',
    'https://appbootariel1177.github.io/electronica2024/',
    'https://appbootariel1177.github.io/Mecanica2024/',
    'https://appbootariel1177.github.io/hidraulica2024/',
    'https://appbootariel1177.github.io/neumatica2024/'
];
let currentIndex = 0;

function loadIframe(index) {
    currentIndex = index;
    document.getElementById('contentFrame').src = urls[currentIndex];
}

function prevPage() {
    if (currentIndex > 0) {
        loadIframe(currentIndex - 1);
    }
}

function nextPage() {
    if (currentIndex < urls.length - 1) {
        loadIframe(currentIndex + 1);
    }
}
