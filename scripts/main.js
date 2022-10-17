const url = "https://upload.wikimedia.org/wikipedia/commons/9/90/De-Wolfgang_Amadeus_Mozart.ogg"; // use any valid audio file if this disappears over time...

const btn = document.querySelector("button");
btn.addEventListener("click", async () => {
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
