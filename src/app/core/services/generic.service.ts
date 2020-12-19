import { Injectable, Injector } from '@angular/core';
import { Model } from '../../shared/models/base.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export abstract class GenericService<T extends Model> {
    protected abstract modelName: string;
    protected apiUrl = '/api/';
    protected http: HttpClient;

    protected constructor(protected injector: Injector) {
        this.http = injector.get(HttpClient);
    }

    public async getOne(slug: string): Promise<T> {
        const url = `${this.apiUrl}${this.modelName}/${slug}/`;
        return await this.http.get<T>(url).toPromise();
    }

    public async getAll(): Promise<T[]> {
        const url = `${this.apiUrl}${this.modelName}/`;
        return await this.http.get<T[]>(url).toPromise();
    }
}
