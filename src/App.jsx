import React from 'react';
import { Provider } from 'react-redux';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import { Button } from 'baseui/button';

import store from './store/store';

const engine = new Styletron();

export default function App() {
  return (
    <Provider store={store}>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <Button>Hello</Button>
        </BaseProvider>
      </StyletronProvider>
    </Provider>
  );
}
