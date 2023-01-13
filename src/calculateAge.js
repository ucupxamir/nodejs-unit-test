import moment from 'moment';

export const calculateAge = (date1, date2) => {
    return moment(date2).diff(date1, 'years')
}

console.log(calculateAge("1998-09-01", new Date()))