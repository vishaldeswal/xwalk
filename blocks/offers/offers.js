export default function decorate(block) {

    // Assuming `block` is a container element where we can append our generated HTML
    const section = document.createElement('section');
    section.classList.add('deals-offers-container');

    const wrapper = document.createElement('div');
    wrapper.classList.add('immersive__wrapper-light');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('immersive__content');

    const h2 = document.createElement('h2');
    h2.textContent = 'Exciting offers and deals for you!';
    contentDiv.appendChild(h2);

    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.';
    contentDiv.appendChild(p);

    const actionDiv = document.createElement('div');
    actionDiv.classList.add('immersive__action-btn');

    const a = document.createElement('a');
    a.classList.add('btn--link', 'btn--link-primary');
    a.href = '#';
    a.textContent = 'View More';

    const span = document.createElement('span');
    const img = document.createElement('img');
    img.src = '/content/dam/vishal_eds/north_east.svg';
    span.appendChild(img);
    a.appendChild(span);

    actionDiv.appendChild(a);

    wrapper.appendChild(contentDiv);
    wrapper.appendChild(actionDiv);

    section.appendChild(wrapper);

    // Append the generated HTML structure to the block
    block.appendChild(section);

    // Return or log if needed
    console.log('Generated HTML Structure:', section.outerHTML);
}
