import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Review extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: '',
        date: '',
        email: '',
        number: '',
      };
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const { name,date, email,number} = steps;
  
      this.setState({ name,date, email,number});
    }
  
    render() {
      const { name, date, email,number } = this.state;
      return (
        <div style={{ width: '100%'
         }}>
          <h3>Datos capturados</h3>
          <table >
            <tbody>
              <tr>
                <td>Nombre completo:</td>
                <td>{name.value}</td>
              </tr>
              <tr>
                <td>Fecha de nacimiento: </td>
                <td>{date.value}</td>
              </tr>
              <tr>
                <td>e-mail</td>
                <td>{email.value}</td>
              </tr>
              <tr>
                <td>Telefono:</td>
                <td>{number.value}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  Review.propTypes = {
    steps: PropTypes.object,
  };
  
  Review.defaultProps = {
    steps: undefined,
  };
  
  export default Review;