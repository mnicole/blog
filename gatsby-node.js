const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        const postTemplate = path.resolve('./src/templates/blog-post.js');
        const tagTemplate = path.resolve('src/templates/tags.js');
        resolve(
            graphql(
                `
                    {
                        allMarkdownRemark(
                            sort: {
                                fields: [frontmatter___date]
                                order: DESC
                            }
                            limit: 1000
                        ) {
                            edges {
                                node {
                                    fields {
                                        slug
                                    }
                                    frontmatter {
                                        title
                                        tags
                                    }
                                }
                            }
                        }
                    }
                `
            ).then((result) => {
                if (result.errors) {
                    console.log(result.errors);
                    reject(result.errors);
                }

                // Make post pages
                const posts = result.data.allMarkdownRemark.edges;
                let tags = [];

                posts.forEach((post, index) => {
                    const previous =
                        index === posts.length - 1
                            ? null
                            : posts[index + 1].node;
                    const next =
                        index === 0 ? null : posts[index - 1].node;

                    createPage({
                        path: post.node.fields.slug,
                        component: postTemplate,
                        context: {
                            slug: post.node.fields.slug,
                            previous,
                            next
                        }
                    });

                    const postTags = post.node.frontmatter.tags || [];

                    if (postTags.length) {
                        tags = tags.concat(postTags);
                    }
                });

                // Make individual tag pages
                tags.forEach((tag) => {
                    createPage({
                        path: `/tags/${tag}/`,
                        component: tagTemplate,
                        context: {
                            tag
                        }
                    });
                });
            })
        );
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value
        });
    }
};
