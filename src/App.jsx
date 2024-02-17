import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostListPage from './components/Pages/PostListPage';
import FullPostPage from './components/Pages/FullPostPage';

function App() {
  async function fetchData() {
    const response = await fetch('https://dummyjson.com/recipes');
    const res = await response.json();
    const data = await res.recipes.filter(item=>item.id<=10);
    return data;
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then(response => setData(response))
      .catch(error => console.log('Error'))
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostListPage data={data}/>} />
        <Route path="/recipe/:id" element={<FullPostPage data={data}/>} />
      </Routes>
    </Router>
  )
}

export default App;