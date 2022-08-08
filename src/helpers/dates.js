export function getCurrentDate() {
    const currentDate = new Date();

    return `${currentDate.getFullYear()}-${(currentDate.getMonth() < 10) ? "0" + (currentDate.getMonth()+ 1) : (currentDate.getMonth() + 1)}-${(currentDate.getDate() < 10) ? "0" + currentDate.getDate().toString() : currentDate.getDate()}`;
    
}

export function getOneMonthAgo() {
    // get current date

    const currentDate = new Date();

    if(currentDate.getMonth() === 0) {
        //its january and will need to be december 11
        //also will need to grab previous year
        return `${(currentDate.getFullYear() - 1)}-11-${(currentDate.getDate() < 10) ? "0" + currentDate.getDate().toString() : currentDate.getDate()}`
    } else {
        //just return this month - since its on a zero base, it'll auto be back compared to current Date
        return `${currentDate.getFullYear()}-${(currentDate.getMonth() < 10) ? "0" + currentDate.getMonth() : currentDate.getMonth()}-${(currentDate.getDate() < 10) ? "0" + currentDate.getDate().toString() : currentDate.getDate()}`
    }

}

//add in date calculations from Map component too