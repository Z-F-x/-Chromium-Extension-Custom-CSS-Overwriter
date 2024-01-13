

// Example content script
console.log("Content script for CSS Overwriter loaded");

// Inject CSS for specific selectors
const style = document.createElement('style');
style.textContent = `

/*Universal CSS selectors:*/
* {
  border-color: #999999!important;
  color: #fff6ef!important;
  --tw-gradient-from-position: transparent!important;
  --tw-gradient-from: transparent!important var(transparent!important);
  --tw-gradient-to: #262729!important var(transparent!important);
}

#parentDiv .p-4.overflow-y-auto {
  background-color: #222222!important; /* Lightened color */
}

input[type="checkbox"], input[type="text"], input {
  background-color: #666666!important;
  color: #fff6ef!important;
}

  /* Add your custom CSS here */



  
  /* VG, Dagbladet, Aftenposten: */

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

  .article-entity, .header, header, .carousel-see-more-livefeed, .teaser, children __sc, .block one-plus-three, .text-container, .information comments, .illustration-container, .vev, .col-2b, .article, .teaser-link, .content-outer, .content-container, .content _center, .page-main-container{
    background-color: #262729!important;
    color: #fff6ef!important;
  }
  .teaser-link{
    border-bottom: 1px solid gray;
  }

  ::before {
    background-color: #262729!important;
  }



  /* Etymology online: */
  .container--1mazc{
    background-color: #262729!important;
    color: #fff6ef!important;
  }

  /* translate.google.com: */

  /* chat.openai.com*/
  .sticky{
    background-color: #262729!important;
    color: #fff6ef!important;
  } 

  .p-4 .overflow-y-auto{
    background-color: #222222!important;
  }
  .from-black{
    // background-color: #222222!important;
  }

  .w-full text-token-text-primary, .dark .bg-black, .text-gizmo-gray-600 {
    background-color: #333333!important;
  }

  .px-4, .py-2, .justify-center, .text-base, .md:gap-6, .m-auto, .flex, .flex-1, .text-base, .mx-auto, .gap-3, .md:px-5, .lg:px-1, .xl:px-5, .md:max-w-3xl, .lg:max-w-[40rem], .xl:max-w-[48rem], .group, .final-completion, .relative, .flex, .w-full, .flex-col, .lg:w-[calc(100%-115px)], .agent-turn{
    background-color: #333333!important;
  }

  .to-black{
    
    // background-color: #333333!important;
    // --tw-gradient-from-position: #333333!important;
    // --tw-gradient-from: #333333!important var(#333333!important);
    // --tw-gradient-to: #333333!important var(#333333!important);
  }

  .flex items-center .justify-center .text-token-text-primary .transition hover:text-token-text-secondary .radix-state-open:text-token-text-secondary{
    // background-color: #333333!important;
    data-state: open;
  }

`;


// Targets all divs for background color overwrite
var divs = document.querySelectorAll('div');
// Loop through each div and change its background color
divs.forEach(function(div) {
    div.style.backgroundColor = '#262729'; // Replace 'yourColor' with your desired color
});
document.head.appendChild(style);