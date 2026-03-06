import { Sequelize } from 'sequelize';

import { User, initUserModel } from './user.model';
import { Tenant, initTenantModel } from './tenant.model';
import { GithubInstallation, initGithubInstallationModel } from './github-installation.model';
import { Repository, initRepositoryModel } from './repository.model';

function initModels(sequelize: Sequelize)
{
    initTenantModel(sequelize);
    initUserModel(sequelize);
    initGithubInstallationModel(sequelize);
    initRepositoryModel(sequelize);

    Tenant.hasMany(User, {
        foreignKey: 'tenantId',
        as: 'users'
    });

    User.belongsTo(Tenant, {
        foreignKey: 'tenantId',
        as: 'tenant'
    });

    Tenant.hasMany(GithubInstallation, {
        foreignKey: 'tenantId',
        as: 'githubInstallations'
    });

    GithubInstallation.belongsTo(Tenant, {
        foreignKey: 'tenantId',
        as: 'tenant'
    });

    GithubInstallation.hasMany(Repository, {
        foreignKey: 'githubInstallationId',
        as: 'repositories'
    });

    Repository.belongsTo(GithubInstallation, {
        foreignKey: 'githubInstallationId',
        as: 'githubInstallation'
    });
}

export 
{
    User,
    Tenant,
    GithubInstallation,
    Repository,
    initModels
};