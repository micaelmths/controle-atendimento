module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sessoes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      horaInicial: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      horaFinal: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      observacoes: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => queryInterface.dropTable('sessoes'),
};
