import { NextFunction, Request, Response } from 'express';

function errorMiddleware(error: Error, req: Request, res: Response, next: NextFunction)
{
    console.error(error);

    return res.status(500).json(
        {
            message: 'Internal Server Error'
        }
    );
}

export 
{
    errorMiddleware
};