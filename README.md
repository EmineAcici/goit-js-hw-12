# GoIT JavaScript Homework 12 - Gelişmiş Görsel Arama ve Sayfalandırma

Bu proje, GoIT Full Stack Developer eğitimi JavaScript modülünün on ikinci ve final ödevidir. Bu çalışmada; **Async/Await** sözdizimi, **Axios** kütüphanesi ile HTTP istekleri, dinamik sayfalandırma (pagination) ve kullanıcı deneyimini artıran yumuşak kaydırma (smooth scroll) özellikleri üzerine odaklanılmıştır.

## 📁 Proje Yapısı

Proje, modern **Vite** derleyicisi ile yapılandırılmış olup, Pixabay API'sini profesyonel bir mimariyle kullanmaktadır:

```text
goit-js-hw-12/
├── src
│   ├── js
│   |   ├── main.js           # Uygulama mantığı ve asenkron akış
│   |   ├── fetchApi.js       # Axios yapılandırması ve API servis fonksiyonları
│   |   ├── imageGallery.js   # Galeri oluşturma ve UI güncellemeleri
|   |   └── searchForm.js     # Arama formu yapısı
│   └── index.html       # Arama formu, galeri ve "Load More" yapısı
├── package.json         # Bağımlılıklar (Axios, SimpleLightbox, iziToast)
└── vite.config.js       # Vite konfigürasyonu
