module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Posts.associate = (models) => {
    // Posts.hasMany(models.Comments, {
    //   onDelete: "cascade",
    // });
    Posts.belongsTo(models.Users, { // Thiết lập mối quan hệ
      foreignKey: 'userId',
      onDelete: 'CASCADE', // Xóa bình luận nếu bài viết bị xóa
    });
    Posts.hasMany(models.Likes, {
      foreignKey: 'postId',
      onDelete: 'CASCADE',
    });
  };
  return Posts;
};