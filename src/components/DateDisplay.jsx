import React from "react";
import HijriDate from "hijri-date";

const DateDisplay = () => {
  const today = new HijriDate().toLocaleString("ar-SA");
  return <p className="text-center mt-2">التاريخ الهجري: {today}</p>;
};

export default DateDisplay;