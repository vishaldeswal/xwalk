
  // Main decorate function that orchestrates element extraction and structure building
  export default function decorate(block) {
    
    [component, card1, card2, card3, card3] = block.children;

    console.log("Component: ", component);
    console.log("Card 1: ", card1);
    console.log("Card 3: ", card3);
  
  }
  