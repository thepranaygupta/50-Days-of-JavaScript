const timeToMixJuice = (name) => {
	// code here
    switch(name){
        case 'Pure Strawberry Joy' : return 0.5
        case 'Energizer': return 1.5;
        case 'Green Garden': return 1.5;
        case 'Tropical Island': return 3;
        case 'All or Nothing': return 5;
        default: return 2.5;
    }
}

const limesToCut = (wedgesNeeded, limes) => {
	// code here
    let totalWedge = 0
    let count = 0
    for(i=0;i<limes.length-1;i++){
        if(limes[i] == 'small') totalWedge += 6
        if(limes[i] == 'medium') totalWedge += 8
        if(limes[i] == 'large') totalWedge += 10
        count++
        if(totalWedge >= wedgesNeeded) break;
    }
	return count
}

const remainingOrders = (timeLeft, orders) => {
	// code here
    let newTime = 0;
    for(i=0;i<orders.length;i++){
        newTime += timeToMixJuice(orders[i])
        orders.splice(0,1)
        if(timeLeft <= newTime) break
    }
	return orders
}
