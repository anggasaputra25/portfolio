// Animate On Scrolling
AOS.init();
// Fancybox
Fancybox.bind("[data-fancybox]", {
    on: {
        "*": (fancybox, eventName) => {
        console.log(`Fancybox eventName: ${eventName}`);
        },
    },
});
// Remove Overflow
// window.addEventListener('DOMContentLoaded', function() {
//     var homeDiv = document.getElementById('home');
//     var aboutDiv = document.getElementById('about');
//     var projectsDiv = document.getElementById('projects');
//     var contactDiv = document.getElementById('contact');
//     var body = document.body;

//     // Cek apakah tinggi div home melebihi 100vh
//     if (homeDiv.clientHeight > window.innerHeight || aboutDiv.clientHeight > window.innerHeight || projectsDiv.clientHeight > window.innerHeight || contactDiv.clientHeight > window.innerHeight) {
//         body.classList.remove('overflow-hidden');
//     }
// });

// Send message
function sendWhatsApp() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    var message = "Nama : " + nama + "\nEmail : " + email + "\nPesan : " + pesan;

    var whatsappLink = "https://wa.me/6283847406524?text=" + encodeURIComponent(message);
    window.open(whatsappLink, "_blank");
}

window.addEventListener('scroll', function() {
    const button = document.querySelector('.btn-top');
    if (window.scrollY > 1) {
        button.style.marginRight = "8px";
        button.style.transform = "rotate(0deg)";
    } else {
        button.style.marginRight = "-30px";
        button.style.transform = "rotate(90deg)";
    }
});
