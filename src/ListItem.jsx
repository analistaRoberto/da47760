import { View, text, StyleSheet, setText} from "react-native";
import React from "react";


const ListItem = ({item}) => {
    
    console.log(item)
    return (
    
        <View style={styles.containRecivedProduct}>
        {item.text}
    </View>
   
    
    );
};

const styles = StyleSheet.create({
    containRecivedProduct: {
        width: 310,
        fontSize: 24
    },
});
export default ListItem