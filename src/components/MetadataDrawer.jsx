import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import MetadataOption from "./MetadataOption"

export default function (props) {
  const [search, setSearch] = useState('');

  return (
    <>
      <div style={{width:"100%"}}>
        <Input style={{width:"100%"}} value={search} onChange={el => setSearch(el.target.value)} />
      </div>
      {
        props.options.filter(el => el.title.toLowerCase().includes(search.toLowerCase())).map(el => {
          return <MetadataOption option={el} />
        })
      }
    </>
  );
}