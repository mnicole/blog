import React from 'react';
import { Link } from 'gatsby';

const Layout = ({ title, children }) => (
    <div
        style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '30px'
        }}>
        <h1>
            <Link to={'/'}>{title}</Link>
        </h1>
        {children}
    </div>
);

export default Layout;
