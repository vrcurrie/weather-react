import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="Weather">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>Last updated:{weatherData.date}</li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <strong></strong>
                <span className="units">
                  <a href="/">{weatherData.temperature}°C</a> |
                  <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span>{weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span>{weatherData.wind}</span> m/h
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <form className="search-form">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Type a city.."
                autoFocus="on"
                autoComplete="off"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-primary">
              🔎 &nbsp; Search
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-success">
              📍 &nbsp; Current Location
            </button>
          </div>
        </form>
      </div>
      <div className="weather-forecast"></div>
      <h5>https://github.com/vrcurrie/weather-react</h5>
    </div>
  );
}
