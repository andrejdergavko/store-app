import React from 'react';
import { Block } from 'baseui/block';
import { FormControl } from 'baseui/form-control';
import { Select } from 'baseui/select';
import { organizationsOptions, ALL_ORGANIZATIONS } from '../constants';

export function QueryBuilder() {
  const [organization, setOrganization] = React.useState(
    organizationsOptions.filter((item) => item.id === ALL_ORGANIZATIONS)
  );

  return (
    <Block margin="15px">
      <Block width="150px">
        <FormControl label="Организация">
          <Select
            id="organizationSelect"
            value={organization}
            onChange={({ value }) => setOrganization(value)}
            options={organizationsOptions}
            labelKey="label"
            valueKey="id"
            clearable={false}
            placeholder=""
          />
        </FormControl>
      </Block>
    </Block>
  );
}
