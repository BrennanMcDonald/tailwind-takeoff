/* eslint import/no-webpack-loader-syntax: off */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import metadata from './metadata.json';
import MetadataDrawer from './components/MetadataDrawer';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Input, TextArea } from 'semantic-ui-react';
import root from 'react-shadow';
import css from '!!raw-loader!./tailwind.txt';

function App() {
  const classes = useSelector(state => state.classes.classes);
  const [innerHTML, setInnerHTML] = useState('');
  console.log(css);
  return (
    <div className="App">
      <Grid>
        <Grid.Row>
          <Grid.Column width={4} style={{
            height: "100vh",
            overflowY: "scroll",
          }}>
            <div style={{
              margin: "20px",
            }}>
              <MetadataDrawer options={metadata} />
            </div>
          </Grid.Column>
          <Grid.Column width={12}>
            <Container style={{height:"50vh"}}>
              <root.span>
                <div dangerouslySetInnerHTML={{__html:innerHTML}} className={classes.map(el => el.replace('.', '')).join(" ")}></div>
                <style type="text/css">{css}</style>
              </root.span>
            </Container>
            <div style={{height:"50vh"}}>
            <TextArea style={{width:"100%", height:"100%"}} value={innerHTML} onChange={el => setInnerHTML(el.target.value)} />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
