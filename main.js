import './style.css'


const COLOR_PALETTE = {

  '#F2FF49': 'Lima Limon',
  '#FF4242': 'Rojo Imperial',
  '#FB62F6': 'Ultra Rosa',
  '#645DD7': 'Azul Pizarra',
  '#B3FFFC': 'Celeste',

};

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker');
  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement('option')
    option.value = color;
    option.innerText = COLOR_PALETTE[color];
    colorPickerSelect.append(option);
  })
};

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker');
  const colorName = document.querySelector('#color-name')
  colorPickerSelect.addEventListener('change', (ev) => {
    const newColor = ev.target.value;
    document.body.style.backgroundColor = newColor

    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
    colorName.innerHTML = COLOR_PALETTE[newColor] ? colorNameText : '-';
  })
};


const colorInputSelect = () => {
  const inputValue = document.querySelector('#input-color');
  const colorName = document.querySelector('#color-name');
  inputValue.addEventListener('input', (event) => {
    const newColor = event.target.value;
    colorName.innerText = inputValue.value

    document.body.style.backgroundColor = newColor

  })

}




colorInputSelect();
addOptionsToColorPicker();
addEventListenerToColorPicker();


