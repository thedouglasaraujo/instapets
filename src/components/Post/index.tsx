import React from "react";
import "./styles.css";

interface PostProps {
  postData: { caption: string; image: string | ArrayBuffer | null };
}

const Post: React.FC<PostProps> = ({ postData }) => {
  return (
    <div className="post">
      {postData.image && (
        <div className="image-preview">
          <img src={postData.image} alt="Prévia da Imagem" />
        </div>
      )}
      <p><strong>@user.name</strong> {postData.caption}</p>
      <p className="time-post">1min</p>
    </div>
  );
};

export default Post;