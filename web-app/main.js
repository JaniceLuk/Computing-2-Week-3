// import Connect4 from "Connect4.js";

// Table things, stuff for the UI.

// Use the Connect 4 module;

import R from "./ramda.js";

const row_count = 7;
const column_count = 5;

const game_grid = document.getElementById("game_grid");

R.range(0, row_count).forEach(function (row_index) {
    const tr = document.createElement("tr");
    game_grid.append(tr);

    R.range(0, column_count).forEach(function (column_index) {
        const td = document.createElement("td");
        tr.append(td);
        td.textContent = `[${row_index},${column_index}]`;

        td.onclick = function () {
            document.querySelector("aside").textContent = (
                `Row: ${row_index}, Column: ${column_index}`
            );
        };
    });
});

