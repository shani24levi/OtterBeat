import express, { Request, Response, NextFunction } from 'express';
import { createClient } from 'redis';
import cache from 'memory-cache';
import { StatusCode, successResponse } from '../utils';
import { asyncHandler } from './async';
import { RedisConnector } from '../utils/redis/redisConnector';

// Cache middleware with redis server
export const cacheMiddlewareRedis = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  let cache = await RedisConnector();
  const key = '__express__' + req.originalUrl || req.url;
  cache.on('error', (err: any) => console.log('Redis Client Error', err));
  const cachedData = await cache.get(key);

  if (cachedData) {
    console.log('12cachedData');
    successResponse(req, res, JSON.parse(cachedData), StatusCode.Success.OK);
    return;
  }
  next();
});

// Cache middleware with memory-cache library
export const cacheMiddleware = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const key = '__express__' + req.originalUrl || req.url;
  const cachedData = cache.get(key);

  if (cachedData) {
    console.log('cachedData');
    successResponse(req, res, cachedData, StatusCode.Success.OK);
    return;
  }
  next();
});
