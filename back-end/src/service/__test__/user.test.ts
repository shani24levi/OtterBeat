const request = require('supertest');
const app = 'http://localhost:3000/api/auth';

describe('POST /login', () => {
  it('returns 401 status and error message if email or password is missing', async () => {
    const response = await request(app).post('/login').send({});

    expect(response.status).toBe(401);
    expect(response.body).toEqual({ success: false, error: 'email\\password is missing' });
  });

  it('returns 404 status and error message if email does not exist in the database', async () => {
    const response = await request(app).post('/login').send({ email: 'nonexistent@example.com', password: 'password' });

    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      success: false,
      error: 'email is not exist',
    });
  });

  it('returns 400 status and error message if password hashed dont mach', async () => {
    const response = await request(app).post('/login').send({ email: 'shani@gmail.com', password: 'password' });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      success: false,
      error: 'password dont match',
    });
  });

  it('returns 200 status and token if email and password are correct', async () => {
    const response = await request(app).post('/login').send({ email: 'shani@gmail.com', password: '1234' });

    expect(response.status).toBe(200);
    expect({
      success: true,
      data: { token: response.body.data.token },
    }).toBeDefined();
  });
});

describe('POST /signing', () => {
  it('returns 401 status and error message if email or password is missing', async () => {
    const response = await request(app).post('/signing').send({});

    expect(response.status).toBe(401);
    expect(response.body).toEqual({ success: false, error: 'email\\password is missing' });
  });

  it('returns 400 status and error message if email alrady exist in the database', async () => {
    const response = await request(app).post('/signing').send({ email: 'shani@example.com', password: 'password' });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      success: false,
      error: 'Already exists',
    });
  });

  it('returns 400 status and error message if password hashed less the 4 digits', async () => {
    const response = await request(app).post('/signing').send({ email: 'shani@gmail.com', password: '' });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      success: false,
      error: 'password must be 4 digits long',
    });
  });

  it('returns 201 when new email and password created in db', async () => {
    const response = await request(app).post('/signing').send({ email: 'shani3@gmail.com', password: '1234' });

    expect(response.status).toBe(201);
    expect({
      success: true,
      data: { token: response.body.data.user },
    }).toBeDefined();
  });
});
