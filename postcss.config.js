// tailwindcss modülünü içeri aktarıyoruz
const tailwindcss = require('tailwindcss');

// PostCSS yapılandırma nesnesini dışa aktarıyoruz
module.exports = {
  // PostCSS eklenti belirtiyoruz
  plugins: [
    // Tailwind CSS eklentisini ekliyoruz ve tailwind.js konfigürasyon dosyasını belirtiyoruz
    tailwindcss('./tailwind.js'),
    
    // Autoprefixer eklentisini ekliyoruz
    require('autoprefixer')
  ]
}
