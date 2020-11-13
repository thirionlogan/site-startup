import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Paper, Switch, FormControlLabel } from '@material-ui/core';
import { featurePolicy } from 'helmet';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    marginTop: 32,
    padding: 16,
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  featureFlag: {
    display: 'flex',
    flexDirection: 'row',
  },
});

// type Props = {
//   item: Item;
// };
type FeatureFlag = { id: number; name: string; enabled: boolean };
type FeatureFlags = {
  [key: number]: FeatureFlag;
};

// TODO: Make not hard coded
const staticFeatureFlags: FeatureFlags = {
  1: {
    id: 1,
    name: 'Feature Flag1',
    enabled: true,
  },
  2: {
    id: 2,
    name: 'Feature Flag2',
    enabled: true,
  },
  3: {
    id: 3,
    name: 'Feature Flag3',
    enabled: false,
  },
  4: {
    id: 4,
    name: 'Feature Flag4',
    enabled: true,
  },
};

const initalState: {
  featureFlags: FeatureFlags;
} = {
  featureFlags: staticFeatureFlags,
};

export default function FeatureFlags() {
  const classes = useStyles();
  const [state, setState] = React.useState(initalState);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleOtherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line prefer-destructuring
    const updatedFlag: FeatureFlag = {
      ...state.featureFlags[parseInt(event.target.name, 10)],
      enabled: event.target.checked,
    };

    const updateFeatureFlags: FeatureFlags = {
      ...state.featureFlags,
      [event.target.name]: updatedFlag,
    };
    setState({
      ...state,
      featureFlags: updateFeatureFlags,
    });
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4">List of Feature Flags</Typography>
      <Paper className={classes.paper}>
        {Object.entries(staticFeatureFlags).length ? (
          Object.entries(state.featureFlags)
            .map((keyValuePair) => {
              return keyValuePair[1];
            })
            .map((featureFlag: FeatureFlag) => {
              return (
                <FormControlLabel
                  key={featureFlag.id}
                  control={
                    <Switch
                      checked={featureFlag.enabled}
                      onChange={handleOtherChange}
                      name={featureFlag.id.toString()}
                    />
                  }
                  label={featureFlag.name}
                />
              );
            })
        ) : (
          <div>
            <Typography variant="h5">No Feature Flags Found</Typography>
          </div>
        )}
      </Paper>
    </div>
  );
}
