const supertest = require('supertest');
const request = supertest(require('../../../api'));

beforeAll(async () => {
  await process.nextTick(() => {});
});

test('GET /publication/comment must responded with status = 200, message = "Publication found successfully.".', () =>
  request
    .get('/publication/comment')
    .set('Content-Type', 'application/json')
    .send(
      JSON.stringify({
        publicationId: 1,
      })
    )
    .then((res) => {
      expect(res.status).toBe(200);
      if (res.body.data.comment.length) {
        expect(res.body.message).toBe(
          'Publication comments found successfully.'
        );
        expect(res.body.data.comment).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              comment: expect.any(String),
              user: expect.any(Object),
              publication: expect.any(Object),
            }),
          ])
        );
      } else {
        expect(res.body.message).toBe('No publication comments was found.');
      }
    }));

test('GET /publication/comment must responded with status = 400, message = "The parameter id should be an integer greater than or equal to zero.".', () =>
  request
    .get('/publication/comment')
    .set('Content-Type', 'application/json')
    .send(
      JSON.stringify({
        publicationId: [1],
      })
    )
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.message).toBe('The parameter id should be an integer greater than or equal to zero.');
    }));
test('GET /publication/comment must responded with status = 400, message = "Additional parameters are not allowed. The parameter publicationId is required.".', () =>
  request
    .get('/publication/comment')
    .set('Content-Type', 'application/json')
    .send(
      JSON.stringify({
        additionalParameters: 'AdditionalParameters'
      })
    )
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.message).toBe('Additional parameters are not allowed. The parameter publicationId is required.');
    }));
