import React, { Component } from 'react';
import PropTypes from 'prop-types';

  class Nombre extends Component {
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
                <td>Nombre(s)</td>
              </tr>
              <tr>
                <td>Apellido Paterno </td>
               
              </tr>
              <tr>
                <td>Apellido Materno</td>
               
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  Nombre.propTypes = {
    steps: PropTypes.object,
  };
  
  Nombre.defaultProps = {
    steps: undefined,
  };
    
  export default Nombre;