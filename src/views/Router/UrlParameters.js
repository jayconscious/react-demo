import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const UrlParameters = props => {
    const { match } = props
    return (
        <div>
            <h2>URL Parameters Control</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/order`}>order</Link>
                </li>
                <li>
                    <Link to="/zillow-group">Zillow Group</Link>
                </li>
            </ul>
            <div>
            <Route
                path={`${match.url}/order/:direction(asc|desc)`}
                path="/order/:direction(asc|desc)"
                component={ComponentWithRegex}
            />
            </div>
        </div>
    );
}

const ComponentWithRegex = ({ match }) => (
    <div>
        <h3>Only asc/desc are allowed: {match.params.direction}</h3>
    </div>
)

export default UrlParameters;