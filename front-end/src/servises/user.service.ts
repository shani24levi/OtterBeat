import {
  UserResponse,
  ResponseToken,
  UserState,
} from './../types/models/userModel';
import { otterbeatApi, authUrl } from '.';
import { decodedToken, setAuthToken } from '../utils';
import { AxiosError } from 'axios';

export const login = async (email: string, password: string) => {
  try {
    const token = await otterbeatApi.post<ResponseToken>(`${authUrl}/login`, {
      email,
      password,
    });

    console.log('tokenRespose', token);
    if (!token.data || !token.data.success) return token.data as ResponseToken;
    const tokenStr = token.data.data!.token;
    setAuthToken(tokenStr);

    const user: UserState = decodedToken(tokenStr);

    return {
      success: true,
      data: user,
    } as UserResponse;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return error;
  }
};

// export const updateTodo = async (todo) => {
//   await delay()
//   const response = await todosApi.patch(`${todosUrlEndpoint}/${todo.id}`, todo)
//   return response.data
// }

// export const deleteTodo = async ({ id }) => {
//   await delay()
//   const response = await todosApi.delete(`${todosUrlEndpoint}/${id}`)
//   return response.data
// }
