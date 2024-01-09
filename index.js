// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if (distance < 42) {
        return (42 - distance);
    } else {
        return (distance - 42);
    }
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
}
function distanceTravelledInFeet(startBlock, endBlock) {
    if (endBlock > startBlock) {
        return (endBlock - startBlock) * 264;
    } else {
        return (startBlock - endBlock
        ) * 264;
    }
}


/**  1) gives customers a free sample
      2) charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
      3) charges 25 dollars for a distance over 2000 feet
      4) does not allow rides over 2500 feet */
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;

    } if (distance >= 400 && distance <= 2000) {
        return (distance - 400) * .02;

    } else if (distance >= 2000 && distance <= 2500) {
        return 25;
    } else if (distance > 2500) {
        return 'cannot travel that far';
    }



}


