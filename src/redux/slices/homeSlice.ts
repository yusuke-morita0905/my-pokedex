import { createSlice } from "@reduxjs/toolkit";

interface State {
  works: {
    cd: string;
    link: string;
    title: string;
    development: string;
    rep: string;
    image: {
      srcName: string;
      ext: 'jpg' | 'png' | 'svg';
      alt: string;
    };
  }[];
  about: string;
}

const initialState: State = {
  works: [
    {
      cd: '1',
      link: 'https://iekon.jp/',
      title: '空き家・訳あり物件の買取業者探しならイエコン',
      development: 'React.js Typescript Express.js webpack',
      rep: 'フロントエンド マークアップ',
      image: {
        srcName: 'works1',
        ext: 'png',
        alt: '',
      },
    },
    {
      cd: '2',
      link: 'https://artmake-more.jp/',
      title: 'アートメイクモア 医療アートメイクの施術ができるクリニックを探せる・予約できる',
      development: 'WordPress PHP Javascript HTML5 Sass gulp',
      rep: 'テーマ作成 フロントエンド マークアップ',
      image: {
        srcName: 'works2',
        ext: 'png',
        alt: '',
      },
    },
    {
      cd: '3',
      link: 'https://c-partners.jp/',
      title: '株式会社クランピー＆パートナーズ',
      development: 'WordPress PHP Javascript HTML5 Sass gulp',
      rep: 'テーマ作成 フロントエンド マークアップ',
      image: {
        srcName: 'works3',
        ext: 'png',
        alt: '',
      },
    },
    {
      cd: '4',
      link: 'https://c-realestate.jp/lp/wakeari/',
      title: '訳あり物件買取窓口',
      development: 'WordPress PHP Javascript HTML5 Sass gulp',
      rep: 'テーマ作成 フロントエンド マークアップ',
      image: {
        srcName: 'works4',
        ext: 'png',
        alt: '',
      },
    },
    {
      cd: '5',
      link: 'https://c-realestate.jp/lp/saikenfuka/',
      title: '再建築不可物件の買取',
      development: 'WordPress PHP Javascript HTML5 Sass gulp',
      rep: 'テーマ作成 フロントエンド マークアップ',
      image: {
        srcName: 'works5',
        ext: 'png',
        alt: '',
      },
    },
    {
      cd: '6',
      link: 'https://mochibun-kyokasho.com/',
      title: '訳あり物件買取窓口',
      development: 'WordPress PHP Javascript HTML5 Sass gulp',
      rep: 'テーマ作成 フロントエンド マークアップ',
      image: {
        srcName: 'works6',
        ext: 'png',
        alt: '',
      },
    },
    {
      cd: '7',
      link: 'https://fairyartmake.com/',
      title: 'アートメイク専門のナチュラルアートメイク東京',
      development: 'WordPress PHP Javascript HTML5 Sass gulp',
      rep: 'テーマ作成 フロントエンド マークアップ',
      image: {
        srcName: 'works7',
        ext: 'png',
        alt: '',
      },
    },
    {
      cd: '8',
      link: 'https://as-cl-artmake.com/',
      title: 'あいち栄クリニック アートメイク',
      development: 'WordPress PHP Javascript HTML5 Sass gulp',
      rep: 'テーマ作成 フロントエンド マークアップ',
      image: {
        srcName: 'works8',
        ext: 'png',
        alt: '',
      },
    },
    {
      cd: '9',
      link: 'https://mensdatumo-dandyism.com/',
      title: 'メンズ脱毛サロン・クリニック人気ランキング',
      development: 'WordPress PHP Javascript HTML5 Sass gulp',
      rep: 'テーマ作成 フロントエンド マークアップ',
      image: {
        srcName: 'works9',
        ext: 'png',
        alt: '',
      },
    },
    {
      cd: '10',
      link: 'https://taurus-financial.com/',
      title: '行政書士トーラス総合法務事務所トーラス・フィナンシャルコンサルティング株式会社',
      development: 'WordPress PHP Javascript HTML5 Sass gulp',
      rep: 'テーマ作成 フロントエンド マークアップ',
      image: {
        srcName: 'works10',
        ext: 'png',
        alt: '',
      },
    },
    {
      cd: '11',
      link: 'https://law-pal.com/',
      title: '力新堂法律事務所',
      development: 'WordPress PHP Javascript HTML5 Sass gulp',
      rep: 'テーマ作成 フロントエンド マークアップ',
      image: {
        srcName: 'works11',
        ext: 'png',
        alt: '',
      },
    },
    {
      cd: '12',
      link: 'https://www.mc-law.jp/',
      title: '弁護士法人みずほ中央法律事務所・司法書士法人みずほ中央事務所',
      development: 'WordPress PHP Javascript HTML5 Sass gulp',
      rep: 'テーマ作成 フロントエンド マークアップ',
      image: {
        srcName: 'works12',
        ext: 'png',
        alt: '',
      },
    },
    {
      cd: '13',
      link: 'https://awazalaw-rikon.com/',
      title: 'あわざ総合法律事務所',
      development: 'WordPress PHP Javascript HTML5 Sass gulp',
      rep: 'テーマ作成 フロントエンド マークアップ',
      image: {
        srcName: 'works13',
        ext: 'png',
        alt: '',
      },
    },
    {
      cd: '14',
      link: 'https://sozoku-tako-law.com/',
      title: '弁護士法人多湖総合法律事務所',
      development: 'WordPress PHP Javascript HTML5 Sass gulp',
      rep: 'テーマ作成 フロントエンド マークアップ',
      image: {
        srcName: 'works14',
        ext: 'png',
        alt: '',
      },
    },
    {
      cd: '15',
      link: 'https://souzoku-utsunomiya-higashi.com/',
      title: '弁護士法人宇都宮東法律事務所(相続専門サイト)',
      development: 'WordPress PHP Javascript HTML5 Sass gulp',
      rep: 'テーマ作成 フロントエンド マークアップ',
      image: {
        srcName: 'works15',
        ext: 'png',
        alt: '',
      },
    },
    {
      cd: '16',
      link: 'https://kotsujiko-utsunomiya-higashi.com/',
      title: '弁護士法人宇都宮東法律事務所(交通事故専門サイト)',
      development: 'WordPress PHP Javascript HTML5 Sass gulp',
      rep: 'テーマ作成 フロントエンド マークアップ',
      image: {
        srcName: 'works16',
        ext: 'png',
        alt: '',
      },
    },
    {
      cd: '17',
      link: 'https://kawaisogo-kotsujiko.com/',
      title: '河合総合法律事務所',
      development: 'WordPress PHP Javascript HTML5 Sass gulp',
      rep: 'テーマ作成 フロントエンド マークアップ',
      image: {
        srcName: 'works17',
        ext: 'png',
        alt: '',
      },
    },
    {
      cd: '18',
      link: 'https://jikoshizuoka-greenlaw.com/',
      title: '弁護士法人コールグリーン浜松オフィス',
      development: 'WordPress PHP Javascript HTML5 Sass gulp',
      rep: 'テーマ作成 フロントエンド マークアップ',
      image: {
        srcName: 'works18',
        ext: 'png',
        alt: '',
      },
    },
    {
      cd: '19',
      link: 'https://yopi-saimu.com/',
      title: '弁護士法人よぴ法律会計事務所',
      development: 'WordPress PHP Javascript HTML5 Sass gulp',
      rep: 'テーマ作成 フロントエンド マークアップ',
      image: {
        srcName: 'works19',
        ext: 'png',
        alt: '',
      },
    },
    {
      cd: '20',
      link: 'https://kaitoru-info.com/',
      title: 'カイトル 着物買取業者ランキング',
      development: 'WordPress PHP Javascript HTML5 Sass gulp',
      rep: 'テーマ作成 フロントエンド マークアップ',
      image: {
        srcName: 'works20',
        ext: 'png',
        alt: '',
      },
    },
    {
      cd: '21',
      link: 'https://jobplace-kango.com/',
      title: 'JOB PLACE 看護士転職 看護士転職おすすめランキング',
      development: 'WordPress PHP Javascript HTML5 Sass gulp',
      rep: 'テーマ作成 フロントエンド マークアップ',
      image: {
        srcName: 'works21',
        ext: 'png',
        alt: '',
      },
    },
  ],
  about: `<p>1986年 東京都江戸川区生まれ。1児の父です。</p><p>2017年 職業訓練校WEB制作学科を卒業後、株式会社アートブルーに入社。<br class='pc'/>アルバイトとして2年間、マークアップエンジニアに従事しました。</p><p>2019年 株式会社clamppyでフロントエンドエンジニアを担当しWordPressの構造やテーマ、プラグインについて理解を深める。自社メディア、士業系、美容系のサイト制作、コーディング、マークアップ、テーマ開発、プラグイン開発、保守等を担当しています。</p>`,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
});
