const tasklist=document.getElementById("task-list");
const cleartasks=document.getElementById("clear-tasks");
const taskform=document.querySelector(".task-form");
const taskinput=document.getElementById("task-input");
taskform.addEventListener("submit", (e) => {
    e.preventDefault();

    const tasktext=taskinput.value.trim();
    if (tasktext){
        const li=document.createElement("li");
        li.innerText=tasktext;
        const deletebutton=document.createElement("button");
        const editbutton=document.createElement("button");
        deletebutton.textContent="Delete";
        editbutton.textContent="Edit";
        deletebutton.style.margin="10px";
        deletebutton.addEventListener("click", () => {
            tasklist.removeChild(li);
        });
        editbutton.addEventListener("click", () => {
            const newtask=prompt("Edit your task:", li.textContent);
            if (newtask!==null && newtask.trim()!=="") {
                li.textContent=newtask.trim();
                li.appendChild(deletebutton);
                li.appendChild(editbutton);
            }
        });
        li.appendChild(deletebutton); 
        li.appendChild(editbutton);
        tasklist.appendChild(li);
        taskinput.value = "";
    }
});
cleartasks.addEventListener("click", () => {
    tasklist.innerHTML = `<p>Cleared Tasks</p>`;
});