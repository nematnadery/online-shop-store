let products = [
    {id: 1, catagory: "sport", title: "Sport Shoe", price: 53, model: 'hot', color: '--accent: #34d399;'},
    {id: 2, catagory: "women", title: "Women Shoe", price: 123, model: 'cold', color: '--accent: #fbbf24;'},
    {id: 3, catagory: "men", title: "Men Shoe", price: 22, model: 'relax', color: '--accent: #4f8cff;'},
    {id: 4, catagory: "footbal", title: "Footbal Shoe", price: 231, model: 'fit', color: '--accent: #7bd334;'},
    {id: 5, catagory: "walking", title: "Walking Shoe", price: 57, model: 'new', color: '--accent: #fd2600;'},
    {id: 6, catagory: "profethnal", title: "Profethnal Shoe", price: 76, model: 'great', color: '--accent: #ff803c;'}
]

let productsContainer = document.getElementById('product-list')
products.forEach(function(item){
    productsContainer.insertAdjacentHTML('beforeend', '<article class="shoe-card" style="'+item.color+'"><span class="shoe-tag">' + item.model + '</span><div class="shoe-img"><span class="img-placeholder">👟</span></div><div class="shoe-body"><span class="shoe-category">' + item.catagory + '</span><h3 class="shoe-name">' + item.title + '</h3><p class="shoe-desc">Strong grip and a tough build for any kind of weather.</p><div class="shoe-footer"><span class="shoe-price">$' + item.price + '</span><a href="product.html?id=' + item.id + '" type="button" class="btn-more">See more <span>→</span></a></div></div></article>')
    
})
console.log(productsContainer);