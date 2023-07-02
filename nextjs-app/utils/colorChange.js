const changeColor = (target) => {
  // Generate a random color
  const color = '#' + Math.floor(Math.random()*16777215).toString(16);

  // Apply the color to the target
  target.material.color.set(color);
}

export default changeColor;