const input = document.getElementById("jsonInput");
const output = document.getElementById("output");
const statusDiv = document.getElementById("status");

let currentJSON = null;

function formatJSON() {
    try {
        const parsed = JSON.parse(input.value);
        currentJSON = parsed;

        const formatted = JSON.stringify(parsed, null, 4);

        output.textContent = formatted;

        statusDiv.textContent = "✅ Valid JSON";
        statusDiv.style.color = "#22c55e";

    } catch (error) {
        statusDiv.textContent = "❌ Invalid JSON: " + error.message;
        statusDiv.style.color = "#ef4444";
    }
}

function validateJSON() {
    try {
        JSON.parse(input.value);

        statusDiv.textContent = "✅ JSON is valid";
        statusDiv.style.color = "#22c55e";

    } catch (error) {
        statusDiv.textContent = "❌ Invalid JSON: " + error.message;
        statusDiv.style.color = "#ef4444";
    }
}

function clearAll() {
    input.value = "";
    output.textContent = "";
    statusDiv.textContent = "";
    document.getElementById("searchBox").value = "";
}

function copyJSON() {
    navigator.clipboard.writeText(output.textContent);

    statusDiv.textContent = "📋 JSON copied to clipboard";
    statusDiv.style.color = "#38bdf8";
}

function searchJSON() {
    if (!currentJSON) return;

    const query = document.getElementById("searchBox").value.toLowerCase();

    const formatted = JSON.stringify(currentJSON, null, 4);

    if (query === "") {
        output.textContent = formatted;
        return;
    }

    const lines = formatted.split("\n");

    const filtered = lines.filter(line =>
        line.toLowerCase().includes(query)
    );

    output.textContent = filtered.join("\n");
}