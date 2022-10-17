const url = "https://www.ee.columbia.edu/~dpwe/sounds/instruments/piano-C4.wav"; // use any valid audio file if this disappears over time...

const btn = document.querySelector("#script1");
btn.addEventListener("keypress", async () => {
  await Tone.start();
  const player = new Tone.Player({
    url,
    loop: true,
    autostart: false,
  });
  await Tone.loaded();
  const pitchShift = new Tone
    .PitchShift({pitch: -1})
    .toDestination()
  ;
  player.connect(pitchShift);
  player.start();
});
