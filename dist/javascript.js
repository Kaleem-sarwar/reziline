  const scrollContainer = document.getElementById("imageContainer");
  const scrollLeft = document.getElementById("scrollLeft");
  const scrollRight = document.getElementById("scrollRight");

  scrollLeft.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 300; 
  });

  scrollRight.addEventListener("click", () => {
    scrollContainer.scrollLeft += 300; 
  });
document.getElementById('search-toggle').addEventListener('click', () => {
  const searchBar = document.getElementById('search-bar');
  searchBar.classList.toggle('hidden');
});
document.getElementById('burger-toggle').addEventListener('click', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});
