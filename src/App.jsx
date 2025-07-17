import MovieApp from "./components/MovieApp"
import MovieDetails from "./components/MovieDetails"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <>
    <h1>TMDB MOVIE</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieApp />} />
        {/* 접속한 주소 경로(path) 이거면 element에 작성된 컴포넌트를 실행하라. */}
        {/* 1. `App.jsx` 이동경로가 변경 시 `MovieDetails.jsx` 이동하는 Router */}
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
