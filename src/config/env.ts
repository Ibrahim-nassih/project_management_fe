// This class represents environment variables used in the application
export class Env {
    // The Keycloak realm for authentication
    public static realm = 'Lead';

    // The grant type used for authentication (e.g., 'password' for username/password flow)
    public static grant_type = 'password';

    // The client ID used for authentication with Keycloak
    public static client_id = 'AngularPromoteApp';

    // The client secret used for authentication with Keycloak
    public static client_secret = 'MsVdwPkXw7ZsWKqE832OXkC2IQepP1S2';

    // The audience for API requests (e.g., 'DjangoPromoteApp')
    // public static audience: 'DjangoPromoteApp';

}
