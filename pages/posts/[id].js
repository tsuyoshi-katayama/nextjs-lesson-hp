import Link from "next/link";

import Layout from "../../components/Layout";
import { getAllPostIds, getPostData} from "../../lib/posts"

export default function Post({ post }) {
    if (! post) {
        return <div>Loading...</div>;
    }

    return (
        <Layout title ={post.title}>
            <p className="m-4">
                {"ID : "}
                {post.id}
            </p>
            <p className="mb-8 text-xl font-bold">{post.title}</p>
            <p className="px-10">{post.body}</p>
            <Link href="/blog-page">
                {/* https://heroicons.dev/より表示したいアイコンをクリックして取得 */}
                <div className="flex corsor-pounter mt-12">
                    <svg 
                        className="w-6 h-6 mr-3" 
                        fill="none" stroke="currentColor" 
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                    <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">Back to blog-page</span>
                </div>
            </Link>
        </Layout>
    );
}

export async function getStaticPaths() {

    console.log("getStaticPaths call");

    // idの一覧を取得
    const paths = await getAllPostIds();

    // fallback = falseにてpathsの範囲を超える要求があった場合にnot foundを返すように設定
    // fallback = true では動的コンテンツ取得時などに使用する
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }){
    console.log("getStaticProps id:" + params.id);

    const post = await getPostData(params.id);
    return {
        props: {
            post
        }
    };
}