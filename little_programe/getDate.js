/**
 * @file Given the year and the Day of this year, caculate the date
 * @author YDSS
 *
 * Created on Wed Mar 28 2018
 *
 */
function getDateFromDay(year, day) {
    const daysOfMonth = [
        31,
        (year % 4 === 0) ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ];

    if (day > (year % 4 === 0 ? 366: 365)) {
        throw new RangeError(`the year of ${year} can not have ${day} days`);
    }

    let month;
    let dayOfMonth; 
    let daysRemain = day - daysOfMonth[0]; 
    let i = 0;

    while (daysRemain > 0) {
        i++; 
        daysRemain -= daysOfMonth[i];
    }
    month = i + 1;
    dayOfMonth = daysRemain + daysOfMonth[i];

    return `${year}-${month}-${dayOfMonth}`
}

function test() {
    console.log(getDateFromDay(2018, 364));
}

test();