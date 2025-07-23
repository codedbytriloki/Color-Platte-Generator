function generateRandomColor(){
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + hex.padStart(6,'0');
}

const generateColor = () => {
  const boxContainer = document.querySelector('.box');
  boxContainer.innerHTML = '';

  for(let i=0; i<8; i++){
    let color = generateRandomColor();
    const div = document.createElement('div');
    div.className = 'color-box';
    div.style.backgroundColor = color;
    div.innerText = color;

    div.addEventListener('click', () => {
      navigator.clipboard.writeText(color);
      alert(`Copied ${color} to clipboard`); 
    })
    boxContainer.appendChild(div);
  } 
  
}
generateColor();