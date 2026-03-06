'use strict';

module.exports =
{
    async up(queryInterface, Sequelize)
    {
        await queryInterface.createTable('github_installations',
        {
            id:
            {
                type: Sequelize.BIGINT.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            tenantId:
            {
                type: Sequelize.BIGINT.UNSIGNED,
                allowNull: false,
                references:
                {
                    model: 'tenants',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            githubInstallationId:
            {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true
            },
            githubAccountLogin:
            {
                type: Sequelize.STRING(150),
                allowNull: false
            },
            githubAccountType:
            {
                type: Sequelize.STRING(50),
                allowNull: false
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
        await queryInterface.dropTable('github_installations');
    }
};