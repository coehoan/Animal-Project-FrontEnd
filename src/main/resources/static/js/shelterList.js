// sido + sigungu = orgNm

let selectedSido;
let selectedSigungu;
let selectedKind;
let selectedKindOf;

function kindSelected(value) {

    selectedKind = value;

}

function sidoSelected(value) {
    selectedSido = value;
}

function sigunguSelected(value) {
    selectedSigungu = value;
}
function RegionOptionChange() {

    // 시군구들 옵션에 넣을 값
    let seoulSigungu = ["관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"];
    let busanSigungu = ["동구", "동래구", "부산진구", "북구", "사상구", "사하구", "서구", "수영구", "연제구", "영도구", "중구", "해운대구"];
    let deaguSigungu = ["남구", "달서구", "달성군", "동구", "북구", "서구", "수성구", "중구"];
    let incheonSigungu = ["강화군", "계양구", "남동구", "동구", "미추홀구", "부평구", "서구", "연수구", "옹진군", "중구"];
    let gwangjuSigungu = ["광산구", "남구", "동구", "북구", "서구"];
    let deajeonSigungu = ["대덕구", "동구", "서구", "유성구", "중구"];
    let ulsanSigungu = ["남구", "동구", "북구", "울주군", "중구"];
    let gyeongiSigungu = ["동두천시", "부천시", "성남시", "수원시", "시흥시", "안산시", "안성시", "안양시", "양주시", "양평군", "여주시", "연천군", "오산시", "용인시", "용인시", "기흥구", "의왕시", "의정부시", "이천시", "파주시", "평택시", "포천시", "하남시", "화성시"];
    let gangwonSigungu = ["강릉시", "고성군", "동해시", "삼척시", "속초시", "양구군", "양양군", "영월군", "원주시", "인제군", "정선군", "철원군", "춘천시", "태백시", "평창군", "홍천군", "화천군", "횡성군"];
    let choongbookSigungu = ["괴산군", "단양군", "보은군", "영동군", "옥천군", "음성군", "제천시", "증평군", "진천군", "청주시", "충주시"];
    let choongnamSigungu = ["계룡시", "공주시", "금산군", "논산시", "당진시", "보령시", "부여군", "서산시", "서천군", "아산시", "연기군", "예산군", "천안시", "청양군", "태안군", "홍성군"];
    let jeonbookSigungu = ["고창군", "군산시", "김제시", "남원시", "무주군", "부안군", "순창군", "완주군", "익산시", "임실군", "장수군", "전주시", "정읍시", "진안군"];
    let jeonamSigungu = ["영광군", "영암군", "완도군", "장성군", "장흥군", "진도군", "함평군", "해남군", "화순군"];
    let gyeongbookSigungu = ["김천시", "문경시", "봉화군", "상주시", "성주군", "안동시", "영덕군", "영양군", "영주시", "영천시", "예천군", "울릉군", "울진군", "의성군", "청도군", "청송군", "칠곡군", "포항시"];
    let gyeongsangSigungu = ["거제시", "거창군", "경상남도", "고성군", "김해시", "남해군", "밀양시", "사천시", "산청군", "양산시", "의령군", "진주시", "창녕군", "창원 마산합포회원구", "창원 의창성산구", "창원 진해구", "통영시", "하동군", "함안군", "함양군", "합천군"];
    let jejuSigungu = ["서귀포시", "제주시", "제주특별자치도"];

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

//스프링한테 옵션 선택한 값 오브젝트로 fetch 요청하기

$("#detailSearch").click(() => {
    toRegion(selectedSido, selectedSigungu);

});

$("#detailSearch").click(() => {
    toRegionSido(selectedSido);

});

$("#detailSearch").click(() => {
    toKindOnly(selectedKind);

});








// Ajax 함수

async function toRegion(selectedSido, selectedSigungu) { // 지역 검색

    if ($("#sido").val() && $("sigungu").val() != null) {
        let response = await fetch(`/search/animals/region?sido=${selectedSido}&sigungu=${selectedSigungu}`);
        console.log(selectedSido, selectedSigungu);
        console.log(response);

        let reseponseParse = await response.json();
        console.log(reseponseParse);

        if (reseponseParse.code == 1) {
            alert("검색 성공");
            $("#region").empty();
            for (regionList of reseponseParse.data) { // data 크기만큼
                $("#region").append(regionRender(regionList)); // append
                $("#region").append(detailRender(regionList));
            }



        } else {
            alert("검색 실패");
        }

        //return selectedSido, selectedSigungu;
    }
}

async function toAll(selectedSido, selectedSigungu, selectedKind, selectedKindOf, selectedFirstDate, selectedLastDate) { // 지역 검색

    if ($("#sido").val() && $("sigungu").val() && $("#kind").val() && $("#kind-of").val() && $("#firstdate").val() && $("#last-date").val() != null) {
        let response = await fetch(`/search/animals/all?sido=${selectedSido}&sigungu=${selectedSigungu}&kind=${selectedKind}&kindOf=${selectedKindOf}&firstdate=${selectedFirstDate}&lastdate=${selectedLastDate}`);
        console.log(selectedSido, selectedSigungu, selectedKind, selectedKindOf, selectedFirstDate, selectedLastDate);
        console.log(response);

        let reseponseParse = await response.json();
        console.log(reseponseParse);

        if (reseponseParse.code == 1) {
            alert("검색 성공");
            $("#region").empty();
            for (regionList of reseponseParse.data) { // data 크기만큼
                $("#region").append(regionRender(regionList)); // append
                $("#region").append(detailRender(regionList));
            }

        } else {
            alert("검색 실패");
        }

        //return selectedSido, selectedSigungu;
    }
}



async function toRegionSido(selectedSido) { // 지역 시도 검색

    if ($("#sido").val() !== null) {
        let response = await fetch(`/search/animals/region-sido?sido=${selectedSido}`);
        console.log(selectedSido);
        console.log(response);

        let reseponseParse = await response.json();
        console.log(reseponseParse);

        if (reseponseParse.code == 1) {
            alert("검색 성공");
            $("#region").empty();
            for (regionList of reseponseParse.data) { // data 크기만큼
                $("#region").append(regionRender(regionList)); // append
                $("#region").append(detailRender(regionList));
            }



        } else {
            alert("검색 실패");
        }

        //return selectedSido, selectedSigungu;
    }

}

async function toKind(selectedKind, selectedKindOf) { // 품종 검색

    if ($("#kind").val() && $("#kind-of").val() != null) {
        let response = await fetch(`/search/animals/kind?kind=${selectedKind}&kindOf=${selectedKindOf}`);
        console.log(selectedKind, selectedKindOf);
        console.log(response);

        let reseponseParse = await response.json();
        console.log(reseponseParse);

        if (reseponseParse.code == 1) {
            alert("검색 성공");
            $("#region").empty();
            for (kindList of reseponseParse.data) { // data 크기만큼
                $("#region").append(kindRender(kindList)); // append
            }



        } else {
            alert("검색 실패");
        }

        //return selectedSido, selectedSigungu;
    }

}

function kindRender(kindList) {
    return `<tr>
                <th scope="row" style="vertical-align: middle;">${kindList.id}</th>
                <td style="vertical-align: middle;">${kindList.kindCd}</td>
                <td width="110"><img src="${kindList.filename}" width="100" height="100"></td>
                <td style="vertical-align: middle;">${kindList.happenPlace}</td>
                <td style="vertical-align: middle;">${kindList.sexCd}</td>
                <td style="vertical-align: middle;">${kindList.age}</td>
                <td style="vertical-align: middle;">
                    ${kindList.processState}</td>
                <td style="vertical-align: middle;" width="100">
                    <button id="showDetail" class="m_button"">자세히</button>
                </td>
            </tr>`;
}

function dayRender(dayList) {
    return `<tr>
                <th scope="row" style="vertical-align: middle;">${dayList.id}</th>
                <td style="vertical-align: middle;">${dayList.kindCd}</td>
                <td width="110"><img src="${dayList.filename}" width="100" height="100"></td>
                <td style="vertical-align: middle;">${dayList.happenPlace}</td>
                <td style="vertical-align: middle;">${dayList.sexCd}</td>
                <td style="vertical-align: middle;">${dayList.age}</td>
                <td style="vertical-align: middle;">
                    ${dayList.processState}</td>
                <td style="vertical-align: middle;" width="100">
                    <button id="showDetail" class="m_button"">자세히</button>
                </td>
            </tr>`;
}


function regionRender(regionList) {
    console.log(regionList.id);
    return `<tr>
                <th scope="row" style="vertical-align: middle;">${regionList.id}</th>
                <td style="vertical-align: middle;">${regionList.kindCd}</td>
                <td width="110"><img src="${regionList.filename}" width="100" height="100"></td>
                <td style="vertical-align: middle;">${regionList.happenPlace}</td>
                <td style="vertical-align: middle;">${regionList.sexCd}</td>
                <td style="vertical-align: middle;">${regionList.age}</td>
                <td style="vertical-align: middle;">
                    ${regionList.processState}</td>
                <td style="vertical-align: middle;" width="100">
                    <button id="showDetail" class="m_button"">자세히</button>
                </td>
            </tr>`;
}

function detailRender(regionList) {
    return `<tr>
                <td colspan="9" id="detail" class="m_div_display_none">
                    <div class="m_sub_content">
                        #체중:${regionList.weight}
                        #색상:${regionList.colorCd}
                        #중성화여부:${regionList.neuterYn}
                        #보호소이름:${regionList.careNm}
                        #보호소전화번호:${regionList.careTel}
                        #보호장소:${regionList.careAddr}
                        #관활기관:${regionList.orgNm}
                        #담당자:${regionList.chargeNm}
                        #담당자연락처:${regionList.officetel}
                    </div>
                </td>
            </tr>`;
}

toRegion("");

