"use client";
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import Calendar from './calendar';

export default function TodosPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePreviousMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <div>
    <div style={{padding:'10px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <IconButton onClick={handlePreviousMonth}>
        <ArrowBackIcon />
      </IconButton>

      <span>{month} {year}</span>

      <IconButton onClick={handleNextMonth}>
        <ArrowForwardIcon />
      </IconButton>
    </div>
    <Calendar />
    </div>
  );
}