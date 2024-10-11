document.getElementById("addRow").onclick = function() {
    const name = document.getElementById("nameInput").value;
    const age = parseInt(document.getElementById("ageInput").value);

    if (name === "" || isNaN(age)) {
        alert("请填写正确的姓名和年龄！");
        return;
    }

    const table = document.getElementById("myTable");
    const row = table.insertRow(-1); // 在最后插入行
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = `<button onclick="deleteRow(this)">删除</button>`;

    document.getElementById("nameInput").value = "";
    document.getElementById("ageInput").value = "";

    sortTable();
};

// Function to delete a specific row from the table
function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    sortTable();
}

// Function to sort the table based on the age column
function sortTable() {
    const table = document.getElementById("myTable");
    const rows = Array.from(table.rows).slice(1);

    rows.sort((a, b) => {
        return parseInt(a.cells[1].innerHTML) - parseInt(b.cells[1].innerHTML);
    });

    rows.forEach(row => table.appendChild(row));
}
