import request from 'supertest'
import { Express } from 'express-serve-static-core';
import express from 'express';

let app: Express;

beforeAll(async () => {
  app = express();
});

describe('POST /search-and-sort', () => {
  it('should return 422 code & validation failed error', async() => {
    request(app)
      .post(`/api/search-and-sort`)
      //.send({ needle: "", haystack: [] })
      .expect('Content-Type', /json/)
      .expect(422)
      .end((err, res) => {
        if (err) return err;
        console.log(res);
      });
  })

  it('should return 200 & valid response if shortId param is set', async()=> {
    request(app)
      .post(`/api/resolve`)
      .send({ needle: "", haystack: [] })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return err;

        expect(res.body).toMatchObject({
          'success': true, data: { longUrl: '' }
        });
      });
  })

});