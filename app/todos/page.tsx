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
    <div style={{ padding: '10px', display: 'flex', alignItems: 'stretch', width: '100%', boxSizing: 'border-box' }}>
      <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid red', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
      <IconButton onClick={handlePreviousMonth}>
        <ArrowBackIcon />
      </IconButton>
      </div>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.75)', borderRadius: '5px', border: '1px solid red' }}>{month} {year}</div>
      <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid red', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
      <IconButton onClick={handleNextMonth}>
        <ArrowForwardIcon />
      </IconButton>
      </div>
    </div>
    <Calendar currentDate={currentDate} />
    </div>
  );
}