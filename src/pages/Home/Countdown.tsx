import { Button, Space } from 'antd';

const Countdown: React.FC<
  React.PropsWithChildren<{
    start?: () => void;
    pause?: () => void;
    reset?: () => void;
  }>
> = (props) => {
  const { start, pause, reset, children } = props;
  return (
    <Space>
      倒计时：{children}
      {start && <Button onClick={start}>开始</Button>}
      {pause && <Button onClick={pause}>暂停</Button>}
      {reset && <Button onClick={() => reset()}>重置</Button>}
    </Space>
  );
};

export default Countdown;
