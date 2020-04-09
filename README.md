# Hangman Game

Hangman is a game in which player needs to guess the secret word.

## General Info

All words to guess are from [Words API](https://www.wordsapi.com/).
Game has 3 different difficulty modes(Easy, Medium, Hard). Each of them is fetching word with different word frequency value

1. Easy:
   - Minimal frequency = 6
   - Maximum frequency = 8.03
2. Medium:
   - Minimal frequency = 4
   - Maximum frequency = 6
3. Hard:
   - Minimal frequency = 2
   - Maximum frequency = 4

Game allows you also to choose how many mistakes can you make(9,10,11)

## Quick Start

[Live Demo](https://balldoro.github.io/Hangman/index.html)

If you want to quickly see production version

1. Clone or download repository

```
git clone https://github.com/Balldoro/Hangman.git
```

2. Go to the docs folder in the project directory

```
cd ../hangman-master/docs
```

3. Open index.html

## Installing

To run this project

1. Clone or download repository

```
git clone https://github.com/Balldoro/Hangman.git
```

2. Go to the project directory and install it using npm

```
cd ../hangman-master
npm install
```

3. Run project in development mode

```
npm start
```

4. You can also build production version by running

```
npm run build
```

## Technologies

Technologies used:

- HTML
- SASS(SCSS)
- Vanilla JS ES6+
- Webpack
