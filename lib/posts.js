import fetch from "node-fetch";
const apiUri = "https://jsonplaceholder.typicode.com/posts";

///
/// <summary> getStaticPropsでコールされるブログ一覧をfetchで取得する </summary>
/// <remarks> サーバサイドで実行される </remarks>
///
export async function getAllPostsData(){
    const res = await fetch(new URL(apiUri));
    const posts = await res.json();
    // console.log("jsonplaceholder-api colled");
    return posts;
}