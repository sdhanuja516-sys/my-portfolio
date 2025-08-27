
const nameEl = document.getElementById("name");
const nameText = "Dhanuja Sivakumar";
let i = 0;
nameEl.textContent = "";

function typeEffect() {
  if (i < nameText.length) {
    nameEl.textContent += nameText.charAt(i);
    i++;
    setTimeout(typeEffect, 150);
  }
}
typeEffect();


document.querySelectorAll(".skill").forEach((skill) => {
  skill.addEventListener("mouseover", () => {
    skill.style.transform = "translateY(-15px) scale(1.05)";
  });
  skill.addEventListener("mouseout", () => {
    skill.style.transform = "translateY(0) scale(1)";
  });
});
