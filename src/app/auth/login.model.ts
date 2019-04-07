export class Data {
  constructor(public attributes: Attributes, public type: string = 'token') {}
}

export class Attributes {
  constructor(public username: string, public password: string) {}
}

export class LoginModel {
  public data: Data;

  constructor(username: string, password: string) {
    this.data = new Data(new Attributes(username, password));
  }
}
