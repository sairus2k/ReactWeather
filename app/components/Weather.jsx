const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('../api/openWeatherMap');

const Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    this.setState({ isLoading: true });
    openWeatherMap.getTemp(location)
      .then(temp => {
        this.setState({
          isLoading: false,
          location,
          temp
        });
      })
      .catch(errorMessage => {
        this.setState({ isLoading: false });
        console.log(errorMessage);
      });
  },
  render: function () {
    const { location, temp, isLoading } = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
