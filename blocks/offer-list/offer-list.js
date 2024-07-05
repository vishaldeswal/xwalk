
export default function decorate(block) {
  

   console.log("Block:  ", block);

    const [title, description, cta, ctaTarget, ctaIcon, ...offerItems] = block.children;

    console.log("Title:",title);
    console.log("description:",description);
    console.log("cta:",cta);
    console.log("ctaTarget:",ctaTarget);


 
  
  
 
}



