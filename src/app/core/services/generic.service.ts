import { Injectable, Injector } from '@angular/core';
import { Model } from '@shared/models/base.model';
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

    private get url() {
        return `${this.apiUrl}${this.modelName}/`;
    }

    public async getOne(slug: string): Promise<T> {
        const url = `${this.url}/${slug}/`;
        return await this.http.get<T>(url).toPromise();
    }

    public async getAll(): Promise<T[]> {
        return await this.http.get<T[]>(this.url).toPromise();
    }

    public async post(payload: T): Promise<T> {
        return await this.http.post<T>(this.url, payload).toPromise();
    }
}
