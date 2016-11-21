const React = require('react');

const ErrorModal = React.createClass({
  getDefaultPreps: function () {
    return {
      title: 'Error'
    }
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
    const $modal = $('#error-modal');
    const modalInstance = new Foundation.Reveal($modal);
    modalInstance.open();
  },
  render: function () {
    const { message, title } = this.props;
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">Okay</button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
