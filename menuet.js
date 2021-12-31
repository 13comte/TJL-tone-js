		const osc = new Tone.Oscillator({
			type: "square",
			frequency: 440,
			volume: -16
		}).toDestination();

		ui({
			tone: osc,
			parent: document.querySelector("#content")
		});

		// bind the interface
		document.querySelector("tone-momentary-button").addEventListener("down", () => osc.start());
		document.querySelector("tone-momentary-button").addEventListener("up", () => osc.stop());
	