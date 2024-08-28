import React, { useState, useEffect } from "react";

const App = () => {
  const [setp, setSetp] = useState(() => parseInt(localStorage.getItem("setp")) || 1.4);
  const [setp1, setSetp1] = useState(() => parseInt(localStorage.getItem("setp1")) || 1);
  const [setp2, setSetp2] = useState(() => parseInt(localStorage.getItem("setp2")) || 0.9);
  const [setp3, setSetp3] = useState(() => parseInt(localStorage.getItem("setp3")) || 3.7);
  const [count, setCount] = useState(() => parseInt(localStorage.getItem("count")) || 1);
  const [trackCount, setTrackCount] = useState(() => parseInt(localStorage.getItem("trackcount")) || 1);
  const [content, setContent] = useState(localStorage.getItem("lc") || "");
  const [trackContent, setTrackContent] = useState(localStorage.getItem("track") || "");

  useEffect(() => {
    showContent();
    showTrack();
    add();
    addTrack();
  }, []);

  useEffect(() => {
    localStorage.setItem("setp", setp);
    localStorage.setItem("setp1", setp1);
    localStorage.setItem("setp2", setp2);
    localStorage.setItem("setp3", setp3);
    updateStorage();
  }, [setp, setp1, setp2, setp3]);

  useEffect(() => {
    updateStorage();
    localStorage.setItem("count", count);
  }, [content, count]);

  useEffect(() => {
    updateTrack();
    localStorage.setItem("trackcount", trackCount);
  }, [trackContent, trackCount]);

  const showContent = () => {
    if (localStorage.getItem("lc")) {
      setContent(localStorage.getItem("lc"));
    }
  };

  const updateStorage = () => {
    localStorage.setItem("lc", content);
  };

  const add = () => {
    const arr = ["Bio-Waste", "Plastic", "Paper", "Metal", "E-Waste"];
    const color = ["#ffffff", "#e6e6e6"];
    const d = new Date().toLocaleString();
    const arr1 = [
      "Chattikara, Virndavan, UP",
      "Bhagwan Talkies, Agra, UP",
      "Goverdhan Rd, Mathura",
    ];

    const newContent = (
      <div className="linecontent" style={{ backgroundColor: color[count % color.length] }}>
        <div className="Sno">
          <p>#{count}</p>
        </div>
        <div className="date">
          <p>{d}</p>
        </div>
        <div className="type">
          {arr[count % arr.length]}
        </div>
        <div className="location">
          <p>{arr1[count % arr1.length]}</p>
        </div>
      </div>
    );

    setContent(prevContent => prevContent + newContent);
    setCount(count + 1);
  };

  const addTrack = () => {
    const arr2 = ["Attero Recycling", "Saahas Zero Waste", "Eco Eclectic Technologies", "Banyan Nation", "TrashCon"];
    const trackColor = ["#3cb371", "#ff0000", "#fbc02d"];
    const d = new Date().toLocaleString();
    const SegDate = new Date();
    SegDate.setDate(SegDate.getDate() + 2);
    const fDate = SegDate.toISOString().split('T')[0];

    const wid = trackColor[trackCount % trackColor.length] === "#3cb371" ? 90 : trackColor[trackCount % trackColor.length] === "#ff0000" ? 25 : 60;
    const com = trackColor[trackCount % trackColor.length] === "#3cb371" ? "#3cb371" : null;

    const newTrackContent = (
      <div className="tracking-container">
        <div className="tracking-header">
          <div>Waste-Id - #{trackCount}</div>
          <div>Picked on, {d}</div>
          <div>From: {arr2[trackCount % arr2.length]}</div>
        </div>
        <div className="progress-bar">
          <div className="progress-line"></div>
          <div
            className="progress-line-filled"
            style={{ backgroundColor: trackColor[trackCount % trackColor.length], width: `${wid}%` }}
          ></div>
          <div className="step completed">
            <div className="step-icon">🚛</div>
            <div className="step-label">Waste Picked-Up</div>
          </div>
          <div className="step segregated">
            <div className="step-icon">♻️</div>
            <div className="step-label">Segregated on {fDate}</div>
          </div>
          <div className="step active">
            <div className="step-icon">🏭</div>
            <div className="step-label">Disposed by {arr2[trackCount % arr2.length]}</div>
          </div>
          <div className="step">
            <div className="step-icon" style={{ backgroundColor: com }}>&#x2714;</div>
            <div className="step-label">Completed</div>
          </div>
        </div>
      </div>
    );

    setTrackContent(prevTrackContent => prevTrackContent + newTrackContent);
    setTrackCount(trackCount + 1);
  };

  const showTrack = () => {
    if (localStorage.getItem("track")) {
      setTrackContent(localStorage.getItem("track"));
    }
  };

  const updateTrack = () => {
    localStorage.setItem("track", trackContent);
  };

  return (
    <div className="app">
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
      <div className="thirdHalf" dangerouslySetInnerHTML={{ __html: trackContent }} />
    </div>
  );
};

export default App;
