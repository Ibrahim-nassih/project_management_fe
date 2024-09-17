import { Injectable } from '@angular/core'
import {EMPTY, Observable, of} from 'rxjs'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Router } from '@angular/router'
import {Env} from "../../../config/env";
import {EncryptDecryptService} from "./encrypt-decrypt/encrypt-decrypt.service";
import {StorageService} from "./storageService";
import {JwtHelperService} from "@auth0/angular-jwt";
import {MENU} from "../../layouts/sidebar/menu";

@Injectable()
export class JwtAuthService {
    readonly helper = new JwtHelperService()

    constructor(
        private http: HttpClient,
        private router: Router,
        private encryptDecryptService: EncryptDecryptService,
        private storage: StorageService
    ) {}

    login(payload: any): Observable<any> {
        const data = new HttpParams()
            .set('grant_type', Env.grant_type)
            .set('client_id', Env.client_id)
            .set('client_secret', Env.client_secret)
            .set('username', payload.username)
            .set('password', payload.password)
        return this.http.post(
            `/auth/realms/${Env.realm}/protocol/openid-connect/token`,
            data.toString(),
            {
                headers: new HttpHeaders().set(
                    'Content-Type',
                    'application/x-www-form-urlencoded',
                ),
            },
        )
    }

    encryptedRole(value: any): any {
        return this.encryptDecryptService.set(value)
    }

    redirectToDefaultRouteIsTokenExist(accessAuthorization: string[]) {

        const userRoles = accessAuthorization;
        const isSuperAdmin = userRoles.includes('SUPER_ADMIN');

        this.storage.saveValue('defaultUrl','/#/spaces')
        this.router.navigate(['spaces']);

       /* if (isSuperAdmin) {
            this.storage.saveValue('defaultUrl','/#/spaces')
            this.router.navigate(['spaces']);
        } else {
            const menuElement: any = of(
                new Set(
                    MENU.filter((menuItem: any) =>
                        userRoles.find((role: string) => menuItem.role === role),
                    ),
                ),
            );
            menuElement.subscribe((menuItem: any) => {
                const first = [...menuItem][0];
                if (first) {
                    const child = of(
                        new Set(
                            first.subItems.filter((item: any) =>
                                userRoles.find((role: string) => item.role === role),
                            ),
                        ),
                    );
                    child.subscribe((childItem: any) => {
                        const childFirst = [...childItem][0];
                        this.storage.saveValue('defaultUrl','/#' + (childFirst as any).link)
                        this.router.navigate([(childFirst as any).link]);
                    });
                }
            });
        }*/
    }

     isTokenExpired() {
        const token = this.storage.retrieveValue('accessToken')
        return this.helper.isTokenExpired(token)
    }

    isAuthorizedRoles(roles: any[]): boolean {
        if (this.isTokenExpired() === false) {
            const localStorageRoles = this.getRoles()
            return roles.filter(r => localStorageRoles?.includes(r)).length > 0
        }
        return false
    }
    getRoles(): string[] {
        const decrypted = this.decryptedRole(
            this.storage.retrieveValue('accessAuthorization'),
        )
        return decrypted
    }
    decryptedRole(accessAuthorization: any): any {
        return this.encryptDecryptService.get(accessAuthorization)
    }
    getRetourUrl(): string {
        return this.storage.retrieveValue('app.settings.returnUrl')
    }
    logout(): Observable<any> {
        return this.http.get(
            `/auth/realms/${Env.realm}/protocol/openid-connect/logout`,
        )
    }

    register(data:any): Observable<any> {
        return this.http.post('api/register', data)
    }
   /*
    currentAccount(): Observable<any> {
        const accessToken = store.get('accessToken')
        const accessUser: User = store.get('user')

        const params = accessToken
            ? {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    accessToken: accessToken,
                },
            }
            : {}

        return this.http.get(
            `/api/employee?username=${accessUser?.username}`,
            params,
        )
    }



    refreshToken(): Observable<any> {
        const payload = new HttpParams()
            .set('client_id', this.env.client_id)
            .set('grant_type', 'refresh_token')
            .set('client_secret', this.env.client_secret)

        return this.http.post(
            '/auth/protocol/openid-connect/token',
            payload.toString(),
            {
                headers: new HttpHeaders().set(
                    'Content-Type',
                    'application/x-www-form-urlencoded',
                ),
            },
        )
    }



    getUsername(): string {
        const token = store.get('accessToken')
        return this.helper.decodeToken(token).preferred_username
    }
    */

    navigateBack(route:string){
        const def:string='/#/' + route;
        console.log(def);
        this.storage.saveValue('defaultUrl', def);
        this.router.navigate([route]);
    }
}
