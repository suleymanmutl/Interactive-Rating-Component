const submitBtn = document.getElementById("btnSubmit");
const container = document.querySelector(".container");
const thankYou = document.querySelector(".thank-you");
const rateAgainBtn = document.getElementById("rateAgain");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn-rate");

submitBtn.addEventListener("click", () => {
  thankYou.classList.remove("hidden");
  container.classList.add("hidden");
});

rateAgainBtn.addEventListener("click", () => {
  thankYou.classList.add("hidden");
  container.classList.remove("hidden");
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML=(rate.innerHTML);
  });
});
