import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './noteAddCard.style';

const NoteAddCard = props => {
  const [change, setChange] = useState(true);

  const inputChange = text => {
    text === '' ? setChange(true) : setChange(false);
    setnoteValue(text);
  };

  const [noteValue, setnoteValue] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Yapılacak"
          style={styles.text_input}
          placeholderTextColor="#c4c4c4"
          multiline={true}
          onChangeText={inputChange}
          value={noteValue}
        />
      </View>
      {change ? (
        <TouchableOpacity
          style={styles.button}
          onPress={props.onSave}
          disabled={true}>
          <Text style={styles.buttonText}>Kaydet</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.button2}
          onPress={() => props.onSave(noteValue)}>
          <Text style={styles.buttonText}>Kaydet</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NoteAddCard;
