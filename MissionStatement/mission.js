const themeSelector = document.getElementById("theme");
// replace with code to select dropdown element out of the HTML
const bodyElement = document.body;
const logo = document.querySelector("img");
function changeTheme() {
  //check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!
  const currentTheme = themeSelector.value;

  // if the value is dark then:
  if (currentTheme === "dark") {
    // add the dark class to the body
    bodyElement.classList.add("dark");
    // change the source of the logo to point to the white logo.
    logo.src = "byui-logo_white.png";
    // otherwise
  } else {
    // remove the dark class
    bodyElement.classList.remove("dark");
    // make sure the logo src is the blue logo.
    logo.src = "byui-logo_blue.webp";
  }
}
// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.
themeSelector.addEventListener("click", changeTheme);
