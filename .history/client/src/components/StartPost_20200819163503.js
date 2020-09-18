import React from "react";
import PhotoIcon from "@material-ui/icons/PhotoCamera";
import VideoIcon from "@material-ui/icons/VideoCall";
import DocumentIcon from "@material-ui/icons/BluetoothSearching";
import "./StartPost.css";
function StartPost() {
  return (
    <div className="startPost">
      <form>
        <div className="startPost__input">
          <textarea placeholder="Start a post" rows="2" cols="70" />
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
              <DocumentIcon />
            </span>
            <button>Write article</button>
          </div>
        </div>

        {/* <button>Submit</button> */}
      </form>
    </div>
  );
}

export default StartPost;
