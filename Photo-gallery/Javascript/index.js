let galleryContainer = document.getElementById("gallery-container");

const Array_of_images = [
    {
        link: "./Assets/Images/fox.jpeg",
        item_name_1: "Fennec",
        item_name_2: "Fox",
        item_origin_location: "India"
    },
    {
        link: "./Assets/Images/whale.jpeg",
        item_name_1: "Humpback",
        item_name_2: "Whale",
        item_origin_location: "South Africa"
    },
    {
        link: "./Assets/Images/baboon.jpeg",
        item_name_1: "Common Brown",
        item_name_2: "Baboon",
        item_origin_location: "South Africa"
    },
    {
        link: "./Assets/Images/deer.jpeg",
        item_name_1: "Spotted",
        item_name_2: "Deer",
        item_origin_location: "Amazon"
    }
];

for (let i = 0; i < Array_of_images.length; i++) {
    galleryContainer.innerHTML += `
        <div class="grid_item">
            <img src="${Array_of_images[i].link}" class="grid-item-image" alt="" />
            <div class="blurred-layer">
                <div class="blurred-layer-content">
                    <div class="blurred-layer-texts">
                        <span class="item-name-1">${Array_of_images[i].item_name_1}</span>
                        <span class="item-name-2">${Array_of_images[i].item_name_2}</span>
                        <span class="item-origin-place">${Array_of_images[i].item_origin_location}</span>
                    </div>
                    <a href="#" class="knowMoreLink">
                    <span>Know more</span><img class="right-arrow" src="./Assets/Images/arrow.png">
                    </a>
                </div>
            </div>
        </div>
        `
}
