# Demo app using react-router-dom V6

All components in this app are function components. It uses BrowsesRouter, Routes, Route and the hooks useNavigation and useLocation to define routes and accomplish redirection. Protected routes are children of components/ProtectRouteParent.js. Authentication of tokens are provided by a fake authtoken generator called util/fakeAuth.js and the token is persisted by AuthContext = createContext(null) in components/AuthProvider.js. All authentication, login/logout and token logic/maintenance is encapsulated in components/AuthProvider.js.

Most of this code comes from this [tutorial](https://www.robinwieruch.de/react-router-authentication/) by Robin Wieruch

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
