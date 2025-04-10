document.getElementById("riskForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const age = parseInt(document.getElementById("age").value);
  const location = document.getElementById("location").value.toLowerCase();
  const job = document.getElementById("job").value.toLowerCase();
  const hobby = document.getElementById("hobby").value.toLowerCase();

function getAgeFraming(age) {
  if (age < 18) {
    return "As a young person, you’ll live through the most significant changes this century.";
  } else if (age < 40) {
    return "You’ll experience growing impacts through your working life and beyond.";
  } else if (age < 65) {
    return "You’ll see more frequent disruptions in coming decades, especially in your home and work life.";
  } else {
    return "Even if you won’t face the full effects yourself, climate change will deeply affect younger generations, including your family and community.";
  }
}
  
  const locationRisks = {
    "sydney": "more frequent flash floods and heatwaves affecting your home life",
    "brisbane": "higher chances of cyclones and flooding near your home",
    "melbourne": "unpredictable weather and hotter summers affecting daily life",
    "perth": "drought conditions and rising bushfire risks in your area",
    "hobart": "warmer temperatures and increased bushfire threats",
    "adelaide": "more intense heatwaves and reduced water availability",
    "darwin": "more extreme tropical storms and flooding risks",
    "canberra": "hotter, drier seasons with a higher bushfire danger",
    "gold coast": "coastal erosion and stronger storms threatening property",
    "newcastle": "higher risks of storm surges and heat extremes"
  };

const jobRisks = {
  "farmer": "increasing droughts and unpredictable seasons will challenge your crop and livestock yields, putting pressure on income and planning",
  "teacher": "extreme heat or floods may disrupt school operations, increasing teaching pressures and interrupting students’ learning",
  "builder": "extreme heat and storms will reduce safe workdays and increase demand for costly repairs, making your schedule more unpredictable",
  "nurse": "more frequent health emergencies during extreme weather will strain hospital systems and increase pressure on healthcare workers",
  "chef": "supply chain disruptions and rising food costs from extreme weather may limit ingredient availability and affect business operations",
  "electrician": "storm damage and heatwaves may increase infrastructure failures, leading to more emergency callouts and complex, urgent work",
  "firefighter": "longer bushfire seasons and more intense fires will demand more frequent, high-risk deployments, increasing physical and emotional stress",
  "truck driver": "flooded roads and damaged highways will delay deliveries and force route changes, disrupting your schedule and earnings",
  "retail worker": "supply shortages and extreme weather events may disrupt store operations, creating stressful work environments and irregular hours",
  "lifeguard": "rising temperatures and beach erosion may reduce safe beach days, changing patrol routines and increasing safety risks",
  "office worker": "extreme heat and power outages may disrupt indoor workspaces, while climate-related events can affect commuting, operations, and employee wellbeing"
};


  const hobbyRisks = {
    "surfing": "coastal erosion and unstable conditions may make surfing harder to enjoy",
    "gardening": "heat and water restrictions will make it harder to keep your garden healthy",
    "camping": "bushfires and heatwaves will limit safe camping trips",
    "cycling": "extreme heat and poor air quality may make cycling less safe",
    "fishing": "warmer waters and species migration will affect fish availability",
    "bushwalking": "fire bans and heat will reduce days suitable for walking",
    "skiing": "shorter snow seasons will limit ski days in the Alps",
    "swimming": "heatwaves may make outdoor pools unsafe or beaches unsafe to swim",
    "photography": "natural places may change rapidly due to fire, drought, or floods",
    "birdwatching": "species migration and habitat loss may reduce bird diversity in your area"
  };

  const jobImpact = jobRisks[job] || "your job may be affected by extreme weather patterns";
  const locationImpact = locationRisks[location] || "your area may experience more extreme weather";
  const hobbyImpact = hobbyRisks[hobby] || "your hobby may be harder to enjoy in changing conditions";

 const ageFraming = getAgeFraming(age);
const output = `${ageFraming} As a ${job} living in ${capitalize(location)}, you may face ${jobImpact}, with ${locationImpact}, and ${hobbyImpact}.`;

  document.getElementById("output").textContent = output;
  document.getElementById("resultCard").classList.remove("hidden");
});

// Helper to capitalize location names
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
