let container = document.querySelector('.section__advantages__content__menu-descr');
let spisokEat = {
    "1":{
        "nubmer" : "1",
        "img" : "img/eat.png",
        "name": "Мясные деликатесы",
        "descr" : "Состав: мясо говядины, листья салата, еще что-то ну и так далее",
        "price" : "350 гр | 1 700 руб."
    },
    "2":{
        "nubmer" : "2",
        "img" : "img/eat.png",
        "name": "Мясные деликатесы",
        "descr" : "Состав: мясо говядины, листья салата, еще что-то ну и так далее",
        "price" : "350 гр | 1 700 руб."
    },
    "3":{
        "nubmer" : "3",
        "img" : "img/eat.png",
        "name": "Мясные деликатесы",
        "descr" : "Состав: мясо говядины, листья салата, еще что-то ну и так далее",
        "price" : "350 гр | 1 700 руб."
    }
}
var out = '';
for (var key in spisokEat) {
    out+= `
    <div class="section__advantages__eat-card ${spisokEat[key].img}">
        <img src="${spisokEat[key].img}" alt="" class="section__advantages__eat-img">
        <p class="section__advantages__eat-name">${spisokEat[key].name}</p>
        <p class="section__advantages__eat__name-descr">${spisokEat[key].descr}</p>
        <p class="section__advantages__eat-price">${spisokEat[key].price}</p>
    </div>`
};

document.getElementById('out').innerHTML = out;