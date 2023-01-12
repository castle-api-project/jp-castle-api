import { valueOf } from "../types";

// 北海道 道央
const HokkaidoDououCityName = [
  "札幌市",
  "小樽市",
  "室蘭市",
  "夕張市",
  "岩見沢市",
  "苫小牧市",
  "美唄市",
  "芦別市",
  "江別市",
  "赤平市",
  "三笠市",
  "千歳市",
  "滝川市",
  "砂川市",
  "歌志内市",
  "深川市",
  "登別市",
  "恵庭市",
  "伊達市",
  "北広島市",
  "石狩市",
  "当別町",
  "新篠津村",
  "島牧村",
  "寿都町",
  "黒松内町",
  "蘭越町",
  "ニセコ町",
  "真狩村",
  "留寿都村",
  "喜茂別町",
  "京極町",
  "倶知安町",
  "共和町",
  "岩内町",
  "泊村",
  "神恵内村",
  "積丹町",
  "古平町",
  "仁木町",
  "余市町",
  "赤井川村",
  "南幌町",
  "奈井江町",
  "上砂川町",
  "由仁町",
  "長沼町",
  "栗山町",
  "月形町",
  "浦臼町",
  "新十津川町",
  "妹背牛町",
  "秩父別町",
  "雨竜町",
  "北竜町",
  "沼田町",
  "豊浦町",
  "壮瞥町",
  "白老町",
  "厚真町",
  "洞爺湖町",
  "安平町",
  "むかわ町",
  "日高町",
  "平取町",
  "新冠町",
  "浦河町",
  "様似町",
  "えりも町",
  "新ひだか町",
] as const;
type HokkaidoDououCityName = typeof HokkaidoDououCityName[number];

const HokkaidoDouou = {
  prefecture: "北海道",
  area: "道央",
  selectCity: (city: HokkaidoDououCityName) => city,
};

// 北海道 道南
const HokkaidoDounanCityName = [
  "函館市",
  "北斗市",
  "松前町",
  "福島町",
  "知内町",
  "木古内町",
  "七飯町",
  "鹿部町",
  "森町",
  "八雲町",
  "長万部町",
  "江差町",
  "上ノ国町",
  "厚沢部町",
  "乙部町",
  "奥尻町",
  "今金町",
  "せたな町",
] as const;
type HokkaidoDounanCityName = typeof HokkaidoDounanCityName[number];

const HokkaidoDounan = {
  prefecture: "北海道",
  area: "道南",
  selectCity: (city: HokkaidoDounanCityName) => city,
};

// 北海道 道北
const HokkaidoDouhokuCityName = [
  "旭川市",
  "留萌市",
  "稚内市",
  "士別市",
  "名寄市",
  "富良野市",
  "鷹栖町",
  "東神楽町",
  "当麻町",
  "比布町",
  "愛別町",
  "上川町",
  "東川町",
  "美瑛町",
  "上富良野町",
  "中富良野町",
  "南富良野町",
  "占冠村",
  "和寒町",
  "剣淵町",
  "下川町",
  "美深町",
  "音威子府村",
  "中川町",
  "幌加内町",
  "増毛町",
  "小平町",
  "苫前町",
  "羽幌町",
  "初山別村",
  "遠別町",
  "天塩町",
  "猿払村",
  "浜頓別町",
  "中頓別町",
  "枝幸町",
  "豊富町",
  "礼文町",
  "利尻町",
  "利尻富士町",
  "幌延町",
] as const;
type HokkaidoDouhokuCityName = typeof HokkaidoDouhokuCityName[number];

const HokkaidoDouhoku = {
  prefecture: "北海道",
  area: "道北",
  selectCity: (city: HokkaidoDouhokuCityName) => city,
};

// 北海道 道東
const HokkaidoDoutouCityName = [
  "釧路市",
  "帯広市",
  "北見市",
  "網走市",
  "紋別市",
  "根室市",
  "美幌町",
  "津別町",
  "斜里町",
  "清里町",
  "小清水町",
  "訓子府町",
  "豊かなみどり",
  "置戸町",
  "佐呂間町",
  "遠軽町",
  "湧別町",
  "滝上町",
  "興部町",
  "西興部村",
  "雄武町",
  "大空町",
  "音更町",
  "士幌町",
  "上士幌町",
  "鹿追町",
  "新得町",
  "清水町",
  "芽室町",
  "中札内村",
  "更別村",
  "大樹町",
  "広尾町",
  "幕別町",
  "池田町",
  "豊頃町",
  "本別町",
  "足寄町",
  "陸別町",
  "浦幌町",
  "釧路町",
  "厚岸町",
  "浜中町",
  "標茶町",
  "弟子屈町",
  "鶴居村",
  "白糠町",
  "別海町",
  "中標津町",
  "標津町",
  "羅臼町",
] as const;
type HokkaidoDoutouCityName = typeof HokkaidoDoutouCityName[number];

const HokkaidoDoutou = {
  prefecture: "北海道",
  area: "道東",
  selectCity: (city: HokkaidoDoutouCityName) => city,
};

// 青森県
const AomoriCityName = [
  "青森市",
  "弘前市",
  "八戸市",
  "黒石市",
  "五所川原市",
  "十和田市",
  "三沢市",
  "むつ市",
  "つがる市",
  "平川市",
  "平内町",
  "今別町",
  "蓬田村",
  "外ヶ浜町",
  "鰺ヶ沢町",
  "深浦町",
  "西目屋村",
  "藤崎町",
  "大鰐町",
  "田舎館村",
  "板柳町",
  "鶴田町",
  "中泊町",
  "野辺地町",
  "七戸町",
  "六戸町",
  "横浜町",
  "東北町",
  "六ヶ所村",
  "おいらせ町",
  "大間町",
  "東通村",
  "風間浦村",
  "佐井村",
  "三戸町",
  "五戸町",
  "田子町",
  "南部町",
  "階上町",
  "新郷村",
] as const;
type AomoriCityName = typeof AomoriCityName[number];

const Aomori = {
  prefecture: "青森県",
  area: null,
  selectCity: (city: AomoriCityName) => city,
};

// 岩手県
const IwateCityName = [
  "盛岡市",
  "宮古市",
  "大船渡市",
  "花巻市",
  "北上市",
  "久慈市",
  "遠野市",
  "一関市",
  "陸前高田市",
  "釜石市",
  "二戸市",
  "八幡平市",
  "奥州市",
  "滝沢市",
  "雫石町",
  "葛巻町",
  "岩手町",
  "紫波町",
  "矢巾町",
  "西和賀町",
  "金ケ崎町",
  "平泉町",
  "住田町",
  "大槌町",
  "山田町",
  "岩泉町",
  "田野畑村",
  "普代村",
  "軽米町",
  "野田村",
  "九戸村",
  "洋野町",
  "一戸町",
] as const;
type IwateCityName = typeof IwateCityName[number];

const Iwate = {
  prefecture: "岩手県",
  area: null,
  selectCity: (city: IwateCityName) => city,
};

// 秋田県
const AkitaCityName = [
  "秋田市",
  "能代市",
  "横手市",
  "大館市",
  "男鹿市",
  "湯沢市",
  "鹿角市",
  "由利本荘市",
  "潟上市",
  "大仙市",
  "北秋田市",
  "にかほ市",
  "仙北市",
  "小坂町",
  "上小阿仁村",
  "藤里町",
  "三種町",
  "八峰町",
  "五城目町",
  "八郎潟町",
  "井川町",
  "大潟村",
  "美郷町",
  "羽後町",
  "東成瀬村",
] as const;
type AkitaCityName = typeof AkitaCityName[number];

const Akita = {
  prefecture: "秋田県",
  area: null,
  selectCity: (city: AkitaCityName) => city,
};

// 宮城県
const MiyagiCityName = [
  "山形市",
  "米沢市",
  "鶴岡市",
  "酒田市",
  "新庄市",
  "寒河江市",
  "上山市",
  "村山市",
  "長井市",
  "天童市",
  "東根市",
  "尾花沢市",
  "南陽市",
  "山辺町",
  "中山町",
  "ふれあいと絆",
  "河北町",
  "西川町",
  "朝日町",
  "大江町",
  "大石田町",
  "金山町",
  "最上町",
  "舟形町",
  "真室川町",
  "大蔵村",
  "鮭川村",
  "戸沢村",
  "高畠町",
  "川西町",
  "小国町",
  "白鷹町",
  "飯豊町",
  "三川町",
  "庄内町",
  "遊佐町",
] as const;
type MiyagiCityName = typeof MiyagiCityName[number];

const Miyagi = {
  prefecture: "宮城県",
  area: null,
  selectCity: (city: MiyagiCityName) => city,
};

// 山形県
const YamagataCityName = [
  "新庄市",
  "金山町",
  "最上町",
  "舟形町",
  "真室川町",
  "大蔵村",
  "鮭川村",
  "戸沢村",
  "山形市",
  "寒河江市",
  "上山市",
  "村山市",
  "天童市",
  "東根市",
  "尾花沢市",
  "山辺町",
  "中山町",
  "河北町",
  "西川町",
  "朝日町",
  "大江町",
  "大石田町",
  "米沢市",
  "長井市",
  "南陽市",
  "高畠町",
  "川西町",
  "小国町",
  "白鷹町",
  "飯豊町",
  "鶴岡市",
  "酒田市",
  "三川町",
  "庄内町",
  "遊佐町",
] as const;
type YamagataCityName = typeof YamagataCityName[number];

const Yamagata = {
  prefecture: "山形県",
  area: null,
  selectCity: (city: YamagataCityName) => city,
};

// 福島県
const FukushimaCityName = [
  "福島市",
  "会津若松市",
  "郡山市",
  "いわき市",
  "白河市",
  "須賀川市",
  "喜多方市",
  "相馬市",
  "二本松市",
  "田村市",
  "南相馬市",
  "伊達市",
  "本宮市",
  "桑折町",
  "国見町",
  "川俣町",
  "大玉村",
  "鏡石町",
  "天栄村",
  "下郷町",
  "檜枝岐村",
  "只見町",
  "南会津町",
  "北塩原村",
  "西会津町",
  "磐梯町",
  "猪苗代町",
  "会津坂下町",
  "湯川村",
  "柳津町",
  "三島町",
  "金山町",
  "昭和村",
  "会津美里町",
  "西郷村",
  "泉崎村",
  "中島村",
  "矢吹町",
  "棚倉町",
  "矢祭町",
  "塙町",
  "鮫川村",
  "石川町",
  "玉川村",
  "平田村",
  "浅川町",
  "古殿町",
  "三春町",
  "小野町",
  "広野町",
  "楢葉町",
  "富岡町",
  "川内村",
  "大熊町",
  "双葉町",
  "浪江町",
  "葛尾村",
  "新地町",
  "飯舘村",
] as const;
type FukushimaCityName = typeof FukushimaCityName[number];

const Fukushima = {
  prefecture: "福島県",
  area: null,
  selectCity: (city: FukushimaCityName) => city,
};

export const Tohoku = {
  HokkaidoDouou,
  HokkaidoDouhoku,
  HokkaidoDoutou,
  HokkaidoDounan,
  Aomori,
  Iwate,
  Miyagi,
  Akita,
  Yamagata,
  Fukushima,
};
export type Tohoku = valueOf<typeof Tohoku>;