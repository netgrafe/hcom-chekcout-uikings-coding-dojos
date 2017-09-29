module.exports = (shoppingCart) => {
    // code
    let subTotals = [8, 15.2, 21.6, 25.6, 30],
        grouppedCart = [],
        totalPrice = 0;

    shoppingCart.forEach(bookNumber => {
        const bestGroup = {
            setIndex: null,
            minTotal: Infinity
        };

        grouppedCart.forEach((set, index) => {
            if (!set.has(bookNumber)) {
                const valueOfCurrentSet = subTotals[set.size-1];
                const valueOfSetWithActualBook = subTotals[set.size];
                const increasedGroupCartValue = totalPrice - valueOfCurrentSet + valueOfSetWithActualBook;

                if (increasedGroupCartValue < bestGroup.minTotal) {
                    bestGroup.setIndex = index;
                    bestGroup.minTotal = increasedGroupCartValue;
                }
            }
        });

        if (bestGroup.setIndex === null) {
            grouppedCart.push(new Set([bookNumber]));
            totalPrice += subTotals[0];
        } else {
            const setToExpand = grouppedCart[bestGroup.setIndex];
            setToExpand.add(bookNumber);

            totalPrice = parseFloat(bestGroup.minTotal.toFixed(2));
        }
    });

    return totalPrice;
}


