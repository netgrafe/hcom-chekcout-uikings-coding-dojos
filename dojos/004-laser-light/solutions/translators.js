const { LEFT, RIGHT, UP, DOWN } = require('./constants');

function vectorAdd(a, b) {
    const x = a.x + b.x;
    const y = a.y + b.y;

    return { x, y };
}

function mirrorLeftTranslator(coords, direction) {
    let result = {};

    switch(direction) {
        case LEFT:    result.direction = UP; break;
        case RIGHT:   result.direction = DOWN; break;
        case UP:      result.direction = LEFT; break;
        case DOWN:    result.direction = RIGHT; break;
    }

    result.coords = vectorAdd(coords, result.direction);

    return result;
}

function mirrorRightTranslator(coords, direction) {
    let result = {};

    switch(direction) {
        case LEFT:    result.direction = DOWN; break;
        case RIGHT:   result.direction = UP; break;
        case UP:      result.direction = RIGHT; break;
        case DOWN:    result.direction = LEFT; break;
    }

    result.coords = vectorAdd(coords, result.direction);

    return result;
}

function spaceTranslator(coords, direction) {
    return {
        coords: vectorAdd(coords, direction),
        direction
    };
}

function portalTranslator(portalType, coords, direction, portals) {
    // portals.filter( portal => { return portalType === portal.type; });

/*
    {
        PORTAL_1: [ { x: 0, y: 0}, { x: 3, y: 3} ]
    }

    Object.keys(portals)
        .map((portalKey) => portals[portalKey])
        .find((pair) => {
            pair.some((actualCoord) => actualCoord.x === coords.x && )
        })
*/

}


module.exports = {
    mirrorLeftTranslator,
    mirrorRightTranslator,
    spaceTranslator,
    portalTranslator
}