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

