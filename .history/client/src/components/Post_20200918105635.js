import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Avatar } from "@material-ui/core";
import "./Post.css";
function Post({ text, createdAt }) {
  return (
    <Card
      style={{
        marginBottom: "20px",
        border: "1px solid rgba(134, 129, 129, 0.513)",
      }}
    >
      <CardContent>
        <div className="post">
          <div className="post__avatar ">
            <img src="https://api.adorable.io/avatars/51/abott@adorable.png" />
            <div className="post_info">
              <h1>Shehriyar Nadeem</h1>
              <p>Full-stack web developer</p>
              <p>2h</p>
            </div>
          </div>
        </div>
        <div className="post__text">
          <p>{text ?? "osos"}</p>
        </div>
        <div className="post__photo">
          <img src="https://dummyimage.com/qvga" />
        </div>
      </CardContent>
    </Card>
  );
}

export default Post;
