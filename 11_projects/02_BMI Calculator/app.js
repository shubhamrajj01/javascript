const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid input height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid input weight ${weight}`;
  } else {
    const BMI = ((weight / (height * height)) * 10000).toFixed(2);
    results.innerHTML = `<span> BMI: ${BMI}</span>`;

    const feedback = document.querySelector('#weight-guide');
    if (BMI < 18.6) {
      feedback.innerHTML = `<span> You are undrweight </span>`;
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      feedback.innerHTML = `<span> Normal Range </span>`;
    } else {
      feedback.innerHTML = `<span> Overweight </span>`;
    }
  }
});
