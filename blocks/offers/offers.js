

  export default function decorate(block) {
    
    const [component, card1, card2, card3, card4] = block.children;

    console.log("Component: ", component);
    console.log("Card 1: ", card1);
    console.log("Card 3: ", card3);
  
  }
  