
export default function decorate(block) {
  

   console.log("Block:  ", block);

    const [titleEL, typeEL, descriptionEL, ctaEl, ctaTargetEL, ctaIconEL, ...offerItems] = block.children;

    const title = titleEL?.innerText?.trim() || '';
    const type = typeEL?.innerText?.trim() || '';
    const description = descriptionEL?.innerText?.trim() || '';
    const a = ctaEl?.querySelector('.button-container a') || '';
    const target = ctaTargetEL?.innerText?.trim() || '';
    const btnIcon = ctaIconEL?.querySelector('img') || '';

    const primaryCard= createPrimaryOffer(offerItems[0]);
    const secondaryCard= createSecondaryOffer(offerItems[1]);
    const generalCard1= (offerItems[2])? createGeneralOffer(offerItems[2], 'teaser-light'): "";
    const generalCard2= (offerItems[3])? createGeneralOffer(offerItems[3], 'teaser-dark'): "";

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
    

    const componentHTML = `<div class="immersive__content heading-content">
  ${(title && type )? `<${type}>${title}</${type}>` : ""}
  ${description ? `<p>${description}</p>` : ""}
      <div class="immersive__action-btn">
          ${a ? a.outerHTML : ""}
      </div>
  </div>
`;


block.innerHTML = `
<section class="deals-offers-container">
      <div class="immersive__wrapper-light">
          ${componentHTML}
          <div class="sub-container">
              ${primaryCard}
              <div class="right-container">
                  ${secondaryCard}
                  <div class="right-container-subcontainer ">
                      ${generalCard1}
                      ${generalCard2}
                  </div>
              </div>
          </div>
      </div>              
  </section>
`;

 
}

function createPrimaryOffer(card) {
  
  const [desktopImgEl, mobileImageEl, titleEl, descriptionEl, ctaEl, ctaTargetEL  ] = card.children;

  console.log("Desktop Img:",desktopImgEl);
  console.log("Mobile Img:",mobileImageEl);
  console.log("Title:",titleEl);
  console.log("description:",descriptionEl);
  console.log("cta:",ctaEl.outerHTML);
  console.log("ctaTarget:",ctaTargetEL);


  const desktopImgSrc = desktopImgEl?.querySelector('img')?.src || '';
  const desktopImgAlt = desktopImgEl?.querySelector('img')?.alt || '';

  const mobileImgSrc = mobileImageEl?.querySelector('img')?.src || '';
  const mobileImgAlt = mobileImageEl?.querySelector('img')?.alt || '';
  
  const title = titleEl?.innerText?.trim() || '';
  const description = descriptionEl?.innerText?.trim() || '';
  
  const a = ctaEl?.querySelector('.button-container a') || '';
  const target = ctaTargetEL?.innerText?.trim() || '';
  
  


  if (a) {
    a.classList.add("button", "primary__btn");
    if(target){
      a.setAttribute('target', target);
    }
  }

  const leftContainer = document.createElement('div');
  leftContainer.classList.add('left-container');

  Array.from(card.attributes).forEach(attr => {
    leftContainer.setAttribute(attr.name, attr.value);
});


leftContainer.innerHTML = `
   <picture>
      <source srcset=" ${desktopImgSrc ? `${desktopImgSrc}` : ""}" media="(min-width: 1024px)">
      <source srcset=" ${mobileImgSrc ? `${mobileImgSrc}` : ""}" media="(max-width: 1024px)">
      <img src="${desktopImgSrc ? `${desktopImgSrc}` : ""}" loading="lazy" alt="${desktopImgAlt}"/>
   </picture>
   <div class="light-teaser buyers-guide-teaser">
      <div class="teaser__card teaser-grey">
         <div class="teaser__content">
            <div class="teaser__info left-img-over-text">
               <div class="teaser__title">
                  ${title? `<p>${title}</p>` : ""}
               </div>
               <div class="teaser__description">
                  ${description? `<p>${description}</p>`: ""}
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

function createSecondaryOffer(card) {

  const [desktopImgEl, mobileImageEl, titleEl, descriptionEl, ctaEl, ctaTargetEL  ] = card.children;

  console.log("Desktop Img:",desktopImgEl);
  console.log("Mobile Img:",mobileImageEl);
  console.log("Title:",titleEl);
  console.log("description:",descriptionEl);
  console.log("cta:",ctaEl.outerHTML);
  console.log("ctaTarget:",ctaTargetEL);


  const desktopImgSrc = desktopImgEl?.querySelector('img')?.src || '';
  const desktopImgAlt = desktopImgEl?.querySelector('img')?.alt || '';

  const mobileImgSrc = mobileImageEl?.querySelector('img')?.src || '';
  const mobileImgAlt = mobileImageEl?.querySelector('img')?.alt || '';
  
  const title = titleEl?.innerText?.trim() || '';
  const description = descriptionEl?.innerText?.trim() || '';
  
  const a = ctaEl?.querySelector('.button-container a') || '';
  const target = ctaTargetEL?.innerText?.trim() || '';
  
  

  

  if (a) {
    a.classList.add("button", "primary__btn");
    if(target){
      a.setAttribute('target', target);
    }
    
  }

  const secCardContainer = document.createElement('div');
  secCardContainer.classList.add('right-container__card-1');

  Array.from(card.attributes).forEach(attr => {
    secCardContainer.setAttribute(attr.name, attr.value);
});

  secCardContainer.innerHTML = `
                        <picture class="image-container">
                            <source media="(min-width: 769px)" srcset="${desktopImgSrc ? `${desktopImgSrc}` : ""}" >
                            <source media="(max-width: 768px)" srcset="${mobileImgSrc ? `${mobileImgSrc}` : ""}" >
                            <img src="${desktopImgSrc ? `${desktopImgSrc}` : ""}" loading="lazy" alt="${desktopImgAlt}"/>
                              
                        </picture>
                        <div class="right-container__content">
                            <div class="immersive__content img-over-text">
                               <div class="teaser__title">${title? `<p>${title}</p>` : ""}</div>
                               
                                ${description? `<p>${description}</p>`: ""}
                                <div class="immersive__action">
                                 ${a ? a.outerHTML : ""}
                                 </div>
                            </div>
                        </div>
                    `;


  return secCardContainer.outerHTML;
}

function createGeneralOffer(card, textClass) {
  
  const [desktopImgEl, mobileImageEl, titleEl, descriptionEl, ctaEl, ctaTargetEL  ] = card.children;

  const title = titleEl?.innerText?.trim() || '';
  const description = descriptionEl?.innerText?.trim() || '';
  
  const a = ctaEl?.querySelector('.button-container a') || '';
  const target = ctaTargetEL?.innerText?.trim() || '';
  
  

  if (a) {
    a.classList.add("button", "primary__btn");
    if(target){
      a.setAttribute('target', target);
    }
  }

  const genCardContainer = document.createElement('div');
  genCardContainer.classList.add('right-container__card-2');

  Array.from(card.attributes).forEach(attr => {
    genCardContainer.setAttribute(attr.name, attr.value);
  });

  genCardContainer.innerHTML=`<div class="light-teaser buyers-guide-teaser">
                                <div class="teaser__card ${textClass? textClass: ''}">
                                    <div class="teaser__content">
                                        <div class="teaser__info">
                                            <div class="teaser__title">
                                                 ${title? `<p>${title}</p>` : ""}
                                            </div>
                                            <div class="teaser__description">
                                                 ${description? `<p>${description}</p>`: ""}
                                            </div>
                                        </div>
                                        <div class="teaser__actions">
                                          ${a ? a.outerHTML : ""}
                                        </div>
                                    </div>
                                </div>
                            </div>`;





  return genCardContainer.outerHTML;
}
