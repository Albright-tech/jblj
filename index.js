document.addEventListener("DOMContentLoaded", function () {
  fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e53595e6e7d24b09a32342fe225cca46")
    .then((res) => res.json())
    .then((data) => {
      if (data.articles && data.articles.length > 0) {
        const newsContainer = document.getElementById("news-container");
        let newsHTML = '';

        data.articles.forEach((article) => {
          newsHTML += `
            <div class="news-item">
              <h2>${article.title}</h2>
              <p>${article.description}</p>
              <a href="${article.url}" target="_blank">Read more</a>
            </div>
          `;
        });

        newsContainer.innerHTML = newsHTML;
      } else {
        console.error("No articles found");
      }
    })
    .catch((error) => console.error("Error fetching data"));
});


  
