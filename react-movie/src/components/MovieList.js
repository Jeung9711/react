import { useState } from 'react';
import styles from './MovieList.module.css';
import { useEffect } from 'react';

const MovieList = () => {
  // []을 제시하지 않으면 map 사용에서 에러 발생
  const [result,setResult] = useState([]);
  // 검색어를 받는 상태변수
  const [data,setData] = useState('');

  // api에서 영화 정보를 받아오기
  useEffect(()=> {
    getMovie();
  },[])

  // 영화 정보 받아와서 출력하기
  const getMovie = async () => {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=cba95d401a14ab806ffc13a5052aab89&query='+data;
    const res = await fetch(url);
    const movie = await res.json();

    setResult(movie.results);
  }
  

  return (
    <div className={styles.movie}>
      <h1 onClick={(e) => {
        setData('');
        getMovie();
      }}>영화 검색</h1>
      <div className={styles.search_box}>
        <input
          type="text"
          placeholder="영화 제목을 검색하세요"
          onChange={(e)=>{
            const inputValue = e.target.value;
            setData(inputValue);
          }}
        />
        <button onClick={() => {
          getMovie();
        }}>
          검색
        </button>
      </div>
      <ul className={styles.list}>
        {
          result.map((v,i) => {
            return(
              <li key={`${v.id}_${v.title}`}>
                <img src={`https://image.tmdb.org/t/p/w185${v.poster_path}`}
                />
                <h2>{v.original_title}</h2>
                <p>평점: {v.vote_average}</p>
                <p>개봉일: {v.release_date}2</p>
                <p>{v.overview}</p>
              </li>
            );
          })
        }
        
      </ul>
    </div>
  );
};

export default MovieList;