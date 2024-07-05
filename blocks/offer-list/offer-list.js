
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
        a.setAttribute('target', target.innerText);
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







    
  block.innerHTML = `
  <section class="deals-offers-container">
        <div class="immersive__wrapper-light">
            ${componentHTML}
            
        </div>              
    </section>
  `;
 
}

