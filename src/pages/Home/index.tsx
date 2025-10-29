import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import Countdown from './Countdown';
import styles from './index.less';
import { useCountdown } from './useCountdown';

const HomePage: React.FC = () => {
  const { name } = useModel('global');

  const { time, start, pause, reset } = useCountdown();
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />

        <Countdown start={start} pause={pause} reset={reset}>
          {time}
        </Countdown>
      </div>
    </PageContainer>
  );
};

export default HomePage;
