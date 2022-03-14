import React from 'react';
import './style/adminPanel.scss';
import {BrowserRouter,Route, Switch, Redirect} from "react-router-dom";
import AppRoute from "./route/AppRoute";
import "./asset/css/bootstrap.min.css";
import "./asset/css/fontawesome.css";
import "./asset/css/animate.min.css";
import "./asset/css/main.css";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <AppRoute/>
            </BrowserRouter>
        );
    }
}

const query = ({ width }) => {
    if (width < 575) {
        return { breakpoint: 'xs' };
    }

    if (576 < width && width < 767) {
        return { breakpoint: 'sm' };
    }

    if (768 < width && width < 991) {
        return { breakpoint: 'md' };
    }

    if (992 < width && width < 1199) {
        return { breakpoint: 'lg' };
    }

    if (width > 1200) {
        return { breakpoint: 'xl' };
    }

    return { breakpoint: 'xs' };
};

export default App;
