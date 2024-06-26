export default function decorate(block) {
    

    const [component, card1, card2] = block.children;

    console.log("\nComponent div: ", component);
    console.log("\nCard1 div: ", card1);
    console.log("\nCard2 div: ", card2);

  }