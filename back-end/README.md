# 3 Weeks of Music BackEnd Challenge | InterBit Platform

I have followed the below URL for creating the project:
https://www.pullrequest.com/blog/intro-to-using-typescript-in-a-nodejs-express-project/

middleware:
https://www.acuriousanimal.com/blog/20180315/express-async-middleware

## API Reference

| Method            | Request                             | Parameter     | Type                 | Description                           |
| :---------------- | :---------------------------------- | :------------ | :------------------- | :------------------------------------ |
| GET               | {{URL}}/api/songs                   | -             | -                    | All songs                             |
| GET               | {{URL}}/api/songs/${artist_name}    | `artist_name` | `string`             | **Required**. name of artist to fetch |
| GET, POST, DELETE | {{URL}}/api/songs/favorites/${song} | `song`        | `string` or `number` | **Required**. song name or song id    |
| GET               | {{URL}}/api/user                    | `token`       | `string`             | **Required**.logged user              |
| POST              | {{URL}}/api/auth                    | body: {""}    | `string`             | **Required**.login                    |
