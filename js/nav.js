import React from 'react';

var Nav = React.createClass({
  render() {
    return (
      <div>
        <ul>
          <a onClick={() => history.push('page1') }>Page 1</a>
          <a onClick={() => history.push('page2') }>Page 2</a>
        </ul>
      </div>
    )
  }
});

export default Nav