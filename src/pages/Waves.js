import { mockData, useStormGlass } from '../hooks/useStormGlass';
import { useCurrentWeather } from '../hooks/useCurrentWeather';
import { ArrowDownIcon } from "@heroicons/react/outline"
import "./Waves.scss"
const data = mockData;
const days = [
  "Su",
  "Mo",
  "Tu",
  "We",
  "Th",
  "Fr",
  "Sa"
]

export const Waves = () => {
  const w = useStormGlass();
  


  return (
    
    <div style={{ width: '90%', height: '100%', alignSelf: 'center', overflow: 'auto' }}>
    
      <table className='table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Swell Height</th>
            <th>Swell Period</th>
            <th>Water Temperature</th>
            <th>Wave Direction</th>
            <th>Wave Height</th>
          </tr>
        </thead>
        <tbody>
          {data?.hours.filter((item,index) => index<24).map(d => {
            const dateNumbers = d.time.split("T")
            const date = new Date(d.time)
            // const day = date.getDay()
            return (
              <tr>
                <td key={d.time}>
                  {/* {days[day]} {day}  */}
                  {dateNumbers[0]} {date.getHours()}h</td>
                <td>{parseFloat(d.swellHeight.sg).toFixed(1)}</td>
                <td>{parseFloat(d.swellPeriod.sg).toFixed(1)}</td>
                <td>{parseFloat(d.waterTemperature.sg).toFixed(1)}</td>
                <td><ArrowDownIcon style={{ width: '15px', height: '15px', transform: `rotate(${d.waveDirection.sg}deg)` }} /></td>
                <td>{parseFloat(d.waveHeight.sg).toFixed(1)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};
