function createOffersHTML(component) {
  let title = component.querySelector('[data-aue-prop="component_title"]');
  let description = component.querySelector(
    '[data-aue-prop="component_description"]'
  );
  let a = component.querySelector('[data-aue-prop="component_linkText"]');
  let btnIcon = component.querySelector('[data-aue-prop="component_linkIcon"]');

  if (a) {
    a.classList.remove("button");
    a.classList.add("btn--link", "btn--link-primary");
    a.innerHTML = `${a.innerText} <span>${
      btnIcon ? `${btnIcon.outerHTML}` : ""
    }</span>`;
    console.log("anchor tag innerHTML", a.innerHTML);
  }

  const componentHTML = `
  <div class="immersive__content heading-content">
  ${title ? `<h2>${title.innerText}</h2>` : ""}
  ${description ? `<p>${description.innerText}</p>` : ""}
      <div class="immersive__action-btn">
          ${a ? a.outerHTML : ""}
      </div>
  </div>
`;

  return componentHTML;
}

function createPrimaryOffer(teaser) {
  let title = teaser.querySelector('[data-aue-prop="offer_Title"]');
  let description = teaser.querySelector('[data-aue-prop="offer_Description"]');
  let a = teaser.querySelector('[data-aue-prop="offer_linkText"]');
  let bckImg = teaser.querySelector('[data-aue-prop="offer_BckImg"]');

  if (a) {
    a.classList.add("button", "primary__btn");
  }

  const leftContainer = document.createElement('div');
  leftContainer.classList.add('left-container');

  Array.from(teaser.attributes).forEach(attr => {
    leftContainer.setAttribute(attr.name, attr.value);
});


  const teaserHTML = `<div class="left-container">
   <picture>
      <source srcset="${bckImg.src}" media="(min-width: 1024px)">
      ${bckImg ? `${bckImg.outerHTML}` : ""}
   </picture>
   <div class="light-teaser buyers-guide-teaser">
      <div class="teaser__card teaser-grey">
         <div class="teaser__content">
            <div class="teaser__info left-img-over-text">
               <div class="teaser__title">
                  ${
                    title
                      ? `
                  <h3>${title.innerText}</h3>
                  `
                      : ""
                  }
               </div>
               <div class="teaser__description">
                  ${
                    description
                      ? `
                  <p>${description.innerText}</p>
                  `
                      : ""
                  }
               </div>
            </div>
            <div class="teaser__action-btn">
               ${a ? a.outerHTML : ""}
            </div>
         </div>
      </div>
   </div>
</div>`;

  return teaserHTML;
}

function createSecondaryOffer(teaser) {
  return teaserHTML;
}

function createGeneralOffer(teaser) {
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
            <div class="sub-container">
                ${primaryCard}
                <div class="right-container">
                    <div class="right-container__card-1">
                        <picture>
                            <source srcset="/content/dam/vishal_eds/mobile-image.png" media="(max-width: 768pxpx)">
                            <source srcset="/content/dam/vishal_eds/desktop-image.png" media="(min-width: 1024px)">
                            <img src="/content/dam/vishal_eds/mobile-image.png" alt="mobile img" />
                        </picture>
                        <div class="right-container__content">
                            <div class="immersive__content img-over-text">
                                <p><strong>Lorem Ipsum</strong></p>
                                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet lorem ipsum.</p>
                                <div class="immersive__action"><a href="#" title="#" class="button primary__btn"
                                        target="_self">Get Exchange</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="right-container-subcontainer ">
                        <div class="right-container__card-2">
                            <div class="light-teaser buyers-guide-teaser">
                                <div class="teaser__card teaser-light">
                                    <div class="teaser__content">
                                        <div class="teaser__info">
                                            <div class="teaser__title">
                                                <h3>Lorem Ipsum</h3>
                                            </div>
                                            <div class="teaser__description">
                                                <p>Lorem ipsum dolor sit amet lorem ipsum dolor.</p>
                                            </div>
                                        </div>

                                        <div class="teaser__actions">
                                            <a href="https://google.com" title="https://google.com"
                                                class="button primary__btn" target="_blank">Know More</a>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="right-container__card-3">
                            <div class="light-teaser buyers-guide-teaser">
                                <div class="teaser__card teaser-dark">
                                    <div class="teaser__content">
                                        <div class="teaser__info">
                                            <div class="teaser__title">
                                                <h3>Lorem Ipsum</h3>
                                            </div>
                                            <div class="teaser__description">
                                                <p>Lorem ipsum dolor sit amet lorem ipsum dolor.</p>
                                            </div>
                                        </div>

                                        <div class="teaser__actions">
                                            <a href="https://google.com" title="https://google.com"
                                                class="button primary__btn" target="_blank">Know More</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>              
        </div>
        </div>
    </section>
  `;
}
