import Fart from 'fart.js';

const fart = new Fart({
  default_sound: 'raspberry',
  loop: false,
  volume: 50
});

const soundMap = {
  short: 'toot',
  long: 'trumpet', 
  wet: 'squat',
  squeaky: 'squit'
} as const;

export function playSound(type: keyof typeof soundMap) {
  fart.play(soundMap[type]);
}
