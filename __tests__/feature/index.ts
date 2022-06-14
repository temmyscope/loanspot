import request from 'supertest'
import { Express } from 'express-serve-static-core';
import express from 'express';
import mongoose from 'mongoose'
import { exit } from 'process';

let app: Express;

beforeAll(async () => {
  app = express();
});

describe('POST /search-and-sort', () => {
  it('should return 422 code & validation failed error', async() => {
    //request without the body should fail
    request(app)
      .post(`/api/search-and-sort`)
      .expect('Content-Type', /json/)
      .expect(422)
      .end((err, res) => {
        if (err) return err;
        console.log(res);
      });
    
    //request with empty fields in the body should fail
    request(app)
      .post(`/api/search-and-sort`)
      .send({ needle: "", haystack: [] })
      .expect('Content-Type', /json/)
      .expect(422)
      .end((err, res) => {
        if (err) return err;
        console.log(res);
      });
  })

  it('should return 200 & valid response', async()=> {
    request(app)
      .post(`/api/search-and-sort`)
      .send({ 
        needle: "a", haystack: [13, 2, 5, 'b', 3, 'a', 12, 9 ] 
      }).expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return err;

        expect(res.body).toMatchObject({
          success: true, message:"Computation Completed", data: {
            "needle": "a", "haystack": [ 13, 2, 5, 'b', 3, 'a', 12, 9 ]
          }
        });
        expect(res.body).toMatchObject({

        })
      });
  })

});

afterAll(async () => {
  mongoose.connection.close();
});
