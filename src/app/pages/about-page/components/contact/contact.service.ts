import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    private readonly API_URL = '/api';

    public constructor(private readonly http: HttpClient) {
    }

    public async sendContactInfo(payload: Object) {
        return await this.http.post<any>(`${this.API_URL}/contact/`, payload).toPromise();
    }
}
