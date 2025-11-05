# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# DevTinder

- Create a Vite + React application
- Remove unnecessary code and create a Hello World app
- Install Tailwind CSS
- Install Daisy UI
- Add NavBar component to App.jsx
- Create a NavBar.jsx separate component file
- Install react router dom
- Create a footer
- Create a Login Page
- Install Axios
- CORS - Install CORS in backend ==> addd middleware to with configuration: origin, credentials: true
- Whenever you're making API call pass {aithCredentials: true} during axios call
- Install Redux toolkit
- Install react-redux + @reactjs/toolkit => configureStore => Provider => createSlice => add reducer to store
- Add redux devtools in chrome
- Login and see if your data is coming properly in the store
- NavBar should update as soon as user logs in
- Refactor our code to add constants file + create a components folder
- You should not be able to access other routes without login
- If token is not present, redirect the user to login page

- Logout Feature
- Profile
- Get the feed and add the feed in the store
- Build the user card on feed
- Edit Profile Feature
- Show Toast Message on save of profile
- New Page - See all my connections
- New Page - See all my connection requests