const $dropdownButton1 = document.getElementById('dropdown-button-1')
const $dropdownButton2 = document.getElementById('dropdown-button-2')
$dropdownButton1.addEventListener('click', () => {
  const img = document.querySelector('#dropdown-button-1 > .footer__navimg')
  if ($dropdownButton1.classList.contains('closed')) {
    img.style.cssText = `
      transform: rotate(180deg) scale(.5);
    `
    document.getElementById('dropdown-body-1').style.cssText = `display: block`
    $dropdownButton1.classList.remove('closed')
  } else {
    img.style.cssText = `
      transorm: rotate(180deg)
    `
    document.getElementById('dropdown-body-1').style.cssText = `display: none`
    $dropdownButton1.classList.add('closed')
  }
})
$dropdownButton2.addEventListener('click', () => {
  const img = document.querySelector('#dropdown-button-2 > .footer__navimg')
  if ($dropdownButton2.classList.contains('closed')) {
    img.style.cssText = `
      transform: rotate(180deg) scale(.5);
    `
    document.getElementById('dropdown-body-2').style.cssText = `display: block`
    $dropdownButton2.classList.remove('closed')
  } else {
    img.style.cssText = `
      transorm: rotate(180deg)
    `
    document.getElementById('dropdown-body-2').style.cssText = `display: none`
    $dropdownButton2.classList.add('closed')
  }
})
