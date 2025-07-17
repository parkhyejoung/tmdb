import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MovieApp() {
    const [movie,setMovie] = useState([]);

    //2. MovieApp 첫실행(마운트)시 가져온 데이터를 화면에 보여주기 -useEffect
    useEffect(()=>{
        fetchMovies();
    },[]);

    //1. apikey 활용해서 tmdb 데이터 가져오기
    const fetchMovies = async()=>{
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=ko-KR&page=1`);
            const data = await response.json();
            console.log(data);
            setMovie(data.results);
        }catch(error){
            console.error('영화 로딩 실패',error);
        }
    }

    return (
        <>
        <h1>영화목록</h1>
        {/* 3. HTML 위치에 데이터최신상태를 출력 - useState */}
        {/* {배열변수.map((데이터,인덱스)=>(JSX결과))} */}
        <ul>
            {movie.map((data,idx)=>(
                /* App.jsx에 Router path가 인식하는 영화 고유아이디 전달 */
                <li key={idx}>
                    <Link to ={`/movie/${data.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} alt="" />
                    </Link>
                    <h2>{data.title}</h2>
                    <p>개봉일 : {data.release_date}</p>
                    <p>평점 : {data.vote_average}/10</p>
                </li>
            ))}
        </ul>
        </>
    )
}

export default MovieApp;
