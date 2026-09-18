document.addEventListener("DOMContentLoaded", function () {

    const savedName = localStorage.getItem("networkUserName");

    if (!savedName) {
        return;
    }

    const profileLinks = document.querySelectorAll(".profile-link");

    profileLinks.forEach(function (link) {
        link.textContent = "👤 " + savedName;
    });

});
