// NextJSはデフォルトでreactを利用するのimport不要
// import React from 'react'

import Layout from "../components/Layout"

// blog-page => Blog(大文字で始まる)に変更
const Blog = () => {
    return (
        <Layout title="Blog">
            Blog page
        </Layout>
    );
};

export default Blog;
