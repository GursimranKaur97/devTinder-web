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
- Feature- Accept/Reject Connection Request
- Send/Ignore the user card from Feed
- Signup New User
- E2ETesting


# Deployment
- Signup on AWS
- Launch instance
- Create a new EC2 instance(Ubuntu)
- On terminal go to path where pem file you've downloaded and run this command -> chmod 400 "devTinderSecret.pem"
- Run: ssh -i "devTinderSecret.pem" ubuntu@ec2-13-203-161-141.ap-south-1.compute.amazonaws.com
- Install Node Version 24.5.0
- Git clone


Frontend:
 - npm install -> dependencies install
 - npm run build
 - sudo apt update -> update ths system
 - sudo apt install nginx -> will use nginx to deploy our application
 - sudo systemctl start nginx
 - sudo systemctl enable nginx
 - Copy code from dist folder(build files) to /var/www/html/
 - sudo scp -r dist/* /var/www/html
 - enable port 80 of your instance

 Backend:
 - allowed ec2 instance public IP on mongodb server
 - npm install
 - add port 3030 to aws
 - npm install pm2 -g
 - pm2 start npm -- start (It'll run 24/7)
 - pm2 logs (To check logs)
 - pm2 flush npm (clear logs)
 - pm2 stop npm 
   OR 
   pm2 delete npm
   (Stop pm2 process)
 - pm2 list
 - pm2 start npm --name "devtinderbackend" --start ((--> give custom name to your process))
 - Modify the BASEURL in frontend project to "/api"

---------------------------------------------------------------------------------------------

NGINX CONFIG:
    Frontend: http://13.203.161.141/
    Backend: http://13.203.161.141:3030/

    Domain name = devtinder.com => 43.204.96.49

    Frontend = devtinder.com
    Backend = devtinder.com:3030 => devtinder.com/api
---------------------------------------------------------------------------------------------

    -  sudo nano /etc/nginx/sites-available/default
    -  add server_name 13.203.161.141; 
    -  add nginc config:
            location /api/ {
        proxy_pass http://localhost:3030/; #Pass the request to Node.js app
        proxy_http_version 1.1;

        # Pass headers for WebSocket/support and host info
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        }

    - restart nginx -> sudo systemctl restart nginx