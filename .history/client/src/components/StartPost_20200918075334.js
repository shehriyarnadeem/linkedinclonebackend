import React, { useState } from "react";
import PhotoIcon from "@material-ui/icons/PhotoCamera";
import VideoIcon from "@material-ui/icons/VideoCall";
import DocumentIcon from "@material-ui/icons/BluetoothSearching";
import SaveIcon from "@material-ui/icons/Save";
import "./StartPost.css";
function StartPost({ savePost }) {
  const [text, setText] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    savePost(text);
  };

  return (
    <div className="startPost">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="startPost__input">
          <textarea
            placeholder="Start a post"
            rows="2"
            cols="70"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="startPost__menu">
          <div className="startPost__menu__content">
            <span>
              <PhotoIcon />
            </span>
            <button>Photo</button>
          </div>
          <div className="startPost__menu__content">
            <span>
              <VideoIcon />
            </span>
            <button>Video</button>
          </div>
          <div className="startPost__menu__content">
            <span>
              <DocumentIcon />
            </span>
            <button>Document</button>
          </div>
          <div className="startPost__menu__content">
            <span>
              <SaveIcon />
            </span>
            <button type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default StartPost;
