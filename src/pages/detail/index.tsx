import { Link } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router-dom";
import { BoardView } from "pages/board";
import { TaskView } from "pages/task";

export const SingleNoval = () => {
  return (
    <div>
      <h1>小说详情</h1>
      <Link to={"board"}>看板</Link>
      <Link to={"task"}>任务组</Link>
      <Routes>
        <Route path={"*"} element={<Navigate replace to="/board" />} />
        <Route path={"board"} element={<BoardView />} />
        <Route path={"task"} element={<TaskView />} />
      </Routes>
    </div>
  );
};
