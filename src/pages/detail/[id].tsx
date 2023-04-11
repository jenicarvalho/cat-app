import { useRouter } from 'next/router';
import React from 'react';

const Detail = () => {

  const { query } = useRouter();

  return (
    <p>detail page {JSON.stringify(query)}</p>
  );
}

export default Detail;