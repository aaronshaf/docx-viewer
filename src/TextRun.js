import React from 'react';
import OpenOfficeNode from './OpenOfficeNode';

function TextRun({ node }) {
  const children = Array.from(node.childNodes).map((node, i) => (
    <OpenOfficeNode key={i} node={node} />
  ));
  return <span>{children}</span>;
}

export default TextRun;