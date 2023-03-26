function distanceFromHqInBlocks (number1) {
    if (number1 > 42) {
      return number1 - 42;
    } else {
      return 42 - number1;
    }
  }

  function distanceFromHqInFeet(number2) {
    return distanceFromHqInBlocks(number2) * 264;
  }
  function distanceTravelledInFeet (start, destination) {
    if (start < destination) {
      return (destination - start) * 264;
    } else {
      return (start - destination) * 264;
    }
  }
  function calculatesFarePrice (start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination);
    if (distanceTravelled <= 400) {
      return 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
      return .02 * (distanceTravelled - 400);
    } else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }