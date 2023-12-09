import React from "react";
import PopUp from "./Component/PopUp";
import { FaRegCircle } from "react-icons/fa";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faCircle } from "@fortawesome/free-regular-svg-icons";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [selected, setSelected] = useState(false);
  const [count, setCount] = useState(2);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };
  const handleSelection = () => {
    if (selected) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    setSelected(!selected);
  };
  return (
    <div className="appMain">
      <header>
        <div class="container">
          <div class="d-flex justify-content-between">
            <div class="logo">
              <h2>
                Salesapp.ca <i class="fa fa-angle-down" aria-hidden="true"></i>{" "}
                <i class="fa fa-circle red" aria-hidden="true"></i>
              </h2>
            </div>
            <div class="logo">
              <ul>
                <li>
                  <a href="#">
                    <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <section class="details">
        <div class="task-sec">
          <div class="task-header d-flex justify-content-between">
            <h2>W</h2>
            <div class="edit-sec">
              <h4>{count}</h4>
              <p>Edit</p>
            </div>
          </div>
          <div class="task-content">
            <ul>
              <li>
                <div class="plus-icon" onClick={handleSelection}>
                  {selected ? (
                    <div className="inner">
                      <FontAwesomeIcon
                        icon={faCircleDot}
                        style={{ color: "#1ac737" }}
                      />
                    </div>
                  ) : (
                    <div className="inner">
                      <FontAwesomeIcon icon={faCircle} />
                    </div>
                  )}
                </div>{" "}
                <span
                  class="d-flex justify-content-between"
                  onClick={handlePopup}
                >
                  <p>3:00</p>
                  <p>23-march-2021</p>
                </span>
              </li>
              <li class="paddin-sec">
                <div class="plus-icon">
                  <FontAwesomeIcon icon={faCircle} />
                </div>
              </li>
              <li class="paddin-sec">
                <div class="plus-icon">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </div>
              </li>
              <li class="paddin-sec"></li>
              <li class="paddin-sec"></li>
              <li class="paddin-sec"></li>
              <li class="paddin-sec"></li>
              <li class="paddin-sec"></li>
              <li class="paddin-sec"></li>
            </ul>
          </div>
          <div class="completed-text">Show Completed</div>
        </div>
        <div class="margin-bottom"></div>
      </section>
      <section class="fotter-bottom">
        <div class="d-flex justify-content-between notification">
          <div class="notification-icon">
            <div class="icon">
              <i class="fa fa-bell" aria-hidden="true"></i>
              <span>2</span>
            </div>
            <p>Notification</p>
          </div>
          <div class="task">
            {/* <img src="assests/task.png"> */}
            <p>Task</p>
          </div>
          <div class="voice-icon">
            <i class="fa fa-microphone" aria-hidden="true"></i>
          </div>
          <div class="callender">
            {/* <img src="assests/task.png"> */}
            <p>Calender</p>
          </div>
          <div class="setting">
            {/* <img src="assests/setting.png"> */}
            <p>Setting</p>
          </div>
        </div>
      </section>
      <div className="">
        {showPopup ? <PopUp handlePopup={handlePopup} /> : ""}
      </div>
    </div>
  );
}

export default App;
