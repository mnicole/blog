import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import pageStyles from './page.module.css';

const TagsPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title;
    const tags = data.allMarkdownRemark.group;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="All tags" />
            <h3>Tags</h3>
            {tags.map(({ fieldValue, totalCount }) => (
                <div key={fieldValue}>
                    <Link to={`/tags/${fieldValue}/`}>
                        {fieldValue} ({totalCount})
                    </Link>
                </div>
            ))}
        </Layout>
    );
};

export default TagsPage;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`;
