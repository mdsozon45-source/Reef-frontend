import Page from '../components/Page';
import {NumberWidget} from '../components/Widget';
import React from 'react';
import {Col, Row,} from 'reactstrap';

const today = new Date();
const lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7,
);

class DashboardPage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Page
                className="DashboardPage"
                title="Dashboard"
                breadcrumbs={[{name: 'Dashboard', active: true}]}
            >




            </Page>
        );
    }
}

export default DashboardPage;
