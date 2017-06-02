const symbols = require('./constants');

const charMapper = {}

charMapper[symbols.TOWER_LEFT] = () => {
    return {
        type: symbols.TOWER_LEFT,
        direction: {
            x: 0,
            y: 1
        }
    }
}

charMapper[symbols.TOWER_RIGHT] = () => {
    return {
        type: symbols.TOWER_RIGHT,
        direction: {
            x: 1,
            y: 0
        }
    }
}

charMapper[symbols.TOWER_UP] = () => {
    return {
        type: symbols.TOWER_UP,
        direction: {
            x: 0,
            y: -1
        }
    }
}

charMapper[symbols.TOWER_DOWN] = () => {
    return {
        type: symbols.TOWER_DOWN,
        direction: {
            x: 0,
            y: 1
        }
    }
}

charMapper[symbols.SPACE] = () => {
    return {
        type: symbols.SPACE,
        traversed: false,
        translate: () => {}
    }
}

charMapper[symbols.TARGET] = () => {
    return {
        type: symbols.TARGET,
        hit: false
    }
}


charMapper[symbols.BLOCK] = () => {
    return {
        type: symbols.BLOCK
    }
}


charMapper[symbols.MIRROR_LEFT] = () => {
    return {
        type: symbols.MIRROR_LEFT,
        translate: () => {}
    }
}

charMapper[symbols.MIRROR_RIGHT] = () => {
    return {
        type: symbols.MIRROR_RIGHT,
        translate: () => {}
    }
}

function process(input) {
    return charMapper[input]();
}

module.exports = process;