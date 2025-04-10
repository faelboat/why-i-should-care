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

  const output = `${ageFraming} As a ${job} living in ${capitalize(location)}, you may face ${jobImpact}, with ${locationImpact}, and ${hobbyImpact}.${heatNote ? " " + heatNote : ""}${seaLevelNote}`;

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
  if (!projection) return null;

  const currentYear = new Date().getFullYear();
  const targetYear = currentYear + (60 - age);

  if (targetYear >= 2040 && targetYear <= 2059) {
    const increase = projection.projected - projection.current;
    return ` By the time you're 60 (in ${targetYear}), ${capitalize(location)} is projected to have around ${projection.projected} days over 40°C each year — an increase of ${increase} extreme heat days annually.`;
