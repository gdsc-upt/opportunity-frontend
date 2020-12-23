import { enableProdMode } from '@angular/core';

import { environment } from '@environments/environment';
import { renderModule } from '@angular/platform-server';
import { AppServerModule } from './app/app.server.module';

if (environment.production) {
    enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
export { renderModule, renderModuleFactory } from '@angular/platform-server';
