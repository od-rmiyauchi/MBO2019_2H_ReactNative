/**
 * ==============================================================================
 * City
 * ------------------------------------------------------------------------------
 */
class City {
  id: string; // 市ID
  cityName: string; // 市名
  prefectureName: string; // 県名
  detail?: string; // 詳細

  constructor() {
    this.id = '0';
    this.cityName = '';
    this.prefectureName = '';
  }
}

/* Export
============================================================================= */
export default City;

export const __dummyCities__: City[] = [
  {
    id: '130010',
    cityName: '東京',
    prefectureName: '東京都',
    detail: 'hogehoge',
  },
  {id: '140010', cityName: '横浜', prefectureName: '神奈川県'},
  {id: '471010', cityName: '那覇', prefectureName: '沖縄県'},
];
