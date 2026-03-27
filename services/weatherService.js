// Using built-in fetch (Node 18+)

/**
 * Fetches current weather for a city using wttr.in (Keyless)
 * Format: https://wttr.in/Nellore?format=j1
 */
const getCurrentWeather = async (city) => {
  try {
    if (!city) return null;

    const response = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);
    const data = await response.json();

    const current = data.current_condition[0];
    const nearestArea = data.nearest_area[0];

    return {
      temp: current.temp_C,
      condition: current.weatherDesc[0].value,
      humidity: current.humidity,
      wind: current.windspeedKmph,
      city: city,
      isRainy: current.weatherDesc[0].value.toLowerCase().includes('rain') || 
               current.weatherDesc[0].value.toLowerCase().includes('drizzle')
    };
  } catch (error) {
    console.error('Weather Service Error:', error.message);
    return null;
  }
};

module.exports = { getCurrentWeather };
