import Sequelize, {Model} from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
    },
    {
      sequelize,
    }
    );
  }
}

export default User;
