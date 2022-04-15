import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import en_lokalise from '../i18n/en.json';
import ko_lokalise from '../i18n/ko.json';
import ja_lokalise from '../i18n/ja.json';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: en_lokalise,
      },
      ko: {
        translation: ko_lokalise,
      },
      ja: {
        translation: ja_lokalise,
      },
    },
    lng: router.locale,
  });

  return <Component {...pageProps} />;
}

export default MyApp;
