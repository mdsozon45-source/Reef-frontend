import React, {Component, Fragment} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import PageSpinner from "../components/PageSpinner";
import DashboardPage from "../pages/DashboardPage";
import CardPage from "../pages/CardPage";
import TablePage from "../pages/TablePage";
import FormPage from "../pages/FormPage";
import Fish_Invertebrate_Data_Entry from "../pages/Fish_Invertebrate_Data_Entry";
class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                    <Switch>
                        <MainLayout breakpoint={this.props.breakpoint}>
                            <React.Suspense fallback={<PageSpinner />}>
                                <Route exact path="/" component={DashboardPage} />
                                <Route exact path="/substrate" component={CardPage} />
                                <Route exact path="/fish-invertebrates" component={Fish_Invertebrate_Data_Entry} />


                               {/* <Route exact path="/tables" component={TablePage} />
                                <Route exact path="/forms" component={FormPage} />*/}
                            </React.Suspense>
                        </MainLayout>
                    </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;