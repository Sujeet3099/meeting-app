import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import searchIcon from '../assets/search_black_24dp.svg';
// import calendar from '../assets/calendar_today_black_24dp.svg';
import './meeting.css';
import MeetingTable from './MeetingTable';
import axios from '../requests/axiosInstance';
import { loadData } from '../constant';

function Meeting() {
  const [search, setSearch] = useState('');
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(search);
    // console.log(fromDate);
    // console.log(toDate);
    fetchdata();
  };
  const dispatch = useDispatch();
  const fetchdata = async () => {
    const resp = await axios.get('/', {
      params: {
        name: search,
        from: fromDate,
        to: toDate,
      },
    });
    console.log(resp.data.data.meetings);
    dispatch(loadData(resp.data.data.meetings));
    return resp;
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className='meeting'>
      <h1>My Meetings</h1>
      <div className='meeting__form'>
        <div className='meeting__form__div'>
          <form onSubmit={handleSubmit}>
            <i className='meeting__form__search'>
              <img src={searchIcon} alt='search-icon' />
            </i>
            <input
              type='text'
              placeholder='Search'
              style={{ textIndent: '1.75rem' }}
              val={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
        <div className='meeting__form__div'>
          <label>From:</label>
          <input
            type='date'
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>
        <div className='meeting__form__div'>
          <label>To:</label>
          <input
            type='date'
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>
      </div>
      <MeetingTable />
    </div>
  );
}

export default Meeting;
