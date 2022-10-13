require('dotenv').config();
const express = require('express');
const preRequest = require('./preRequest');
const jwtHandler = require('./middleware/jwtHandler')

const api = express();

api.use(require('./middleware/jwtHandler'));

api.use(express.json());

api.post('/login', preRequest(require('./route/auth/postMethod')));
api.get('/user', preRequest(require('./route/user/getMethod')));
api.post('/user', preRequest(require('./route/user/postMethod')));
api.patch('/user', preRequest(require('./route/user/patchMethod')));
api.put('/user', preRequest(require('./route/user/putMethod')));
api.post('/publication', preRequest(require('./route/publication/postMethod')));
api.get('/publication', preRequest(require('./route/publication/getMethod')));
api.post('/publication/comment', preRequest(require('./route/publication/comment/postMethod')));
api.get('/publication/comment', preRequest(require('./route/publication/comment/getMethod')));
api.post('/publication/like', preRequest(require('./route/publication/like/postMethod')));
api.get('/publication/rate', preRequest(require('./route/publication/rate/getMethod')));
api.get('/comments/all', preRequest(require('./route/comment/getMethod')));

module.exports = api;
