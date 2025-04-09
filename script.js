const risksByLocation = {
  "sydney": ["heatwaves", "coastal flooding", "sea level rise", "storms"],
  "brisbane": ["flooding", "heatwaves", "cyclones"],
  "melbourne": ["heatwaves", "bushfire smoke", "flooding"],
  "perth": ["drought", "heatwaves", "bushfires"],
  "hobart": ["sea level rise", "seasonal shifts"],
  "adelaide": ["heatwaves", "drought", "bushfires"],
  "darwin": ["cyclones", "extreme heat", "flooding"],
  "canberra": ["bushfires", "heatwaves", "smoke pollution"],
  "gold coast": ["coastal erosion", "storms", "heatwaves"],
  "newcastle": ["sea level rise", "flooding", "storms"]
};


};

const risksByJob = {
  "farmer": ["drought", "heatwaves", "flooding"],
  "teacher": ["heatwaves", "bushfire smoke"],
  "builder": ["heat stress", "construction delays", "storm damage"],
  "nurse": ["heatwaves", "public health crises", "air quality"],
  "chef": ["heat stress", "food supply disruptions"],
  "electrician": ["blackouts", "heat stress", "storm damage"],
  "firefighter": ["bushfires", "smoke inhalation", "heatwaves"],
  "truck driver": ["flooded roads", "bushfire detours", "heat fatigue"],
  "retail worker": ["heatwaves", "supply disruptions"],
  "lifeguard": ["stronger rips", "beach closures", "heatwaves"]
};



const risksByHobby = {
  "surfing": ["sea level rise", "ocean warming", "storms"],
  "gardening": ["drought", "heatwaves", "seasonal change"],
  "camping": ["bushfires", "storms", "heatwaves"],
  "cycling": ["heatwaves", "flooded paths"],
  "fishing": ["ocean warming", "species migration", "algal blooms"],
  "bushwalking": ["bushfires", "trail closures", "heat stress"],
  "skiing": ["reduced snow", "shorter seasons", "unpredictable weather"],
  "swimming": ["water quality", "jellyfish blooms", "heatwaves"],
  "photography": ["extreme weather", "hazardous visibility"],
  "birdwatching": ["species migration", "habitat change"]
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
