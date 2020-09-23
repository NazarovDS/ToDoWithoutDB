Start project: <br>
1)npm install on root and /client <br>
2)set server port on index.js - app.listen(<-yourServer->) and client\src\api\api.js - baseURL: '<-yourServer->' <br>
3)set front port on index.js - app.use(cors({credentials: true, origin: <-yourPort->})); and client\src\api\api.js - AccessControlAllowOrigin: <-yourPort-> <br>
4)at the root of the project "npm run start"