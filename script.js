// const txt = "Hi, I am\nMohammed Labib Rafid Majumder\nA software engineering student, Web Developer and Problem Solver";
// let indx = 0;
// const speed = 50;
// const headTag = document.getElementById("headTag");


// function typewriter(){
//     if(indx < txt.length){
//         if(txt[indx] == "\n") headTag.innerHTML += "<br>";
//         else{
//             headTag.innerHTML += txt[indx];
//         }
//     }
    
//     indx++;
//     setTimeout(typewriter, speed);
// }

// window.onload = typewriter;

const lines = [
    "Hi, I am",
    "Mohammed Labib Rafid Majumder",
    "A software engineering student, Web Developer and Problem Solver"
];

let lineIndex = 0;
let charIndex = 0;
const speed = 50;

window.onload = () => {
    const container = document.getElementById("headTag");

    // Create elements for each line
    lines.forEach((_, index) => {
        const div = document.createElement("div");

        if (index === 0) div.className = "intro";
        else if (index === 1) div.className = "name";
        else div.className = "description";

        container.appendChild(div);
    });

    typeWriter();
};

function typeWriter() {
    const container = document.getElementById("headTag");
    const currentDiv = container.children[lineIndex];

    if (charIndex < lines[lineIndex].length) {
        currentDiv.textContent += lines[lineIndex][charIndex];
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        lineIndex++;
        charIndex = 0;

        if (lineIndex < lines.length) {
            setTimeout(typeWriter, 300); // small pause between lines
        }
    }
}



// ......

function showSkills(type) {
    const container = document.getElementById("skills-container");
    container.innerHTML = "";

    let skills = [];

    if (type === "programming") {
        skills = [
            { name: "C++", level: 90 },
            { name: "C", level: 90 },
            { name: "Java", level: 70 }
        ];
    } 
    else if (type === "frontend") {
        skills = [
            { name: "HTML", level: 80 },
            { name: "CSS", level: 50 },
            { name: "JavaScript", level: 60 }
        ];
    } 
    else if (type === "backend") {
        skills = [
            { name: "MySQL", level: 75 },
            { name: "Node.js", level: 60 },
            { name: "DBMS", level: 80 }
        ];
    }

    skills.forEach(skill => {
        const skillDiv = document.createElement("div");
        skillDiv.classList.add("skill");

        skillDiv.innerHTML = `
            <div class="skill-name">${skill.name} - ${skill.level}%</div>
            <div class="progress-bar">
                <div class="progress"></div>
            </div>
        `;

        container.appendChild(skillDiv);

        setTimeout(() => {
            skillDiv.querySelector(".progress").style.width = skill.level + "%";
        }, 100);
    });
}
