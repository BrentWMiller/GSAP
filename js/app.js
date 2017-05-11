const mainButton = $('.btn__main'),
	  menu = $('.btn-group--options'),
	  option = $('.btn__option'),

	  animationTime = .1;

var clicked;

// Timelines
const tlMaster = new TimelineMax();
const tlMainButton = new TimelineMax();
const tlMenu = new TimelineMax();
const tlOption = new TimelineMax();

tlMaster
	.add(tlMainButton)
	.add(tlMenu)
	.add(tlOption)
	.pause();

tlMainButton
	.fromTo(mainButton, animationTime, {
		borderRadius: 0,
		rotation: 0,
		backgroundColor: '#0e9cf3',
		boxShadow: `0 0 10px #0e9cf3`,
		ease: Back.easeIn
	},
	{
		borderRadius: 50,
		rotation: 45,
		backgroundColor: '#fd4f48',
		boxShadow: `0 0 10px #fd4f48`
	});

tlMenu
	.fromTo(menu, animationTime, {
		visibility: 'hidden',
		scale: 0,
		y: '-=60'
	},
	{
		visibility: 'visible',
		scale: 0.8,
		y: '-=150'
	});

tlOption
	.staggerFromTo(option, animationTime, {
		rotation: 180,
		scale: 0,
		opacity: 0,
	},
	{
		rotation: 0,
		scale: 0.8,
		opacity: 1
	},
	(animationTime * -1));

// Trigger
mainButton.click(() => {
	clicked = !clicked;

	clicked ? tlMaster.play() : tlMaster.reverse();
});