import { View, StyleSheet, Modal, Pressable, Text } from "react-native"
import React from "react"



const CustomModal = ({ isModalVisible, setIsModalVisible, clearList }) => {

    return (
        <View>
            <Modal visible={isModalVisible}>
                <Text style={styles.containerPrincipal}>
                    Desea Eliminar la lista
                </Text>
                <Pressable onPress={() => clearList()}>
                    <View style={styles.ContainEleccion}>
                        <View style={styles.ContainOpciones}>
                            <button style={styles.textEleccion}>
                                Si
                            </button>
                        </View>
                        <View>
                            <button style={styles.textEleccion1}>
                                NO
                            </button>
                        </View>

                    </View>

                </Pressable>
                <Pressable onPress={() => setIsModalVisible(false)}>

                </Pressable>
            </Modal>
        </View>

    )
}
export default CustomModal

const styles = StyleSheet.create({

    containerPrincipal: {
        
        
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center' ,
        fontSize: 40,
        textAlign: 'center',
        margin: 40

    },
    ContainEleccion: {
        
       
        flexDirection: 'row',
        gap: 20,
        fontSize: 40,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center' ,
        margin: 40
        
   
        
    },
    textEleccion: {
        width:100,
        fontSize:40,
        justifyContent: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#68b2f8',
        borderRadius: 16
    },
    textEleccion1: {
        width: 100,
        fontSize: 40,
        justifyContent: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#e15e32',
        borderRadius: 16
        
    },
    ContainOpciones: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }


})


