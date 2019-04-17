// @flow
import React from "react";
import { Slide, Code, Heading1, Heading2, List } from "../components";

export default [
  <Slide key={"api1"}>
    <Code>{`

import * as MagicMove from 'react-native-magic-move';



// Replace image
<Image
  style={styles.image}
  source={require('./relativity.jpg')} />



// With MagicMove component and provide shared "id"
<MagicMove.Image
  id='relativityImage'
  style={styles.image}
  source={require('./relativity.jpg')} />
`}</Code>
  </Slide>,
  <Slide key={"api2"}>
    <Code>{`

// Wrap app with magic-move provider
<MagicMove.Provider>
  <App />
</MagicMove.Provider>



// Wrap your screen into a scene
<MagicMove.Scene>
    <View>
        <Text>
            Relativity
        </Text>
        <MagicMove.Image
            id="relativityImage"
            {...} />
    </View>
</MagicMove.Scene>
  
`}</Code>
  </Slide>
];
