import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ContactService {
    private readonly apiUrl = '/api';

    constructor(private readonly _http: HttpClient) {
    }

    async post(payload: Record<string, unknown>) {
        return await this._http.post<any>(`${this.apiUrl}/contact/`, payload).toPromise();
    }
}
