module.exports = (shoppingCart) => {
    // code
    let subTotals = [8, 15.2, 21.6, 25.6, 30];

    return shoppingCart.reduce(({ groups, total: prevTotal }, element) => {
        /*
        [
            Set(0, 1, 2),
            Set(0, 2, 4)
        ] */
        let bestGroup = null;
        let total;
        const bestTotal = groups.reduce((minTotal, group) => {
            if (group.has(element)) return;
            const currentTotal = total - subTotals[group.size - 1] + subTotals[group.size];
            if (currentTotal < minTotal) {
                minTotal = currentTotal;
                bestGroup = group;
                console.log(bestGroup);
            }
        }, prevTotal + subTotals[0]);
        console.log(bestGroup);
        if (bestGroup) {
            bestGroup.add(element);
            total = bestTotal;

        } else {
            groups.push(new Set([element]));
            total = prevTotal + subTotals[0];
        }
        return {
            total,
            groups
        }
    }, { groups: [], total: 0 }).total;
}