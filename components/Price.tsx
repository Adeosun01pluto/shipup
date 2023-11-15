import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { CiLocationOn } from "react-icons/ci";
import { FaWeightHanging } from "react-icons/fa6";

export default function Price() {
  return (
    <div className="w-full min-h-48 mt-32 mb-12 flex items-center justify-center">
      <div className="w-[95%] lg:w-[90%] p-5 md:px-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-4 sm:gap-2 justify-center bg-white min-h-32 rounded-lg">
        <TextField
          id="outlined-basic"
          label="Origin"
          placeholder='Enter Location'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CiLocationOn  />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Destionation"
          placeholder='Enter Location'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CiLocationOn  />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        
        <TextField
          id="outlined-basic"
          label="Weight"
          placeholder='Weight in Kg'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaWeightHanging />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <button className='py-4 px-5 text-white bg-[#2C2D5B] rounded-md font-semibold text-sm'>Check Prices</button>
        
      </div>
    </div>
  )
}
