import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Bio = () => (
    <StaticQuery
        query={bioQuery}
        render={(data) => (
            <div
                style={{
                    display: 'flex'
                }}>
                <p>
                    By{' '}
                    <strong>{data.site.siteMetadata.author}</strong>
                </p>
            </div>
        )}
    />
);

const bioQuery = graphql`
    query BioQuery {
        site {
            siteMetadata {
                author
            }
        }
    }
`;

export default Bio;
