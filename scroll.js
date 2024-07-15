const abilities = document.getElementById("abilities")
const doctors = document.getElementById("doctors")
const equip = document.getElementById("equip")
const clinic = document.getElementById("clinic")

window.addEventListener("scroll", () => {
  console.log(scrollY)
  if (Math.round(scrollY) > 2415) {
     abilities.classList.add('page-2-active')
     if (Math.round(scrollY) < 2414) {
      abilities.classList.remove('page-2-active')
    }
  } 
})