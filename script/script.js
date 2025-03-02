function showCurrentDate() {
    const date = new Date();
    document.getElementById("current-date").innerHTML = date.toDateString();
}
showCurrentDate()

let task = 6;
let completeTask = 23;

document.getElementById("btn-card-1").addEventListener("click", function (event) {
    alert("Board Update Successfully")
    task--;
    completeTask++;
    document.getElementById("decrease-nmb").innerText = task;
    document.getElementById("increase-nmb").innerText = completeTask;
    if (task === 0) {
        alert("Congrates!!!You have completed all the current task")
    }
    event.target.disabled = true;
    const activity = document.getElementById('activity-log');
    const entry = document.createElement("div");

    entry.innerHTML =
        `
        <div class="mb-3">
        <P id="clear" class="text-[#000] text-dm p-2  rounded-lg  bg-[#F4F7FF]">You have completed the task <span class="font-bold">Fixed Mobile Button Issue</span> at <span id="clock-1"></span></P>
        </div>
        `
    activity.appendChild(entry);
    let realTime = new Date();
    document.getElementById("clock-1").innerHTML = realTime.toLocaleTimeString();
    document.getElementById("clear-btn").addEventListener("click", function () {
        document.getElementById("clear").remove()
    })
})
document.getElementById('btn-card-2').addEventListener("click", function (event) {
    alert("Board Update Successfully")
    task--
    completeTask++
    document.getElementById("decrease-nmb").innerText = task;
    document.getElementById("increase-nmb").innerText = completeTask;
    if (task === 0) {
        alert("Congrates!!!You have completed all the current task")
    }
    event.target.disabled = true;
    const activity = document.getElementById('activity-log');
    const entry = document.createElement("div");
    entry.innerHTML =
        `
        <div class="mb-3" >
        <P id="clear" class="text-[#000] text-dm p-2 rounded-lg  bg-[#F4F7FF]">You have completed the task <span class="font-bold" >Add dark Mode </span>at <span id="clock-2"></span></P>
       </div>
        `
    activity.appendChild(entry);
    let realTime = new Date();
    document.getElementById("clock-2").innerHTML = realTime.toLocaleTimeString();
    document.getElementById("clear-btn").addEventListener("click", function () {
        document.getElementById("clear").remove()
    })
})
document.getElementById('btn-card-3').addEventListener("click", function (event) {
    alert("Board Update Successfully")
    task--
    completeTask++
    document.getElementById("decrease-nmb").innerText = task;
    document.getElementById("increase-nmb").innerText = completeTask;
    if (task === 0) {
        alert("Congrates!!!You have completed all the current task")
    }
    event.target.disabled = true;
    const activity = document.getElementById('activity-log');
    const entry = document.createElement("div");
    entry.innerHTML =
        `
        <div class="mb-3">
        <P id="clear" class="text-[#000] text-dm p-2 rounded-lg  bg-[#F4F7FF]">You have completed the task <span class="font-bold">Optimize Home Page</span> at  <span id="clock-3"></span></P>
        </div>
        `
    activity.appendChild(entry);
    let realTime = new Date();
    document.getElementById("clock-3").innerHTML = realTime.toLocaleTimeString();
    document.getElementById("clear-btn").addEventListener("click", function () {
        document.getElementById("clear").remove()
    })
})
document.getElementById('btn-card-4').addEventListener("click", function (event) {
    alert("Board Update Successfully")
    task--
    completeTask++
    document.getElementById("decrease-nmb").innerText = task;
    document.getElementById("increase-nmb").innerText = completeTask;
    if (task === 0) {
        alert("Congrates!!!You have completed all the current task")
    }
    event.target.disabled = true;
    const activity = document.getElementById('activity-log');
    const entry = document.createElement("div");
    entry.innerHTML =
        `
        <div class="mb-3">
        <P id="clear" class="text-[#000] text-dm p-2 rounded-lg  bg-[#F4F7FF]">You have completed the task <span class="font-bold">Add New Emoji 🤲</span> at <span id="clock-4"></span></P>
        </div>
        `
    activity.appendChild(entry);
    let realTime = new Date();
    document.getElementById("clock-4").innerHTML = realTime.toLocaleTimeString();
    document.getElementById("clear-btn").addEventListener("click", function () {
        document.getElementById("clear").remove()
    })
})
document.getElementById('btn-card-5').addEventListener("click", function (event) {
    alert("Board Update Successfully")
    task--
    completeTask++
    document.getElementById("decrease-nmb").innerText = task;
    document.getElementById("increase-nmb").innerText = completeTask;
    if (task === 0) {
        alert("Congrates!!!You have completed all the current task")
    }
    event.target.disabled = true;
    const activity = document.getElementById('activity-log');
    const entry = document.createElement("div");
    entry.innerHTML =
        `
        <div class="mb-03">
        <P id="clear" class="text-[#000] text-dm p-2 rounded-lg  bg-[#F4F7FF]">You have completed the task <span class="font-bold">Integrate OpenAI API</span> at <span id="clock-5"></span></P>
        </div>
        `
    activity.appendChild(entry);
    let realTime = new Date();
    document.getElementById("clock-5").innerHTML = realTime.toLocaleTimeString();
    document.getElementById("clear-btn").addEventListener("click", function () {
        document.getElementById("clear").remove()
    })
})
document.getElementById('btn-card-6').addEventListener("click", function (event) {
    alert("Board Update Successfully")
    task--
    completeTask++
    document.getElementById("decrease-nmb").innerText = task;
    document.getElementById("increase-nmb").innerText = completeTask;
    if (task === 0) {
        alert("Congrates!!!You have completed all the current task")
    }
    event.target.disabled = true;
    const activity = document.getElementById('activity-log');
    const entry = document.createElement("div");
    entry.innerHTML =
        `
        <div class="mt-3">
        <P id="clear" class="text-[#000] text-dm p-2 rounded-lg  bg-[#F4F7FF]">You have completed the task <span class="font-bold"> Improve Job Searching at </span> <span id="clock-6"></span></P>
        </div>
        `
    activity.appendChild(entry);
    let realTime = new Date();
    document.getElementById("clock-6").innerHTML = realTime.toLocaleTimeString();
    document.getElementById("clear-btn").addEventListener("click", function () {
        document.getElementById("clear").remove()
    })
})

const colors = ["#FF5733", "#33FF57", "#3357FF", "#F4A460", "#8A2BE2"];
let changeColor = 0;
document.getElementById("btn-bg").addEventListener("click", function () {
    document.body.style.backgroundColor = colors[changeColor];
    changeColor = (changeColor + 1) % colors.length;
});

