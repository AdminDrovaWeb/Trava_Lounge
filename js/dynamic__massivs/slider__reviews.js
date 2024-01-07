let container__reviews = document.querySelector('.swiper-container-reviews');
let reviewsArray = {
    "1":{
        "nubmer" : "1",
        "img" : "img/logo__user__1.jpg",
        "name": "Сан саныч 1",
        "city" : "Казань 1",
        "descr" : "выфвфывфывфывфывфыв"
    },
    "2":{
        "nubmer" : "2",
        "img" : "img/logo__user__1.jpg",
        "name": "Сан саныч 1",
        "city" : "Казань 1",
        "descr" : "выфвфывфывфывфывфыв"
    },
    "3":{
        "nubmer" : "3",
        "img" : "img/logo__user__1.jpg",
        "name": "Сан саныч 1",
        "city" : "Казань 1",
        "descr" : "выфвфывфывфывфывфыв"
    },
    "4":{
        "nubmer" : "4",
        "img" : "img/logo__user__1.jpg",
        "name": "Сан саныч 1",
        "city" : "Казань 1",
        "descr" : "выфвфывфывфывфывфыв"
    },
    "5":{
        "nubmer" : "5",
        "img" : "img/logo__user__1.jpg",
        "name": "Сан саныч 1",
        "city" : "Казань 1",
        "descr" : "выфвфывфывфывфывфыв"
    },
    "6":{
        "nubmer" : "6",
        "img" : "img/logo__user__1.jpg",
        "name": "Сан саныч 1",
        "city" : "Казань 1",
        "descr" : "выфвфывфывфывфывфыв"
    },
    "7":{
        "nubmer" : "7",
        "img" : "img/logo__user__1.jpg",
        "name": "Сан саныч 1",
        "city" : "Казань 1",
        "descr" : "выфвфывфывфывфывфыв"
    }
}
var out = '';
for (var key3 in reviewsArray) {
    out+= `
    <div class="swiper-slide">
                                <div class="slider__item ${reviewsArray[key3].number}">
                                    <div class="slider__head">
                                        <img src="${reviewsArray[key3].img}" alt="logo__user" class="slider__avatar">
                                        <div class="slider__head__name">
                                            <h1 class="slider__name__user">
                                                ${reviewsArray[key3].name}
                                            </h1>
                                            <p class="slider__city__user">
                                                ${reviewsArray[key3].city}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="slider__body__user__review">
                                        <p class="slider__review__text">
                                                ${reviewsArray[key3].descr}
                                        </p>
                                    </div>
                                </div>
    </div>
    `
};
console.log('lala')
document.getElementById('out_three').innerHTML = out;