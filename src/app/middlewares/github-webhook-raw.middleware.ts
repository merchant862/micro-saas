import { Request, Response, NextFunction } from 'express';

function githubWebhookRawBodyMiddleware(req: Request, res: Response, next: NextFunction)
{
    const chunks: Buffer[] = [];

    req.on('data', function (chunk)
    {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    });

    req.on('end', function ()
    {
        (req as Request & { rawBody?: Buffer }).rawBody = Buffer.concat(chunks);
        next();
    });

    req.on('error', function (error)
    {
        next(error);
    });
}

export {
    githubWebhookRawBodyMiddleware
};