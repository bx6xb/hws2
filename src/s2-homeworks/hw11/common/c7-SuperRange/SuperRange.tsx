import React from "react"
import { Slider, SliderProps } from "@mui/material"

const SuperRange: React.FC<SliderProps> = (props) => {
  const greenColor = "#00CC22"

  return (
    <Slider
      sx={{
        // стили для слайдера // пишет студент
        color: greenColor,
        width: "170px",
        "& .MuiSlider-thumb": {
          border: `1px solid ${greenColor}`,
          bgcolor: "white",
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  )
}

export default SuperRange
