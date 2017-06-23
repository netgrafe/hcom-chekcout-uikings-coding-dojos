const constants = require('./constants');
const translators = require('./translators');

const charMapper = {}

charMapper[constants.TOWER_LEFT] = () => {
    return {
        type: constants.TOWER_LEFT,
        direction: {
            x: -1,
            y: 0
        }
    }
}

charMapper[constants.TOWER_RIGHT] = () => {
    return {
        type: constants.TOWER_RIGHT,
        direction: {
            x: 1,
            y: 0
        }
    }
}

charMapper[constants.TOWER_UP] = () => {
    return {
        type: constants.TOWER_UP,
        direction: {
            x: 0,
            y: -1
        }
    }
}

charMapper[constants.TOWER_DOWN] = () => {
    return {
        type: constants.TOWER_DOWN,
        direction: {
            x: 0,
            y: 1
        }
    }
}

charMapper[constants.SPACE] = () => {
    return {
        type: constants.SPACE,
        traversed: false,
        translate: translators.spaceTranslator
    }
}

charMapper[constants.TARGET] = () => {
    return {
        type: constants.TARGET,
        hit: false
    }
}


charMapper[constants.BLOCK] = () => {
    return {
        type: constants.BLOCK
    }
}


charMapper[constants.MIRROR_LEFT] = () => {
    return {
        type: constants.MIRROR_LEFT,
        translate: translators.mirrorLeftTranslator
    }
}

charMapper[constants.MIRROR_RIGHT] = () => {
    return {
        type: constants.MIRROR_RIGHT,
        translate: translators.mirrorRightTranslator
    }
}

function process(input) {
    if (Number.isInteger(parseInt(input))) {
        const portalType = constants['PORTAL_' + input];

        return {
            type: portalType,
            translate: translators.portalTranslator.bind(null, portalType)
        }
    } else {
        return charMapper[input]();
    }

}

module.exports = process;