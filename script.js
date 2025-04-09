document.getElementById("riskForm").addEventListener("submit", function (event) {
  event.preventDefault();
  // Your existing code to handle form data and display results

  const location = document.getElementById("location").value.toLowerCase();
  const job = document.getElementById("job").value.toLowerCase();
  const hobby = document.getElementById("hobby").value.toLowerCase();

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
    "farmer": "increased droughts and unpredictable seasons will affect crop and livestock health",
    "teacher": "school closures from extreme heat or floods may disrupt your work",
    "builder": "extreme heat will limit safe workdays and increase storm damage repairs",
    "nurse": "more frequent health emergencies during heatwaves will strain your workdays",
    "chef": "supply chain disruptions from extreme weather may affect food availability",
    "electrician": "damaged infrastructure and extreme weather will impact your job more often",
    "firefighter": "bushfires will become more frequent and dangerous to manage",
    "truck driver": "flooded roads and heat-damaged highways may delay or disrupt your work",
    "retail worker": "supply shortages and disruptions could affect store operations",
    "lifeguard": "rising temperatures and beach erosion may reduce safe beach days"
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

  // Build the response sentence
  const jobImpact = jobRisks[job] || "your job may be affected by extreme weather patterns"};
  const locationImpact = locationRisks[location] || "your area may experience more extreme weather"};
  const hobbyImpact = hobbyRisks[hobby] || "your hobby may be harder to enjoy in changing conditions"};

  const output = `As a ${job} living in ${capitalize(location)}, you may face ${jobImpact}, with ${locationImpact}, and ${hobbyImpact}.`};

  document.getElementById("output").textContent = output;
  document.getElementById("resultCard").classList.remove("hidden");
};

// Helper to capitalize location names
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
