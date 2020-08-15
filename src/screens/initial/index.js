import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import ActivityIndicator from '../../global/components/activity-indicator';
import {
  selectLoading,
  selectIsDarkTheme,
  selectIsFirstLoad,
  selectToken,
} from '../../redux/app/app.selectors';
import * as mapDispatchToProps from '../../redux/app/app.actions';

import {
  // AppAuthContainer,
  AppMainContainer,
} from '../../index';
import {api} from '../../api';

const Initial = (props) => {
  const {setLoading, loading, isFirstLoad, token} = props;
  useEffect(() => {
    // initial load of assets
    // after completion of load set loading to false
    setLoading(false);
  }, [setLoading]);

  useEffect(() => {
    api.defaults.headers.common.Authorization = token;
  }, [token]);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (isFirstLoad) {
    return <AppMainContainer />;
  }

  if (token) {
    // remove always true logic after AppAuthContainer screens are setup
    return <AppMainContainer />;
  }

  return <AppMainContainer />;
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  isFirstLoad: selectIsFirstLoad,
  isDarkTheme: selectIsDarkTheme,
  token: selectToken,
});

export default connect(mapStateToProps, mapDispatchToProps)(Initial);
