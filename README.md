# React Native Navigation

**Implementación de React Navigation a un proyecto**

- En este proyecto se agrega una fuente personalizada para mejorar su diseño
- Para realizar la cotizacion consume la API de [CriptoCompare](https://min-api.cryptocompare.com/)

### Dependencias
- Se utilizan las siguientes dependecias:
    - React Native Picker

### Implementacion

1. Instalar react-navigation/native
``npm install @react-navigation/native``

2. Instalar todas las dependencias
``npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view``

3. Instalar navegación de tipo Stack
``npm i @react-navigation/stack``

4. Por ultimo dependiendo si desarrollas para android, ios o ambos: 

**Si desarrollas una app para iOS**
- DESDE LA CONSOLA ``cd ios/``
- LUEGO ``pod install`` para instalar correctamente las dependencias

**Si desarrollas en Android ve a la ruta android/app/build.gradle**
- Agregar debajo de los implementation, las siguientes lineas:
*implementation 'androidx.appcompat:appcompat:1.1.0-rc01'*
*implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'*

5. Para finalizar en el archivo App.js agregar la siguiente dependencia al inicio del todo el código
- import 'react-native-gesture-handler';



Recuerda para ejecutar esta apliacion debes:
1. utilizar ```npm install``` para instalar todas las dependencias
2. Luego ```npx react-native run-android``` o ```npx react-native run-ios``` para lanzar la aplicacion, según el dispositivo o emulador que utilices
