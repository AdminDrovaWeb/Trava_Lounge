let container2 = document.querySelector('.section__advantages__content__menu-descr');
let spisokEat2 = {
    "1":{
        "nubmer" : "1",
        "img" : "img/eat.png",
        "name": "Мясные деликатесы2",
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
var out2 = '';
for (var key in spisokEat2) {
    out2+= `
    <div class="section__advantages__eat-card ${spisokEat2[key].img}">
        <img src="${spisokEat2[key].img}" alt="" class="section__advantages__eat-img">
        <p class="section__advantages__eat-name">${spisokEat2[key].name}</p>
        <p class="section__advantages__eat__name-descr">${spisokEat2[key].descr}</p>
        <p class="section__advantages__eat-price">${spisokEat2[key].price}</p>
    </div>`
};

document.getElementById('out_two').innerHTML = out2;