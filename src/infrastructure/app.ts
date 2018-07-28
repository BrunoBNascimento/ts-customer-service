import * as express  from "express";

type Application = express.Application

export default class App {

    private _expressApplication: Application;
    private middlewares: Array<any>;
    private routes: Array<any>;

    get expressApplication(): Application {
        return this._expressApplication;
    }

    constructor(routes, middlewares = []) {
        this._expressApplication = express();
        this.middlewares = middlewares;
        this.routes = routes;
        this.config();
    }

    private config(): void{
        const { expressApplication, middlewares, routes } = this;
        middlewares && middlewares.map(middleware => expressApplication.use(middleware));
        routes && routes.map(({path, controller, method}) => expressApplication[method](path, controller));
    }

}
