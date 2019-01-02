import React, { Fragment } from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPostTemplate = ({ data, pageContext, location }) => {
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata.title;
    const { previous, next } = pageContext;
    const { title, excerpt, date, tags } = post.frontmatter;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title={title} description={excerpt} />
            <h3>{title}</h3>
            <p
                style={{
                    textTransform: 'uppercase',
                    fontSize: '14px'
                }}>
                {date}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr />

            <p
                style={{
                    textTransform: 'uppercase',
                    fontSize: '14px'
                }}>
                {tags &&
                    tags.length &&
                    tags.map((tag) => (
                        <Fragment key={tag}>
                            <Link to={`/tags/${tag}/`}>{tag}</Link>
                        </Fragment>
                    ))}
            </p>

            <Bio />

            <ul
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    listStyle: 'none',
                    padding: 0
                }}>
                <li>
                    {previous && (
                        <Link to={previous.fields.slug} rel="prev">
                            ← {previous.frontmatter.title}
                        </Link>
                    )}
                </li>
                <li>
                    {next && (
                        <Link to={next.fields.slug} rel="next">
                            {next.frontmatter.title} →
                        </Link>
                    )}
                </li>
            </ul>
        </Layout>
    );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                tags
            }
        }
    }
`;
