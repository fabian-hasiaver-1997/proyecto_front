// Define the images
const images = [
  'img/chevrolet-zafira-2009-00.webp',
  'img/Chevrolet_Cruze_J300_sedan_China_2012-04-14.jpg',
  'img/vwsciroccogts01.jpg',
];
//objeto de carros
const carros = [
  { 
    id: 1,
    nome: 'Dodge Charger R/T',
    year: '1968',
    price: 'R$ 30.000,00',
    img: 'img/grid_01.jpg',
  }, 
  {
    id: 2,
    nome: 'Dodge Challenger R/T',
    year: '2018',
    price: 'R$ 70.000,00',
    img: 'img/grid_02.jpg',
  },
  { 
    id: 3,
    nome: 'Audi R8',
    year: '2012',
    price: 'R$ 120.000,00',
    img: 'img/grid_03.jpg',
  },
  { 
    id: 4,
    nome: 'Lexus LS500',
    year: '2012',
    price: 'R$ 45.000,00',
    img: 'img/grid_04.jpg',
  },
  { 
    id: 5,
    nome: 'Audi TT R/S Coupé',
    year: '1968',
    price: 'R$ 68.000,00',
    img: 'img/grid_05.jpg',
  },
  { 
    id: 6,
    nome: 'Maseratti Quattroporte',
    year: '2019',
    price: 'R$ 110.000,00',
    img: 'img/grid_06.jpg',
  }
];

//loop para crear los carros
carros.forEach(function(carro) {
  let carroElement = document.getElementById('carros')
  carroElement.innerHTML += `
    <div class="card ${carro.name}-${carro.id}">
                    <img src="${carro.img}" alt="car${carro.id}">
                    <div class="capa">
                        <h3 class="claim_capa">
                          ${carro.nome}
                        </h3>
                        <p class="text_capa">
                        ${carro.year} - ${carro.price}
                        </p>
                    </div>
                </div>
  `;
 });


// App state
let index = 0;
const max = images.length;

// Get the DOM elements
const containerElement = document.querySelector('.container');
const prevSlideButton = document.querySelector('.prevSlide');
const nextSlideButton = document.querySelector('.nextSlide');

// Listen for arrow click events
prevSlideButton.addEventListener('click', function () {
  index--;
  setImageIndex();
  changeBackgroundImage(images[index], containerElement);
});

nextSlideButton.addEventListener('click', function () {
  index++;
  setImageIndex();
  changeBackgroundImage(images[index], containerElement);
});

// Utility function
function setImageIndex() {
  if (index < 0) index = max - 1;
  if (index === max) index = 0;
}

function changeBackgroundImage(backgroundImage, element) {
  element.style.backgroundImage = `url(${backgroundImage})`;
}