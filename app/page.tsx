import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";
import {ThemeProvider} from "next-themes";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">{postPreviews}</div>
  );
};

export default HomePage;