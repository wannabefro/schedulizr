import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

type Props = {
  loggedIn: boolean,
}

const App = ({ loggedIn }: Props) => (
  <View>
    <Text>{loggedIn ? 'Logged in' : 'Not logged in'}</Text>
    <Text>This is Schedulizr</Text>
  </View>
);

const mapStateToProps = ({ loggedIn }) => (
  {
    loggedIn,
  }
);

export default connect(mapStateToProps)(App);