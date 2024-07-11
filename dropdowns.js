const $ddbtn_1 = document.getElementById("ddbtn-1")
$ddbtn_1.addEventListener('click', () => {
  const img = document.querySelector("#ddbtn-1 > .footer__navimg")
  if ($ddbtn_1.classList.contains('closed')) {
    img.style.cssText = `
      transform: rotate(180deg) scale(.5);
    `
    document.getElementById('ddbody-1').style.cssText = `display: block`
    $ddbtn_1.classList.remove('closed')
  } else {
    img.style.cssText = `
      transorm: rotate(180deg)
    `
    document.getElementById('ddbody-1').style.cssText = `display: none`
    $ddbtn_1.classList.add('closed')
  }
})