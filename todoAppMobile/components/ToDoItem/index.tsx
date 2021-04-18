import React, { useState, useEffect } from 'react';
import { View, TextInput } from 'react-native';

import CheckBox from '../CheckBox';

interface ToDoItemProps {
  todo: {
    id: String;
    content: String;
    isCompleted: boolean;
  };
}

const ToDoItem = ({ todo }: ToDoItemProps) => {
  const [isChecked, setİsChecked] = useState(false);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (!todo) {
      return;
    }

    setİsChecked(todo.isCompleted);
  }, [todo]);

  return (
    <View
      style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 3 }}
    >
      {/*Checkbox*/}
      <CheckBox
        isChecked={isChecked}
        onPress={() => {
          setİsChecked(!isChecked);
        }}
      />

      {/*Text Input*/}
      <TextInput
        style={{
          flex: 1,
          fontSize: 18,
          color: 'white',
          marginLeft: 12,
        }}
        multiline
      />
    </View>
  );
};

export default ToDoItem;
