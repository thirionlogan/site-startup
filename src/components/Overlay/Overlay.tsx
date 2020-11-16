import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, makeStyles } from '@material-ui/core';
import PrimarySearchAppBar from '../PrimarySearchAppBar';
import TemporaryDrawer from '../TemporaryDrawer';
import ItemList from '../Items/ItemList';
import SimpleModal from '../SimpleModal';
import FeedbackList from '../Feedback/FeedbackList';
import FeatureFlags from '../FeatureFlags/FeatureFlags';
import Metrics from '../Metrics/Metrics';
import Home from '../Home/Home';

const useStyles = makeStyles({
  pageContainer: {
    width: '100%',
    height: '100%',
  },
});

export default function Overlay() {
  const startingState: {
    isDrawerOpen: boolean;
    isModalOpen: boolean;
    isDarkMode: boolean;
  } = {
    isDrawerOpen: false,
    isModalOpen: false,
    isDarkMode: true,
  };
  const [state, setState] = React.useState(startingState);
  const classes = useStyles();

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, isDrawerOpen: open });
  };

  const toggleDarkMode = () => {
    setState({ ...state, isDarkMode: !state.isDarkMode });
  };

  const toggleModal = (open: boolean) => {
    setState({ ...state, isModalOpen: open });
  };

  const theme = createMuiTheme({
    palette: {
      type: state.isDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PrimarySearchAppBar
          toggleDrawer={toggleDrawer}
          toggleDarkMode={toggleDarkMode}
          toggleModal={toggleModal}
          isDarkMode={state.isDarkMode}
        />
        <TemporaryDrawer
          toggleDrawer={toggleDrawer}
          isDrawerOpen={state.isDrawerOpen}
        />
        <SimpleModal
          isModalOpen={state.isModalOpen}
          toggleModal={toggleModal}
        />
        <div className={classes.pageContainer}>
          <Router>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Items">
              <ItemList />
            </Route>
            <Route exact path="/Feedback">
              <FeedbackList />
            </Route>
            <Route exact path="/Metrics">
              <Metrics />
            </Route>
            <Route exact path="/FeatureFlags">
              <FeatureFlags />
            </Route>
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
}
