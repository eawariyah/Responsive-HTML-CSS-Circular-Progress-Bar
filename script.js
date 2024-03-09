const progressInput = document.getElementById('progressInput');
const progressValue = document.querySelector('.progress-value');
const progressRingInner = document.querySelector('.progress-ring-inner');
const progressRingOuter = document.querySelector('.progress-ring-outer');

progressInput.addEventListener('input', function() {
  const value = this.value;
  progressValue.textContent = `${value}%`;
  const rotation = value * 3.6; // 360 degrees / 100%
  progressRingInner.style.transform = `rotate(${rotation}deg)`;
  progressRingOuter.style.transform = `rotate(${rotation}deg)`;
});
