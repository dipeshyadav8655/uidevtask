import React from "react";

function PopUp({ handlePopup }) {
  return (
    <div className="popUpContainer">
      <div className="popup">
        <div className="popupHeader">
          <span className="headerText">Details</span>
          <span className="popIpDone" onClick={handlePopup}>
            Done
          </span>
        </div>
        <div className="popupTitle">
          <p>title</p>
        </div>
        <div className="popupTitle">
          <p>Remind me on day</p>
        </div>
        <div className="popupSettings">
          <div className="popupPriority">
            <div>
              <p>Priority</p>
            </div>
            <div className="priorityValues">
              <div className="selectedPriority values">None</div>
              <div className="values">!</div>
              <div className="values">!!</div>
              <div className="values">!!!</div>
            </div>
          </div>
          <div className="popupPriority popupList">
            <span>List</span>
            <span className="popupNotes">New List</span>
          </div>
          <div className="popupNotes popupList">Notes</div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
