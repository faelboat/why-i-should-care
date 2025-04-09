const risksByLocation = {
  "Sydney": ["heatwaves", "coastal flooding", "sea level rise", "storms"],
  "Brisbane": ["flooding", "heatwaves", "cyclones"],
  "Adelaide": ["heatwaves", "drought", "bushfires"]
};

const risksByJob = {
  "Farmer": ["drought", "heatwaves", "flooding"],
  "Teacher": ["heatwaves", "bushfire smoke", "flooding"]
};

const risksByHobby = {
  "Surfing": ["sea level rise", "ocean warming", "storms"],
  "Gardening": ["drought", "heatwaves", "seasonal change"]
};

document.getElementById("riskForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const loc = document.getElementById("location").value.trim();
  const job = document.getElementById("job").value.trim();
  const hobby = document.getElementById("hobby").value.trim();

  const locRisks = risksByLocation[loc] || [];
  const jobRisks = risksByJob[job] || [];
  const hobbyRisks = risksByHobby[hobby] || [];

  const allRisks = [...new Set([...locRisks, ...jobRisks, ...hobbyRisks])];

  const output = `
    <h2>Your Climate Risk Summary</h2>
    <p><strong>Location:</strong> ${loc}</p>
    <p><strong>Job:</strong> ${job}</p>
    <p><strong>Hobby:</strong> ${hobby}</p>
    <p><strong>Potential Climate Risks:</strong> ${allRisks.join(", ") || "No known risks found for this combination."}</p>
  `;

  document.getElementById("results").innerHTML = output;
});
