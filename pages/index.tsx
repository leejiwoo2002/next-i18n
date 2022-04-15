import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useTranslation } from "react-i18next";

const Home: NextPage = () => {
  const {t} = useTranslation();

  return (
    <div >
      {t('main.title')}
    </div>
  )
}

export default Home
