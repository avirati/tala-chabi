import {
  LETTERS_LOWERCASE,
  LETTERS_UPPERCASE,
  NUMBERS,
  SYMBOLS,
} from 'globalConstants';

const knuthShuffle = require('knuth-shuffle-seeded');

export interface IRandomizerConfig {
  passwordLength: number;
  useLetters: boolean;
  useUppercaseChars: boolean;
  useNumbers: boolean;
  useSymbols: boolean;
}

export const generateRandomPassword = (config: IRandomizerConfig): string => {
  let dataset: string[] = [];

  if (config.useLetters) {
    dataset = [
      ...dataset,
      ...LETTERS_LOWERCASE,
    ]
  }

  if (config.useUppercaseChars) {
    dataset = [
      ...dataset,
      ...LETTERS_UPPERCASE,
    ]
  }

  if (config.useNumbers) {
    dataset = [
      ...dataset,
      ...NUMBERS,
    ]
  }

  if (config.useSymbols) {
    dataset = [
      ...dataset,
      ...SYMBOLS,
    ]
  }

  const shuffledDataset: string[] = knuthShuffle(dataset, Date.now());
  return shuffledDataset.slice(0, config.passwordLength).join('');
}
