const API_URL = "https://jsonplaceholder.typicode.com/users";

const statusElement = document.getElementById("status");
const dashboard = document.getElementById("dashboard");

async function loadData() {
    try {
        statusElement.textContent = "Memuat data...";

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        renderDashboard(data);

        statusElement.textContent =
            `Berhasil memuat ${data.length} data pengguna.`;

    } catch (error) {
        console.error(error);
        statusElement.textContent =
            "Gagal mengambil data dari API.";
    }
}

function renderDashboard(data) {
    dashboard.innerHTML = data.map(user => `
        <article class="card">
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Kota:</strong> ${user.address.city}</p>
            <p><strong>Perusahaan:</strong> ${user.company.name}</p>
        </article>
    `).join("");
}

loadData();