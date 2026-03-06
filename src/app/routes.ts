import { Router } from 'express';
import { dashboardController } from './controllers/web/dashboard.controller';
import { healthController } from './controllers/web/health.controller';

const router = Router();

router.get('/', function (req, res)
{
    return res.redirect('/dashboard');
});

router.get('/dashboard', dashboardController);
router.get('/health', healthController);

export 
{
    router
};