// Переключение темы и шрифта
let themButtonDark = document.querySelector('.theme-button-dark');
let themButtonLight = document.querySelector('.theme-button-light');
let fontButtonSansSerif = document.querySelector('.font-button-sans-serif');
let fontButtonSerif = document.querySelector('.font-button-serif');
let page = document.querySelector('.page');

//тема
themButtonDark.onclick = function (){
    page.classList.add('dark');
    themButtonLight.classList.remove('active')
    themButtonDark.classList.add('active');

}
themButtonLight.onclick = function (){
    page.classList.remove('dark');
    themButtonDark.classList.remove('active');
    themButtonLight.classList.add('active')

}
//шрифт
fontButtonSerif.onclick = function (){
    page.classList.add('serif');
    fontButtonSansSerif.classList.remove('active');
    fontButtonSerif.classList.add('active');
}
fontButtonSansSerif.onclick = function (){
    page.classList.remove('serif');
    fontButtonSerif.classList.remove('active');
    fontButtonSansSerif.classList.add('active');
}
//раскрытие статей
let blogArticles = document.querySelectorAll('.blog-article.short');
//раскрытие статей
for (let blogArticle of blogArticles){
    let more = blogArticle.querySelector('.more');
    more.onclick = function (){
        blogArticle.classList.remove('short');
    }
}
//переключение вида раскладки карточек аренды яхт
let cardViewButtonGrid = document.querySelector('.card-view-button-grid');
let cardViewButtonList = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');

cardViewButtonList.onclick = function (){
    cards.classList.add('list');
    cardViewButtonGrid.classList.remove('active');
    cardViewButtonList.classList.add('active');
}
cardViewButtonGrid.onclick = function (){
    cards.classList.remove('list');
    cardViewButtonList.classList.remove('active')
    cardViewButtonGrid.classList.add('active')

}
//Галлерея
let activePhoto = document.querySelector('.active-photo');
let previewList = document.querySelectorAll('.preview-list a');

for( let preview of previewList){
    preview.onclick= function (evt){
        evt.preventDefault();

        let prewieActiv = document.querySelector('.preview-list .active-item');
        prewieActiv.classList.remove('active-item')
        preview.classList.add('active-item');

        activePhoto.src = preview.href
    };
}
