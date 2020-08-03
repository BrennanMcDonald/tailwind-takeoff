import React from 'react';
import MetadataOption from "./MetadataOption"

export default function (props) {
  return (
    <>
      {
        props.options.map(el => {
          return <MetadataOption option={el} />
        })
      }
    </>
  );
}