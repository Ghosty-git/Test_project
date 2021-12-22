import { PostItem } from "./PostItem";

export const PostList = ({posts, id, name, country, image}) => {
    console.log(posts);
    if (!posts.length) {
      return <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>;
    }
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Вакансии</h1>
        
          {posts.map((post, index) => 
              <PostItem
                number={index + 1}
                post={post}
                image={image}
                key={post.id}
              />
          )}
      </div>
    );
  };

  