// Simple sound effects module
export const SOUNDS = {
  short: new Audio("/sounds/short.mp3"),
  long: new Audio("/sounds/long.mp3"),
  wet: new Audio("/sounds/wet.mp3"), 
  squeaky: new Audio("/sounds/squeaky.mp3")
} as const;

export type SoundType = keyof typeof SOUNDS;

export function playSound(type: SoundType) {
  SOUNDS[type].play().catch(err => {
    console.error(`Failed to play sound ${type}:`, err);
  });
}
