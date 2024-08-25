document.addEventListener("DOMContentLoaded", () => {
  showContent();
  showTrack();
  add();
  addTrack();
  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius;

  // Function to update the progress circle
  function setProgress(circle, textElement, percent) {
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    textElement.textContent = `${percent}%`;
  }

  const progressCircle = document.querySelector(".progress-ring__progress");
  const progressText = document.querySelector("#progress-text");
  setProgress(progressCircle, progressText, setp);

  const progressCircle1 = document.querySelector("#progress-ring__progress1");
  const progressText1 = document.querySelector("#progress-text1");
  setProgress(progressCircle1, progressText1, setp1);

  const progressCircle2 = document.querySelector("#progress-ring__progress2");
  const progressText2 = document.querySelector("#progress-text2");
  setProgress(progressCircle2, progressText2, setp2);

  const progressCircle3 = document.querySelector("#progress-ring__progress3");
  const progressText3 = document.querySelector("#progress-text3");
  setProgress(progressCircle3, progressText3, setp3);

  setp += 9;
  setp %= 100;
  setp1 += 1;
  setp1 %= 100;
  setp2 += 15;
  setp2 %= 100;
  setp3 += 5;
  setp3 %= 100;

  localStorage.setItem("setp", setp);
  localStorage.setItem("setp1", setp1);
  localStorage.setItem("setp2", setp2);
  localStorage.setItem("setp3", setp3);
  updateStorage();
});

const content = document.getElementsByClassName("content");

// Function to show content stored in localStorage
function showContent() {
  if (localStorage.getItem("lc")) {
    content[0].innerHTML = localStorage.getItem("lc");
  }
}

// Function to update localStorage with current content
function updateStorage() {
  localStorage.setItem("lc", content[0].innerHTML);
}

const d = new Date();
  let text = d.toLocaleString();
  let arr1 = [
    "Chattikara, Virndavan, UP",
    "Bhagwan Talkies, Agra, UP",
    "Goverdhan Rd, Mathura",
  ];

// Function to add new content and store the date/time and count in localStorage
function add() {
  let arr = ["Bio-Waste", "Plastic", "Paper", "Metal", "E-Waste"];
  
  let color = ["#fffff", "#e6e6e6"];

  // Retrieve count from localStorage or initialize it
  let count = localStorage.getItem("count")
    ? parseInt(localStorage.getItem("count"))
    : 1;

  

  // Store the date and time in localStorage

  let lc = document.createElement("div");
  lc.className = "linecontent";
  lc.style.backgroundColor = `${color[count % color.length]}`;
  console.log(color[0]);

  let d1 = document.createElement("div");
  d1.className = "Sno";
  let el1 = document.createElement("p");
  el1.innerText = `#${count}`;
  d1.appendChild(el1);
  lc.appendChild(d1);

  let d2 = document.createElement("div");
  d2.className = "date";
  let el2 = document.createElement("p");
  el2.innerText = `${text}`;
  d2.appendChild(el2);
  lc.appendChild(d2);

  let d4 = document.createElement("div");
  d4.className = "type";
  d4.innerHTML = `${arr[count % arr.length]}`;
  lc.appendChild(d4);

  let d3 = document.createElement("div");
  d3.className = "location";
  let el3 = document.createElement("p");
  el3.innerText = `${arr1[count % arr1.length]}`;
  d3.appendChild(el3);
  lc.appendChild(d3);

  console.log(lc);
  localStorage.setItem("lastLoadTime", text);
  console.log(content);
  content[0].appendChild(lc);

  // Increment and store count in localStorage
  count++;
  localStorage.setItem("count", count);

  updateStorage();
}

let setp = localStorage.getItem("setp")
  ? parseInt(localStorage.getItem("setp"))
  : 1.4;
let setp1 = localStorage.getItem("setp1")
  ? parseInt(localStorage.getItem("setp1"))
  : 1;
let setp2 = localStorage.getItem("setp2")
  ? parseInt(localStorage.getItem("setp2"))
  : 0.9;
let setp3 = localStorage.getItem("setp3")
  ? parseInt(localStorage.getItem("setp3"))
  : 3.7;


  let SegDate = new Date();

  // Add 2 days to the current date
  SegDate.setDate(SegDate.getDate() + 2);
  
  // Format the date as needed (e.g., YYYY-MM-DD)
  let fDate = SegDate.toISOString().split('T')[0];



  let trackcount = localStorage.getItem("trackcount")
  ? parseInt(localStorage.getItem("trackcount"))
  : 1;

arr2=["Attero Recycling",
  "Saahas Zero Waste",
  "Eco Eclectic Technologies",
  "Banyan Nation",
  "TrashCon"]

const third = document.getElementsByClassName("thirdHalf");

const trackingContainer = document.createElement("div");
trackingContainer.className = "tracking-container";
// Set the inner HTML for the tracking container
trackingContainer.innerHTML = `
    <div class="tracking-header">
        <div>Waste-Id - #${trackcount}</div>
        <div>Picked on, ${text}</div>
        <div>From:- ${arr1[trackcount % arr1.length]}</div>
    </div>

    <div class="progress-bar">
        <div class="progress-line"></div>
        <div class="progress-line-filled" id="progress-line-filled"></div>

        <div class="step completed">
            <div class="step-icon">🚛</div>
            <div class="step-label">Waste Picked-Up</div>
        </div>

        <div class="step Segregated">
            <div class="step-icon">♻️</div>
            <div class="step-label">Segregated<br>on ${fDate}</div>
        </div>

        <div class="step active">
            <div class="step-icon">🏭</div>
            <div class="step-label">Disposed to be by <br>${arr2[trackcount%arr2.length]}</div>
        </div>

        <div class="step">
            <div class="step-icon">&#x2714;</div>
            <div class="step-label">Completed</div>
        </div>
    </div>
`;

// Append the tracking container to the thirdHalf div
function addTrack() {
  third[0].appendChild(trackingContainer);
  trackcount++;
  updateTrack();
}

function showTrack() {
  if (localStorage.getItem("track")) {
    third[0].innerHTML = localStorage.getItem("track");
    localStorage.getItem("trackcount");
  }
}

// Function to update localStorage with current content
function updateTrack() {
  localStorage.setItem("track", third[0].innerHTML);
  localStorage.setItem("trackcount",trackcount);
}
