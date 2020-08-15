import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {logoutRequest} from '../../redux/auth/auth.actions';
import {Button} from '../../global/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: '#3e3e3e',
  },
});

const Home = props => {
  const handleLogout = () => {
    props.logoutRequest();
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
