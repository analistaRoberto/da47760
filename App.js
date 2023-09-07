import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text, View, Pressable, Modal, FlatList, CheckBox,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import AddItem from './src/AddItem';
import ListItem from './src/ListItem';
import CustomModal from './src/CustomModal';


export default function App() {

  const [isSelected, setSelection] = useState(false);
  const initialState = [
  ]


  const [text, setText] = useState("");
  const [list, setList] = useState(initialState);

  const [isModalVisible, setIsModalVisible] = useState(false)

  const addItem = () => {
    list.push(
      {
        id: Math.random(),
        text: text,
      });
    setList(list); 
    setText("");
  };

  const clearList = () => {
   setList([]);
   setIsModalVisible(false)

  }

  return (
    <View style={styles.containerPrincipal}>

      <View style={styles.containerTitle}>
        <Entypo name="shopping-cart" size={40} color="black" />
        <Text >
          <h1 style={styles.containerTitlePrincpal}>
            Lista de Compras
          </h1>
          
        </Text>
      </View>
      <View style={styles.containAddProduct}>
      <View>
      <AddItem text={text} setText={setText} addItem={addItem}/>
      </View>
        <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text>
            <ListItem item={item}/>
              <View style={styles.containOption}>
                <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={styles.checkbox}
                />
                <Pressable onPress={() => setIsModalVisible(true)}>
                  <MaterialIcons name="delete-forever" size={36} color="black" />
                </Pressable>
              </View></Text>
          )}
        />
      </View>
            <CustomModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} clearList={clearList}/>
      {/* <Modal visible={isModalVisible}>
        <Text>Desea Eliminar la lista</Text>
        <Pressable onPress={() => clearList()}>
          <Text>
            Si
          </Text>
        </Pressable>
        <Pressable onPress={() => setIsModalVisible(false)}>
          <Text>
            NO
          </Text>
        </Pressable>
      </Modal> */}

           
      
    </View>
  );
}

const styles = StyleSheet.create({

  containerPrincipal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#6e6e6e', fontSize:20
  },
  containerTitle: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 20,
    gap: 20,
    alignContent: 'center',
    alignItems: 'center',
  },
  containerTitlePrincpal: {
  fontSize: 40, fontStyle: 'italic'
  },
  button: {
    marginLeft: 20,
    justifyContent: 'center'
  },
  list: {
    fontSize: 30
  },
  containAddProduct: {
    width: 400,
    marginTop: 20,
  },
  containOption: {
    width: 40,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  containRecivedProduct: {
    width: 310,
    fontSize: 24,
  },
  checkbox: {
    alignSelf: 'center',
  },

});

