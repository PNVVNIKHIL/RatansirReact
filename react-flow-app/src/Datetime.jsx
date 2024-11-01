function Datetime()
{
    const now = new Date();
    const currentDate = now.toDateString();
    const currentTime = now.toLocaleTimeString();
    return(
        <>
            <h2>Current Date: {currentDate}</h2>
            <h2>Current Time: {currentTime}</h2>
            <h2>CurrentDate & Time : {currentDate} {currentTime}</h2>
        </>


    )
}

export default Datetime;