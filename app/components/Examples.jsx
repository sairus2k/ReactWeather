const React = require('react');
const { Link } = require('react-router');

const Examples = () => (
  <div>
    <h1 className="text-center">Examples</h1>
    <p>Here are a few example locations to try out:</p>
    <ol>
      <li>
        <Link to="/?location=Abakan">Abakan</Link>
      </li>
      <li>
        <Link to="/?location=Krasnoyarsk">Krasnoyarsk</Link>
      </li>
    </ol>
  </div>
);

module.exports = Examples;
