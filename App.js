import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Modal from './Modal';
import { useState } from 'react';

export default function App() {
  const [openModal, setOpenModal] = useState(false)
  const [boxViewOne, setBoxViewOne] = useState(styles.box);
  const [boxViewTwo, setBoxViewTwo] = useState(styles.box);
  const [boxViewThree, setBoxViewThree] = useState(styles.box);
  const [visibleBoxOne, setVisibleBoxOne] = useState({opacity: 1});
  const [visibleBoxTwo, setVisibleBoxTwo] = useState({opacity: 1});
  const [visibleBoxThree, setVisibleBoxThree] = useState({opacity: 1});
  const [modalView, setModalView] = useState(false);
  const [textinput, setTextInput] =useState('');
  const [isempty, setIsEmpty] = useState(true);
  const notEmptyStyle = {
    first: !isempty ? {backgroundColor: 'rgba(0,132,207,0.5)', borderBottomWidth:0.5, borderBottomColor:'black'} : ''
  };
  const checkIsEmpty =  (val) => {
    setTextInput(val)
    if(!textinput.trim()) {
      setIsEmpty(false)
  } else {
    setIsEmpty(true)
  }}
  const positionBox = {
    position: "absolute",
    top: hp('3%'),
    zIndex: 1000
  }
  const showModal = () => {
    setOpenModal(true);
  }
  const closeModal = () => {
    setOpenModal(false)
  }
  // funtcion showing one table
const onFocusHandler = (props) => {
  if(props === 1){
    setModalView(true)
    setBoxViewOne([styles.boxView, positionBox])
    setVisibleBoxThree({opacity: 0})
    setVisibleBoxTwo({opacity: 0})    
  }
  if(props == 2){
    setModalView(true)
    setBoxViewTwo([styles.boxView, positionBox])
    setVisibleBoxOne({opacity: 0})
    setVisibleBoxThree({opacity: 0})
  }
  if(props === 3){
    setModalView(true)
    setBoxViewThree([styles.boxView, positionBox])
    setVisibleBoxOne({opacity: 0})
    setVisibleBoxTwo({opacity: 0})
  }
}
// function that restores the table to original state
const onEndEditingHandler = (props) => {
  if(props === 1){
    setModalView(false)
    setBoxViewOne(styles.box)
    setVisibleBoxThree({opacity: 1})
    setVisibleBoxTwo({opacity: 1})
  }
  if(props == 2){
    setModalView(false)
    setBoxViewTwo(styles.box)
    setVisibleBoxOne({opacity: 1})
    setVisibleBoxThree({opacity: 1})
  }
  if(props === 3){
    setModalView(false)
    setBoxViewThree(styles.box)
    setVisibleBoxOne({opacity: 1})
    setVisibleBoxTwo({opacity: 1})
  }
  if(props === 4){
    Keyboard.dismiss()
    setModalView(false) 
    setBoxViewOne(styles.box)
    setBoxViewTwo(styles.box)
    setBoxViewThree(styles.box)
    setVisibleBoxOne({opacity: 1})
    setVisibleBoxTwo({opacity: 1})
    setVisibleBoxThree({opacity: 1})
  }
}
  return (
    <ImageBackground source={require('./assets/harryBackgroung.png')} resizeMode="cover" imageStyle= 
    {{opacity:0.15}} style={styles.container}>
      <StatusBar style="auto" hidden={true} />
{/* first table */}
          <View style={[boxViewOne, visibleBoxOne]}>
            <View style={styles.header}>
              <Text style={styles.header_text}>PODEJRZANY</Text>
            </View>
            <View style={[styles.column_items, notEmptyStyle.first]}>
              <View style={styles.name_item}>
                <Text style={styles.text_item}>Fenrir Greyback</Text>
              </View>
              <View style={styles.inputText}>
                <TextInput style={styles.text_item} key={'f'} onFocus={()=> onFocusHandler(1)} onEndEditing={()=> onEndEditingHandler(1)} onChangeText={(val) => checkIsEmpty(val)}/>
              </View>
              <View style={[styles.inputText, {borderRightWidth: 0}, {flex: 7}]}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(1)} onEndEditing={()=> onEndEditingHandler(1)}/>
              </View>
            </View>
            <View style={[styles.column_items, {backgroundColor: 'rgba(0, 0, 0, 0.20)'}]}>
              <View style={styles.name_item}>
                <Text style={styles.text_item}>Lucjusz Malfoy</Text>
              </View>
              <View style={styles.inputText}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(1)} onEndEditing={()=> onEndEditingHandler(1)}/>
              </View>
              <View style={[styles.inputText, {borderRightWidth: 0}, {flex: 7}]}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(1)} onEndEditing={()=> onEndEditingHandler(1)}/>
              </View>
            </View>
            <View style={styles.column_items}>
              <View style={styles.name_item}>
                <Text style={styles.text_item}>Peter Pettigrew</Text>
              </View>
              <View style={styles.inputText}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(1)} onEndEditing={()=> onEndEditingHandler(1)}/>
              </View>
              <View style={[styles.inputText, {borderRightWidth: 0}, {flex: 7}]}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(1)} onEndEditing={()=> onEndEditingHandler(1)}/>
              </View>
            </View>
            <View style={[styles.column_items, {backgroundColor: 'rgba(0, 0, 0, 0.20)'}]}>
              <View style={styles.name_item}>
                <Text style={styles.text_item}>Draco Malfoy</Text>
              </View>
              <View style={styles.inputText}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(1)} onEndEditing={()=> onEndEditingHandler(1)}/>
              </View>
              <View style={[styles.inputText, {borderRightWidth: 0}, {flex: 7}]}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(1)} onEndEditing={()=> onEndEditingHandler(1)}/>
              </View>
            </View>
            <View style={styles.column_items}>
              <View style={styles.name_item}>
                <Text style={styles.text_item}>Szmalcownik</Text>
              </View>
              <View style={styles.inputText}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(1)} onEndEditing={()=> onEndEditingHandler(1)}/>
              </View>
              <View style={[styles.inputText, {borderRightWidth: 0}, {flex: 7}]}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(1)} onEndEditing={()=> onEndEditingHandler(1)}/>
              </View>
            </View>
            <View style={[styles.column_items, {backgroundColor: 'rgba(0, 0, 0, 0.20)'}]}>
              <View style={styles.name_item}>
                <Text style={styles.text_item}>Bellatrix Lestrange</Text>
              </View>
              <View style={styles.inputText}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(1)} onEndEditing={()=> onEndEditingHandler(1)}/>
              </View>
              <View style={[styles.inputText, {borderRightWidth: 0}, {flex: 7}]}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(1)} onEndEditing={()=> onEndEditingHandler(1)}/>
              </View>
            </View>
          </View>

{/* second table */}
          <View style={[boxViewTwo, visibleBoxTwo]}>
            <View style={styles.header}>
              <Text style={styles.header_text}>PRZEDMIOT</Text>
            </View>
            <View style={styles.column_items}>
              <View style={styles.name_item}>
                <Text style={styles.text_item}>Zaklęta miotła</Text>
              </View>
              <View style={styles.inputText}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(2)} onEndEditing={()=> onEndEditingHandler(2)}/>
              </View>
              <View style={[styles.inputText, {borderRightWidth: 0}, {flex: 7}]}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(2)} onEndEditing={()=> onEndEditingHandler(2)}/>
              </View>
            </View>
            <View style={[styles.column_items, {backgroundColor: 'rgba(0, 0, 0, 0.20)'}]}>
              <View style={styles.name_item}>
                <Text style={styles.text_item}>Przeklęty naszyjnik</Text>
              </View>
              <View style={styles.inputText}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(2)} onEndEditing={()=> onEndEditingHandler(2)}/>
              </View>
              <View style={[styles.inputText, {borderRightWidth: 0}, {flex: 7}]}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(2)} onEndEditing={()=> onEndEditingHandler(2)}/>
              </View>
            </View>
            <View style={styles.column_items}>
              <View style={styles.name_item}>
                <Text style={styles.text_item}>Eliksir miłosny</Text>
              </View>
              <View style={styles.inputText}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(2)} onEndEditing={()=> onEndEditingHandler(2)}/>
              </View>
              <View style={[styles.inputText, {borderRightWidth: 0}, {flex: 7}]}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(2)} onEndEditing={()=> onEndEditingHandler(2)}/>
              </View>
            </View>
            <View style={[styles.column_items, {backgroundColor: 'rgba(0, 0, 0, 0.20)'}]}>
              <View style={styles.name_item}>
                <Text style={styles.text_item}>Zatruty miód</Text>
              </View>
              <View style={styles.inputText}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(2)} onEndEditing={()=> onEndEditingHandler(2)}/>
              </View>
              <View style={[styles.inputText, {borderRightWidth: 0}, {flex: 7}]}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(2)} onEndEditing={()=> onEndEditingHandler(2)}/>
              </View>
            </View>
            <View style={styles.column_items}>
              <View style={styles.name_item}>
                <Text style={styles.text_item}>Incendio</Text>
              </View>
              <View style={styles.inputText}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(2)} onEndEditing={()=> onEndEditingHandler(2)}/>
              </View>
              <View style={[styles.inputText, {borderRightWidth: 0}, {flex: 7}]}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(2)} onEndEditing={()=> onEndEditingHandler(2)}/>
              </View>
            </View>
            <View style={[styles.column_items, {backgroundColor: 'rgba(0, 0, 0, 0.20)'}]}>
              <View style={styles.name_item}>
                <Text style={styles.text_item}>Drętwota</Text>
              </View>
              <View style={styles.inputText}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(2)} onEndEditing={()=> onEndEditingHandler(2)}/>
              </View>
              <View style={[styles.inputText, {borderRightWidth: 0}, {flex: 7}]}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(2)} onEndEditing={()=> onEndEditingHandler(2)}/>
              </View>
            </View>
          </View>

{/* third table */}
          <View style={[boxViewThree, visibleBoxThree]}>
            <View style={styles.header}>
              <Text style={styles.header_text}>LOKALIZACJA</Text>
            </View>
            <View style={styles.column_items}>
              <View style={styles.name_item}>
                <Text style={styles.text_item}>Dwór Malfoya</Text>
              </View>
              <View style={styles.inputText}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(3)} onEndEditing={()=> onEndEditingHandler(3)}/>
              </View>
              <View style={[styles.inputText, {borderRightWidth: 0}, {flex: 7}]}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(3)} onEndEditing={()=> onEndEditingHandler(3)}/>
              </View>
            </View>
            <View style={[styles.column_items, {backgroundColor: 'rgba(0, 0, 0, 0.20)'}]}>
              <View style={styles.name_item}>
                <Text style={styles.text_item}>Gospoda Pod Świńskim Łbem</Text>
              </View>
              <View style={styles.inputText}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(3)} onEndEditing={()=> onEndEditingHandler(3)}/>
              </View>
              <View style={[styles.inputText, {borderRightWidth: 0}, {flex: 7}]}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(3)} onEndEditing={()=> onEndEditingHandler(3)}/>
              </View>
            </View>
            <View style={styles.column_items}>
              <View style={styles.name_item}>
                <Text style={styles.text_item}>Wrzeszcząca Chata</Text>
              </View>
              <View style={styles.inputText}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(3)} onEndEditing={()=> onEndEditingHandler(3)}/>
              </View>
              <View style={[styles.inputText, {borderRightWidth: 0}, {flex: 7}]}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(3)} onEndEditing={()=> onEndEditingHandler(3)}/>
              </View>
            </View>
            <View style={[styles.column_items, {backgroundColor: 'rgba(0, 0, 0, 0.20)'}]}>
              <View style={styles.name_item}>
                <Text style={styles.text_item}>Hogwart</Text>
              </View>
              <View style={styles.inputText}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(3)} onEndEditing={()=> onEndEditingHandler(3)}/>
              </View>
              <View style={[styles.inputText, {borderRightWidth: 0}, {flex: 7}]}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(3)} onEndEditing={()=> onEndEditingHandler(3)}/>
              </View>
            </View>
            <View style={styles.column_items}>
              <View style={styles.name_item}>
                <Text style={styles.text_item}>Zakazany Las</Text>
              </View>
              <View style={styles.inputText}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(3)} onEndEditing={()=> onEndEditingHandler(3)}/>
              </View>
              <View style={[styles.inputText, {borderRightWidth: 0}, {flex: 7}]}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(3)} onEndEditing={()=> onEndEditingHandler(3)}/>
              </View>
            </View>
            <View style={[styles.column_items, {backgroundColor: 'rgba(0, 0, 0, 0.20)'}]}>
              <View style={styles.name_item}>
                <Text style={styles.text_item}>Bank Gringotta</Text>
              </View>
              <View style={styles.inputText}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(3)} onEndEditing={()=> onEndEditingHandler(3)}/>
              </View>
              <View style={[styles.inputText, {borderRightWidth: 0}, {flex: 7}]}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(3)} onEndEditing={()=> onEndEditingHandler(3)}/>
              </View>
            </View>
            <View style={styles.column_items}>
              <View style={styles.name_item}>
                <Text style={styles.text_item}>Magiczne Dowcipy Weasleyów</Text>
              </View>
              <View style={styles.inputText}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(3)} onEndEditing={()=> onEndEditingHandler(3)}/>
              </View>
              <View style={[styles.inputText, {borderRightWidth: 0}, {flex: 7}]}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(3)} onEndEditing={()=> onEndEditingHandler(3)}/>
              </View>
            </View>
            <View style={[styles.column_items, {backgroundColor: 'rgba(0, 0, 0, 0.20)'}]}>
              <View style={styles.name_item}>
                <Text style={styles.text_item}>Ministerstwo Magii</Text>
              </View>
              <View style={styles.inputText}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(3)} onEndEditing={()=> onEndEditingHandler(3)}/>
              </View>
              <View style={[styles.inputText, {borderRightWidth: 0}, {flex: 7}]}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(3)} onEndEditing={()=> onEndEditingHandler(3)}/>
              </View>
            </View>
            <View style={styles.column_items}>
              <View style={styles.name_item}>
                <Text style={styles.text_item}>Grimmauld Place 12</Text>
              </View>
              <View style={styles.inputText}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(3)} onEndEditing={()=> onEndEditingHandler(3)}/>
              </View>
              <View style={[styles.inputText, {borderRightWidth: 0}, {flex: 7}]}>
                <TextInput style={styles.text_item} onFocus={()=> onFocusHandler(3)} onEndEditing={()=> onEndEditingHandler(3)}/>
              </View>
            </View>
          </View>
        
{/* reset button */}
        <TouchableOpacity style={styles.btn} onPress={showModal}>
          <Text style={styles.header_text}>RESET</Text>
        </TouchableOpacity>
{/* component that appears after pressing the reset button */}
        {openModal && 
          <Modal modalOpen={closeModal}></Modal>
        }
{/* copmponent - background modal */}
        {modalView &&
        <TouchableWithoutFeedback onPress={()=>onEndEditingHandler(4)}>
          <View style={styles.modalContainer}></View>
        </TouchableWithoutFeedback>

        }
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#E3FDFE',
    alignItems: 'center',    
   },
   modalContainer: {
    flex:1,
    zIndex: 900,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
   },
  cont_box:{
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
    alignItems: 'center',
  },
  box: {
    marginTop: hp('2.1%'),
    width: wp('97%'),
    borderWidth: 3,
    borderRadius: 10,
  },
  boxView:{
    position: "absolute",
    top: 20,
    marginTop: hp('2.1%'),
    width: wp('97%'),
    borderWidth: 3,
    borderRadius: 10,
  },
  header: {
    width: '100%',
    height:hp('3.5%'),
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 4,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,

  },
  header_text: {
    color: '#e3e7f5',
    fontSize: hp('1.9%'),
    fontWeight: 'bold',
    letterSpacing: 1.5
  },
  column_items: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: hp('3.5%'),
  },
  name_item: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: wp('39%'),
    borderRightColor: 'black',
    borderRightWidth: 1,
  },
  text_item: {
    fontSize: hp('1.2%'),
    width:"100%",
    paddingHorizontal: 5,
    
  },
  inputText: {
    flex: 1,
    justifyContent: 'center',
     alignItems: 'center',
     borderRightColor: 'black',
     borderRightWidth: 1,

  },
  btn: {
    position: 'absolute',
    height: hp('3.7%'),
    width: wp('50%'),
    bottom: hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 7,
    borderWidth: 2
  },
});