function showDetails(imageUrl, title, description) {
  // Change the background image of the body
  document.body.style.backgroundImage = `url('${imageUrl}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

  // Update the title and description in the left section
  document.getElementById("detail-title").textContent = title;
  document.getElementById("detail-description").textContent = description;
}
