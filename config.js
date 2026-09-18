/* ================= FILTER COMMANDS ================= */

function filterCommands(type, button) {

    const cells = document.querySelectorAll(".command-cell");

    const buttons = document.querySelectorAll(".filter-button");

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");


    cells.forEach(function(cell) {

        const table = cell.closest(".command-table");

        if (type === "all") {

            cell.style.display = "";

        } else if (type === "cisco") {

            if (cell === table.querySelector(".command-row .command-cell:first-child")) {
                cell.style.display = "";
            } else {
                cell.style.display = "none";
            }

        } else if (type === "huawei") {

            if (cell === table.querySelector(".command-row .command-cell:last-child")) {
                cell.style.display = "";
            } else {
                cell.style.display = "none";
            }

        }

    });

}
