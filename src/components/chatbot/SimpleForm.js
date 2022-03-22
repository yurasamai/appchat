import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Review from '../review/Review';
import Nombre from '../nombre/Nombre';
import Date from '../date/Date';


const theme = {
    background: '#f5f8fb',
    fontFamily: 'monospace',
    headerBgColor: '#F5395C',
    headerFontColor: '#FFD7D7',
    headerFontSize: '20px',
    botBubbleColor: '#CA4A73',
    botFontColor: '#fff',
    userBubbleColor: '#F9AEBC',
    userFontColor: '#4a4a4a',
    placeholder: 'Escribe algo'
    
  };


class SimpleForm extends Component {
  render() {
    return (
      <div>
           <ThemeProvider theme={theme}>
          <ChatBot placeholder="Escribe tus respuestas" headerTitle="Formulario " width="450px"
         steps={[
            {
              id: '1',
              message: 'Cual es tu nombre completo?',
              trigger: 'nombre',
            },
            {
                id: 'nombre',
                component: <Nombre/>,
                asMessage: true,
                trigger: 'name',
              },  
            {
              id: 'name',
              user: true,
              trigger: '3',
              validator: (value) => {
                if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value))
                  {
                    return true;
                  }
                else
                  {
                    return'Porfavor ingresa un email valido';
                  }
             },
            
              
            },
            {
              id: '3',
              message: 'Hola {previousValue}! Cual es tu fecha de nacimiento?',
              trigger: 'fecha',
            },
            {
                id: 'fecha',
                component: <Date/>,
                asMessage: true,
                trigger: 'date',
              },  
            {
                id: 'date',
              user: true,
              trigger: '5',
            },
            {
              id: '5',
              message: 'Cuál es tu e-mail?',
              trigger: 'email',
            },
            {

                id:'email',
                user: true,
                trigger: '7',
                validator: (value) => {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
                      {
                        return true;
                      }
                    else
                      {
                        return'Porfavor ingresa un email valido.';
                      }
                 },
            },
            {
                id: '7',
                message: 'Cuál es tu telefono celular?',
                trigger: 'number',
              },
            {
              id: 'number',
              user: true,
              trigger: '9',
              validator: (value) => {
                if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value))
                  {
                    return true;
                  }
                else
                  {
                    return'Please enter a valid phone number.';
                  }
             },
            },
            {
              id: '9',
              message: 'Los datos han sido capturados',
              trigger: 'boton',
            },

            {
              id: 'boton',
              options: [
                { value: 'mos', label: 'Iniciar', trigger: 'review' },
                
              ],
            },
            {
                id: 'review',
                component: <Review />,
                asMessage: true,
                trigger: 'fin',
              },      
            {
              id: 'fin',
              message: 'Vuelve pronto',
              end: true,
            },
          ]}
          />
          </ThemeProvider>

      </div>
    );
  }
       
}

export default SimpleForm;