export default function decorate(block) {
    

    const [component, card1, card2, card3, card4] = block.children;

    function getComponentData(component) {
        // Initialize an object to store extracted data
        const data = {};

        // Extract title
        const titleElement = component.querySelector('[data-aue-prop="component_title"]');
        if (titleElement) {
            data.title = titleElement.textContent.trim();
        }

        // Extract description
        const descriptionElement = component.querySelector('[data-aue-prop="component_description"]');
        if (descriptionElement) {
            data.description = descriptionElement.textContent.trim();
        }

        // Extract CTA text and link URL
        const ctaElement = component.querySelector('[data-aue-prop="component_linkText"]');
        if (ctaElement) {
            data.ctaText = ctaElement.textContent.trim();
            data.ctaUrl = ctaElement.href; // Assuming you want the href attribute of the link
        }

        return data;
    }

    const componentData = getComponentData(component);
    console.log('Component Data:', componentData);

  }