import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, StatusBar} from 'react-native';
import Header from './components/Header/header';
import NoteAddCard from './components/NoteAddCard/noteAddCard';
import NotesCard from './components/NotesCard/notesCard';

function App() {
  const [counter, setCounter] = useState(0);
  const [note, setnote] = useState([]);

  function fixCounter() {
    let count = 0;
    note.forEach(item => (!item.isDone ? count++ : {}));
    setCounter(count);
  }

  useEffect(fixCounter, [note]);

  function addnote(text) {
    const newnote = {
      id: Date.now(),
      title: text.toString(),
      isDone: false,
    };
    setnote([...note, newnote]);
  }

  const changeStatus = changednote => {
    const newnote = note.map(item => {
      if (item.id === changednote) {
        if (item.isDone) {
          return {...item, isDone: false};
        } else {
          return {...item, isDone: true};
        }
      }
      return item;
    });
    setnote(newnote);
  };

  function deletenote(id) {
    const newnote = note;
    var index = newnote.indexOf(id);
    newnote.splice(index, 1);
    setnote(newnote);
  }

  const rendernote = ({item}) => (
    <NotesCard note={item} onChange={changeStatus} onDelete={deletenote} />
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#102027'} barStyle="light-content" />
      <Header counter={counter} />
      <FlatList
        style={styles.flat_list}
        data={note}
        renderItem={rendernote}
        keyExtractor={item => item.id}
      />
      <NoteAddCard onSave={addnote} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {backgroundColor: '#102027', height: '100%'},
  flat_list: {flex: 1},
});
