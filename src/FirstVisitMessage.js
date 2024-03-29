import React from 'react';
import PropTypes from 'prop-types';

class FirstVisitMessage extends React.Component {
  render() {
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="firstpopup" style={modalStyle}>
          {this.props.children}
          <div className="footer">
          <div> 
            <button onClick={this.props.onClose}>
              Close message 
            </button>
         </div>
          </div>
        </div>
      </div>
    );
  }
}

FirstVisitMessage.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default FirstVisitMessage;