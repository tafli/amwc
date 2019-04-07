export class Token {
  data: {
    id: string;
    type: string;
    attributes: {
      expires_in: number;
      refresh_token: string;
      provider: string;
      user_id: string;
      scopes: string;
    };
  };

  constructor(
    id: string,
    type: string,
    expiresIn: number,
    refreshToken: string,
    provider: string,
    userId: string,
    scopes: string
  ) {
    this.data.id = id;
    this.data.type = type;
    this.data.attributes.expires_in = expiresIn;
    this.data.attributes.refresh_token = refreshToken;
    this.data.attributes.provider = provider;
    this.data.attributes.user_id = userId;
    this.data.attributes.scopes = scopes;
  }
}
