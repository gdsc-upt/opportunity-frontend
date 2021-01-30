import { User } from './user';

export interface LoginRequestData {
    email: string;
    password: string;
}

export interface LoginResponseData {
    access_token: string;
    refresh_token: string;
    user: User;
}

export interface RegisterRequestData {
    first_name: string;
    last_name: string;
    email: string;
    password1: string;
    password2: string;
}

export interface RefreshTokenRequestData {
    refresh: string;
}

export interface RefreshTokenResponseData {
    access: string;
}

export interface VerifyTokenRequestData {
    token: string;
}
