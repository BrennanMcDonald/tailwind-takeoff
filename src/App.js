import React from 'react';
import { useSelector } from 'react-redux';
import metadata from './metadata.json';
import MetadataDrawer from './components/MetadataDrawer';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid } from 'semantic-ui-react';
import root from 'react-shadow';
import styles from './tailwind.min.css';

function App() {
  const classes = useSelector(state => state.classes.classes);
  return (
    <div className="App">
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <MetadataDrawer options={metadata} />
          </Grid.Column>
          <Grid.Column width={12}>
            <Container>
              <root.div className="quote">
                <div className={classes.map(el => el.replace('.', '')).join(" ")}></div>
                <style type="text/css">{styles}</style>
              </root.div>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
