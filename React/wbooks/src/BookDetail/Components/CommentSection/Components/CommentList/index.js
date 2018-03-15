import React from 'react';

import profilePicture from '../../../../../assets/cat_no_banana.jpeg';

function CommentList() {
  return (
    <div>
      <div className="comment-container">
        <img alt="profile" src={profilePicture} className="comment-image" />
        <div className="comment-subcontainer">
          <h4 className="comment-title">John Doe</h4>
          <span className="comment-date">15/3/18</span>
          <p className="comment-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="comment-container">
        <img alt="profile" src={profilePicture} className="comment-image" />
        <div className="comment-subcontainer">
          <h4 className="comment-title">John Doe</h4>
          <span className="comment-date">15/3/18</span>
          <p className="comment-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommentList;
