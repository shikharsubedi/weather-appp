import { Request, Response, NextFunction } from 'express';

export async function fetchCurrentWeather(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  res.status(200).json({
    message: 'success',
  });
  return;
}
