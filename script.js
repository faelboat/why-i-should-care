document.addEventListener("DOMContentLoaded", function () {
document.getElementById("riskForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const age = parseInt(document.getElementById("age").value);
  const location = document.getElementById("location").value.toLowerCase();
  const job = document.getElementById("job").value.toLowerCase();
  const hobby = document.getElementById("hobby").value.toLowerCase();

  const ageFraming = getAgeFraming(age);
  const jobImpact = jobRisks[job] || "your job may be affected by extreme weather patterns";
  const locationImpact = locationRisks[location] || "your area may experience more extreme weather";
  const hobbyImpact = hobbyRisks[hobby] || "your hobby may be harder to enjoy in changing conditions";
  const heatNote = getFutureHeatDays(location, age) || "";
  const seaLevelNote = getSeaLevelNote(location, age);

  const output = `${ageFraming} As a ${job} living in ${capitalize(location)}, you may face ${jobImpact}, with ${locationImpact}, and ${hobbyImpact}.${heatNote ? " " + heatNote : ""}${seaLevelNote ? " " + seaLevelNote : ""}`;

  document.getElementById("output").textContent = output;
  document.getElementById("resultCard").classList.remove("hidden");

  updateReferences(heatNote, seaLevelNote);
});

function getAgeFraming(age) {
  if (age < 18) return "As a young person, you’ll live through the most significant changes this century.";
  if (age < 40) return "You’ll experience growing impacts through your working life and beyond.";
  if (age < 65) return "You’ll see more frequent disruptions in coming decades, especially in your home and work life.";
  return "Even if you won’t face the full effects yourself, climate change will deeply affect younger generations, including your family and community.";
}

function getFutureHeatDays(location, age) {
  const heatDaysProjection = {
    "perth": { current: 28, projected: 63 },
    "adelaide": { current: 20, projected: 45 },
    "sydney": { current: 3, projected: 5 },
    "melbourne": { current: 1, projected: 4 },
    "brisbane": { current: 0, projected: 2 }
  };

  const projection = heatDaysProjection[location];
  if (!projection || age >= 60) return null;

  const currentYear = new Date().getFullYear();
  const targetYear = currentYear + (60 - age);

  if (targetYear >= 2040 && targetYear <= 2059) {
    const increase = projection.projected - projection.current;
    return ` By the time you're 60 (in ${targetYear}), ${capitalize(location)} is projected to have around ${projection.projected} days over 40°C each year — an increase of ${increase} extreme heat days annually.`;
  }
  return null;
}

function getSeaLevelNote(location, age) {
  const seaLevelData = {
    "sydney": 0.65,
    "brisbane": 0.70,
    "melbourne": 0.63,
    "perth": 0.58,
    "hobart": 0.61,
    "adelaide": 0.60,
    "darwin": 0.70,
    "gold coast": 0.75,
    "newcastle": 0.65,
    "canberra": 0.0
  };

  const riseBy2100 = seaLevelData[location];
  if (riseBy2100 === undefined || age >= 60) return "";

  const currentYear = new Date().getFullYear();
  const targetYear = currentYear + (60 - age);
  const proportion = Math.min((targetYear - currentYear) / (2100 - currentYear), 1);
  const estimatedRise = (riseBy2100 * proportion).toFixed(2);

  return riseBy2100 > 0 ? ` By the time you are 60, sea levels near ${capitalize(location)} are projected to rise by around ${estimatedRise} metres.` : "";
}

function updateReferences(heatNote, seaLevelNote) {
  const referenceList = document.getElementById("referenceList");
  referenceList.innerHTML = "";

  const references = [];

  if (heatNote) {
    references.push({
      text: "Heat data based on RCP 8.5 projections from the Australian Climate Data Explorer.",
      url: "https://climatechangeinaustralia.gov.au"
    });
  }

  if (seaLevelNote) {
    references.push({
      text: "Sea level rise data based on RCP 8.5 projections from the CSIRO State of the Climate 2022.",
      url: "https://www.csiro.au/en/research/environmental-impacts/climate-change/state-of-the-climate"
    });
  }

  references.forEach(ref => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = ref.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = ref.text;
    li.appendChild(link);
    referenceList.appendChild(li);
  });

  if (references.length > 0) {
    document.getElementById("dataReferences").classList.remove("hidden");
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Replace with your full lists:
const locationRisks = {
  "perth": "more days of extreme heat, bushfire risks, and water stress",
  "sydney": "higher heat and humidity, coastal flooding, and air quality challenges",
  "melbourne": "longer heatwaves, reduced rainfall, and infrastructure strain",
  "brisbane": "tropical storms, floods, and more extremely hot days",
  "adelaide": "higher fire danger and heat-related health risks",
  "hobart": "less snow in highlands and increasing heat stress",
  "darwin": "extreme heat and humidity affecting daily life and health",
  "canberra": "bushfires, smoke events, and hotter summers",
  "gold coast": "coastal erosion, flooding, and summer heat stress",
  "newcastle": "sea level rise, erosion, and flood-prone infrastructure"
};

const jobRisks = {
  "farmer": "reduced crop yields and increased drought-related losses",
  "teacher": "disruptions from heatwaves, floods, and bushfires impacting school operations",
  "construction worker": "unsafe workdays due to extreme heat and poor air quality",
  "nurse": "increased demand during heatwaves and extreme weather health crises",
  "firefighter": "higher frequency of extreme fire events, with growing risks to safety",
  "bartender": "unpredictable trade during heatwaves or storm-related disruptions",
  "scientist": "research interruptions or changing focus toward climate adaptation",
  "tour guide": "reduced visitor access during extreme weather and natural disasters",
  "electrician": "more emergency callouts and heat-related safety concerns",
  "student": "hotter classrooms, disruptions, and increasing pressure to adapt to a changing future"
};

const hobbyRisks = {
  "surfing": "less reliable surf conditions and more beach erosion",
  "gardening": "water restrictions and extreme heat affecting plant health",
  "camping": "more bushfire warnings and unsafe camping conditions",
  "cycling": "hotter days and air quality issues making outdoor activity harder",
  "fishing": "warming waters and stressed fish populations",
  "bushwalking": "trail closures during fire season and storm damage",
  "skiing": "shorter snow seasons and reduced snow cover",
  "swimming": "more jellyfish, algae blooms, and beach closures",
  "photography": "extreme conditions limiting outdoor opportunities and damaging gear",
  "birdwatching": "changing migration patterns and species stress from habitat loss"
};
});
