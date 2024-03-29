let center = [55.78820126805717, 49.12317969105729];

function init() {
	let map = new ymaps.Map('map-test', {
		center: center,
		zoom: 17
	});

	let placemark = new ymaps.Placemark(center, {}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/kalyan__logo.png',
		iconImageSize: [40, 40],
		iconImageOffset: [-8, -64]
	});

     map.controls.remove('geolocationControl'); // удаляем геолокацию
     map.controls.remove('searchControl'); // удаляем поиск
     map.controls.remove('trafficControl'); // удаляем контроль трафика
     map.controls.remove('typeSelector'); // удаляем тип
     map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
     map.controls.remove('zoomControl'); // удаляем контрол зуммирования
     map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	map.geoObjects.add(placemark);
}

ymaps.ready(init);