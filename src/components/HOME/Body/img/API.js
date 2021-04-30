function App() {
    return (
      <div>
        <button onClick={() => getTempFromOpenWeather()}>
          Get the current temperature.
        </button>
      </div>
    );
  }
  // Method to call the OpenWeather API to fetch the current weather data.
  function getTempFromOpenWeather() {
    // The API Url - address of the 3rd party server and the particular service that we are requesting
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Auckland&appid=1d2bfc8b390e7da163843e07f08dc678`;
  




// function getTempFromOpenWeather() {
//   // The API Url - address of the 3rd party server and the particular service that we are requesting
//   const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Auckland&appid=1d2bfc8b390e7da163843e07f08dc678`;
//   // fetch - method provided by the browser to call API
//   // API call
//   fetch(apiURL)
//     .then((response) => response.json())
//     .then((responseData) => {
//       window.alert('Current Temperature: ' + responseData.main.temp / 10);
//       console.log('Current Temperature', responseData.main.temp / 10);
//     });
// }
// export default App;