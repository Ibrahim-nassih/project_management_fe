import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";


@Injectable({
    providedIn: 'root',
})
export class DataTableService{
    constructor(private _http: HttpClient) {}

    personneUrl = 'api/users'

    getData(request: any): Observable<any> {
        return this._http.get<any>(this.personneUrl, {
            params: request
        })
    }
}
