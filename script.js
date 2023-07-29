let input = document.querySelector('#theme');

input.addEventListener('change', onChangeTheme);

function onChangeTheme() {
    if (input.checked == true) {
        document.body.classList.add('theme-dark')
        document.body.classList.remove("theme-light");
    } else {
        document.body.classList.add('theme-light');
        document.body.classList.remove("theme-dark");
    }
    
}
// console.log(input)

document.body.addEventListener(
  "load",
  (t) => {
    t.target.classList.contains("interactive") &&
      t.target.setAttribute("data-readystate", "complete");
  },
  { capture: !0 }
);
const c = { light: "#ffffff", dark: "#1b1b1b" };
if (window && document.documentElement)
  try {
    const t = window.localStorage.getItem("theme");
    t &&
      ((document.documentElement.className = t),
      (document.documentElement.style.backgroundColor = c[t]));
  } catch (t) {
    console.warn("Unable to read theme from localStorage", t);
  }