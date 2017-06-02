# Planning notes

## Model plans

We identified the following model objects to represent different entities on the table:

### Common properties
- type - constant, based on the symbol
- coord
    - x - int
    - y - int

### Tower
- direction
    - x - int, 0-1, vector
    - y - int, 0-1, vector

### Mirror
- translate - function - get a Ray as input and return the new coords and direction???

> if a mirror is `\` (LEFT) it simply swaps the direction coordinates

> if a mirror is `/` (RIGHT) it swaps the direction coordinates and negates them

### Space
- traversed - boolean
- translate - function

### Block
- no special property to be created

### Target
- hit - boolean

### Portal
- translate - function
- pairCoords
    - x - int
    - y - int

### Ray
- coords
    - x - int
    - y - int
- direction
    - x - int, 0-1 vector
    - y - int, 0-1 vector

They will be plain objects, not classes.

## Approaches

### 1. Algorithmical

- during the processing of the raw table we're caching and filtering out lists:
    - collect the Towers to go through all of them and follow their Rays
    - collect the Targets to check whether we shot all of them
    - store a Portal with a key (its number, probably), so when we find it's pair, we can bind them together and fill their `pairCoords` property
- we store the table size in a globalish variable
- once we have the preprocessed state, we iterate over the Towers and follow their Rays
    - if we have a clash, we return immediately
    - if we processed them all, we check if all targets are shot

### 2. Fully functional

- no state variables and caching lists, only the table is our store
- we always iterate over the whole table and handle the active point,
    - follow a ray if we find a tower, active point will traverse in any direction
    - if we reach a limit, we pick one the next, non processed element as the active point
- terminating - ??? open question yet