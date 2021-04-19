import React, { useState } from 'react';
import './meeting.css';
import axios from '../requests/axiosInstance';
import deleteIcon from '../assets/delete_black_24dp.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addMeeting, deleteMeeting } from '../constant';
function MeetingTable() {
  const obj = {
    name: '',
    people: '',
    meetingDate: '',
    startTime: '',
    endTime: '',
  };
  const [formData, setFormData] = useState(obj);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const handlePost = async () => {
    console.log(formData);
    try {
      await axios.post('/', formData);
      dispatch(addMeeting(formData));
      setFormData(obj);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete('/', {
        params: {
          id: id,
        },
      });
      dispatch(deleteMeeting(id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='meeting__table'>
      <table width='100%'>
        <tbody>
          <tr>
            <td>Sl. no.</td>
            <td>Meeting name</td>
            <td>No of People attending</td>
            <td>Date</td>
            <td>Start time</td>
            <td>End time</td>
            <td>Actions</td>
          </tr>

          {data?.map((meeting, index) => {
            const {
              meetingDate,
              name,
              _id,
              people,
              startTime,
              endTime,
            } = meeting;
            return (
              <tr key={_id ? _id : index}>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{people}</td>
                <td>{meetingDate.toString().split('T')[0]}</td>
                <td>{startTime}</td>
                <td>{endTime}</td>
                <td>
                  <img
                    src={deleteIcon}
                    alt='delete'
                    onClick={() => handleDelete(_id)}
                  />
                </td>
              </tr>
            );
          })}

          <tr>
            <td></td>
            <td>
              <input
                type='text'
                value={formData?.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type='text'
                value={formData?.people}
                onChange={(e) =>
                  setFormData({ ...formData, people: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type='date'
                value={formData?.meetingDate}
                onChange={(e) =>
                  setFormData({ ...formData, meetingDate: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type='time'
                value={formData?.startTime}
                onChange={(e) =>
                  setFormData({ ...formData, startTime: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type='time'
                value={formData?.endTime}
                onChange={(e) =>
                  setFormData({ ...formData, endTime: e.target.value })
                }
              />
            </td>
            <td>
              <button className='btn' onClick={handlePost}>
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MeetingTable;
