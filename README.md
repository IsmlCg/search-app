# Setting Up Your Fullstack Search-app

This project was initialized with React for client side and  Node.js for server-side development.

### Initialize the Server
### `cd server`
Express: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.

Axios: Axios is a popular HTTP client library used to make HTTP requests from Node.js applications.

Cors: CORS (Cross-Origin Resource Sharing) is a Node.js package that provides middleware to enable CORS with various options.
### `npm install express axios cors`


### Initialize the client

### `cd client`

### `npm start`Run the client

### `npm install axios`
you can use Axios to make HTTP requests, such as GET, POST, PUT, DELETE, etc., to external APIs or services. Here's a basic example of making a GET request using Axios.

### `npm install -D tailwindcss` Install tailwindcss via npm, and create your tailwind.config.js file

### `npx tailwindcss init` 

### `npm install @headlessui/react` 

### `npm install react-router-dom` setting up routes in your App component.

### `cd ..` go to project to main path search-app

To run both the React client and Node.js server concurrently, you can use the concurrently package.
### `npm install concurrently --save-dev` Concurrently Run Both Servers

### `npm run dev`

Runs the app in the development search-app.\

run server [http://localhost:5000](http://localhost:5000) to view it in your browser.
Open client [http://localhost:3000](http://localhost:3000) to view it in your browser.

