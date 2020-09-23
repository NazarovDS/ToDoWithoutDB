Start project: <br>
1)npm install on root and /client <br>
2)set server port on index.js - app.listen(<-yourServerPort->) and client\src\api\api.js - 'baseURL: 'http://localhost:<-yourServerPort->/api/v1/'' <br>
3)set front port on index.js - app.use(cors({credentials: true, origin: 'http://localhost:<-yourFrontPort->'})); and client\src\api\api.js - AccessControlAllowOrigin: 'http://localhost:<-yourFrontPort->' <br>
4)at the root of the project "npm run app"
