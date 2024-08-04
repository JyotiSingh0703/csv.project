--html code --
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSV Upload and Display</title>
    <link rel="stylesheet" href="csv.css">
</head>
<body>
    <div class="container">
        <h1>Upload and Display CSV</h1>
        <form id="csvForm">
            <input type="file" id="csvFile" accept=".csv" />
            <button type="button" onclick="readCSV()">Upload and Display</button>
        </form>
        <table id="csvTable">
            <thead>
                <tr></tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
    <script src="csv.js"></script>
</body>

</html>


/* styles.css */
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #821212;
}

.container {
    text-align: center;
}

form {
    margin-bottom: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

table, th, td {
    border: 1px solid #3efce0;
}

th, td {
    padding: 8px;
    text-align: left;
}

th {
    background-color: #121212;
}

--csv.css--

body, h1, a {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Navbar Container */
.navbar {
    background-color: #3c0101;
    color: white;
    padding: 10px 20px;
    display: inline-block;
    align-items: center;
    justify-content: space-between;
}

.navbar-container {
    display: inline-block;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

/* Logo */
.logo img {
    height: 40px;
    width: auto;
}

/* Title */
.title {
    flex-grow: 1;
    text-align: flex;
    font-size: 1.5em;
}

/* Nav Links */
.nav-links {
    display: inline-block;
    gap: 10px;
}

.btn {
    text-decoration: none;
    color: white;
    background-color: #007BFF;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
}

.btn:hover {
    background-color: #f76f6f;
}


// script.js
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

