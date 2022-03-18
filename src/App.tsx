import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskDownloader from './components/TaskDownloader';
import StyleComponent from './components/StyleComponent';
import VotesList from './components/VotesList';
import VoteDetail from './components/VoteDetail';
import CreateVote from './components/CreateVote';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StyleComponent />} />
        <Route path="/votes" element={<VotesList />} />
        <Route path="/create_vote" element={<CreateVote />} />
        <Route path="/votes/:vote_id" element={<VoteDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
