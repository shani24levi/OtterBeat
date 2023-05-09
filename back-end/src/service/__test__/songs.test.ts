const appSong = 'http://localhost:3000/api/user';

describe('Post add song to favorites /favorites/:song', () => {
  it('returns 401 when user not logged or token is not valid', async () => {
    const response = await request(appSong).post('/favorites/');
    expect(response.status).toBe(401);
    expect(response.body).toEqual({ success: false, error: 'Not authorized Access denied' });
  });

  it('returns 200 all songs array if there is no param or [] if there is no songs in db', async () => {
    const response = await request(appSong).post('/favorites/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true, error: response.body.data });
  });

  it('returns 400 status and error message when the song exists in user favorite list in database', async () => {
    const response = await request(app).post('/favorites');

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      success: false,
      error: 'Already exists',
    });
  });

  //to do - Create non prumium user with 20 songs to test and the delete him from db
  it('returns 401 when user has 20 songs and is not premium', async () => {
    const response = await request(app).post('/favorites/6');

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      success: false,
      error: 'Not Premium User Is limited to 20 songs',
    });
  });

  it('returns 401 when id param or id user is not in the db', async () => {
    const response = await request(app).post('/favorites/2134');

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      success: false,
      error: 'The id selected is not in the db',
    });
  });

  it('returns 200 status when data insreted correctly', async () => {
    const response = await request(app).post('/favorites/5');

    expect(response.status).toBe(200);
    expect({
      success: true,
      data: { token: response.body.data.user },
    }).toBeDefined();
  });
});
