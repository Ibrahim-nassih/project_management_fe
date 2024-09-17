import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, EMPTY, from, of, switchMap} from "rxjs";
import * as UserActions from '../user/actions';
import {JwtAuthService} from "../../core/services/jwt-auth.service";
import {User} from "../../core/models/user";
import jwt_decode from 'jwt-decode'
import { map } from 'rxjs/operators'
import { Router, ActivatedRoute } from '@angular/router'
import {Store} from "@ngrx/store";
import {StorageService} from "../../core/services/storageService";
import {ToastService} from "../../core/services/toastService";
import {LOGIN_UNSUCCESSFUL} from "../user/actions";

@Injectable()
export class UserEffects  {

    constructor(
        private actions$: Actions,
        private jwtAuthService: JwtAuthService,
        private router: Router,
        private route: ActivatedRoute,
        private storage: StorageService,
        private toastService: ToastService,
        private store: Store<any>) {
    }



    login$ = createEffect(() =>
            this.actions$.pipe(
                ofType(UserActions.LOGIN),
                switchMap(({ payload }) => {
                    return this.jwtAuthService.login(payload).pipe(
                        map((response: any) => {
                            if (response.access_token) {
                                return this.isTokenExist(response.access_token)
                            } else {
                                this.toastService.show(
                                    "Erreur d'authentification" + response.error.error_description,
                                    { classname: 'bg-success text-white', delay: 5000 });
                            }
                        }),
                        catchError((error) => {
                            this.toastService.show(
                                'Erreur d\'authentification! Le nom d\'utilisateur ou le mot de passe est incorrect',
                                { classname: 'bg-danger text-white', delay: 5000 });
                            return from(EMPTY)
                        })
                    );
                })
            )
    );

    private isTokenExist(access_token: any): any {
        const decoded: any = jwt_decode(access_token)
        const user: User = {
            username: decoded.preferred_username,
            email: decoded.email,
            firstName: decoded.given_name,
            lastName: decoded.family_name,
        }
        console.log('firstname',user.firstName)
        console.log('token',access_token)
        this.storage.saveValue('user',user)
        this.storage.saveValue('accessToken',access_token)

        if (user) {
            if (user.username === 'super_admin') {
                this.connect(['SUPER_ADMIN'], user.firstName, user.lastName)
            } else {
                this.connect(decoded.realm_access.roles, user.firstName, user.lastName)
            }
        }
    }

    private connect(roles: string[], firstName: any, lastName: any) {
        if (roles.length >= 1) {
            this.toastService.show(
                'Vous êtes connecté à LeadSync avec succès!',
                { classname: 'bg-success text-white', delay: 5000 });
            this.storage.saveValue('accessAuthorization',this.jwtAuthService.encryptedRole(roles))
            this.navigateToDefault(roles)
        } else {
            this.toastService.show(
                'Erreur d\'authentification! Contactez l\'administrateur de l\'application pour fixer le problème.',
                { classname: 'bg-success text-white', delay: 5000 });
        }
    }
    private navigateToDefault(roles: string[]) {
        /*const returnUrl: string = this.route.snapshot.queryParams['returnUrl']
        if (returnUrl) {
            const regex = /[?&]([^=#]+)=([^&#]*)/g
            this.router.navigate([returnUrl.replace(regex, '')])
        } else {
            this.jwtAuthService.redirectToDefaultRouteIsTokenExist(roles)
        }*/
        this.jwtAuthService.redirectToDefaultRouteIsTokenExist(roles)
    }

    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.LOGOUT),
            switchMap(() => {
                return this.jwtAuthService.logout().pipe(
                    map(() => {
                        this.storage.removeValue('accessToken')
                        this.storage.removeValue('user')
                        this.storage.removeValue('accessAuthorization')
                        this.router.navigate(['/authentication/login'])
                    }),
                )
            })
        ),{ dispatch: false }
    );

    lockScreen = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.LOCKSCREEN),
            switchMap(() => {
                return this.jwtAuthService.logout().pipe(
                    map(() => {
                        this.storage.removeValue('accessAuthorization')
                        this.storage.removeValue('accessToken')
                        this.router.navigate(['/authentication/lockscreen'], {
                            queryParams: {
                                returnUrl: this.storage.retrieveValue('returnUrl'),
                            },
                        })
                    }),
                )
            })
        ),{ dispatch: false }
    );
}
