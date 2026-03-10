import { Request, Response } from 'express';
import { GithubWebhookHeaders } from '../../../modules/github/github.types';
import { verifyGithubWebhookSignature } from '../../../modules/github/github.service';

function githubWebhookController(req: Request, res: Response)
{
    const headers: GithubWebhookHeaders =
    {
        event: req.header('x-github-event') ?? undefined,
        delivery: req.header('x-github-delivery') ?? undefined,
        signature256: req.header('x-hub-signature-256') ?? undefined
    };

    const rawBody = (req as Request & { rawBody?: Buffer }).rawBody;

    if (!rawBody)
    {
        return res.status(500).json(
            {
                message: 'Raw body is not available for webhook verification'
            }
        );
    }

    const isSignatureValid = verifyGithubWebhookSignature(rawBody, headers.signature256);

    if (!isSignatureValid)
    {
        return res.status(401).json(
            {
                message: 'Invalid webhook signature'
            }
        );
    }

    return res.status(200).json(
        {
            message: 'GitHub webhook verified',
            data:
            {
                event: headers.event ?? null,
                delivery: headers.delivery ?? null
            }
        }
    );
}

export {
    githubWebhookController
};