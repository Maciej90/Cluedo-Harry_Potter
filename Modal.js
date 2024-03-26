import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Updates from 'expo-updates';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Modal = (props) => {
    async function resetAppHandler () {
        await Updates.reloadAsync();
    };
    const dismisHandler = () => {
       props.modalOpen();
    }

    return <View style={styles.container}>
        <View style={styles.modal}>
            <View style={styles.modalText}>
                <Text style={styles.text}>Czy na pewno chcesz zrestartować aplikację?</Text>
            </View>
            <View style={styles.modalChoice}>
                <TouchableOpacity style={styles.choice} onPress={resetAppHandler}>
                    <Text style={styles.textBtn}>Tak</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.choice} onPress={dismisHandler}>
                    <Text style={styles.textBtn}>Nie</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}
export default Modal;
 const styles = StyleSheet.create({
    container: {
        flex:1,
        zIndex: 2000,
        justifyContent: "center",
        alignItems: 'center',
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    modal: {
        backgroundColor: '#E3FDFE',
        width: wp('90%'),
        height: hp('25d%'),
        borderRadius: wp('5%'),
        borderColor: 'black',
        borderWidth: 2,
        flexDirection: "column"
    },
    modalText: {
        paddingTop: hp('3%'),
        flex: 1,
        alignItems: 'center'
    },
    modalChoice: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    choice: {
        alignItems: "center",
        justifyContent: 'center',
        width: wp('30%'),
        height: hp('5%'),
        borderColor: "black",
        borderWidth: 2,
        borderRadius: wp('5%'),
        marginTop: hp('2%'),
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    text: {
        fontSize: hp('1.9%'),
    },
    textBtn: {
        fontSize: hp('1.9%'),
        color: '#e3e7f5',
    }
 });