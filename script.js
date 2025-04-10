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

  // Real RCP8.5 projection data (mid-century)
  const heatDaysProjection = {
    "perth": { current: 28, projected: 63 },
    "adelaide": { current: 20, projected: 45 },
    "sydney": { current: 3, projected: 5 },
    "melbourne": { current: 1, projected: 4 },
    "brisbane": { current: 0, projected: 2 }
    // You can add more cities as needed
  };

  function getFutureHeatDays(location, currentAge) {
    const currentYear = new Date().getFullYear();
    const targetYear = currentYear + (60 - currentAge);

    if (targetYear >= 2040 && targetYear <= 2059) {
      const projection = heatDaysProjection[location];
      if (projection) {
        const increase = projection.projected - projection.current;
        return `By the time you're 60 (in ${targetYear}), ${capitalize(location)} is projected to have around ${projection.projected} days over 40°C each year — an increase of ${increase} extreme heat days annually.`;
      }
    }
    return null;
  }

  const locationRisks = {
    "sydney": "more frequent flash floods and heatwaves affecting your home life",
    "brisbane": "higher chances of cyclones and flooding near your home",
    "melbourne": "unpredictable weather and hotter summers affecting daily life",
    "perth": "drought conditions and rising bushfire risks in your area",
    "hobart": "warmer temperatures and increased bushfire threats",
    "ad
