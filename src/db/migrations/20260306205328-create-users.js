'use strict';

module.exports =
{
    async up(queryInterface, Sequelize)
    {
        await queryInterface.createTable('users',
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
            name:
            {
                type: Sequelize.STRING(150),
                allowNull: false
            },
            email:
            {
                type: Sequelize.STRING(191),
                allowNull: false,
                unique: true
            },
            password:
            {
                type: Sequelize.STRING(255),
                allowNull: true
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
        await queryInterface.dropTable('users');
    }
};