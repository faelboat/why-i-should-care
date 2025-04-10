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
  const heatWarning = getFutureHeatDays(location, age) || "";
  const seaLevelNote = getSeaLevelNote(location, age);

  const output = `${ageFraming} As a ${job} living in ${capitalize(location)}, you may face ${jobImpact}, with ${locationImpact}, and ${hobbyImpact}.${heatWarning ? " " + heatWarning : ""}${seaLevelNote}`;

  document.getElementById("output").textContent = output;
  document.getElementById("resultCard").classList.remove("hidden");

  updateReferences(heatWarning, seaLevelNote);
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
  if (!projection) return null;

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
  if (riseBy2100 === undefined) return "";

  const currentYear = new Date().getFullYear();
  const targetYear = currentYear + (60 - age);
  const proportion = Math.min((targetYear - currentYear) / (2100 - currentYear), 1);
  const estimatedRise = (riseBy2100 * proportion).toFixed(2);

  return riseBy2100 > 0 ? ` By the time you are 60, sea levels near ${capitalize(location)} are projected to rise by around ${estimatedRise} metres.` : "";
}

function updateReferences(heatWarning, seaLevelNote) {
  const referenceList = document.getElementById("referenceList");
  referenceList.innerHTML = "";

  const references = [];

  if (heatWarning) {
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

// Static impact data
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
  "nurse": "more frequent health emergencies during extreme weather will strain hospital systems and increase pressure on"
};

const hobbyRisks = {
  "surfing": "sea level rise and stronger storms may make conditions less safe and beaches more eroded",
  "gardening": "extreme heat, water restrictions, and unpredictable weather could make gardening more difficult",
  "camping": "higher bushfire risk and extreme heat can make outdoor trips more dangerous or limited",
  "cycling": "more hot days and poor air quality may make long rides uncomfortable or unsafe",
  "fishing": "warming oceans and ecosystem shifts could reduce fish stocks and change where you can fish",
  "bushwalking": "greater fire danger, heatwaves, and track closures could limit access to nature",
  "skiing": "warmer winters and less snowfall will reduce ski season length and snow reliability",
  "swimming": "more extreme heat may increase pool closures, and ocean swimming could be affected by water quality and jellyfish",
  "photography": "changing environments and harsher light conditions may affect outdoor photography opportunities",
  "birdwatching": "species migration and habitat loss could reduce bird diversity in familiar areas"
};

  });
