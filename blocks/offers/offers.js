export default function decorate(block) {
  const section = document.createElement("section");
  section.classList.add("deals-offers-container");

  const wrapper = document.createElement("div");
  wrapper.classList.add("immersive__wrapper-light");

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("immersive__content");

  const actionDiv = document.createElement("div");
  actionDiv.classList.add("immersive__action-btn");

  // Append title and description directly from block.children[0]
  const titleElement = block.children[0].querySelector(
    '[data-aue-prop="component_title"]'
  );
  if (titleElement) {
    //titleElement.classList.add('title-style'); // Add your CSS class
    contentDiv.appendChild(titleElement.cloneNode(true));
  }

  const descriptionElement = block.children[0].querySelector(
    '[data-aue-prop="component_description"]'
  );
  if (descriptionElement) {
    //descriptionElement.classList.add('description-style'); // Add your CSS class
    contentDiv.appendChild(descriptionElement.cloneNode(true));
  }

  // Append CTA directly from block.children[0]
  const ctaElement = block.children[0].querySelector(
    '[data-aue-prop="component_linkText"]'
  );
  if (ctaElement) {
    const ctaClone = ctaElement.cloneNode(true);

    // Append SVG image
    const span = document.createElement("span");
    const img = document.createElement("img");
    img.src = "/content/dam/vishal_eds/north_east.svg"; // Replace with your SVG image path
    span.appendChild(img);
    ctaClone.appendChild(span);
    ctaClone.classList.remove("button");
    ctaClone.classList.add("btn--link", "btn--link-primary"); // Add your CSS classes
    actionDiv.appendChild(ctaClone);
  }

  wrapper.appendChild(contentDiv);
  wrapper.appendChild(actionDiv);
  section.appendChild(wrapper);

  // Append the generated HTML structure to the block
  block.appendChild(section);

  // Return or log if needed
  console.log("Generated HTML Structure:", section.outerHTML);
}
