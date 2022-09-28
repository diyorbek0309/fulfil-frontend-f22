let input = document.querySelector("input");
let toDoAll = document.getElementsByClassName("toDoWrap")[0];
let id = 0;

const addToDo = () => {
  if (input.value.trim() !== "") {
    let div = document.createElement("div");
    div.setAttribute("class", "todo");
    let date = new Date().getDate(),
      month = new Date().getMonth() + 1,
      year = new Date().getFullYear(),
      hour = new Date().getHours(),
      minute = new Date().getMinutes();

    div.innerHTML = `
    <h4>
        ${input.value}
    </h4>
    <div class="amal">
        <button class="edit">EDIT</button>
        <button class="complete">COMPLETE</button>
        <button class="delete" onclick="deleteToDo(${id})">DELETE</button>
        <h5 class="added">Inserted: ${date}.${
      month < 10 ? "0" + month : month
    }.${year} ${hour}:${minute}</h5>
    </div>
  `;

    toDoAll.append(div);
    document.querySelector(".empty").style.display = "none";
    document.querySelector(".btn-delete").style.display = "inline-block";
    input.value = "";
    id++;
  }
};

const deleteToDo = (id) => {
  toDoAll.children[id].remove();
  console.log(id);
};

const deleteAll = () => {
  toDoAll.innerHTML = null;
};
