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
    return posts;s
}

/**idの一覧を取得 */
export async function getAllPostIds() {


    const res = await fetch(new URL(apiUri));
    const posts = await res.json();

    return posts.map((post) => {
        return {
            params: {
                id: String(post.id)
            }
        }
    });
}

/** 
 * idを使って個別データを取得 
 * @param id : 取得するid
 * */
export async function getPostData(id) {
    const res = await fetch(new URL(`${apiUri}/${id}/`));
    const post = await res.json();

    // return {
    //     post
    // };
    return post;
}