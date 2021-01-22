import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const Nosotros = ({ navigation, route }) => {

    // Desestructuro los param de route
    const { clienteId, precio } = route.params;

    // Redirige al screen Inicio
    const volver = () => {
        navigation.navigate('Inicio');
        // navigation.goBack();
        // navigation.push('Inicio');
    }

    return (
        <>
            <View style={ styles.container }>
                <Text>Recibiendo parametros desde Inicio</Text>
                <Text> Id Cliente: { clienteId }</Text>
                <Text>Precio Producto: { precio }</Text>

                <Button
                        title="Volver"
                        onPress={ volver }
                    />
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Nosotros;
