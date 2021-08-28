import ReactDom from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import './index.css';
import App from './client/App';
import { client } from './client/client';

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
ReactDom.render(<Root />, document.getElementById('root'));
