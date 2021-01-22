/* 
** INSTALACION REACT NAVIGATION ** 
npm install @react-navigation/native

** DEPENDENCIAS **
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

** NAVEGACION TIPO STACK **
npm i @react-navigation/stack

** En Android android/app/build.gradle COLOCAR DENTRO DE dependencies **
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'

** en el App.js  como primer linea del archivo** 
import 'react-native-gesture-handler';

*/

import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Views o pantallas de mi app
import Inicio from './views/Inicio';  
import Nosotros from './views/Nosotros';  

// Defino la funcion createStackNavigator y luego la aplico dentro del NavigationContainer como <Stack.Navigator>
// cada hijo de <Stack.Navigator> va a ser una pantalla(aunque son componentes)
const Stack = createStackNavigator();

const App = () => {

  /**** PERSONALIZAR LOS HEADERS Y VOLVERLOS DINAMICOS
    ---> Para personalizar los headers y hacerlos dinamicos modifico options y lo trabajo como un callback
    en la pantalla Nosotros como estoy recibiendo un objeto desde la pantalla Inicio puedo usar esas props que tiene route
    desestructuro route y retorno como title de esa pantalla el contenido de route.params.clienteId que es igual a "5"

    ---> Para dar un mismo estilo a todas las pantallas creo un screenOptions en Stack.Navigator

    ---> Para personalizar el color utilizo headerStyle dentro de options
 ****/
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Inicio"
          screenOptions={ stylesInicio }
        >

          <Stack.Screen 
            name="Inicio" 
            component={ Inicio } 
            options={ stylesInicio }
          />

          <Stack.Screen 
            name="Nosotros" 
            component={ Nosotros } 
            options={ ({ route }) => ({
              title: route.params.clienteId
            }) }
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const stylesInicio = {
    headerStyle: { backgroundColor: '#F4511E' },
    headerTintColor: '#FFF',
    headerTitleAlign: 'center',
}

export default App;
