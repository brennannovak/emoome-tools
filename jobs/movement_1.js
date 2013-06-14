// movement_1.js
module.exports = {
	title: 'Animal Words',
	full: 'animals',
	language: 'english',
	type: 'P',
	topic: 'MO',
	url: 'http://thesaurus.com/browse/movement',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "wiggle, wriggle, writhe, squirm, stretch, bend, twist, turn, flop, drop, collapse, fall, shake, swing, sway, rock, spring, bounce, bob, jump, undulate, whirl, spin, revolve, rotate, contract, expand, curl, uncurl, rise, sink, lunge, tumble, totter, lurch, lean, sag, hang, slouch, slump, droop, pounce, jostle, creep, crawl, roll, walk, skip, run, gallop, leap, hop, stride, prance, strut, stroll, saunter, meander, limp, hobble, stagger, march, scurry, trudge, stalk, race, plod, amble, sprint, slink, tramp, scramble, dodge, hustle, glide, fly, float, soar, sail, swoop, slide, slither, plunge, dive, drift, climb, swim, lope, jog, trot, burrow, wallow, buck, butt, rear, spin".split(', ')
		};

		return output;
	}
};