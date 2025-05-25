import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//use module, use standalone components
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

//better use standalone component x scalability & separations
bootstrapApplication(AppComponent);
