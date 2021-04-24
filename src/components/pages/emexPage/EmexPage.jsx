import React from 'react';
import { Block } from 'baseui/block';
import { QueryBuilder } from '../../query-builder';

export function EmexPage() {
  return (
    <Block display="grid" gridTemplateColumns="1fr 200px">
      <QueryBuilder />
    </Block>
  );
}
