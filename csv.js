// csv.js
function readCSV() {
    const fileInput = document.getElementById('csvFile');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please select a CSV file first.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const contents = event.target.result;
        displayCSV(contents);
    };
    reader.readAsText(file);
}

function displayCSV(csv) {
    const table = document.getElementById('csvTable');
    table.getElementsByTagName('thead')[0].innerHTML = '';
    table.getElementsByTagName('tbody')[0].innerHTML = '';

    const rows = csv.split('\n');
    if (rows.length === 0) return;

    const headers = rows[0].split(',');
    const thead = table.getElementsByTagName('thead')[0];
    const theadRow = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header.trim();
        theadRow.appendChild(th);
    });
    thead.appendChild(theadRow);

    const tbody = table.getElementsByTagName('tbody')[0];
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].split(',');
        if (cells.length === headers.length) {
            const tr = document.createElement('tr');
            cells.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell.trim();
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        }
    }
}
