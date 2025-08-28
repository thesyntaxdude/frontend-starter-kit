import "../styles/styles.css";
import home from "./modules/home";
import footer from "./modules/footer";
import about from "./modules/about";
import contact from "./modules/contact";

const mainContent = document.querySelector("#content");

mainContent.appendChild(home);
mainContent.appendChild(about);
mainContent.appendChild(contact);
document.body.appendChild(footer);

const homeBtn = document.querySelector("#home-btn");
const aboutBtn = document.querySelector("#about-btn");
const contactBtn = document.querySelector("#contact-btn");

homeBtn.addEventListener("click", () => switchTabs(home, about, contact));
aboutBtn.addEventListener("click", () => switchTabs(about, home, contact));
contactBtn.addEventListener("click", () => switchTabs(contact, home, about));

function switchTabs(active, inactive1, inactive2) {
  active.style.display = "initial";
  inactive1.style.display = "none";
  inactive2.style.display = "none";
}
