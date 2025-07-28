**Blog Sphere (The Blog App)**
======================

[![IMAGE ALT TEXT HERE](https://i.ibb.co/7dYCgzcB/Screenshot-2025-07-28-123353.png)](https://www.youtube.com/watch?v=RSLyNe19mMQ)

**Discription**
------------

This is the blog app named "Blog Sphere". It is a full stack web app, created with the MERN stack technologies. The app allows users to create, read, update, and delete blog posts.

**Features**
------------

* User authentication and authorization
* Create, read, update, and delete blog posts
* Commenting system
* Smooth login or sign-up
* Single page implementation


**Technologies**
---------------------

### Frontend:
  * Node.js
  * React.js
  * Material UI
  * React-router-dom
  * Axios

### Backend:
  *  Node.js
  * Expres.js
  * MongoDB
  * JWT (JSON Web Token)


<a href="https://git-scm.com/" target="_blank" rel="noreferrer"> 
<img src="https://symbols.getvecta.com/stencil_28/88_visual-studio-team-services-git-repository.c595f4166d.svg" alt="git" width="40" height="40"/> 
</a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
<img src="https://symbols.getvecta.com/stencil_25/41_javascript.0ca26ec4ab.svg" alt="javascript" width="40" height="40"/> 
</a>
<a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> 
<img src="https://symbols.getvecta.com/stencil_261/25_mongodb.cef7d00b8a.svg" alt="mongodb" width="40" height="40"/> 
</a>   
<a href="https://expressjs.com" target="_blank" rel="noreferrer"> 
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2Cl7TKrJZnqIcySObGhSToz0G8jAHbfryA&usqp=CAU" alt="express" width="40" height="40"/> 
</a> 
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
<img src="https://symbols.getvecta.com/stencil_25/72_react.76a8d36b4b.svg" alt="react" width="40" height="40"/> 
</a>
<a href="https://nodejs.org" target="_blank" rel="noreferrer"> 
<img src="https://symbols.getvecta.com/stencil_25/63_nodejs.124d3fe0e1.svg" alt="nodejs" width="40" height="40"/> 
</a> 

**Setup Environment**
---------------------

### Prerequisites

* Node.js (14.x or higher)
* MongoDB (local or remote instance)
* npm or yarn
* A code editor or IDE of your choice

### Step 1: Clone the Repository

 Clone the repository using Git:

```bash
git clone https://github.com/Teerthesh706/blog-sphere.git
```

### Step 2: Install Dependencies

 Install the required dependencies using npm:

```bash
cd .\client\
npm install

cd .\server\
npm install
```

### Step 3: Set up MongoDB

 Make sure you have a MongoDB instance running locally or remotely. Create a new database and add the connection string to the `database/db.js` file:

```javascript
import mongoose from "mongoose";
const Connection = async (username, password) => { 
  //Code Block
};

export default Connection;
```

### Step 4: Set up Environment Variables

 Create a new file named `.env` in the root directory and add the following environment variables:

```bash
DB_USERNAME = username
DB_PASSWORD = password
SECRET_KEY=your-secret-key
```

### Step 5: Run the Application

 Run the application using the following command:


### for Server
```bash
cd .\server\
npm start
```

### for frontend/Client


```bash
cd .\client\
npm run start
```



### Step 6: Access the Application

 Access the application by navigating to `http://localhost:3000` in your web browser.


**Contributing**
---------------

Contributions are welcome! Please submit a pull request with your changes.


Note: Please update the `database/db.js` file and `.env` file with your own MongoDB connection string and secret key.

<img alt="Footer" width=100% src="https://capsule-render.vercel.app/api?type=waving&color=305cde&height=100&section=footer">
