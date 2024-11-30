module.exports = (sequelize, DataTypes) => {
    const Likes = sequelize.define("Likes");

    Likes.associate = (models) => {
        Likes.belongsTo(models.Posts, { // Thiết lập mối quan hệ
          foreignKey: 'postId',
          onDelete: 'CASCADE', // Xóa bình luận nếu bài viết bị xóa
        });
        Likes.belongsTo(models.Users, { // Thiết lập mối quan hệ
          foreignKey: 'userId',
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

    return Likes;
};