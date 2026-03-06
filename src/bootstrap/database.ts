import { sequelize } from '../db/sequelize';
import { initModels } from '../db/models';

async function connectDatabase()
{
    initModels(sequelize);

    await sequelize.authenticate();
}

export {
    connectDatabase
};