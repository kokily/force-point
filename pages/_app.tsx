import { AppProps } from 'next/app';
import withReduxSaga from 'next-redux-saga';
import wrapper from '../store/configureStore';
import { GlobalStyle } from '../styles';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(withReduxSaga(App));
