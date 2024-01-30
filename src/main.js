const getTime = () => {
  const date = new Date();
  return `${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}:${date.getSeconds().toString().padStart(2,'0')}`
}

const update = () => {
  const textElement = document.getElementById('text');
  textElement.innerHTML = getTime();
  setTimeout(update, 1000);
}

window.addEventListener("DOMContentLoaded", () => {
  update();
});
