import React, {useState} from 'react';
import { View, FlatList, StyleSheet, Image, AsyncStorage } from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';
import itemList from '../constants/ItemList';
import BoldText from '../components/BoldText';
import BodyText from '../components/BodyText';
import axios from 'axios';

const serverUrl = 'http://192.168.137.1:5000';
const http = axios.create({
    baseURL: serverUrl
});

const Shop = props => {
    return (
        <View style={styles.screen}>
            <Header title="ALL PRODUCTS" navigation={() => {}}>
                <Ionicons name='ios-cart' size={35} color='white' />
            </Header>
            <View style={styles.list}>
                <FlatList
                    data={itemList}
                    renderItem={({ item }) => (
                        <Card style={styles.card}>
                            <View style={styles.image}>
                                <Image style={{ width: '100%', height: '100%' }} source={item.imageSource} />
                            </View>
                            <BoldText style={{marginVertical: 2}}>{item.name}</BoldText>
                            <BodyText style={{marginVertical: 2}}>{item.price}</BodyText>
                            <View style={styles.buttonContainer}>
                                <CustomButton>VIEW DETAILS</CustomButton>
                                <CustomButton>TO CART</CustomButton>
                            </View>
                        </Card>
                    )}
                    extraData={itemList}
                    keyExtractor={(item, index) => index.toString()}
                />
                {/* <Card style={styles.card}>
                    <View style={styles.image}>
                        <Image style={{ width: '100%', height: '100%' }} source={require('../assets/images/shoes.jpeg')} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton>VIEW DETAILS</CustomButton>
                        <CustomButton>TO CART</CustomButton>
                    </View>
                </Card>
                <Card style={styles.card}>
                    <View style={styles.image}>
                        <Image style={{ width: '100%', height: '100%' }} source={require('../assets/images/shoes.jpeg')} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton>VIEW DETAILS</CustomButton>
                        <CustomButton>TO CART</CustomButton>
                    </View>
                </Card> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    list: {
        marginVertical: 20,
        flex: 1,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        width: 250,
        height: 250,
        padding: '5%'
    },
    card: {
        marginVertical: 20
    }
});

export default Shop;