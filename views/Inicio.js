// Tengo acceso a los props de react navigation en donde puedo señalar las pantallas que deseo renderizar 

import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Inicio = ({ navigation }) => {

    // Para pasar parametros de una pagina a otra lo envio como objeto en las props de navigation
    // Para extraerlos lo hago de props.route.params
    const informacion = {
        clienteId: 5,
        precio: 500
    }

    // Permite navegar al screen Nosotros usando las props de navigation
    const visitarNosotros = () => {
        navigation.navigate( 'Nosotros', informacion );
    }

    return (
        <>
            <View style={ styles.container }>

                <Text>Inicio</Text>

                <Button 
                    title="Ir a Nosotros"
                    onPress={ visitarNosotros }
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }

});

export default Inicio;
