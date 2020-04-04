import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        sobrenome: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        email: Sequelize.STRING,
        codigo_cigam: Sequelize.STRING,
        is_sales: Sequelize.BOOLEAN
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      if(user.password){
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }

  checkPassword(password){
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
