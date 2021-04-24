import { Injectable, Injector } from '@angular/core';
import { Model } from '@shared/models/base.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export abstract class GenericService<T extends Model> {
    protected readonly _apiUrl = '/api/';
    protected readonly _http: HttpClient;
    protected abstract _modelName: string;

    protected constructor(protected _injector: Injector) {
        this._http = _injector.get(HttpClient);
    }

    protected get _url() {
        return `${this._apiUrl}${this._modelName}/`;
    }

    async getOne(slugOrId: string): Promise<T> {
        const url = `${this._url}/${slugOrId}/`;
        return await this._http.get<T>(url).toPromise();
    }

    async getAll(): Promise<T[]> {
        return await this._http.get<T[]>(this._url).toPromise();
    }

    async post(payload: T): Promise<T> {
        return await this._http.post<T>(this._url, payload).toPromise();
    }
}
