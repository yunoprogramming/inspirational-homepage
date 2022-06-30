const API_URL = `https://api.unsplash.com/search/photos?query=nature&page=1&per_page=5&client_id=${`wSrwy4npOnAyfmxHwH42ua5KPyo2TrNk18Dw0vBFFME`}`;

export const getImage = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();

  return json.results.map((result) => result.urls.full);
};

const unsplashApi = {
  getImage
};

export default unsplashApi;
