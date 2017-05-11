const trigger = $('.expanding-bg--trigger'),
	  base = $('.expanding-bg--base'),
	  expansion = $('.expanding-bg--expansion');

// Timelines
const tlExpandingBgMaster = new TimelineMax({paused: true});
const tlExpansion = new TimelineMax();

tlExpandingBgMaster
	.add(tlExpansion);

tlExpansion
	.fromTo(expansion, animationTime, {
		scale: 0,
		ease: Back.easeIn
	},
	{
		scale: 10
	});

// Trigger
trigger.click(() => {
	clicked = !clicked;

	clicked ? tlExpandingBgMaster.play() : tlExpandingBgMaster.reverse();
});