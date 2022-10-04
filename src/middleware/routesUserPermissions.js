module.exports = {
  admin: [
    {
      route: '/user',
      method: 'get',
    },
    {
      route: '/user',
      method: 'post',
    },
    {
      route: '/user',
      method: 'put',
    },
    {
      route: '/user',
      method: 'patch',
    },
    {
      route: '/publication',
      method: 'get',
    },
    {
      route: '/publication',
      method: 'post',
    },
    {
      route: '/publication/comment',
      method: 'post',
    },
  ],
  regular: [
    {
      route: '/user',
      method: 'put',
    },
    {
      route: '/publication',
      method: 'get',
    },
    {
      route: '/publication',
      method: 'post',
    },
    {
      route: '/publication/comment',
      method: 'post',
    },
  ],

  anonymous: [
    {
      route: '/publication',
      method: 'get',
    },
    {
      route: '/login',
      method: 'post',
    },
  ],
};
