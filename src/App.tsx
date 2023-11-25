import { useState } from "react";
import iconArrow from "../public/assets/images/icon-arrow.svg";

import  "./App.css";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [dayError, setDayError] = useState(false);
  const [monthError, setMonthError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  const calculateBirthday = () => {
    const birthDate = new Date(`${year}-${month}-${day}`);
    const currentDateTime = currentDate.getTime();
    const birthDateTime = birthDate.getTime();

    if (isNaN(birthDateTime)|| birthDate > currentDate ){
      setCurrentDate(new Date)
      if (!day) setDayError(true);
      if (!month) setMonthError(true);
      if (!year) setYearError(true);
      
      
      return;

    }

    let timeDifference = currentDateTime - birthDateTime;
    let calculatedAge = new Date(timeDifference);

    const years = calculatedAge.getUTCFullYear() - 1970;
    const months = calculatedAge.getUTCMonth();
    const days = calculatedAge.getUTCDate() - 1;
    setAge({ years, months, days });
  };

  return (
    <>
      <div className='main-container'>
        <form>
          <div className="grid">
          <div className="flex">
            <label htmlFor='day' className={`${parseInt(day,10) > 31 && "red" || dayError && "red"}`} >DAY <br />
              <input
                type="text"
                id='day'
                name='day'
                placeholder='DD'
                value={day}
                onChange={(e) => setDay(e.target.value)
                   }
              />
              {(parseInt(day, 10) > 31 || dayError) && <small>{dayError ? "Field is required" : "Must be a valid day"}</small>}
            </label>
          </div>

          <div className="flex">
            <label htmlFor='month' className={`${parseInt(month,10) > 12 && "red"  || monthError && 'red'}`} >MONTH <br />
              <input
                type="text"
                id='month'
                name='month'
                placeholder='MM'
                value={month}
                onChange={(e) => setMonth(e.target.value)}
               
              />
               {(parseInt(month, 10) > 12 || monthError) && <small>{monthError ? "Field is required" : "Must be a valid month"}</small>}
            </label>
          </div>

          <div className="flex">
            <label htmlFor='year' className={`${parseInt(year, 10) >  2023 && "red"|| yearError && "red"}`}>
          YEAR <br />
              <input
                type="text"
                id='year'
                name='year'
                placeholder='YYYY'
                value={year}
                
                onChange={(e) => setYear(e.target.value)}
              />
             {(parseInt(year, 10) > 2023 || yearError) && <small>{yearError ? "Field is required" : "Must be in the past"}</small>}
            </label>
          </div>
         
          </div>
          
          
          
            <hr />
            <div className='divider-container'>
            <button type="button"  onClick={calculateBirthday}>
              <img src={iconArrow} alt="" />
              
            </button>
          </div>

        </form>
      

        <div className='align'>
          <span className='highlighted'>{age.years ? age.years : "- -"}</span>
          <span className='bold one'>years</span>
        </div>
        <div className='align'>
          <span className='highlighted'>{age.months ? age.months : "- -"}</span><span className='bold two'>months</span>
        </div>
        <div className='align'>
          <span className='highlighted'>{age.days ? age.days : '- -'}</span>
          <span className='bold three'>days</span>
          
        </div>
      </div>
    </>
  );
};


export default App