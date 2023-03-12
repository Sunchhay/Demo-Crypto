var moment = require('moment/min/moment-with-locales')

const NormalDate = (date: any) => {
  return moment(date).locale('km').format(`${`ថ្ងៃ`}DD ${`ខែ`}MMMM ${`ឆ្នាំ`}YYYY`)
};

export default NormalDate;