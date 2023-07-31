const urlForm = document.getElementById("urlForm");
const longUrlInput = document.getElementById("longUrlInput");
const shortUrlContainer = document.getElementById("shortUrlContainer");
const shortUrlOutput = document.getElementById("shortUrlOutput");

urlForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const longUrl = longUrlInput.value;
  // You would need to implement the logic to send the URL to the server for shortening and get the shortened URL back.
  // For this example, we'll just assume the server returns a shortened URL.
  const shortenedUrl = "http://shorturl.com/xyz"; // Replace with the actual shortened URL
  displayShortenedURL(shortenedUrl);
});

function displayShortenedURL(shortenedUrl) {
  shortUrlOutput.href = shortenedUrl;
  shortUrlOutput.innerText = shortenedUrl;
  shortUrlContainer.style.display = "block";
}
