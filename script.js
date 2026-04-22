function showSection(id) {
    document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

/* Visitor Counter */
async function getVisitorCount() {
    try {
        let res = await fetch("https://YOUR_FUNCTION_URL/api/GetVisitorCount");
        let data = await res.text();
        document.getElementById("counter").innerText = data;
    } catch {
        document.getElementById("counter").innerText = "N/A";
    }
}

getVisitorCount();