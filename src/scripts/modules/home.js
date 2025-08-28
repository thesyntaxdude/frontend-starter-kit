const homeSection = document.createElement("section");
homeSection.setAttribute("id", "home");
const heroSection = document.createElement("section");
heroSection.classList.add("hero-section");
const menuSection = document.createElement("section");
menuSection.classList.add("menu-section");

const heroParagrapgh = document.createElement("p");
heroParagrapgh.innerHTML = `You know what they say, breakfast is the most important meal of the day. 
Is it true? I don't know and to be honest, I don't care. 
But I do know <span class="format">Mama's Happy Morning</span> has the best coffee to start your day right!
Hoow do I know? I own Starbucks, a multibillion dollar corporaton, and I choose <abbr title="Mama's Happy Morning">MMH</abbr> everyday.`;

const heroImg = document.createElement("img");
heroImg.setAttribute("src", "https://popedev.sirv.com/coffee-563800_640.jpg");
heroImg.setAttribute(
  "alt",
  "A Delicious looking cup of coffee from Mama's Happy Morning"
);
heroImg.setAttribute("loading", "lazy");

menuSection.innerHTML = `<h2>Explore Our Menu</h2>
        <table>
          <thead>
            <tr>
              <th>Coffee</th>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Flash Expresso</th>
              <td>$5.00</td>
            </tr>
            <tr>
              <th>Vibe Breach Coffee</th>
              <td>$3.99</td>
            </tr>
            <tr>
              <th>I'm Batman</th>
              <td>$19.99</td>
            </tr>
            <tr>
              <th>I'm Iron Man</th>
              <td>$49.99</td>
            </tr>
            <tr>
              <th>Wonder Woman Hot Coffee</th>
              <td>$2.99</td>
            </tr>
          </tbody>
        </table>`;

heroSection.appendChild(heroParagrapgh);
heroSection.appendChild(heroImg);
homeSection.appendChild(heroSection);
homeSection.appendChild(menuSection);

export default homeSection;
