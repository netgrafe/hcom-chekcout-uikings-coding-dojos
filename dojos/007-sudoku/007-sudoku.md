# Sudoku

## Project goal

Create an offline-first, mobile-optimized Sudoku game to play with by using web technologies.

## Key Features

- row and column highlighting
- same number highlighting
- validating of correct input
- no need for keyboard (mobile friendly)
- works offline fully
- always continue from the point you left off

## Task breakdown

### Task 0 - create skeleton
- initializing project
- loading Montserrat font from Google fonts

### Task 1 - create table and buttons
- create the base table and the numbered buttons
- after you select a cell and press one of the buttons, the given number should be written into the cell
- if the cell is not empty, the previous value should be rewritten

### Task 2 - add highlighting for help
- if you focus on an empty cell, highlight the given row and column for guiding the player

### Taks 3 - disable buttons which has all the 9 occurences
- if a number is already typed in the table for 9 times, then the appropriate button should be disabled and it should not insert that number into the field anymore
- if a non-empty field is rewritten, update the disabled state accordingly

### Task 4 - load a fixed challenge to the board
- load up a single, fixed challenge to the board
- the numbers coming from the challenge should be Black (very bold)
- those number should not be changeable, but can be focusable

### Task 5 - highlight same numbers on board
- if you select a non-empty field, highlight all the occurencies of the given number on the table for helping the player identify places to fill in
- it should work for cells coming from original challenge as well

### Task 6 - validate input
- do not let the user the enter a value, which is not acceptable by the rules
- show a temporary yellowish colour both on button and an exclamation mark in the cell for 1-3 seconds to show the user that ther is somethign wrong with the intention

Tip: start with small steps
- gathering the elements in one row / column
- gathering the elements in one 3x3 block

### Task 7 - persisting game
- after each successfull number insertion, save the state of the game into local storage, so that user can close our app and return anytime from the same moment

### Task 8 - restart game
- add a button and functionality of restarting our very single challenge (and the always actual game)

### Task 9 - identify winning
- if the game is completed, fade out the non-related elements and show a big tick icon on the screen.
- register the fact of the winning in local storage for the challenge

### Task 9 - making it offline
- introduce a service worker
    - implement caching of assets need for the app
    - implement caching of possible challenges
    - create an app icon and a manifest.json file so we can put it on a homescreen of a phone

### Task 10 - extend the game to more challenges
- create a challenge store (have about 50-60)
- add a new button to randomly pick a new challenge
- game should store which challenges have been already solved

## Further ideas:
- add level selection
- make it possible to replay old games
- have a timer and record finishing times
- add a gallery view where you can have an overview about completed and upcoming challenges