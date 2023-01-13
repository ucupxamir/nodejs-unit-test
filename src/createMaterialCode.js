import moment from 'moment';

export const createMaterialCode = (freightCode, freightdate, existingMaterial) => {
    return `${freightCode}-${moment(freightdate).format('YYMM-DD')}${(existingMaterial + 1).toString().padStart(2, '0')}`
}