import React from 'react';
// eslint-disable-next-line
import pageStyles from './page.module.css';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = ({ location }) => (
    <Layout location={location}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>Sorry, this page does not exist.</p>
    </Layout>
);

export default NotFoundPage;
