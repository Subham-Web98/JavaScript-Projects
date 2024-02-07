const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const age = parseInt(document.querySelector("#age").value);
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const validation = document.querySelector("#validation");
  const results = document.querySelector("#results");
  const details = document.querySelector("#details");

  if (age === "" || age < 0 || isNaN(age)) {
    validation.innerHTML = `Please enter a valid Age ${age}`;
  } else if (height === "" || height < 0 || isNaN(height)) {
    validation.innerHTML = `Please enter a valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    validation.innerHTML = `Please enter a valid Weight ${weight}`;
  } else {
    //*For Man
    // const BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    //*For Woman
    const BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    results.innerHTML = `${BMR} Calories/day`;
  }
});
