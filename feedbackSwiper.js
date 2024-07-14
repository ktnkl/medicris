const r = document.getElementById("r") 
const t = document.getElementById("t") 
const l = document.getElementById("l") 
const slidesAmount = document.querySelectorAll("[data-slide-number]").length
t.innerHTML = `1/${slidesAmount}` 
r.addEventListener("click", () => {
  let lastActive = t.getAttribute('data-number')
  if (lastActive != slidesAmount) { 
    if (lastActive == 1) {
      l.setAttribute('src', 'media/review/Arrow_black.svg')
      l.style.cssText = "transform: rotate(180deg)"
    }
    let newActive = Number(lastActive) + 1
    if (newActive == slidesAmount) {
      r.setAttribute('src', 'media/review/Arrow_grey.svg')
      r.style.cssText = "transform: rotate(180deg)"
    }
    t.setAttribute('data-number', newActive)
    t.innerHTML = `${newActive}/${slidesAmount}`
    document.querySelector(`[data-slide-number="${lastActive}"]`).setAttribute("data-visible", "false")
    document.querySelector(`[data-slide-number="${newActive}"]`).setAttribute("data-visible", "true")
  }
  
})
l.addEventListener("click", () => {
  let lastActive = t.getAttribute('data-number')
  if (lastActive != 1) {
    if (lastActive == slidesAmount) {
      r.setAttribute('src', 'media/review/Arrow_black.svg')
      r.style.cssText = "transform: rotate(0deg)"
    }
    let newActive = Number(lastActive) - 1
    if (newActive == 1) {
      l.setAttribute('src', 'media/review/Arrow_grey.svg')
      l.style.cssText = "transform: rotate(0deg)"
    }
    t.setAttribute('data-number', newActive)
    t.innerHTML = `${newActive}/${slidesAmount}`
    document.querySelector(`[data-slide-number="${lastActive}"]`).setAttribute("data-visible", "false")
    document.querySelector(`[data-slide-number="${newActive}"]`).setAttribute("data-visible", "true")
  }
  
})