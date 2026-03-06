import { Request, Response } from 'express';

function dashboardController(req: Request, res: Response)
{
    return res.render('dashboard/index',
    {
        title: 'Dashboard',
        appName: 'Security Platform'
    });
}

export 
{
    dashboardController
};