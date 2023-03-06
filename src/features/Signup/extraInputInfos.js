const currDay = String(new Date().getDate());
const currMonth = String(new Date().getMonth());
const currYear = String(new Date().getFullYear());

export const extraInputInfos = [
  {
    title: 'Sinh nhật',
    type: 'select',
    options: {
      days: {
        defaultVal: currDay,
        name: 'Ngày',
        start: 1,
        end: 30,
      },
      months: {
        defaultVal: currMonth,
        name: 'Tháng',
        start: 1,
        end: 12,
      },
      years: {
        defaultVal: currYear,
        name: 'Năm',
        start: currYear - 118,
        end: currYear,
      },
    },
  },
  {
    title: 'Giới tính',
    type: 'radio',
    name: 'gender',
    values: {
      male: 'Nam',
      female: 'Nữ',
      others: 'Khác',
    },
  },
];
