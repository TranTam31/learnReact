module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    Users.associate = (models) => {
      Users.hasMany(models.Posts, {
        foreignKey: 'userId',
        onDelete: "cascade",
      });
      // Users.hasMany(models.Likes, {
      //   onDelete: "cascade",
      // });
    };
    // sequelize.sync({ alter: true }) // Sử dụng { alter: true } để cập nhật bảng mà không mất dữ liệu
    // .then(() => {
    //     console.log("Database synchronized");
    // })
    // .catch(err => {
    //     console.error("Error synchronizing database:", err);
    // });
    return Users;
  };