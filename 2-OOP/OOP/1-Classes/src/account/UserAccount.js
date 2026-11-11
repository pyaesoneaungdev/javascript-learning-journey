class UserAccount {
  #password;
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.#password = password;
  }
  login(email, password) {
    if (this.email === email && this.#password === password) {
      return `You can login`;
    } else {
      return `email or password  wrong!`;
    }
  }
  //getter
  showPassword() {
    return `${this.#password}`;
  }
  //setter
  changePassword(oldPassword, newPassword) {
    if (oldPassword === this.#password) {
      this.#password = newPassword;
      return "Password changed";
    } else {
      return "Old password wrong";
    }
  }
}
export default UserAccount;
