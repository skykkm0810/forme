import React from 'react';
import { client } from './apollo';
import { LoggedOutRouter } from './routers/logged-out';

// const IS_LOGGED_IN = gql`
//   query isLoggedIn {
//       isLoggedIn @client
//     }
// `;
function App() {
  return (
    <div>
      <LoggedOutRouter />
    </div>
  );
}

export default App;
