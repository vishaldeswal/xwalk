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

  let title = component.querySelector('[data-aue-prop="offer_Title"]');
  let description = component.querySelector('[data-aue-prop="offer_Description"]');
  let a = component.querySelector('[data-aue-prop="offer_linkText"]');
  let bckImg = component.querySelector('[data-aue-prop="offer_BckImg"]');

  if (a) {
    a.classList.add("button","primary__btn");
  }

  const teaserHTML = `  <div class="left-container">
                    <picture>
                        <source srcset="./images/desktop-left-image.jpg" media="(min-width: 1024px)">
                        ${bckImg? `${bckImg.outerHTML}`: ''}
                    </picture>
                    <div class="light-teaser buyers-guide-teaser">
                        <div class="teaser__card teaser-grey">
                            <div class="teaser__content">
                                <div class="teaser__info left-img-over-text">
                                    <div class="teaser__title">
                                      ${title? `<h3>${title.innerText}</h3>`: ''}
                                    </div>
                                    <div class="teaser__description">
                                        ${description? `<p>${description.innerText}</p>`:''}
                                    </div>
                                </div>
                                <div class="teaser__action-btn">
                                  ${a? a.outerHTML : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;



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
  const primaryCard = createPrimaryOffer(card1);
  
 
  block.innerHTML = `
  <section class="deals-offers-container">
        <div class="immersive__wrapper-light">
          ${componentHTML}
        </div>
        <div class="sub-container">
          ${primaryCard}
        </div>
    </section>
  `;
}
