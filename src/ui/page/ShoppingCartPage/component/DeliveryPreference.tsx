import {useState} from "react";

export default function DeliveryPreference(){
  const [selectedDate, setSelectedDate] = useState("");

  // Get tomorrow's date in YYYY-MM-DD format
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getEndDate=()=>{
    const endDate=new Date();
    endDate.setDate(endDate.getDate()+14);
    return endDate.toISOString().split('T')[0];
  }
  return (
    <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border px-4 py-4 text-primary">
      <legend className="fieldset-legend text-primary font-bold">DELIVERY PREFERENCE:</legend>


      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="input input-bordered w-full"
        placeholder="Pick a date"
        min={getTomorrowDate()}
        max={getEndDate()}
      />

      <select defaultValue="17:00-20:00" className="select">
        <option>10:00-13:00</option>
        <option>13:00-16:00</option>
        <option>17:00-20:00</option>

      </select>
    </form>
  );
}