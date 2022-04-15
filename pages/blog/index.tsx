import type { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

const Blog: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('blog.title')}</title>
        <meta name="description" content={t('blog.description')} />
      </Head>
      <div>{t('blog.title')}</div>
    </>
  );
};

export default Blog;
