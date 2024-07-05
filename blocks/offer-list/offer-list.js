
export default function decorate(block) {
  

   console.log("Block:  ", block);

    const [titleEL, typeEL, descriptionEL, ctaEl, ctaTargetEL, ctaIconEL, ...offerItems] = block.children;

    console.log("Title:",titleEL);
    console.log("Type:",typeEL);
    console.log("description:",descriptionEL);
    console.log("cta:",ctaEl.outerHTML);
    console.log("ctaTarget:",ctaTargetEL);
    console.log("ctaIcon:",ctaIconEL.outerHTML);

    const title = titleEL?.innerText?.trim() || '';
    const type = typeEL?.innerText?.trim() || '';
    const description = descriptionEL?.innerText?.trim() || '';
    const a = ctaEl?.querySelector('.button-container a') || '';
    const target = ctaTargetEL?.innerText?.trim() || '';
    const btnIcon = ctaIconEL?.querySelector('img') || '';

    if (a) {
      a.classList.remove("button");
      a.classList.add("btn--link", "btn--link-primary");
      if(target){
        a.setAttribute('target', target);
      }
      a.innerHTML = `${a.innerText} <span>${
        btnIcon ? `${btnIcon.outerHTML}` : ""
      }</span>`;
      //console.log("anchor tag innerHTML", a.innerHTML);
    }
    

    const componentHTML = `
  <div class="immersive__content heading-content">
  ${(title && type )? `<${type}>${title}</${type}>` : ""}
  ${description ? `<p>${description}</p>` : ""}
      <div class="immersive__action-btn">
          ${a ? a.outerHTML : ""}
      </div>
  </div>
`;

 
}

function createPrimaryOffer(card) {
  
  const [desktopImg, mobileImage, title, ] = card.children;


  if (a) {
    a.classList.add("button", "primary__btn");
    if(target){
      a.setAttribute('target', target.innerText);
    }
  }

  const leftContainer = document.createElement('div');
  leftContainer.classList.add('left-container');

  Array.from(teaser.attributes).forEach(attr => {
    leftContainer.setAttribute(attr.name, attr.value);
});


leftContainer.innerHTML = `
   <picture>
      <source srcset=" ${bckImg ? `${bckImg.src}` : ""}" media="(min-width: 1024px)">
      ${bckImg ? `${bckImg.outerHTML}` : ""}
   </picture>
   <div class="light-teaser buyers-guide-teaser">
      <div class="teaser__card teaser-grey">
         <div class="teaser__content">
            <div class="teaser__info left-img-over-text">
               <div class="teaser__title">
                  ${title? `${title.outerHTML}` : ""}
               </div>
               <div class="teaser__description">
                  ${description? `<p>${description.innerText}</p>`: ""}
               </div>
            </div>
            <div class="teaser__action-btn">
               ${a ? a.outerHTML : ""}
            </div>
         </div>
      </div>
   </div>
`;



  return leftContainer.outerHTML;
}