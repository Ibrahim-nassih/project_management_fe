import { Injectable } from '@angular/core';

// Define constants for storing token and user data in session storage
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  // Method to clear session storage, effectively signing the user out
  signOut(): void {
    window.sessionStorage.clear();
  }

  // Method to save the authentication token to session storage
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY); // Remove any existing token
    window.sessionStorage.setItem(TOKEN_KEY, token); // Save the new token
  }

  // Method to retrieve the authentication token from session storage
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY); // Retrieve token from session storage
  }

  // Method to save user data to session storage
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY); // Remove any existing user data
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user)); // Save the new user data
  }

  // Method to retrieve user data from session storage
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY); // Retrieve user data from session storage
    if (user) {
      return JSON.parse(user); // Parse and return user data if found
    }

    return {}; // Return an empty object if no user data found
  }
}
