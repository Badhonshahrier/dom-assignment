document.getElementById("btn-card-1").addEventListener("click", function (event) {

    event.target.disabled = "true";
    alert("Board Update Successfully")
    // button disable
    const activity = document.getElementById('activity-log');
    const entry = document.createElement("div");
    entry.innerHTML =
        `
        <div class="mb-3">
        <P id="clear" class="text-[#000] text-dm p-2  rounded-lg  bg-[#F4F7FF]">You have completed the task Fixed Mobile Button Issue at</P>
        </div>
        `
    activity.appendChild(entry);
    // clear btn
    document.getElementById("clear-btn").addEventListener("click", function () {
        document.getElementById("clear").remove()
    })
})
document.getElementById('btn-card-2').addEventListener("click", function () {
    document.getElementById("btn-card-2").style.background = "none"
    alert("Board Update Successfully")
    // button disable
    const activity = document.getElementById('activity-log');
    const entry = document.createElement("div");
    entry.innerHTML =
        `
        <div class="mb-3" >
        <P id="clear" class="text-[#000] text-dm p-2 rounded-lg  bg-[#F4F7FF]">You have completed the task Fixed Mobile Button Issue at</P>
       </div>
        `
    activity.appendChild(entry);
    // clear btn
    document.getElementById("clear-btn").addEventListener("click", function () {
        document.getElementById("clear").remove()
    })
})
document.getElementById('btn-card-3').addEventListener("click", function () {
    document.getElementById("btn-card-3").style.background = "none"
    alert("Board Update Successfully")
    // button disable
    const activity = document.getElementById('activity-log');
    const entry = document.createElement("div");
    entry.innerHTML =
        `
        <div class="mb-3">
        <P id="clear" class="text-[#000] text-dm p-2 rounded-lg  bg-[#F4F7FF]">You have completed the task Optimize Home Page at</P>
        </div>
        `
    activity.appendChild(entry);
    // clear btn
    document.getElementById("clear-btn").addEventListener("click", function () {
        document.getElementById("clear").remove()
    })
})
document.getElementById('btn-card-4').addEventListener("click", function () {
    document.getElementById("btn-card-4").style.background = "none"
    alert("Board Update Successfully")
    // button disable
    const activity = document.getElementById('activity-log');
    const entry = document.createElement("div");
    entry.innerHTML =
        `
        <div class="mb-3">
        <P id="clear" class="text-[#000] text-dm p-2 rounded-lg  bg-[#F4F7FF]">You have completed the task Add New Emoji 🤲 at</P>
        </div>
        `
    activity.appendChild(entry);
    // clear btn
    document.getElementById("clear-btn").addEventListener("click", function () {
        document.getElementById("clear").remove()
    })
})
document.getElementById('btn-card-5').addEventListener("click", function () {
    document.getElementById("btn-card-5").style.background = "none"
    alert("Board Update Successfully")
    // button disable
    const activity = document.getElementById('activity-log');
    const entry = document.createElement("div");
    entry.innerHTML =
        `
        <div class="mb-03">
        <P id="clear" class="text-[#000] text-dm p-2 rounded-lg  bg-[#F4F7FF]">You have completed the task Integrate OpenAI API at</P>
        </div>
        `
    activity.appendChild(entry);
    // clear btn
    document.getElementById("clear-btn").addEventListener("click", function () {
        document.getElementById("clear").remove()
    })
})
document.getElementById('btn-card-6').addEventListener("click", function () {
    document.getElementById("btn-card-6").style.background = "none"
    alert("Board Update Successfully")
    // button disable
    const activity = document.getElementById('activity-log');
    const entry = document.createElement("div");
    entry.innerHTML =
        `
        <div class="mb-3">
        <P id="clear" class="text-[#000] text-dm p-2 rounded-lg  bg-[#F4F7FF]">You have completed the task Improve Job Searching at</P>
        </div>
        `
    activity.appendChild(entry);
    // clear btn
    document.getElementById("clear-btn").addEventListener("click", function () {
        document.getElementById("clear").remove()
    })
})