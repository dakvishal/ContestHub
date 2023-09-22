document.addEventListener("DOMContentLoaded", function () {
        var imagePaths = ["images/canva-photo-editor-8-7.webp", "images/best-coding-languages-for-kids.jpeg", "images/chris-ried-ieic5Tq8YMk-unsplas_1200x768.avif", "images/how-to-start-coding-1.webp", "images/istockphoto-537331500-612x612.jpg", "images/MIT-Coding-Brain-01-press_0.jpg", "images/sc_1_olhp_786px.jpg", "images/pexels-markus-spiske-4439901.jpg"];
        var randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
        var randomImageElement = document.getElementById("random-image");
        randomImageElement.src = randomImagePath;
});

let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
        return v.json()
}).then((contest) => {
        console.log(contest)
        ihtml = ""
        var imagePaths = ["images/canva-photo-editor-8-7.webp", "images/best-coding-languages-for-kids.jpeg", "images/chris-ried-ieic5Tq8YMk-unsplas_1200x768.avif", "images/how-to-start-coding-1.webp", "images/istockphoto-537331500-612x612.jpg", "images/MIT-Coding-Brain-01-press_0.jpg", "images/sc_1_olhp_786px.jpg", "images/pexels-markus-spiske-4439901.jpg"];
        for (item in contest) {
                // select one random image from the image folder
                var randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
                ihtml += `
                <div class="card" style="width: 22rem;">
                        <img src=${randomImagePath} class="card-img-top" alt="...">
                        <div class="card-body">
                                <h5 class="card-title">${contest[item].name}</h5>
                                <p class="card-text">starts at:${contest[item].start_time}</p>
                                <p class="card-text">ends at:${contest[item].end_time}</p>
                                <a href="${contest[item].url}" class="btn btn-primary">Visit Contest</a>
                        </div>
                </div>
                `
        }
        cardContainer.innerHTML = ihtml
})
// cardContainer.innerHTML = "innercard"