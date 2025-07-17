# TMDB 영화앱 개발
* Auth(apikey 필요) / HTTPS지원 / CORS(Unknown 테스트 필요) 
* apikey는 보안파일이기 때문에 별도의 보안파일(.env)을 생성해서 비공개로 관리해야한다.
* `.env` apikey 등록 후 `.gitignore` 에서 env파일 숨기기
### api key 등록 방법
* `VITE_TMDB_API_KEY=API_KEY작성`
### 제작순서
* App.jsx 최상위파일
* components/MovieApp.jsx 영화목록
* components/MovieDetails.jsx 영화상세페이지
### MovieApp 
1. apikey 활용해서 tmdb 데이터 가져오기
2. MovieApp 첫실행(마운트)시 가져온 데이터를 화면에 보여주기 -useEffect
3. HTML 위치에 데이터최신상태를 출력 - useState
### MovieDetails 영화상세 제작을 위한 순서
1. `App.jsx` 이동경로가 변경 시 `MovieDetails.jsx` 이동하는 Router
2. `MovieApp.jsx` 포스터 클릭 시 `MovieDetails.jsx` 이동경로 바꾸는 Link
3. `MovieDetalis.jsx` 영화정보를 보여주기 위한 api 설정과 DB 불러오기