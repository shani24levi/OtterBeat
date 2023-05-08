const appSong = 'http://localhost:3000/api/songs';

describe('Post /favorites/:song', () => {
  it('returns 401 when user not logged', async () => {
    const response = await request(appSong).post('/favorites/');
    expect(response.status).toBe(401);
    expect(response.body).toEqual({ success: false, error: 'Not authorized Access denied' });
  });

  it('returns 200 all songs array if there is no param', async () => {
    const response = await request(appSong).post('/favorites/');

    expect(response.status).toBe(200);
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
