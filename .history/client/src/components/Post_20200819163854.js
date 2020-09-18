import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Avatar } from "@material-ui/core";
import "./Post.css";
function Post() {
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
          <p>
            10Pearls – an award-winning global technology company is now hiring
            in Lahore and Islamabad. 50+ positions OPEN! & you can go through a
            quick selection process by applying for our HIRING EXTRAVAGANZA
            (22nd -23rd August 2020). To know more about who we are and the
            event join us at 7:00 PM today (August 18th) on Zoom.
          </p>
        </div>
        <div className="post__photo">
          <img src="https://dummyimage.com/qvga" />
        </div>
      </CardContent>
    </Card>
  );
}

export default Post;
