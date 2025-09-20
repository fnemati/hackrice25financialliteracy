import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { defineComponents, IconRegistry} from '@tylertech/forge';
import { tylIconCancel, tylIconCheckCircle } from '@tylertech/tyler-icons';
defineComponents(); // registers all Forge custom elements

IconRegistry.define([tylIconCheckCircle, tylIconCancel]);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
