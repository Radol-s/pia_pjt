
const data = [
  { name: "보라", project: "연세대", priority: "긴급", remaining: "20%" },
  { name: "정서익", project: "SOOP", priority: "높음", remaining: "40%" },
  { name: "박재용", project: "콘켄시티", priority: "중간", remaining: "60%" }
];

function renderTable(filter = "") {
  const container = document.getElementById("table-container");
  const filtered = data.filter(
    d => d.name.includes(filter) || d.project.includes(filter)
  );
  const rows = filtered.map(
    d => \`<tr onclick="openPanel('\${d.name}', '\${d.project}', '\${d.priority}', '\${d.remaining}')">
            <td>\${d.name}</td>
            <td>\${d.project}</td>
            <td>\${d.priority}</td>
            <td>\${d.remaining}</td>
          </tr>\`
  ).join("");
  container.innerHTML = \`
    <table>
      <thead>
        <tr>
          <th>이름</th><th>프로젝트</th><th>우선순위</th><th>잔여 리소스</th>
        </tr>
      </thead>
      <tbody>\${rows}</tbody>
    </table>
  \`;
}

function openPanel(name, project, priority, remaining) {
  const panel = document.getElementById("side-panel");
  panel.innerHTML = \`
    <h3>\${name}</h3>
    <p>프로젝트: \${project}</p>
    <p>우선순위: \${priority}</p>
    <p>잔여 리소스: \${remaining}</p>
    <button onclick="closePanel()">닫기</button>
  \`;
  panel.classList.remove("hidden");
}

function closePanel() {
  document.getElementById("side-panel").classList.add("hidden");
}

document.getElementById("search").addEventListener("input", (e) => {
  renderTable(e.target.value);
});

renderTable();
