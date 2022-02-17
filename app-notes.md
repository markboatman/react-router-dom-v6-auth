This is a create-react-app

This app is a demo of react-router-dom V6 with authentication. All components are function components. It uses BrowsesRouter, Routes, Route and the hooks useNavigation and useLocation to define routes and accomplish redirection. Protected routes are children of components/ProtectRouteParent.js Authentication of tokens are provided by a fake authtoken generator call util/fakeAuth.js and the token is persisted by AuthContext = createContext(null) in components/AuthProvider.js. All authentication, login/logout and token logic/maintenance is encapsulated in components/AuthProvider.js. Currently the home page also functions as the login page.

Most of this code comes from this tutorial by Robin W:
https://www.robinwieruch.de/react-router-authentication/
