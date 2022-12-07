w3.getHttpObject("https://api.adviceslip.com/advice", (data) => {
  document.querySelector(".no").textContent = `Advice #${data.slip.id}`;
  document.querySelector(".advice").textContent = `"${data.slip.advice}"`;
});

document.querySelector(".img").addEventListener("click", () => {
  w3.getHttpObject("https://api.adviceslip.com/advice", (data) => {
    document.querySelector(".no").textContent = `Advice #${data.slip.id}`;
    document.querySelector(".advice").textContent = `"${data.slip.advice}"`;
  });
});
