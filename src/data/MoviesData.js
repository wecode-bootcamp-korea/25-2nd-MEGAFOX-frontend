const MOVIES_DATA = [
  {
    age_rate: '15세이상관람가',
    avg_rating: null,
    description:
      '히어로의 시대는 끝났다\n‘베놈’과 완벽한 파트너가 된 ‘에디 브록’(톰 하디) 앞에 ‘클리터스 캐서디’(우디 해럴슨)가 ‘카니지’로 등장,\n앞으로 닥칠 대혼돈의 세상을 예고한다.\n대혼돈의 시대가 시작되고,\n악을 악으로 처단할 것인가',
    image: [
      {
        main_image_url:
          'https://img.megabox.co.kr/SharedImg/2021/09/29/fl6qV6UG8faiMppMO4LZp9VZlohic35T_316.jpg',
      },
    ],
    ko_name: '베놈 2: 렛 데어 비 카니지',
    like: 0,
    movie_id: 0,
    release_date: '2021-10-13',
  },
  {
    age_rate: '12세이상관람가',
    avg_rating: null,
    description:
      '가장 강력한 운명의 적과 마주하게된 제임스 본드의 마지막 미션이 시작된다',
    image: [
      {
        main_image_url:
          'https://img.megabox.co.kr/SharedImg/2021/10/01/lZ52BaiDFcKH76xboKAvh7oYqAoU9qhf_420.jpg',
      },
    ],
    ko_name: '007 노 타임 투 다이',
    like: 0,
    movie_id: 1,
    release_date: '2021-09-29',
  },
  {
    age_rate: '15세이상관람가',
    avg_rating: null,
    description:
      '히어로의 시대는 끝났다\n‘베놈’과 완벽한 파트너가 된 ‘에디 브록’(톰 하디) 앞에 ‘클리터스 캐서디’(우디 해럴슨)가 ‘카니지’로 등장,\n앞으로 닥칠 대혼돈의 세상을 예고한다.\n대혼돈의 시대가 시작되고,\n악을 악으로 처단할 것인가',
    image: [
      {
        main_image_url:
          'https://img.megabox.co.kr/SharedImg/2021/09/29/WcTv7rcyNQL2vaCmCo0dq80Gdw79y7RE_316.jpg',
      },
    ],
    ko_name: '듄이터널스',
    like: 0,
    movie_id: 2,
    release_date: '2021-10-13',
  },
  {
    age_rate: '12세이상관람가',
    avg_rating: null,
    description:
      '가장 강력한 운명의 적과 마주하게된 제임스 본드의 마지막 미션이 시작된다',
    image: [
      {
        main_image_url:
          'https://img.megabox.co.kr/SharedImg/2021/09/16/5kxrrz7YXuRfySllsNV3pFwar5WP9vhn_316.jpg',
      },
    ],
    ko_name: '첫눈이 사라졌다',
    like: 0,
    movie_id: 3,
    release_date: '2021-09-29',
  },
  {
    age_rate: '15세이상관람가',
    avg_rating: null,
    description:
      '히어로의 시대는 끝났다\n‘베놈’과 완벽한 파트너가 된 ‘에디 브록’(톰 하디) 앞에 ‘클리터스 캐서디’(우디 해럴슨)가 ‘카니지’로 등장,\n앞으로 닥칠 대혼돈의 세상을 예고한다.\n대혼돈의 시대가 시작되고,\n악을 악으로 처단할 것인가',
    image: [
      {
        main_image_url:
          'https://img.megabox.co.kr/SharedImg/2021/09/29/fl6qV6UG8faiMppMO4LZp9VZlohic35T_420.jpg',
      },
    ],
    ko_name: '베놈 2: 렛 데어 비 카니지',
    like: 0,
    movie_id: 4,
    release_date: '2021-10-13',
  },
  {
    age_rate: '12세이상관람가',
    avg_rating: null,
    description:
      '가장 강력한 운명의 적과 마주하게된 제임스 본드의 마지막 미션이 시작된다',
    image: [
      {
        main_image_url:
          'https://img.megabox.co.kr/SharedImg/2021/10/01/lZ52BaiDFcKH76xboKAvh7oYqAoU9qhf_420.jpg',
      },
    ],
    ko_name: '007 노 타임 투 다이',
    like: 0,
    movie_id: 5,
    release_date: '2021-09-29',
  },
  {
    age_rate: '15세이상관람가',
    avg_rating: null,
    description:
      '히어로의 시대는 끝났다\n‘베놈’과 완벽한 파트너가 된 ‘에디 브록’(톰 하디) 앞에 ‘클리터스 캐서디’(우디 해럴슨)가 ‘카니지’로 등장,\n앞으로 닥칠 대혼돈의 세상을 예고한다.\n대혼돈의 시대가 시작되고,\n악을 악으로 처단할 것인가',
    image: [
      {
        main_image_url:
          'https://img.megabox.co.kr/SharedImg/2021/09/29/fl6qV6UG8faiMppMO4LZp9VZlohic35T_420.jpg',
      },
    ],
    ko_name: '베놈 2: 렛 데어 비 카니지',
    like: 0,
    movie_id: 6,
    release_date: '2021-10-13',
  },
  {
    age_rate: '12세이상관람가',
    avg_rating: null,
    description:
      '가장 강력한 운명의 적과 마주하게된 제임스 본드의 마지막 미션이 시작된다',
    image: [
      {
        main_image_url:
          'https://img.megabox.co.kr/SharedImg/2021/10/01/lZ52BaiDFcKH76xboKAvh7oYqAoU9qhf_420.jpg',
      },
    ],
    ko_name: '007 노 타임 투 다이',
    like: 0,
    movie_id: 7,
    release_date: '2021-09-29',
  },
];
export default MOVIES_DATA;
