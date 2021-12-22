import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { routes } from '../router';

const AppRouter = () => {
    return (
        <div>
            <Switch>
                {routes.map(route => 
                    <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                    />
                )}
            </Switch>
        </div>
    );
};

export default AppRouter;