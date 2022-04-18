import { InferGetStaticPropsType } from 'next';

export async function getStaticProps() {
  const timestamp = `${new Date().getHours()}시 ${new Date().getMinutes()}분 ${new Date().getSeconds()}초`;

  return {
    props: {
      timestamp,
    },
    revalidate: 10,
  };
}

const ISR = ({ timestamp }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <div>{timestamp}에 생성된 페이지 입니다.</div>
    <div>revalidate : 10s</div>
  </>
);

export default ISR;
