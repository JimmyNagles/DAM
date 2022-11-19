import React, { useRef, useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import styled from "styled-components";

const Flappybird = () => {
  const BIRD_SIZE = 20;
  const GAME_HEIGHT = 500;
  const GAME_WIDTH = 500;
  const GRAVITY = 3;
  const JUMP_HEIGHT = 100;
  const OBSTALE_WIDTH = 40;

  const OBSTACLE_GAP = 200;
  const [birdPosition, setBirdPosition] = useState(250);
  const [isGameStarted, setisGameStarted] = useState(false);
  const [obstacleHeight, setObstacleHeight] = useState(300);
  const [obstacleLeft, setObstacleLeft] = useState(GAME_WIDTH - OBSTALE_WIDTH);
  const bottomObstacleHeight = GAME_HEIGHT - OBSTACLE_GAP - obstacleHeight;
  const [score, setScore] = useState(0);

  useEffect(() => {
    let timeId;
    if (isGameStarted && birdPosition < GAME_HEIGHT - 20) {
      timeId = setInterval(() => {
        setBirdPosition((birdPosition) => birdPosition + GRAVITY);

        console.log(birdPosition);
      }, 24);
    }

    return () => {
      clearInterval(timeId);
    };
  }, [birdPosition, isGameStarted]);

  useEffect(() => {
    let obstacleId;
    if (isGameStarted && obstacleLeft >= -OBSTALE_WIDTH) {
      obstacleId = setInterval(() => {
        setObstacleLeft((obstacleLeft) => obstacleLeft - 5);
      }, 24);

      return () => {
        clearInterval(obstacleId);
      };
    } else {
      setObstacleLeft(GAME_WIDTH - OBSTALE_WIDTH);
      setObstacleHeight(
        Math.floor(Math.random() * (GAME_HEIGHT - OBSTACLE_GAP))
      );
      setScore((score) => score + 1);
    }
  }, [obstacleLeft, isGameStarted]);

  useEffect(() => {
    const hasCollideWithTop =
      birdPosition >= 0 && birdPosition < obstacleHeight;
    const hasCollideWithBottom =
      birdPosition <= 500 && birdPosition >= 500 - bottomObstacleHeight;

    if (
      obstacleLeft >= 0 &&
      obstacleLeft <= OBSTALE_WIDTH &&
      (hasCollideWithTop || hasCollideWithBottom)
    ) {
      setisGameStarted(false);
      setScore(0);
    }
  }, [birdPosition, obstacleHeight, obstacleLeft, bottomObstacleHeight]);

  const handleClick = () => {
    let newbirdPosition = birdPosition - JUMP_HEIGHT;

    if (!isGameStarted) {
      setisGameStarted(true);
    } else if (newbirdPosition < 0) {
      setBirdPosition(0);
    } else {
      setBirdPosition(newbirdPosition);
    }
  };
  return (
    <div className="min-h-screen absolut">
      <div className="h-[100px]"></div>
      <Div onClick={handleClick}>
        <Gamebox width={GAME_WIDTH} height={GAME_HEIGHT}>
          <Obstacle
            top={0}
            width={OBSTALE_WIDTH}
            height={obstacleHeight}
            left={obstacleLeft}
          ></Obstacle>
          <Obstacle
            top={GAME_HEIGHT - (obstacleHeight + bottomObstacleHeight)}
            width={OBSTALE_WIDTH}
            height={bottomObstacleHeight}
            left={obstacleLeft}
          ></Obstacle>
          <Bird top={birdPosition} size={BIRD_SIZE}></Bird>
        </Gamebox>
        <span>{score}</span>
      </Div>
    </div>
  );
};

const Bird = styled.div`
  position: absolute;
  background-color: red;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  top: ${(props) => props.top}px;
  border-radius: 50%;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  & span {
    color: white;
    font-size: 24px;
    position: absolute;
  }
`;

const Gamebox = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: blue;
  position: relative;
  overflow: hidden;
`;

const Obstacle = styled.div`
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  background-color: green;
  position: relative;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  border: 1px;
  border-color: black;
`;

export default Flappybird;
