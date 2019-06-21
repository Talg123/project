import * as app from './main';
import { LoginRoutes } from './login';

new app.main(
    [
        new LoginRoutes(),
    ]
    );