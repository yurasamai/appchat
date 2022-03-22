import React, { Component } from 'react';
import PropTypes from 'prop-types';

  class Date extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    
      componentWillMount() {
        const { steps } = this.props;
      }
    
      render() {
      return (
        <div style={{ width: '100%', color:'black' }}>
          <table>
            <tbody>
              <tr>
                <td>Dia</td>
              </tr>
              <tr>
                <td>Mes </td>
               
              </tr>
              <tr>
                <td>Año</td>
               
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  Date.propTypes = {
    steps: PropTypes.object,
  };
  
  Date.defaultProps = {
    steps: undefined,
  };
   
  export default Date;