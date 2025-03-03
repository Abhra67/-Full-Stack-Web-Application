document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("imageGallery");

    // Mock API Call (Replace with your actual backend API)
    fetch("https://api.example.com/random-images")
        .then(response => response.json())
        .then(data => {
            data.forEach(img => {
                let imgElement = document.createElement("img");
                imgElement.src = img.url;
                imgElement.alt = "Memory Image";
                gallery.appendChild(imgElement);
            });
        })
        .catch(error => console.error("Error loading images:", error));
});
