const risksByLocation = {
  "sydney": ["heatwaves", "coastal flooding", "sea level rise", "storms"],
  "brisbane": ["flooding", "heatwaves", "cyclones"],
  "melbourne": ["heatwaves", "bushfire smoke", "flooding"],
  "perth": ["drought", "heatwaves", "bushfires"],
  "hobart": ["sea level rise", "seasonal shifts"]
};

};

const risksByJob = {
  "farmer": ["drought", "heatwaves", "flooding"],
  "teacher": ["heatwaves", "bushfire smoke"],
  "builder": ["heat stress", "construction delays", "storm damage"],
  "nurse": ["heatwaves", "public health crises", "air quality"],
  "chef": ["heat stress", "food supply disruptions"]
};

const risksByHobby = {
  "surfing": ["sea level rise", "ocean warming", "storms"],
  "gardening": ["drought", "heatwaves", "seasonal change"],
  "camping": ["bushfires", "storms", "heatwaves"],
  "cycling": ["heatwaves", "flooded paths"],
  "fishing": ["ocean warming", "species migration", "algal blooms"]
};

document.getElementById("riskForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Convert user input to lowercase
  const loc = document.getElementById("location").value.trim().toLowerCase();
  const job = document.getElementById("job").value.trim().toLowerCase();
  const hobby = document.getElementById("hobby").value.trim().toLowerCase();

  const locRisks = risksByLocation[loc] || [];
  const jobRisks = risksByJob[job] || [];
  const hobbyRisks = risksByHobby[hobby] || [];

  const allRisks = [...new Set([...locRisks, ...jobRisks, ...hobbyRisks])];

  const output = `
    <h2>Your Climate Risk Summary</h2>
    <p><strong>Location:</strong> ${loc}</p>
    <p><strong>Job:</strong> ${job}</p>
    <p
