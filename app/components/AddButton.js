
import React from 'react';
import { Icon, Fab } from 'native-base';


const AddButton = ({ handlePress }) => (
  <Fab onPress={handlePress} position="bottomRight">
    <Icon type="FontAwesome" name="plus" />
  </Fab>
);

export default AddButton;
