'use strict';

module.exports =
{
    async up(queryInterface, Sequelize)
    {
        await queryInterface.createTable('tenants',
        {
            id:
            {
                type: Sequelize.BIGINT.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            name:
            {
                type: Sequelize.STRING(150),
                allowNull: false
            },
            slug:
            {
                type: Sequelize.STRING(150),
                allowNull: false,
                unique: true
            },
            createdAt:
            {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updatedAt:
            {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        });
    },

    async down(queryInterface)
    {
        await queryInterface.dropTable('tenants');
    }
};