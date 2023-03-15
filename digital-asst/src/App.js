import Postcard from './PostCard';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import alexa from './alexa.png';
import siri from './siri.png';
import cortana from './cortana.png';

function App() {

  const blockStyle = {
    display: 'block',
    marginRight:'0.3em',
    backgroundColor: 'lightgreen'
  };

  return (
    <Container>
    <div>
      <h2 style={{ marginTop: '1em', ...blockStyle }} >Personal Digital Assistants</h2>
    <Row style = {{marginTop :'3em'}}>
  <Postcard title="Alexa" handle="@alexa99" image={alexa} />
  <Postcard  title="Cortana" handle="@cortana32" image={cortana}    />
  <Postcard   title="Siri" handle="@siri01"  image={siri} />

    </Row>  

</div>
</Container>
  );
}

export default App;
