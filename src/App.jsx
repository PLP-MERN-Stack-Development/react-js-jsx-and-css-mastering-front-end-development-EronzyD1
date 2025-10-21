import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Country from './pages/Country.jsx';
import TaskManager from './pages/TaskManager.jsx';
import Posts from './pages/Posts.jsx';
export default function App(){
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country/:code' element={<Country />} />
        <Route path='/tasks' element={<TaskManager />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </Layout>
  );
}
