import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    ForeignKey,
    Model,
    Sequelize
} from 'sequelize';

import { GithubInstallation } from './github-installation.model';

class Repository extends Model<InferAttributes<Repository>, InferCreationAttributes<Repository>>
{
    declare id: CreationOptional<number>;
    declare githubInstallationId: ForeignKey<GithubInstallation['id']>;
    declare githubRepositoryId: string;
    declare name: string;
    declare fullName: string;
    declare defaultBranch: string;
    declare isPrivate: boolean;
    declare isActive: CreationOptional<boolean>;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

function initRepositoryModel(sequelize: Sequelize)
{
    Repository.init(
        {
            id:
            {
                type: DataTypes.BIGINT.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
            },
            githubInstallationId:
            {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            githubRepositoryId:
            {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true
            },
            name:
            {
                type: DataTypes.STRING(150),
                allowNull: false
            },
            fullName:
            {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            defaultBranch:
            {
                type: DataTypes.STRING(150),
                allowNull: false,
                defaultValue: 'main'
            },
            isPrivate:
            {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            isActive:
            {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true
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
            tableName: 'repositories',
            modelName: 'Repository',
            timestamps: true
        }
    );

    return Repository;
}

export {
    Repository,
    initRepositoryModel
};