'use strict';

module.exports =
{
    async up(queryInterface, Sequelize)
    {
        await queryInterface.createTable('repositories',
        {
            id:
            {
                type: Sequelize.BIGINT.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            githubInstallationId:
            {
                type: Sequelize.BIGINT.UNSIGNED,
                allowNull: false,
                references:
                {
                    model: 'github_installations',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            githubRepositoryId:
            {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true
            },
            name:
            {
                type: Sequelize.STRING(150),
                allowNull: false
            },
            fullName:
            {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            defaultBranch:
            {
                type: Sequelize.STRING(150),
                allowNull: false,
                defaultValue: 'main'
            },
            isPrivate:
            {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            isActive:
            {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
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
        await queryInterface.dropTable('repositories');
    }
};