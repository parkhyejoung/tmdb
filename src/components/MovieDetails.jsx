import { useEffect, useState } from "react";
//useParams : 웹주소URL에 고유하게 저장된 아이디 추적 훅
import { useParams,Link } from "react-router-dom";

function MovieDetails() {
    const { id } = useParams();
    const [movie,setMovie] = useState([]);

    //2. MovieApp 첫실행(마운트)시 가져온 데이터를 화면에 보여주기 -useEffect
    useEffect(()=>{
        fetchMovies();
    },[]);

    //1. apikey 활용해서 tmdb 데이터 가져오기
    const fetchMovies = async()=>{
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=ko-KR&page=1`);
            const data = await response.json();
            console.log(data);
            setMovie(data);
        }catch(error){
            console.error('영화 로딩 실패',error);
        }
    }
    

    return (
        <>
        <h1>영화 상세 페이지</h1>
        <Link to ={`/`}>&lt;</Link>
        <div className="movielist">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </div>
        </>
    )
}

export default MovieDetails;
