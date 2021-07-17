import { Root } from 'postcss';
import 'tailwindcss/tailwind.css'

import { useEffect } from 'react';

function AppInit(router) {
  console.log("call AppInit!! by " + router.pathname);

  return null;
}

function MyApp({ Component, pageProps, router }) {
  AppInit(router);
  return <Component {...pageProps} />
}

export default MyApp
