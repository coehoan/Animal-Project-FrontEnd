let selectedSido;
function sidoSelected(value) {
    selectedSido = value;
}
function orgNmSelected(value) {
    selectedSigungu = value;
}
function orgNmSelect() {

    // 시군구들 옵션에 넣을 값
    let seoulSigungu = ["서울특별시 관악구", "서울특별시 광진구", "서울특별시 구로구", "서울특별시 금천구", "서울특별시 노원구", "서울특별시 도봉구", "서울특별시 동대문구", "서울특별시 동작구", "서울특별시 마포구", "서울특별시 서대문구", "서울특별시 서초구", "서울특별시 성동구", "서울특별시 성북구", "서울특별시 송파구", "서울특별시 양천구", "서울특별시 영등포구", "서울특별시 용산구", "서울특별시 은평구", "서울특별시 종로구", "서울특별시 중구", "서울특별시 중랑구"];
    let busanSigungu = ["부산광역시 동구", "부산광역시 동래구", "부산광역시 부산진구", "부산광역시 북구", "부산광역시 사상구", "부산광역시 사하구", "부산광역시 서구", "부산광역시 수영구", "부산광역시 연제구", "부산광역시 영도구", "부산광역시 중구", "부산광역시 해운대구"];
    let deaguSigungu = [, "대구광역시 남구", "대구광역시 달서구", "대구광역시 달성군", "대구광역시 동구", "대구광역시 북구", "대구광역시 서구", "대구광역시 수성구", "대구광역시 중구"];
    let incheonSigungu = ["인천광역시 강화군", "인천광역시 계양구", "인천광역시 남동구", "인천광역시 동구", "인천광역시 미추홀구", "인천광역시 부평구", "인천광역시 서구", "인천광역시 연수구", "인천광역시 옹진군", "인천광역시 중구"];
    let gwangjuSigungu = ["광주광역시 광산구", "광주광역시 남구", "광주광역시 동구", "광주광역시 북구", "광주광역시 서구"];
    let deajeonSigungu = ["대전광역시 대덕구", "대전광역시 동구", "대전광역시 서구", "대전광역시 유성구", "대전광역시 중구"];
    let ulsanSigungu = ["울산광역시 남구", "울산광역시 동구", "울산광역시 북구", "울산광역시 울주군", "울산광역시 중구"];
    let gyeongiSigungu = ["경기도 동두천시", "경기도 부천시", "경기도 성남시", "경기도 수원시", "경기도 시흥시", "경기도 안산시", "경기도 안성시", "경기도 안양시", "경기도 양주시", "경기도 양평군", "경기도 여주시", "경기도 연천군", "경기도 오산시", "경기도 용인시", "경기도 용인시", "경기도 기흥구", "경기도 의왕시", "경기도 의정부시", "경기도 이천시", "경기도 파주시", "경기도 평택시", "경기도 포천시", "경기도 하남시", "경기도 화성시"];
    let gangwonSigungu = ["강원도 강릉시", "강원도 고성군", "강원도 동해시", "강원도 삼척시", "강원도 속초시", "강원도 양구군", "강원도 양양군", "강원도 영월군", "강원도 원주시", "강원도 인제군", "강원도 정선군", "강원도 철원군", "강원도 춘천시", "강원도 태백시", "강원도 평창군", "강원도 홍천군", "강원도 화천군", "강원도 횡성군"];
    let choongbookSigungu = ["충청북도 괴산군", "충청북도 단양군", "충청북도 보은군", "충청북도 영동군", "충청북도 옥천군", "충청북도 음성군", "충청북도 제천시", "충청북도 증평군", "충청북도 진천군", "충청북도 청주시", "충청북도 충주시"];
    let choongnamSigungu = ["충청남도 계룡시", "충청남도 공주시", "충청남도 금산군", "충청남도 논산시", "충청남도 당진시", "충청남도 보령시", "충청남도 부여군", "충청남도 서산시", "충청남도 서천군", "충청남도 아산시", "충청남도 연기군", "충청남도 예산군", "충청남도 천안시", "충청남도 청양군", "충청남도 태안군", "충청남도 홍성군"];
    let jeonbookSigungu = ["전라북도 고창군", "전라북도 군산시", "전라북도 김제시", "전라북도 남원시", "전라북도 무주군", "전라북도 부안군", "전라북도 순창군", "전라북도 완주군", "전라북도 익산시", "전라북도 임실군", "전라북도 장수군", "전라북도 전주시", "전라북도 정읍시", "전라북도 진안군"];
    let jeonamSigungu = ["전라남도 영광군", "전라남도 영암군", "전라남도 완도군", "전라남도 장성군", "전라남도 장흥군", "전라남도 진도군", "전라남도 함평군", "전라남도 해남군", "전라남도 화순군"];
    let gyeongbookSigungu = ["경상북도 김천시", "경상북도 문경시", "경상북도 봉화군", "경상북도 상주시", "경상북도 성주군", "경상북도 안동시", "경상북도 영덕군", "경상북도 영양군", "경상북도 영주시", "경상북도 영천시", "경상북도 예천군", "경상북도 울릉군", "경상북도 울진군", "경상북도 의성군", "경상북도 청도군", "경상북도 청송군", "경상북도 칠곡군", "경상북도 포항시"];
    let gyeongsangSigungu = ["경상남도 거제시", "경상남도 거창군", "경상남도 경상남도", "경상남도 고성군", "경상남도 김해시", "경상남도 남해군", "경상남도 밀양시", "경상남도 사천시", "경상남도 산청군", "경상남도 양산시", "경상남도 의령군", "경상남도 진주시", "경상남도 창녕군", "경상남도 창원 마산합포회원구", "경상남도 창원 의창성산구", "경상남도 창원 진해구", "경상남도 통영시", "경상남도 하동군", "경상남도 함안군", "경상남도 함양군", "경상남도 합천군"];
    let jejuSigungu = ["제주특별자치도 서귀포시", "제주특별자치도 제주시", "제주특별자치도"];

    // 시도 값
    let sido = $("#sido").val();
    console.log(sido);
    // 시군구 변수에 값을 넣음
    let sigungu;

    // 시도에 따라서 시군구 값 넣기
    if (sido == "서울특별시") {
        sigungu = seoulSigungu;
    } else if (sido == "부산광역시") {
        sigungu = busanSigungu;
    } else if (sido == "대구광역시") {
        sigungu = deaguSigungu;
    } else if (sido == "인천광역시") {
        sigungu = incheonSigungu;
    } else if (sido == "광주광역시") {
        sigungu = gwangjuSigungu;
    } else if (sido == "대구광역시") {
        sigungu = deaguSigungu;
    } else if (sido == "울산광역시") {
        sigungu = ulsanSigungu;
    } else if (sido == "경기도") {
        sigungu = gyeongiSigungu;
    } else if (sido == "강원도") {
        sigungu = gangwonSigungu;
    } else if (sido == "충청북도") {
        sigungu = choongbookSigungu;
    } else if (sido == "충청남도") {
        sigungu = choongnamSigungu;
    } else if (sido == "전라남도") {
        sigungu = jeonamSigungu;
    } else if (sido == "전라북도") {
        sigungu = jeonbookSigungu;
    } else if (sido == "경상남도") {
        sigungu = gyeongsangSigungu;
    } else if (sido == "경상북도") {
        sigungu = gyeongbookSigungu;
    } else if (sido == "제주특별자치도") {
        sigungu = jejuSigungu;
    } else {
        sigungu = [];
    }

    $("#sigungu").empty(); // 시군구가 비어있으면
    $("#sigungu").append('<option></option>'); // 옵션 추가
    for (let i = 0; i < sigungu.length; i++) {
        $("#sigungu").append('<option>' + sigungu[i] + '</option>');
    }

};

      // 지도 초기값
      let map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 13
      });
    
      // 마커 초기값
      let marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(37.3595704, 127.105399)
      });
    
      // 전체검색
      function addrSearch() {
        let addr = $("#search-input").val();
        naver.maps.Service.geocode({
          address: addr
        }, function (status, response) {
          if (status !== naver.maps.Service.Status.OK) {
            return alert('Something wrong!');
          }
    
          let responseParse = response.result; // 검색 결과의 배열
          console.log(responseParse);
    
          let x = responseParse.items[0].point.x;
          let y = responseParse.items[0].point.y;
    
          let point = new naver.maps.Point(x, y);
    
          map.setCenter(point);
          marker.setPosition(point);
    
        });
      }
    