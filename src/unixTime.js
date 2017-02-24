import moment from 'moment';

export const unixTimestamp = (dateTime) => {
  return moment(dateTime, 'YYYY-MM-DD').unix();
};
