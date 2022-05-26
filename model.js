const { is } = require("express/lib/request");

module.exports.post = class Post {
  constructor(title, content, image) {
    this.title = title;
    this.content = content;
    this.image = image;
  }
  editSomething(whatToEdit, newVersion) {
    this.whatToEdit = newVersion;
  }
};

module.exports.user = class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  changeUsername(password, newUsername) {
    if (password === this.password) this.username = newUsername;
    return;
  }
  changePassword(oldPassword, newPassword) {
    if (oldPassword === this.password) this.password = newPassword;
  }
};

module.exports.admin = class Admin extends module.exports.user {
  constructor(username, password, email_username, email_password, is_admin) {
    super(username, password);
    this.email_password = email_password;
    this.email_username = email_username;
    this.is_admin = is_admin;
  }
};
