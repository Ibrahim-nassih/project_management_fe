# LeadSync Frontend

LeadSync is a web application for project management and bug tracking implemented with Django and Angular.

## Getting Started

To start using LeadSync, follow these steps:

1. Clone the backend repository:
- git clone https://github.com/Ibrahim-nassih/leadSync_Backend.git

2. Clone the frontend repository:
- git clone https://github.com/Ibrahim-nassih/leadSync_Frontend.git

3. Navigate to the frontend directory:
- cd leadSync_Frontend

4. Install Angular dependencies:
- npm install

## Authentication with Keycloak

LeadSync uses Keycloak for authentication. Keycloak is an open-source Identity and Access Management solution that ensures secure access to the application.

### Setting Up Keycloak

1. **Install Keycloak**: Download and install Keycloak from [here](https://www.keycloak.org/downloads.html) on your server.

2. **Create a Realm**: In Keycloak, create a new realm for your LeadSync application.

3. **Create a Client**: Within your realm, create a new client representing your Django application. Configure the client with appropriate settings, including redirect URIs.

### Integrating Token Validation

LeadSync integrates token validation using Keycloak to restrict access to authenticated users. Here's how it works:

1. **Initialization**: Initialize a `KeycloakOpenID` instance to interact with the Keycloak server.

```
export class Env {
    public static realm = 'Lead'
    public static grant_type = 'password'
    public static client_id = 'AngularPromoteApp'
    public static client_secret = 'Tx7VjdtbPOB9BEidPR0k4hA8vvpBMQcU'
    public static audience: 'DjangoPromoteApp'
    public static id_innova = '15122dec-b629-46ef-a601-d0af48757a7d'
}

```
## Author
LeadSync frontend is authored by Ibrahim Nassih.

## Visuals
Watch a demo of LeadSync:
[![Video Demo](https://img.youtube.com/vi/PZOanoZQVbM/0.jpg)](https://www.youtube.com/watch?v=PZOanoZQVbM)