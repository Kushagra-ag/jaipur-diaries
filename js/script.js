import data from './data.js';
// import node from './template.js';

$(document).ready( function() {

	const len = data.length;
	const div = Math.floor(len/3);
	const rem = Math.floor(len%3);
	console.log(len);
	console.log(div);
	// const blogs = Array.prototype.slice.call(document.querySelectorAll('.blogs'));
	const blogs = $('.blogs')
	console.log(blogs)
	
	let i=0;
	while(i!=div) {

		let node1 = template();
		let node2 = template();
		let node3 = template();
		
		node1.querySelector('.blog__head').innerHTML = `<strong>${data[i].name}</strong>`;
		node1.querySelector('.blog__caption').innerHTML = data[i].caption;
		node1.querySelector('.blog__img').style.backgroundImage = `url('${data[i].image}')`;
		node1.querySelector('.bt').href = data[i].link;

		node2.querySelector('.blog__head').innerHTML = `<strong>${data[i+div].name}</strong>`;
		node2.querySelector('.blog__caption').innerHTML = data[i+div].caption;
		node2.querySelector('.blog__img').style.backgroundImage = `url('${data[i+div].image}')`;
		node2.querySelector('.bt').href = data[i+div].link;

		node3.querySelector('.blog__head').innerHTML = `<strong>${data[i+2*div].name}</strong>`;
		node3.querySelector('.blog__caption').innerHTML = data[i+2*div].caption;
		node3.querySelector('.blog__img').style.backgroundImage = `url('${data[i+2*div].image}')`;
		node3.querySelector('.bt').href = data[i+2*div].link;


		blogs[0].append(node1);
		blogs[1].appendChild(node2);
		blogs[2].append(node3);
		$('.blogs .d-sm-none').append(node2);
		$('.blogs .d-sm-none').append(node3);

		i++;

		if(i==div) {
			let el = moreBtn();
			node1.appendChild(el);
		}
	}


	// while(i!=2*div) {

	// 	let node = template();
	// 	node.querySelector('.blog__head').innerHTML = data[i].name;
	// 	node.querySelector('.blog__caption').innerHTML = data[i].caption;
	// 	node.querySelector('.blog__img').style.backgroundImage = `url('${data[i].image}')`;
	// 	node.querySelector('.bt').href = data[i].link;

	// 	blogs[1].append(node);
	// 	$('.blogs .d-sm-none').append(node);
	// 	i++;
	// }

	// while(i!=len) {

	// 	let node = template();
	// 	node.querySelector('.blog__head').innerHTML = data[i].name;
	// 	node.querySelector('.blog__caption').innerHTML = data[i].caption;
	// 	node.querySelector('.blog__img').style.backgroundImage = `url('${data[i].image}')`;
	// 	node.querySelector('.bt').href = data[i].link;

	// 	blogs[2].append(node);
	// 	$('.blogs .d-sm-none').append(node);
	// 	i++;
	// }

})

function blog() {

	$('.home__left').toggleClass('hideLeft');
	$('.home__right').toggleClass('col-sm-12');

	$('.space').toggleClass('hideLeft');

	$('.indexContent').toggleClass('col-sm-8 col-sm-4 col-lg-3');
	$('.blogContent').toggleClass('d-block d-none');
	$('.more').toggleClass('d-none');
}

function template() {
	let html = `<div class="blog mb-5 pb-5"><div class="blog__img my-4 text-center text-sm-left w-sm-75"></div><div class="blog__head my-3 text-center text-sm-left"><strong>Albert Hall</strong></div><div class="blog__caption mt-3 mb-5 text-center text-sm-left">The monument of Albert Hall came into existence in 1876 and is renowned for its handicrafts, artwork and other masterpieces</div><div class="blog__btn"><div class="blog__btn__black"></div><a href="./places/alberthall.html" class="bt"><span>More</span></a></div></div>`
	let template;
	let parser = new DOMParser();
	template = parser.parseFromString(html, "text/html");

	let node = template.querySelector('.blog');
	let clone = node.cloneNode(true);

	return clone;
}

function moreBtn() {

	let el = document.createElement('div');
	el.classList.add('more','bt','text-right','d-none','d-sm-block','mt-n5');
	el.style.lineHeight = '48px';
	el.style.cursor = 'pointer';
	el.style.zIndex = 2;
	el.innerHTML = "See more";

	el.addEventListener('click', blog)

	return el;

}

$('.more').click(blog)