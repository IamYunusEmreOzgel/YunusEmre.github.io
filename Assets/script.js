// Sayfada mouse hareketini takip edecek ışık efektinin HTML elemanını seçer.
const light = document.getElementById("cursor-light");

// Eğer sayfada cursor-light elemanı varsa mouse takip efektini aktif eder.
if(light){
    // Mouse sayfa üzerinde hareket ettiğinde çalışacak olayı dinler.
    document.addEventListener("mousemove", function(e){
        // Işık efektinin yatay konumunu mouse'un X koordinatına göre günceller.
        light.style.left = e.clientX + "px";

        // Işık efektinin dikey konumunu mouse'un Y koordinatına göre günceller.
        light.style.top = e.clientY + "px";
    });
}

// Sertifika veya görsel görüntüleme modalını açmak için kullanılan fonksiyondur.
function openImage(image){
    // Modal içerisinde gösterilecek görsel elemanını seçer.
    const modalImage = document.getElementById("modalImage");

    // Görselin açılacağı modal arka plan elemanını seçer.
    const imageModal = document.getElementById("imageModal");

    // Hem görsel hem de modal elemanı varsa modalı güvenli şekilde açar.
    if(modalImage && imageModal){
        // Modal içerisindeki görsel kaynağını tıklanan görselin yolu ile değiştirir.
        modalImage.src = image;

        // Modal alanını görünür hale getirir.
        imageModal.style.display = "flex";
    }
}

// Açık olan görsel modalını kapatmak için kullanılan fonksiyondur.
function closeImage(){
    // Kapatılacak modal arka plan elemanını seçer.
    const imageModal = document.getElementById("imageModal");

    // Modal elemanı varsa görünmez hale getirir.
    if(imageModal){
        // Modal alanını gizler.
        imageModal.style.display = "none";
    }
}

// Mobil görünümde menüyü açıp kapatmak için kullanılan fonksiyondur.
function toggleMenu(){
    // Açılıp kapanacak navigasyon menüsünü seçer.
    const navbar = document.getElementById("navbar");

    // Navbar elemanı varsa active sınıfını ekleyip kaldırır.
    if(navbar){
        // Menü açıksa kapatır, kapalıysa açar.
        navbar.classList.toggle("active");
    }
}
