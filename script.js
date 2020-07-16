let body = document.querySelector('body');


//имя товара
let nameBlock = body.querySelector('.product-hero');
let name = nameBlock.firstElementChild.textContent;
console.log(name);

//цены
let priceBox = document.getElementById('product-price')
let blockForPrice = priceBox.querySelector('.rendered')
let generalPrice = blockForPrice.getAttribute('aria-label')

let firstPrice = generalPrice.match(/\d+,\d+ [$]+/g)[0]  
console.log(firstPrice)

let salesPrice = generalPrice.match(/\d+,\d+ [$]+/g)[1]
console.log(salesPrice)

//массив картинок

let imageBlock = body.querySelectorAll('.fullImageContainer');

let arr =[]
imageBlock.forEach (el => {
    let image= el.querySelectorAll('img')[0].getAttribute('src')
    arr.push(image)
})
console.log(arr)

//главная картинка
let imageBox = body.querySelector('.thumbnails').querySelector('li'+'.active');
let mainPhoto = imageBox.querySelector('img').getAttribute('src')
console.log(mainPhoto)

