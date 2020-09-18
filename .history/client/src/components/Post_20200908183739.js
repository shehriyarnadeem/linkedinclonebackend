import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Avatar } from "@material-ui/core";
import "./Post.css";
function Post({ text }) {
  return (
    <Card style={{ marginBottom: "20px" }}>
      <CardContent>
        <div className="post">
          <div className="post__avatar ">
            <img src="https://api.adorable.io/avatars/51/abott@adorable.png" />
            <div className="post_info">
              <h1>Ammad Khan</h1>
              <p>Sr. Talen engineer mikaels labs</p>
              <p>2 h</p>
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
