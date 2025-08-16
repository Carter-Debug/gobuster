document.addEventListener('DOMContentLoaded', function () {
  var yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());
});