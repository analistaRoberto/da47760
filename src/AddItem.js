import {StyleSheet, text, View, Pressable, TextInput, Text
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

const AddItem = ({text, setText, addItem } ) => {
    return (
       <View style={styles.containProduct}>
        <TextInput
          placeholder='Ingrese su Producto'
          style={styles.TextInput}
          value={text}
          onChangeText={(value) => setText(value)} 
        />
        <Pressable style={styles.button} onPress={() => addItem()}>
          <AntDesign name="pluscircleo" size={40} color="black" />
        </Pressable>
      </View>
        
    )
}
export default AddItem

const styles = StyleSheet.create({
    containProduct: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        
      },
    containRecivedProduct: {
        width: 310,
        fontSize: 24,
        
      },
      TextInput: {
        width: 250,
        height: 50,
        backgroundColor: '#0d1b9b4a',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        fontSize: 16,
        padding: 15,
        color: '#FFFFFF',
        marginRight: 20, 
    
    
      },
});