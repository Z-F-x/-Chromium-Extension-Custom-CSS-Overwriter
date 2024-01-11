

// Example content script
console.log("Content script for CSS Overwriter loaded");

// Inject CSS
const style = document.createElement('style');
style.textContent = `
  /* Add your custom CSS here */
  .horizontal-scroller, html, body {
    background-color: #262729!important;
    color: #fff6ef!important;
  }
  span, h3,h1, h2{ color: #fff6ef!important;}
  .content-main-container{
    background-color: #262729!important;
    color: #fff6ef!important;
  }
  :root{    background-color: #262729!important;}
  .ch-core-header .ch-header-main {
    background-color: #262729!important;
    color: #fff6ef!important;
  }
  .ch-core-header .ch-logo:visited, .ch-icon ch-icon-logo, .ch-core-header .ch-main-links a, .ch-core-header .ch-main-links a:link{
    background-color: #262729!important;
    color: #fff6ef!important;
  }

  .header, header, .carousel-see-more-livefeed, .teaser, children __sc, .block one-plus-three, .text-container, .information comments, .illustration-container, .vev, .col-2b, .article, .teaser-link, .content-outer, .content-container, .content _center, .page-main-container{
    background-color: #262729!important;
    color: #fff6ef!important;
  }
  .teaser-link{
    border-bottom: 1px solid gray;
  }
  * {
  // background-color: #262729;
  color: #fff6ef!important;
}
::before {
  background-color: #262729!important;
}


`;

var divs = document.querySelectorAll('div');

// Loop through each div and change its background color
divs.forEach(function(div) {
    div.style.backgroundColor = '#262729'; // Replace 'yourColor' with your desired color
});
document.head.appendChild(style);
