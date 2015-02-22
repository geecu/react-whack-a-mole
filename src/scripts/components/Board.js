'use strict';

var React = require('react/addons');

require('../../styles/Board.less');

var Slot = require('./Slot');

var Board = React.createClass({
  propTypes: {
    onMoleClicked: React.PropTypes.func.isRequired,
    slots: React.PropTypes.array.isRequired
  },
  render() {
      var board = this.props.slots.map(function (slot) {
        return (
          <Slot onMoleClicked={this.props.onMoleClicked} hasMole={slot.hasMole} />
        );
      }.bind(this));
    return (
        <div className="Board">
          <p>Content for Board</p>
         {board}
        </div>
      );
  }
});

module.exports = Board;

