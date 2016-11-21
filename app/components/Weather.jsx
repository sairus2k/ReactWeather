const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('../api/openWeatherMap');
const ErrorModal = require('ErrorModal');

const Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      errorMessage: ''
    }
  },
  handleSearch: function (location) {
    this.setState({
      isLoading: true
    });
    openWeatherMap.getTemp(location)
      .then(temp => {
        this.setState({
          isLoading: false,
          location,
          temp
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          errorMessage: 'The city not found'
        });
      });
  },
  render: function () {
    const { location, temp, isLoading, errorMessage } = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }
    
    function renderError() {
      if (errorMessage.length > 0) {
        return <ErrorModal message={errorMessage}/>
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
