const reachDestination = (distance, speed) => {
  timeLeft = Math.round(distance / speed / 0.5) * 0.5;
  return `I should be there in ${timeLeft} hours.`;
};

module.exports = reachDestination;
