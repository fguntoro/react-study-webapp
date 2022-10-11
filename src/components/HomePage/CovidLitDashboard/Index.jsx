import LoadingIframe from 'react-loading-iframe'

const Skeleton = () => {
  return <div>Cool loading screen</div>;
};

const BasicExample = () => {
  return (
    <LoadingIframe
      skeleton={<Skeleton />}
      src="https://google.com"
      className="your-class"
      frameBorder={0}
    />
  );
};

export default BasicExample;
