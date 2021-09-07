import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

export default function App() {
  const { taskTitle, tasks } = useSelector((state) => ({ // 상태를 얻어옴
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  })); //store에서 필요한거 가져오기

  // 기존상태도 리덕스가 하니깐 몰라도 돼
  const dispatch = useDispatch();

  function handleChangeTitle(event) { //actioncreator
    dispatch(updateTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
