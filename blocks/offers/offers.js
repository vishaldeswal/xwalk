

  export default function decorate(block) {
    
    const [component, card1, card2, card3, card4] = block.children;

    console.log("Component: ", component.outerHTML);
    console.log("Card 1: ", card1.outerHTML);
    console.log("Card 3: ", card3.outerHTML);


// Extract elements from the parsed document
let title = component.querySelector('h1[data-aue-prop="component_title"]');
let description = component.querySelector('p[data-aue-prop="component_description"]');
let a = component.querySelector('[data-aue-prop="component_linkText"]');
a.classList.remove('button');

// Construct the new HTML structure
let newHTML = `
    <div class="immersive__content heading-content">
        <h2>${title.innerText}</h2>
        <p>${description.innerText}</p>
        <div class="immersive__action-btn">
            ${a.outerHTML}
        </div>
    </div>
`;


    const offersComponent = `<section class="deals-offers-container">
        <div class="immersive__wrapper-light">
            <div class="immersive__content heading-content">

                <h2>Exciting offers and deals for you!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.</p>
                <div class="immersive__action-btn">
                    <a class="btn--link btn--link-primary" href="#">View More
                        <span>
                            <img src="images/north_east.svg" />
                        </span></a>
                </div> <!-- change -->
            </div>
            <div class="sub-container">
                <div class="left-container">
                    <picture>
                        <source srcset="./images/desktop-left-image.jpg" media="(min-width: 1024px)">
                        <img src="./images/desktop-left-image.jpg" alt="mobile img" />
                    </picture>
                    <div class="light-teaser buyers-guide-teaser">
                        <div class="teaser__card teaser-grey">
                            <div class="teaser__content">
                                <div class="teaser__info left-img-over-text">
                                    <div class="teaser__title">
                                        <h3>Lorem Ipsum</h3>
                                    </div>
                                    <div class="teaser__description">
                                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum.</p>
                                    </div>
                                </div>
                                <div class="teaser__action-btn"><a href="#" title="#" class="button primary__btn"
                                    target="_self">Get Exchange</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-container">
                    <div class="right-container__card-1">
                        <picture>
                            <source srcset="./images/mobile-image.png" media="(max-width: 768pxpx)">
                            <source srcset="./images/desktop-image.png" media="(min-width: 1024px)">
                            <img src="./images/mobile-image.png" alt="mobile img" />
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
    </section>`;


    block.innerHTML=newHTML;
  
  }
  