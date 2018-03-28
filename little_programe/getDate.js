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
    let month;
    let dayOfMonth; 

    daysOfMonth.reduce((pre, cur, index) => {
        console.log(`${pre}, ${cur}`)
        let daysSoFar = pre + cur;

        if (daysSoFar < day) {
            return daysSoFar;
        } 

        let remain= daysSoFar - day;
        if (dayOfMonth === 0) {
            month = index + 1; 
            dayOfMonth = cur;
        }
        else {
            month = index + 2;
            dayOfMonth = remain;
        }
    }, 0);

    return `${month} ${dayOfMonth}, ${year}`
}

function test() {
    console.log(getDateFromDay(2018, 61));
}

test();