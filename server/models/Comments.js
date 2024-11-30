// module.exports = (sequelize, DataTypes) => {
//   const Comments = sequelize.define("Comments", {
//     commentBody: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });

//   return Comments;
// };

module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    commentBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Comments.associate = (models) => {
    Comments.belongsTo(models.Posts, { // Thiết lập mối quan hệ
      foreignKey: 'postId',
      onDelete: 'CASCADE', // Xóa bình luận nếu bài viết bị xóa
    });
  };

  // sequelize.sync({ alter: true }) // Sử dụng { alter: true } để cập nhật bảng mà không mất dữ liệu
  //   .then(() => {
  //       console.log("Database synchronized");
  //   })
  //   .catch(err => {
  //       console.error("Error synchronizing database:", err);
  //   });

  return Comments;
};
