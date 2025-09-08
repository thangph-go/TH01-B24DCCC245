import React from 'react';
import CountNumber from './Bai1/CountNumber';
import TodoList from './Bai2/TodoList';
import ChangeColor from './Bai3/ChangeColor';
import StudentCard from './Bai4/StudentCard';
import Clock from './Bai5/Clock';

function App() {
  return (
    <div>
      <h1>Bài 1: Ứng dụng Đếm số</h1>
      <CountNumber />
      <h1>Bài 2: Danh sách công việc</h1>
      <TodoList />
      <h1>Bài 3: Ứng dụng đổi màu nền</h1>
      <ChangeColor />
      <h1>Bài 4: Thẻ thông tin sinh viên</h1>
      <StudentCard />
      <h1>Bài 5: Đồng hồ</h1>
      <Clock />
    </div>
  );
}

export default App;
