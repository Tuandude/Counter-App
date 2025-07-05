const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const CounterApp = document.getElementById("CounterApp");
let count = 0;

increaseBtn.onclick = function () {
  count++;
  CounterApp.innerHTML = count;
};
resetBtn.onclick = function () {
  count = 0;
  CounterApp.innerHTML = count;
};
decreaseBtn.onclick = function () {
  count--;
  CounterApp.innerHTML = count;
};
