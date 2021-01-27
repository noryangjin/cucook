import { LoadingBlock, Span } from '../styles/ask/SendLoading.style';

const SendLoading = () => {
  return (
    <LoadingBlock>
      <div className="loading">
        <Span val="1"> L </Span>
        <Span val="2"> O </Span>
        <Span val="3"> A </Span>
        <Span val="4"> D </Span>
        <Span val="5"> I </Span>
        <Span val="6"> N </Span>
        <Span val="7"> G </Span>
      </div>
    </LoadingBlock>
  );
};

export default SendLoading;
