import * as React from 'react';
import { Block } from 'baseui/block';
import { Header } from '../header';
import { SideBar } from '../sideBar';
import { Main } from '../main';

const Root = () => {
  return (
    <Block display="grid" gridTemplateColumns="200px 1fr">
      <Block gridColumn="1/3">
        <Header />
      </Block>
      <SideBar />
      <Main />
    </Block>
  );
};

export { Root };
