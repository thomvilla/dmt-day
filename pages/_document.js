import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es" className="theme-compiled">
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true}/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
        <Head />
        <body
          className={`antialiased text-lg bg-white dark:bg-gray-900 dark:text-white leading-base`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
