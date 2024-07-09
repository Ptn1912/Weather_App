const API_KEY = '953595698e236b00ac6d628981d9312b';
export const fetchWeather = async (cityName: string) => {
  if (cityName.trim() === '') {
    throw new Error('Please enter a city');
  }
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error('Something went wrong. Please try again later.');
  }
};