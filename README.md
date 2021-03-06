### 프로젝트 요약

- 소개: [폴바셋](https://www.baristapaulbassett.co.kr/Index.pb) 웹사이트 클론
- 기간: 2020.04.20 - 2020.05.01 (약 2주)
- 인원: 프론트엔드 2명([MJ Kim](https://github.com/howdy-mj), [skh417](https://github.com/skh417)), 백엔드 2명([ikswary](https://github.com/ikswary), [Magrfs](https://github.com/Magrfs))
- Backend-Repo: [PaulBa3-backend](https://github.com/wecode-bootcamp-korea/PaulBa3-backend)

---

### 데모

[![메인](https://media.vlpt.us/images/magnoliarfsit/post/eb955457-4c79-4474-b8ba-2f99c9378da4/mainpage.png)](https://youtu.be/a1vKyWHA8pE)
데모영상 보러가기▲(이미지 클릭)

---

### 사용된 기술

- **Frontend**: JavaScript, React.js, SASS
- **Backend**: Python, Django, Selenium, BeautifulSoup4, MySQL
- **Deployment**: AWS EC2, CORS

---

### What I Did

**Main**:

- `json` 형태로 Mock data를 구현하여 메인배너 구현
- 일정 시간이 지남에 따라 배너 자동 변경
- 우측 화살표 클릭 시, 배너 변경
- 단 한번의 스크롤을 통해 메인배너와 서브배너로 화면 전환
- 서브배너는 위아래 휠로 좌우스크롤 가능

**Nav/Footer**:

- Nav, Footer 레이아웃 구성
- 특정 페이지의 Nav 색상 변경

**Menu**:

- Backend API를 fetch하여, 작은 카테고리 및 제품들을 `map` 함수를 통해 화면에 구현
- 상단 Menu 카테고리 클릭시, Coffee 전체 제품 노출
- Nav의 다른 카테고리 클릭 시, `match.params`를 사용하여 해당 카테고리 이동경로 구현
- 각 카테고리 내, 작은 카테고리를 누를경우 해당 제품들만 하단에 노출

**Store**:

- Backend API를 fetch하여 폴바셋 지점 리스트 정보 가져오기
- '지역 탭': 지역의 `area_code`가 있어 누를 때마다 Backend API에 GET 요청, 클릭 할 때 해당 지역의 지점 리스트 가져오기 구현
- 구글 맵 API를 통해 우측 지도 화면 구현
