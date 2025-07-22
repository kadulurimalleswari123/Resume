// Example: Dynamically populate skills
const skills = ["JavaScript", "React", "Node.js", "HTML", "CSS", "Git"];

const skillList = document.getElementById("skill-list");

skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillList.appendChild(li);
});
