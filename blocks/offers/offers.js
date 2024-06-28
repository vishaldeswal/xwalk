export default function decorate(block) {
  const [component, card1, card2, card3, card4] = block.children;

  console.log("Component: ", component.outerHTML);
  console.log("Card 1: ", card1.outerHTML);
  console.log("Card 3: ", card3.outerHTML);

  // Extract elements from the parsed document
  let title = component.querySelector('[data-aue-prop="component_title"]');
  let description = component.querySelector('[data-aue-prop="component_description"]');
  let a = component.querySelector('[data-aue-prop="component_linkText"]');
  let btnIcon = component.querySelector('[data-aue-prop="component_linkIcon"]');
  a.classList.remove("button");
  a.classList.add("btn--link", "btn--link-primary");
  
  a.innerHTML=`<span>${btnIcon}</span>`;

  // Construct the new HTML structure
  const newHTML = `
    <div class="immersive__content heading-content">
        <h2>${title.innerText}</h2>
        <p>${description.innerText}</p>
        <div class="immersive__action-btn">
            ${a.outerHTML}<>
        </div>
    </div>
`;
  block.innerHTML = `
  <section class="deals-offers-container">
        <div class="immersive__wrapper-light">
          ${newHTML}
        </div>
    </section>
  `;
}
