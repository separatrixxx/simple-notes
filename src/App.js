import React from "react";
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import AddNotePage from './pages/AddNotePage'
import EditNotePage from './pages/EditNotePage'
import SearchNotes from './pages/SearchNotes'

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

  if (document.location.pathname === '/') {
    document.title = "Simple Notes";
  } else if (document.location.pathname === '/add_note') {
      document.title = "Добавить заметку";
  }

  return (
      <div className="scroll-smooth bg-neutral-900">
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<NotFound/>} />
            <Route path='/add_note' element={<AddNotePage/>} />
            <Route path="/notes">
                <Route index element={<NotFound />} />
                <Route path=":id" element={<EditNotePage />} />
            </Route>
            <Route path='/search'>
                <Route index element={<SearchNotes />} />
                <Route path=":id" element={<SearchNotes />} />
            </Route>
          </Routes>
        </Router>
      </div>
  );
}

export default App;