var r = document.querySelector(':root');
		
const darkTitle = document.getElementById('theme-dark-btn');
const lightTitle = document.getElementById('theme-light-btn');


function set_dark() {
  r.style.setProperty('--color-heading', '#FCFCFC');
  r.style.setProperty('--color-paragraph', '#D6D6D6');
  r.style.setProperty('--color-border', '#383838');
  r.style.setProperty('--color-bg', '#121212');
  r.style.setProperty('--color-surface-1', '#1e1e1f');
  r.style.setProperty('--color-surface-2', '#2a2a2b');
  r.style.setProperty('--color-surface-3', '#202021');
  r.style.setProperty('--color-accent', '#FFDB6E');
  r.style.setProperty('--color-error', '#B84C4C');
  r.style.setProperty('--color-gradient', 'linear-gradient(137.84deg, #FFDB6E 26.31%, #FFBC5E 93.75%)');
  r.style.setProperty('--color-gradient-soft', 'linear-gradient(135deg, rgba(255, 218, 109, 0.0375) 0%, rgba(255, 189, 94, 0) 100%), #1E1E1F');
  r.style.setProperty('--color-gradient-text', 'linear-gradient(90deg, #FFDB6E, #FFBC5E)');
  r.style.setProperty('--color-gradient-border', 'linear-gradient(-155deg, #FFDA6D 0%, rgba(255, 191, 96, 0) 50%)');
  r.style.setProperty('--color-gradient-border-gray', 'linear-gradient(135deg, #404040 0%, rgba(64, 64, 64, 0) 48.44%)');
  r.style.setProperty('--color-gradient-gray', 'linear-gradient(137.84deg, #3F3F40 2.69%, #303030 93.75%)');
  r.style.setProperty('--color-gradient-icon', 'linear-gradient(135deg, rgba(255, 218, 109, 0.25) 0%, rgba(255, 189, 94, 0) 59.86%), #202021');
  r.style.setProperty('--color-btn', 'linear-gradient(135deg, rgba(45, 45, 46, 0.25) 0%, rgba(27, 27, 28, 0) 100%), #202021');
  r.style.setProperty('--box-shadow-24', '-4px 8px 24px rgba(0, 0, 0, 0.25)');
  r.style.setProperty('--box-shadow-30', '0px 16px 30px rgba(0, 0, 0, 0.25)');
  r.style.setProperty('--box-shadow-40', '0px 16px 40px rgba(0, 0, 0, 0.25)');
  r.style.setProperty('--box-shadow-50', '0px 25px 50px rgba(0, 0, 0, 0.15)');
  r.style.setProperty('--box-shadow-80', '0px 24px 80px rgba(0, 0, 0, 0.7)');
  darkTitle.classList.remove("btn-deactive")
  darkTitle.classList.add("btn-active");
  lightTitle.classList.remove("btn-active")
  lightTitle.classList.add("btn-deactive");
}

function set_light() {
  r.style.setProperty('--color-heading', '#030303');
  r.style.setProperty('--color-paragraph', '#000000');
  r.style.setProperty('--color-border', '#c1d5fb');
  r.style.setProperty('--color-bg', '#445473');
  r.style.setProperty('--color-surface-1', '#ffffff');
  r.style.setProperty('--color-surface-2', '#c1d5fb');
  r.style.setProperty('--color-surface-3', '#ffffff');
  r.style.setProperty('--color-accent', '#0f61ff');
  r.style.setProperty('--color-error', '#47b3b3');
  r.style.setProperty('--color-gradient', 'linear-gradient(137.84deg, #5e7093 56.31%, #445473 93.75%)');
  r.style.setProperty('--color-gradient-soft', 'linear-gradient(125deg, rgb(193 213 251) 0%, rgb(193 213 251 / 0%) 100%), #ffffff');
  r.style.setProperty('--color-gradient-text', 'linear-gradient(90deg, #445473, #445473)');
  r.style.setProperty('--color-gradient-border', 'linear-gradient(-155deg, rgb(68 84 115) 0%, rgba(0, 64, 159, 0) 65%)');
  r.style.setProperty('--color-gradient-border-gray', 'linear-gradient(60deg, #455574 0%, rgb(68 84 115 / 21%) 48.44%)');
  r.style.setProperty('--color-gradient-gray', 'linear-gradient(137.84deg, #c0c0bf 2.69%, #cfcfcf 93.75%)');
  r.style.setProperty('--color-gradient-icon', 'linear-gradient(135deg, rgba(0, 37, 146, 0.25) 0%, rgba(0, 66, 161, 0) 59.86%), #dfdfde');
  r.style.setProperty('--color-btn', 'linear-gradient(135deg, rgb(193 213 251) 0%, rgba(27, 27, 28, 0) 100%), #dfdfde');
  r.style.setProperty('--box-shadow-24', '-4px 8px 24px rgba(255, 255, 255, 0.25)');
  r.style.setProperty('--box-shadow-30', '0px 16px 30px rgba(255, 255, 255, 0.25)');
  r.style.setProperty('--box-shadow-40', '0px 16px 40px rgba(255, 255, 255, 0.25)');
  r.style.setProperty('--box-shadow-50', '0px 25px 50px rgba(255, 255, 255, 255.15)');
  r.style.setProperty('--box-shadow-80', '0px 24px 80px rgba(255, 255, 255, 0.7)');
  darkTitle.classList.remove("btn-active")
  darkTitle.classList.add("btn-deactive");
  lightTitle.classList.remove("btn-deactive")
  lightTitle.classList.add("btn-active");
}

function openEn() {
  var baseUrl = window.location.origin;
  window.open(baseUrl + '/en', "_blank");
}

function openFa() {
  var baseUrl = window.location.origin;
  window.open(baseUrl + '/fa', "_blank");
}