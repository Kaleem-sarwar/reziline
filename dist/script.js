// const apiKey = "TIt6LtAFcseGAOC6eZRMKGhNMdGnRoIM";
// const url =
//   "http://dataservice.accuweather.com/currentconditions/v1/13190?apikey=" +
//   apiKey +
//   "&language=en&details=true";

// fetch(url)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // Assuming data[0] contains the weather information
//     console.log(data);
//     const weatherInfo = `
//       <h2>Weather Details:</h2>
//       <p>Temperature: ${data[0].Temperature.Metric.Value}°${data[0].Temperature.Metric.Unit}</p>
//       <p>Weather: ${data[0].WeatherText}</p>
//       <p>Wind: ${data[0].Wind.Speed.Metric.Value} ${data[0].Wind.Speed.Metric.Unit}</p>
//     `;
//     document.body.innerHTML = weatherInfo;
//   })
//   .catch((error) =>
//     console.error("There was an error fetching the data:", error)
//   );
// const temp = document.getElementById("temp");
// const url = fetch(
//   "http://dataservice.accuweather.com/currentconditions/v1/13190?apikey=TIt6LtAFcseGAOC6eZRMKGhNMdGnRoIM&language=en&details=true"
// );
// url
//   .then((respose) => {
//     const res = respose.json();
//     console.log(res);
//     // console.log(res.Temperature.);
//   })
//   .catch(() => console.log("404"));
const tog = document.getElementById("toggle-btn");
const myclass = document.getElementById("myClass");
tog.addEventListener("click", () => {
  console.log("Button was clicked");
  tog.classList.remove("myclass");
});
