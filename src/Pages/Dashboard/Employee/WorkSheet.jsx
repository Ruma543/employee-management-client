import { Button, Label, Select } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import useAxiosPublic from '../../../Hook/useAxiosPublic';
import Swal from 'sweetalert2';
import useAuth from '../../../Hook/useAuth';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import WorkSheetTable from './WorkSheetTable';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const WorkSheet = () => {
  const [startDate, setStartDate] = useState(new Date());
  // const [myWork, setMyWork] = useState([]);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  // const [selectedTask, setSelectedTask] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const task = form.get('task');
    const hour = form.get('hour');
    const date = form.get('date');
    const work = {
      task,
      hour,
      date,
      name: user.displayName,
      email: user.email,
    };
    axiosPublic.post('/worksheet', work).then(res => {
      console.log(res.data);
      e.target.reset();
      refetch();
      if (res.data.insertedId) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'work add successfully',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });

    console.log(work);
  };
  // useEffect(() => {
  //   axiosSecure.get(`/worksheet/${user.email}`).then(res => {
  //     console.log(res.data);
  //     setMyWork(res.data);
  //   });
  // }, []);
  const { refetch, data: work = [] } = useQuery({
    queryKey: ['myWork', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/worksheet/${user.email}`);
      return res.data;
    },
  });
  console.log(work);
  return (
    <div>
      <SectionTitle
        heading="Employee Worksheet"
        subHeading="Submit your work properly"
      ></SectionTitle>
      <form
        onSubmit={handleSubmit}
        className="grid w-4/5  gap-1 mx-auto grid-cols-4 lg:gap-4"
      >
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="task" value="Task" />
          </div>
          <Select id="task" name="task" required>
            <option disabled value="default"></option>
            <option value="sale">Sale</option>
            <option value="support">Support</option>
            <option value="content">Content</option>
            <option value="paper-work">Paper Work</option>
            <option value="any">Any</option>
          </Select>
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="hour" value="Hour" />
          </div>
          <input
            type="number"
            name="hour"
            placeholder="hour"
            className="w-full rounded-lg px-4 py-2 outline-0"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="Date" value="Date" />
          </div>
          <DatePicker
            name="date"
            selected={startDate}
            onChange={date => setStartDate(date)}
            minDate={new Date()}
            className="w-full rounded-lg px-4 py-2 outline-0"
          />
        </div>
        <div className="flex items-end">
          <Button className="bg-green-300 " type="submit">
            Submit
          </Button>
        </div>
      </form>

      <WorkSheetTable work={work}></WorkSheetTable>
    </div>
  );
};

export default WorkSheet;
