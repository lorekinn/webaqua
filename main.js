let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('active');
    menu.classList.remove('active');
}
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);

})

function displayProducts(category) {
  const containerId = category === 'сантехника' ? 'san-container' : 'plitka-container';
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  fetch('products.json')
    .then(response => response.json())
    .then(data => {
      const categoryData = data.categories.find(cat => cat.name === category);
      if (categoryData) {
        categoryData.items.forEach(product => {
          const box = document.createElement('div');
          box.className = 'box';
          box.setAttribute('data-aos', 'fade-right');

          const img = document.createElement('img');
          img.src = product.image;
          img.alt = '';

          const h2 = document.createElement('h2');
          h2.textContent = product.name;

          box.appendChild(img);
          box.appendChild(h2);
          container.appendChild(box);
        });

        AOS.init();
      } else {
        console.error(`Category '${category}' not found in products.json`);
      }
    })
    .catch(error => {
      console.error('Error fetching products.json:', error);
    });
}

displayProducts('сантехника');
displayProducts('плитка');
