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


module.exports.admin = class Admin extends User{
    super(username, password);
    constructor(email_username, email_password){
        this.password = password;
        this.username = username;
        this.email_password = email_password;
        this.email_username = email_username;

    }

}