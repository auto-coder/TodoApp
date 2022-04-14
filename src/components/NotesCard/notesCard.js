import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './notesCard.style';

const NotesCard = props => {
  return (
    <View style={styles.container}>
      {!props.note.isDone ? (
        <TouchableOpacity
          style={styles.not_done_inner_container}
          onPress={() => props.onChange(props.note.id)}
          onLongPress={() => props.onDelete(props.note.id)}>
          <Text style={styles.not_done_text}>{props.note.title}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.done_inner_container}
          onPress={() => props.onChange(props.note.id)}
          onLongPress={() => props.onDelete(props.note.id)}>
          <Text style={styles.done_text}>{props.note.title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NotesCard;
