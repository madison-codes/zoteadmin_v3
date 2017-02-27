import moment from 'moment';

export const unixTimestamp = (dateTime) => {
  return moment(dateTime, 'YYYY-MM-DD HH:mm:ss').unix();
};
