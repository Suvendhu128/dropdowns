const colorSelect = document.getElementById('colorSelect');
  const backgroundColorSelect = document.getElementById('backgroundColorSelect');
  const paddingSelect = document.getElementById('paddingSelect');
  const fontSizeSelect = document.getElementById('fontSizeSelect');
  const fontWeightSelect = document.getElementById('fontWeightSelect');
  const targetDiv = document.getElementById('targetDiv');

  colorSelect.addEventListener('change', () => {
    targetDiv.style.color = colorSelect.value;
  });

  backgroundColorSelect.addEventListener('change', () => {
    targetDiv.style.backgroundColor = backgroundColorSelect.value;
  });

  paddingSelect.addEventListener('change', () => {
    targetDiv.style.padding = paddingSelect.value;
  });

  fontSizeSelect.addEventListener('change', () => {
    targetDiv.style.fontSize = fontSizeSelect.value;
  });

  fontWeightSelect.addEventListener('change', () => {
    targetDiv.style.fontWeight = fontWeightSelect.value;
  });