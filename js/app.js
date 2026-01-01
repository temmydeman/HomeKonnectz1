const list = document.getElementById("propertyList");

properties.forEach(p => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${p.image}">
    <div class="content">
      <h3>${p.title}</h3>
      <p>${p.price}</p>
      <p>${p.state} State</p>
      <button onclick="viewProperty(${p.id})">View Details</button>
    </div>
  `;
  list.appendChild(div);
});

function viewProperty(id) {
  localStorage.setItem("propertyId", id);
  window.location.href = "property.html";
}
