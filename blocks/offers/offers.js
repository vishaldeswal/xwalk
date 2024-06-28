function createOffersHTML(component){
  let title = component.querySelector('[data-aue-prop="component_title"]');
  let description = component.querySelector('[data-aue-prop="component_description"]');
  let a = component.querySelector('[data-aue-prop="component_linkText"]');
  let btnIcon = component.querySelector('[data-aue-prop="component_linkIcon"]');

  if (a) {
    a.classList.remove("button");
    a.classList.add("btn--link", "btn--link-primary");
    a.innerHTML = `${a.innerText} <span>${btnIcon? `${btnIcon.outerHTML}`: ''}</span>`;
    console.log("anchor tag innerHTML", a.innerHTML);
  }

  const componentHTML = `
  <div class="immersive__content heading-content">
  ${title? `<h2>${title.innerText}</h2>` : ''}
  ${description? `<p>${description.innerText}</p>` : ''}
      <div class="immersive__action-btn">
          ${a? a.outerHTML: ''}
      </div>
  </div>
`;


  return componentHTML;
}


function createPrimaryOffer(teaser){


  return teaserHTML;
}

function createSecondaryOffer(teaser){

  return teaserHTML;
}

function createGeneralOffer(teaser){
  
  
  return teaserHTML;
}



export default function decorate(block) {
  const [component, card1, card2, card3, card4] = block.children;

  // console.log("Component: ", component.outerHTML);
   console.log("Card 1: ", card1.outerHTML);
  // console.log("Card 3: ", card3.outerHTML);

  const componentHTML = createOffersHTML(component);
  
 
  block.innerHTML = `
  <section class="deals-offers-container">
        <div class="immersive__wrapper-light">
          ${componentHTML}
        </div>
    </section>
  `;
}
