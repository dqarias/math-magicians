import React, { useEffect, useState } from 'react';

const Quote = () => {
  const url = 'https://random-math-quote-api.herokuapp.com/';

  const [quote, setQuote] = useState(null);

  const getQuote = async () => {
    const response = await fetch(url, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  };

  const setQuoteData = async () => {
    const getData = await getQuote();
    if (!quote) {
      setQuote([
        getData.quote,
        getData.author,
      ]);
    }
  };

  useEffect(() => {
    setQuoteData();
  }, [quote]);

  return (
    <div className="quote-container">
      <p className="quote-text">
        {quote}
      </p>
    </div>
  );
};

export default Quote;
