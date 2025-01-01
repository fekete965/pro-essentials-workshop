const func = () => {
  // Refactor this to be its own function
  const randomPercentage = randomTimesOneHundred();
  console.log(randomPercentage);
};

function randomTimesOneHundred() {
  return `${(Math.random() * 100).toFixed(2)}%`;
}
