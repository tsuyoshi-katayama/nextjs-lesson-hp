// NextJSはデフォルトでreactを利用するのimport不要
// import React from 'react'

import Layout from "../components/Layout"
import Post from "../components/Post"
import { getAllPostsData } from "../lib/posts"

// blog-page => Blog(大文字で始まる)に変更
export default function Blog ({ posts })  {
    return (
        <Layout title="Blog">
            <ul className="m-10">
                { 
                    posts && posts.map((post) => {
                        console.log("id:" + post.id + " /  title:" + post.title);
                         {/** keyはReact内部でListの際に用いる */}
                        return <Post key={post.id} post={post} />
                    })
                }
            </ul>
        </Layout>
    );
};

// export default Blog;

/** 起動時に一度だけ、ServerSideで実行される */
export async function getStaticProps() {
    // apiより取得する
    const posts = await getAllPostsData();
    return {
        // propsで返す
        props: { posts }
    };
}