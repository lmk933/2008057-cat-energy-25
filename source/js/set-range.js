let rangeEdit = document.querySelector('.example__slider-range');
rangeEdit.addEventListener('input', setRangeValue);

function setRangeValue(e) {
  let overlay = document.querySelector(".example__slider-image--overlay");
  overlay.style.right = `${100-Number.parseInt(this.value)}%`;
}
