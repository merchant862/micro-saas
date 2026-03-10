import { Router } from 'express';
import { dashboardController } from './controllers/web/dashboard.controller';
import { healthController } from './controllers/web/health.controller';
import { githubInstallCallbackController } from './controllers/web/github-install.controller';

const router = Router();

router.get('/', function (req, res)
{
    return res.redirect('/dashboard');
});

router.get('/dashboard', dashboardController);
router.get('/health', healthController);
router.get('/github/install/callback', githubInstallCallbackController);

export {
    router
};