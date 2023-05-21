// https://www.youtube.com/watch?v=vQc3EmFCWRw
// referenced this youtube video on how to make gallery in vanilla js
const gallery = document.getElementById("gallery");
const selectedImage = document.getElementById("selectedImage");
const selectedIndex = null;

let imageArray = [];
for (let i = 0; i <= 47; i++) {
  imageArray.push(i);
}
const catItems = document.getElementById("cat-items");
let catArray = [];
for (let i = 0; i <= 21; i++) {
  catArray.push(i);
}

imageArray.forEach((i) => {
  const x = document.createElement("div");
  x.classList.add("galleryItem");
  const image = document.createElement("img");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("titleDiv")
  const userTitleImage = document.createElement("img");
  const imageTitle = document.createElement("div");

  const imageUsername = document.createElement("div");
  const imageViewTime = document.createElement("div");

  image.src = `/content/gallery/randomImage_${1}.jpg`;
  image.alt = `Image ${i}`;
  image.classList.add("galleryImg");

  userTitleImage.src = `/content/gallery/randomImage_${1}.jpg`;
  userTitleImage.alt = `Image ${i}`;
  userTitleImage.classList.add("userImg");
  imageTitle.textContent = "Placeholder Title";
  imageTitle.classList.add("galleryTitle");

  imageUsername.textContent = "Random Name";
  imageUsername.classList.add("galleryUserName");
  imageViewTime.textContent = "Placeholder Views + Time";
  imageViewTime.classList.add("galleryViewTime");

  x.appendChild(image);
  titleDiv.appendChild(userTitleImage)
  titleDiv.appendChild(imageTitle)
  x.appendChild(titleDiv);

  x.appendChild(imageUsername);
  x.appendChild(imageViewTime);
  gallery.appendChild(x);
});

catArray.forEach((i) => {
  const catText = document.createElement("button");
  // catText.classList.add(cat-item)
  catText.textContent = "placeholder";
  catText.classList.add("cat");
  catItems.appendChild(catText);
});
