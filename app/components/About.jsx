const React = require('react');

const About = () => (
  <div>
    <h1 className="text-center">About</h1>
    <p>This is the weather application build on React.
      I have build this for The Complete React Web App Developer Course</p>
    <p>Here are some of the tools I used:</p>
    <ul>
      <li>
        <a href="https://facebook.github.io/react" target="_blank">React</a> - This was the JavaScript framework used.
      </li>
      <li>
        <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
      </li>
    </ul>
  </div>
);

module.exports = About;
