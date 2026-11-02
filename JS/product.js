let backLink = document.getElementById('back-link')
let sizeBtns = document.querySelectorAll('.size-btn')
let model = document.getElementById('detail-tag')
let detailCategory = document.getElementById('detail-category')
let detailName = document.getElementById('detail-name')
let detailPrice = document.getElementById('detail-price')
let detailDesc = document.getElementById('detail-desc')
let productContainerColor = document.getElementById('detail')
let notFound = document.getElementById('not-found')
let colorName = document.getElementById('color')
let MadeIn = document.getElementById('Made-In')
let Weight = document.getElementById('Weight')
let buyBtn = document.getElementById('buy-btn')
let ThankMessage = document.getElementById('Thank-Message')

let products = [
    {id: 1, catagory: "sport", Weight: 240, title: "Sport Shoes", MadeIn: 'China', colorName: 'Green', price: 53, model: 'hot', color: '--accent: #34d399;'},
    {id: 2, catagory: "women", Weight: 280, title: "Women Shoes", MadeIn: 'USA', colorName: 'Yellow', price: 123, model: 'cold', color: '--accent: #fbbf24;'},
    {id: 3, catagory: "men", Weight: 120, title: "Men Shoes", MadeIn: 'Herat', colorName: 'Blue', price: 22, model: 'relax', color: '--accent: #4f8cff;'},
    {id: 4, catagory: "footbal", Weight: 500, title: "Footbal Shoes", MadeIn: 'Mazar', colorName: 'Light Green', price: 231, model: 'fit', color: '--accent: #7bd334;'},
    {id: 5, catagory: "walking", Weight: 430, title: "Walking Shoe", MadeIn: 'Kabul', colorName: 'Red', price: 57, model: 'new', color: '--accent: #fd2600;'},
    {id: 6, catagory: "Professional", Weight: 90, title: "Professional Shoes", MadeIn: 'Kandahar', colorName: 'Light Orange', price: 76, model: 'great', color: '--accent: #ff803c;'}
]

backLink.addEventListener('click', function(){
    history.back()
})

let locationParams = new URLSearchParams(location.search)
let mainProductId = locationParams.get('id')


let mainProductObject = products.find(function(product){
    return product.id === Number(mainProductId)
})

if (mainProductObject){
    productContainerColor.setAttribute('style', mainProductObject.color)
    model.innerHTML = mainProductObject.model
    detailName.innerHTML = mainProductObject.title
    detailPrice.innerHTML = '$' + mainProductObject.price
    colorName.innerHTML = mainProductObject.colorName
    MadeIn.innerHTML = mainProductObject.MadeIn
    Weight.innerHTML = mainProductObject.Weight + ' g'
}else{
    notFound.classList.remove('hidden')
    productContainerColor.classList.add('hidden')
}
console.log(mainProductObject);


//Add "active" class to the clicked size btn, and remove "active" class from other btns
sizeBtns.forEach(function(item){
    item.addEventListener('click', function(){
        sizeBtns.forEach(function(otherBtns){
            otherBtns.classList.remove('active')
        })
        item.classList.add('active')
    })
})

buyBtn.addEventListener('click', function(){
    productContainerColor.classList.add('hidden')
    ThankMessage.classList.remove('hidden')
})