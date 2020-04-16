import React from 'react';
import GroupSizeRefinementList from 'instantsearch-group-size-refinement-list-react';

import { Panel } from './Panel';

export const RefinementSize = ({ header, ...props }) => (
  <Panel header={header}>
    <GroupSizeRefinementList
      {...props.options}
      patterns={props.options.patterns.map((pattern) => new RegExp(pattern))}
    />
  </Panel>
);
