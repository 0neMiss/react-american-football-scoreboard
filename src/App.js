//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  //declaring hooks
  const   [homeScore, homeScoreSet] = useState(0);
  const   [awayScore, awayScoreSet] = useState(0);
  //creating function to change scores
  function addPoints(team, points){
    // if the team is home then add to homescore
    if(team === 'Home'){
      homeScoreSet(homeScore + points);
    }
    //else add to awayscore
    else{
      awayScoreSet(awayScore + points);
    };
};
//return value of a big ol scoreboard
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>



            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button onClick = {() =>addPoints('Home', 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {() =>addPoints('Home',3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {() =>addPoints('Away', 7)}  className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {() =>addPoints('Away',3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
