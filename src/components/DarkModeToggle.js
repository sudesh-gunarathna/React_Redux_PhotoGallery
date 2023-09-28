import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../redux/theme/themeSlice";

function DarkModeToggle() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  console.log(darkMode)
  
  const dispatch = useDispatch();

  

  const handleToggleClick = ()=>{
    dispatch(toggleMode())
  }
  return (
    <div
      className={`flex gap-3 cursor-pointer  font-mono justify-center border rounded-md px-2 py-2 mx-2 my-2 ${
        darkMode ? "border-white text-white" : "border-black text-black" 
      }`}
     onClick={handleToggleClick}>
      <div>{darkMode ? "Light" : "Dark"}</div>
      <div>{darkMode ? "🌝" : "🌚"} </div>
    </div>
  );
}

export default DarkModeToggle;
