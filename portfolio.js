document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const navLinks = document.getElementById("navLinks");

    // Hamburger button နှိပ်ရင် menu link တွေကို ပိတ်/ဖွင့် လုပ်ရန်
    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Menu link တစ်ခုခုကို နှိပ်လိုက်ရင်လည်း menu ပြန်ပိတ်သွားရန်
    const links = navLinks.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});