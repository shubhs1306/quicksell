import React from "react";
import "./Board.css";
import { MoreHorizontal } from "react-feather";
import Cards from "../Card/Cards";

function Board() {
  return (
    <div className="board">
      <div className="boardTop">
        <p className="boardTopTitle">
          TO DO <span>2</span>
        </p>
        <MoreHorizontal />
      </div>
      <div className="boardCards">
        <Cards />
      </div>
    </div>
  );
}

export default Board;
