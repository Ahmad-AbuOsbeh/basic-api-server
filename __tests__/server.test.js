'use strict';

const server = require('../src/server');
const supertest = require('supertest');

//Food routes tests

describe('ALL FOOD ROUTES TESTS', () => {
  let obj = {
    type: 'banana',
    color: 'yelow',
  };

  let id;
  //Create a record using POST (Food route)
  describe('Create a record using POST (Food route)', () => {
    test('POST status test', async () => {
      const response = await supertest(server.app)
        .post('/api/v1/food')
        .send(obj);
      //   console.log('response', response);
      expect(response.status).toBe(200);
    });

    test('POST data(requested & recieved) test', async () => {
      const response = await supertest(server.app)
        .post('/api/v1/food')
        .send(obj);
      //   console.log('response', response);

      // console.log('response.body[0].data', response.body[0].data);
      // console.log(
      //   'response.body[0].data.stringify()',
      //   JSON.stringify(response.body[0].data)
      // );

      expect(response.body[0].data).toEqual(obj);
    });
  });

  //Read a list of records using GET (Food route)
  describe('Read a list of records using GET (Food route)', () => {
    test('GET all records status test', async () => {
      const response = await supertest(server.app).get('/api/v1/food');
      //   console.log('response', response);
      expect(response.status).toBe(200);
    });

    test('GET all records data test', async () => {
      const response = await supertest(server.app).get('/api/v1/food');
      //   console.log('response', response);
      id = response.body[0].id;
      console.log('response.body[0].data', response.body[0]);
      console.log(
        'response.body[0].data.stringify()',
        JSON.stringify(response.body[0].data)
      );

      expect(response.body[0].data).toBeTruthy();
    });
  });

  //Read a record using GET (Food route)
  describe('Read a record using GET  (Food route)', () => {
    test('GET one record status test', async () => {
      const response = await supertest(server.app).get(`/api/v1/food/${id}`);
      //   console.log('response', response);
      expect(response.status).toBe(200);
    });

    test('GET one record data test', async () => {
      const response = await supertest(server.app).get(`/api/v1/food/${id}`);
      //   console.log('response', response);

      console.log('response.body', response.body);
      // console.log(
      //   'response.body[0].data.stringify()',
      //   JSON.stringify(response.body[0].data)
      // );

      expect(response.body).toEqual({ id, data: obj });
    });
  });

  //Update a record using PUT(Food route)
  describe('Update a record using PUT (Food route)', () => {
    obj = {
      type: 'Updated banana',
      color: 'Updated yelow',
    };
    test('PUT status test', async () => {
      const response = await supertest(server.app)
        .put(`/api/v1/food/${id}`)
        .send(obj);
      //   console.log('response', response);
      expect(response.status).toBe(200);
    });

    test('PUT data(requested & recieved) test', async () => {
      const response = await supertest(server.app)
        .put(`/api/v1/food/${id}`)
        .send(obj);
      //   console.log('response', response);

      // console.log('response.body[0].data', response.body[0].data);
      // console.log(
      //   'response.body[0].data.stringify()',
      //   JSON.stringify(response.body[0].data)
      // );

      expect(response.body[0]).toEqual({ id, data: obj });
    });
  });

  //Destroy a record using DELETE (Food route)
  describe('Destroy a record using DELETE  (Food route)', () => {
    test('DELETE one record status test', async () => {
      const response = await supertest(server.app).delete(`/api/v1/food/${id}`);
      //   console.log('response', response);
      expect(response.status).toBe(200);
    });

    test('DELETE one record data test', async () => {
      const response = await supertest(server.app).delete(`/api/v1/food/${id}`);
      //   console.log('response', response);

      console.log('response.body', response.body);
      // console.log(
      //   'response.body[0].data.stringify()',
      //   JSON.stringify(response.body[0].data)
      // );

      expect(response.body).toEqual('undefined');
    });
  });
});

/////////////////////////////////////////////////////////////////////////////////////////
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//clothes routes tests

describe('ALL CLOTHES ROUTES TESTS', () => {
  let obj = {
    type: 'T-shirt',
    color: 'white',
  };

  let id;
  //Create a record using POST (clothes route)
  describe('Create a record using POST (clothes route)', () => {
    test('POST status test', async () => {
      const response = await supertest(server.app)
        .post('/api/v1/clothes')
        .send(obj);
      //   console.log('response', response);
      expect(response.status).toBe(200);
    });

    test('POST data(requested & recieved) test', async () => {
      const response = await supertest(server.app)
        .post('/api/v1/clothes')
        .send(obj);
      //   console.log('response', response);

      // console.log('response.body[0].data', response.body[0].data);
      // console.log(
      //   'response.body[0].data.stringify()',
      //   JSON.stringify(response.body[0].data)
      // );

      expect(response.body[0].data).toEqual(obj);
    });
  });

  //Read a list of records using GET (clothes route)
  describe('Read a list of records using GET (clothes route)', () => {
    test('GET all records status test', async () => {
      const response = await supertest(server.app).get('/api/v1/clothes');
      //   console.log('response', response);
      expect(response.status).toBe(200);
    });

    test('GET all records data test', async () => {
      const response = await supertest(server.app).get('/api/v1/clothes');
      //   console.log('response', response);
      id = response.body[0].id;
      console.log('response.body[0].data', response.body[0]);
      console.log(
        'response.body[0].data.stringify()',
        JSON.stringify(response.body[0].data)
      );

      expect(response.body[0].data).toBeTruthy();
    });
  });

  //Read a record using GET (clothes route)
  describe('Read a record using GET  (clothes route)', () => {
    test('GET one record status test', async () => {
      const response = await supertest(server.app).get(`/api/v1/clothes/${id}`);
      //   console.log('response', response);
      expect(response.status).toBe(200);
    });

    test('GET one record data test', async () => {
      const response = await supertest(server.app).get(`/api/v1/clothes/${id}`);
      //   console.log('response', response);

      console.log('response.body', response.body);
      // console.log(
      //   'response.body[0].data.stringify()',
      //   JSON.stringify(response.body[0].data)
      // );

      expect(response.body).toEqual({ id, data: obj });
    });
  });

  //Update a record using PUT(clothes route)
  describe('Update a record using PUT (clothes route)', () => {
    obj = {
      type: 'Updated T-shirt',
      color: 'Updated white',
    };
    test('PUT status test', async () => {
      const response = await supertest(server.app)
        .put(`/api/v1/clothes/${id}`)
        .send(obj);
      //   console.log('response', response);
      expect(response.status).toBe(200);
    });

    test('PUT data(requested & recieved) test', async () => {
      const response = await supertest(server.app)
        .put(`/api/v1/clothes/${id}`)
        .send(obj);
      //   console.log('response', response);

      // console.log('response.body[0].data', response.body[0].data);
      // console.log(
      //   'response.body[0].data.stringify()',
      //   JSON.stringify(response.body[0].data)
      // );

      expect(response.body[0]).toEqual({ id, data: obj });
    });
  });

  //Destroy a record using DELETE (clothes route)
  describe('Destroy a record using DELETE  (clothes route)', () => {
    test('DELETE one record status test', async () => {
      const response = await supertest(server.app).delete(
        `/api/v1/clothes/${id}`
      );
      //   console.log('response', response);
      expect(response.status).toBe(200);
    });

    test('DELETE one record data test', async () => {
      const response = await supertest(server.app).delete(
        `/api/v1/clothes/${id}`
      );
      //   console.log('response', response);

      console.log('response.body', response.body);
      // console.log(
      //   'response.body[0].data.stringify()',
      //   JSON.stringify(response.body[0].data)
      // );

      expect(response.body).toEqual('undefined');
    });
  });
});
