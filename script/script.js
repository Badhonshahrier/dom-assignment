function showCurrentDate() {
    const date = new Date();
    document.getElementById("current-date").innerHTML = date.toDateString();
}
showCurrentDate()


document.getElementById("btn-card-1").addEventListener("click", function (event) {


    alert("Board Update Successfully")
    event.target.disabled = true;
    const activity = document.getElementById('activity-log');
    const entry = document.createElement("div");

    entry.innerHTML =
        `
        <div class="mb-3">
        <P id="clear" class="text-[#000] text-dm p-2  rounded-lg  bg-[#F4F7FF]">You have completed the task Fixed Mobile Button Issue at <span id="clock-1"></span></P>
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
    event.target.disabled = true;
    const activity = document.getElementById('activity-log');
    const entry = document.createElement("div");
    entry.innerHTML =
        `
        <div class="mb-3" >
        <P id="clear" class="text-[#000] text-dm p-2 rounded-lg  bg-[#F4F7FF]">You have completed the task Add Dark Mode at <span id="clock-2"></span></P>
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
    event.target.disabled = true;
    const activity = document.getElementById('activity-log');
    const entry = document.createElement("div");
    entry.innerHTML =
        `
        <div class="mb-3">
        <P id="clear" class="text-[#000] text-dm p-2 rounded-lg  bg-[#F4F7FF]">You have completed the task Optimize Home Page at  <span id="clock-3"></span></P>
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
    event.target.disabled = true;
    const activity = document.getElementById('activity-log');
    const entry = document.createElement("div");
    entry.innerHTML =
        `
        <div class="mb-3">
        <P id="clear" class="text-[#000] text-dm p-2 rounded-lg  bg-[#F4F7FF]">You have completed the task Add New Emoji 🤲 at  <span id="clock-4"></span></P>
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
    event.target.disabled = true;
    const activity = document.getElementById('activity-log');
    const entry = document.createElement("div");
    entry.innerHTML =
        `
        <div class="mb-03">
        <P id="clear" class="text-[#000] text-dm p-2 rounded-lg  bg-[#F4F7FF]">You have completed the task Integrate OpenAI API at <span id="clock-5"></span></P>
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
    event.target.disabled = true;
    const activity = document.getElementById('activity-log');
    const entry = document.createElement("div");
    entry.innerHTML =
        `
        <div class="mt-3">
        <P id="clear" class="text-[#000] text-dm p-2 rounded-lg  bg-[#F4F7FF]">You have completed the task Improve Job Searching at <span id="clock-6"></span></P>
        </div>
        `
    activity.appendChild(entry);
    let realTime = new Date();
    document.getElementById("clock-6").innerHTML = realTime.toLocaleTimeString();
    document.getElementById("clear-btn").addEventListener("click", function () {
        document.getElementById("clear").remove()
    })
})