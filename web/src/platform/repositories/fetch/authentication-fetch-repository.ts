import {
  AuthenticationRepository,
  User,
  RawUser,
  SignUpRepositoryParams,
  SignInRepositoryParams,
} from '../../../core';

export class AuthenticationFetchRepository implements AuthenticationRepository {
  constructor(
    private readonly hostAddress: string,
    private readonly authorizationToken?: string,
  ) {}

  async signMe(): Promise<User> {
    const response = await fetch(`${this.hostAddress}/auth/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.authorizationToken}`,
      },
    });

    return this.handleResponse(response);
  }

  async signOut(): Promise<void> {
    const response = await fetch(`${this.hostAddress}/auth/sign-out`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.authorizationToken}`,
      },
    });

    if (!response.ok) {
      const body = await response.json();
      throw new Error(body.message);
    }
  }

  async signUp(params: SignUpRepositoryParams): Promise<User> {
    const response = await fetch(`${this.hostAddress}/auth/sign-up`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: { 'Content-Type': 'application/json' },
    });

    return this.handleResponse(response);
  }

  async signIn(params: SignInRepositoryParams): Promise<User> {
    const response = await fetch(`${this.hostAddress}/auth/sign-in`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: { 'Content-Type': 'application/json' },
    });

    return this.handleResponse(response);
  }

  private async handleResponse(response: Response) {
    const body = await response.json();

    if (!response.ok) {
      throw new Error(body.message);
    }

    return new RawUser(body);
  }
}
