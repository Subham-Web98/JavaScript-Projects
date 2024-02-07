const form = document.querySelector("form");

//! in this case give you empty value
//* const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const details = document.querySelector("#details");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter a Valid Height "${height}";`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter a Valid Weight "${weight}";`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    //* Show results
    results.innerHTML = `<span>${BMI}</span>`;
    if (BMI < 18.6) {
      details.innerHTML = "You are Under Weight";
    } else if  (BMI >= 18.6 && BMI <=24.6) {
      details.innerHTML = "You are Normal";
    }else {
      details.innerHTML = "You are Over Weight";
    }
  }
});
