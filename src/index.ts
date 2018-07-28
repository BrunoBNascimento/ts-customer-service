import App from "./infrastructure/app";
import middlewares from "./infrastructure/middlewares";
import routes from './infrastructure/routes'

const PORT = 3000;

const expressApplication = new App(routes, middlewares).expressApplication

expressApplication.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})
