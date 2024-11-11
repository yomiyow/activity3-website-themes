const themeSelection = document.querySelector('select');

// set light theme as default
document.body.classList.add('light-theme');

themeSelection.addEventListener('change', (event) => {
  const selectedTheme = event.target.value;
  applyTheme(selectedTheme);
});

function applyTheme(theme) {
  document.body.classList.remove('light-theme', 'dark-theme', 'gradient-theme');

  switch (theme) {
    case 'Light':
      document.body.classList.add('light-theme');
      break;
    case 'Dark':
      document.body.classList.add('dark-theme');
      break;
    case 'Gradient':
      document.body.classList.add('gradient-theme');
      break;
  }
}