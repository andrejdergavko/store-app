import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import { Button } from 'baseui/button';

const engine = new Styletron();

export default function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Button>Hello</Button>
      </BaseProvider>
    </StyletronProvider>
  );
}
