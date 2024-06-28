
  //Function to extract children of block
  function extractBlockChildren(block){

    const [component, card1, card2, card3, card4] = block.children;
    return {
      component,
      card1,
      card2,
      card3,
      card4
    }
  }

  // Main decorate function that orchestrates element extraction and structure building
  export default function decorate(block) {
    
    [component, card1, card2, card3, card3] = extractBlockChildren(block);

    console.log("Component: ", component);
    console.log("Card 1: ", card1);
    console.log("Card 3: ", card3);
  
  }
  