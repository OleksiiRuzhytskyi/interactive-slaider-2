let arrowRight = document.querySelector('.arrow-right');
let arrowLeft = document.querySelector('.arrow-left');
const imgSlider = document.querySelectorAll('.img-slaider')
const allFruitPep = document.querySelectorAll('.fruitDel')
let countImg = 0

arrowLeft.addEventListener('click', () => {
	changeElement()
})

arrowRight.addEventListener('click',function() {
	changeElement()
})

function changeElement() {
	for (let i = 0; i < imgSlider.length; i++) {
		imgSlider[i].classList.add('opacity-0')
		console.log('i: ', i);
	}	
	console.log('atr: ', imgSlider[countImg].getAttribute('data'))
	console.log(typeof imgSlider[countImg].getAttribute('data'))
	
	if (imgSlider[countImg].getAttribute('data') === '2') {
		for (let i = 0; i < allFruitPep.length; i++) {
			allFruitPep[i].style.transition = 'all 1s';
			allFruitPep[i].classList.remove('opacity-0')
		}
		document.querySelector('.pepper-container').classList.add('bg-peppermint')
		document.querySelector('.pepper-container').classList.remove('bg-raspberry')
		document.querySelector('.pep-container').classList.remove('opacity-0')
		document.querySelector('.raspberry-container').classList.remove('opacity-1')
		document.querySelector('.peach-container').classList.add('opacity-0')
	} else if (imgSlider[countImg].getAttribute('data') === '1') {
		document.querySelector('.peach-container').classList.add('opacity-1')
		document.querySelector('.pep-container').style.transition = 'all 1s';
		document.querySelector('.pep-container').classList.add('opacity-0')
		for (let i = 0; i < allFruitPep.length; i++) {
			allFruitPep[i].style.transition = 'all 1s';
			allFruitPep[i].classList.add('opacity-0')
		}
		document.querySelector('.raspberry-container, .raspberry-1 ').classList.add('opacity-1')
		document.querySelector('.raspberry-container').style.transition = 'all 1s';
		document.querySelector('.pepper-container').classList.add('bg-raspberry')
		document.querySelector('.peach-container').classList.add('opacity-0')

	} else if (imgSlider[countImg].getAttribute('data') === '0') {
		for (let i = 0; i < allFruitPep.length; i++) {
			allFruitPep[i].style.transition = 'all 1s';
			allFruitPep[i].classList.add('opacity-0')
		}
		document.querySelector('.raspberry-container').classList.remove('opacity-1')
		document.querySelector('.pepper-container').classList.add('bg-peach')
		document.querySelector('.peach-container').classList.remove('opacity-0')
		document.querySelector('.peach-container').classList.add('opacity-1')
		document.querySelector('.peach-container').style.transition = 'all 1s';
		console.log('400: ', document.querySelector('.peach-container'));
	}
	imgSlider[countImg].classList.remove('opacity-0')
	if (countImg + 1 === imgSlider.length) {
		countImg = 0
	} else {
		countImg++
	}
}

