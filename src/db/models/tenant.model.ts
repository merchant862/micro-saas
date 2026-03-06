import { DataTypes, InferAttributes, InferCreationAttributes, CreationOptional, Model, Sequelize } from 'sequelize';

class Tenant extends Model<InferAttributes<Tenant>, InferCreationAttributes<Tenant>>
{
    declare id: CreationOptional<number>;
    declare name: string;
    declare slug: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

function initTenantModel(sequelize: Sequelize)
{
    Tenant.init(
        {
            id:
            {
                type: DataTypes.BIGINT.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
            },
            name:
            {
                type: DataTypes.STRING(150),
                allowNull: false
            },
            slug:
            {
                type: DataTypes.STRING(150),
                allowNull: false,
                unique: true
            },
            createdAt:
            {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            },
            updatedAt:
            {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            }
        },
        {
            sequelize,
            tableName: 'tenants',
            modelName: 'Tenant',
            timestamps: true
        }
    );

    return Tenant;
}

export 
{
    Tenant,
    initTenantModel
};