/**
 * Korean Traditional Wedding Invitation Configuration
 * 한국 전통 모바일 청첩장 설정
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,

  // ── 메인 (히어로) ──
  groom: {
    name: "박준홍",
    nameEn: "Groom",
    father: "박종수",
    mother: "안현옥",
    fatherDeceased: true,
    motherDeceased: false
  },

  bride: {
    name: "원지영",
    nameEn: "Bride",
    father: "원철희",
    mother: "이기순",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-05-23",
    time: "16:00",
    venue: "삼청각",
    hall: "일화당",
    address: "서울시 성북구 대사관로 3",
    tel: "02-765-3000",
    mapLinks: {
      kakao: "https://place.map.kakao.com/9103357",
      naver: "https://map.naver.com/p/entry/place/11569723?placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202603192213&locale=ko&svcName=map_pcv5&c=15.00,0,0,0,dh"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "살랑이는 바람결에\n사랑이 묻어나는 계절입니다.\n여기 곱고 예쁜 두 사람이 사랑을 맺어\n인생의 반려자가 되려 합니다.\n새 인생을 시작하는 이 자리에 오셔서\n축복해 주시면 감사하겠습니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "박준홍", bank: "우리은행", number: "1002-563-440-632" },
    ],
    bride: [
      { role: "신부", name: "원지영", bank: "신한은행", number: "110-539-856065" },
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 박준홍 ♥ 신부 원지영 결혼합니다",
    description: "2026년 5월 23일, 소중한 분들을 초대합니다."
  }
};
