'use client';
import { Table } from '@/components/ui/table';
import { IUser, useStore } from '@/zuztand-store/useStore';
import { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { columnsUserList } from './data';

const UserList = () => {
  // const {users} = useStore();
  const users = [
    {
      id: '1',
      name: '1 John',
      sname: 'Doe',
      date: { from: '2023-01-01', to: '2023-12-31' },
      gender: 'Male',
      terms: true,
    },
    {
      id: '2',
      name: '2 Jane',
      sname: 'Smith',
      date: { from: '2023-02-01' },
      gender: 'Female',
      terms: false,
    },
    {
      id: '3',
      name: '3 Michael',
      sname: 'Johnson',
      date: { from: '2023-03-15', to: '2023-09-30' },
      gender: 'Male',
      terms: true,
    },
    {
      id: '4',
      name: '4 Emily',
      sname: 'Williams',
      date: { from: '2023-04-10' },
      gender: 'Female',
      terms: true,
    },
    {
      id: '5',
      name: '5 David',
      sname: 'Brown',
      date: { from: '2023-05-20', to: '2023-11-15' },
      gender: 'Male',
      terms: false,
    },
    {
      id: '6',
      name: '6 Sarah',
      sname: 'Miller',
      date: { from: '2023-06-05' },
      gender: 'Female',
      terms: true,
    },
    {
      id: '7',
      name: '7 James',
      sname: 'Wilson',
      date: { from: '2023-07-12', to: '2023-10-25' },
      gender: 'Male',
      terms: true,
    },
    {
      id: '8',
      name: '8 Olivia',
      sname: 'Taylor',
      date: { from: '2023-08-30' },
      gender: 'Female',
      terms: false,
    },
    {
      id: '9',
      name: '9 Daniel',
      sname: 'Anderson',
      date: { from: '2023-09-18', to: '2023-12-05' },
      gender: 'Male',
      terms: true,
    },
    {
      id: '10',
      name: '10 Sophia',
      sname: 'Thomas',
      date: { from: '2023-10-22' },
      gender: 'Female',
      terms: true,
    },
    {
      id: '11',
      name: '11 Matthew',
      sname: 'Jackson',
      date: { from: '2023-11-08', to: '2024-01-15' },
      gender: 'Male',
      terms: false,
    },
    {
      id: '12',
      name: '12 Emma',
      sname: 'White',
      date: { from: '2023-12-14' },
      gender: 'Female',
      terms: true,
    },
    {
      id: '13',
      name: '13 Christopher',
      sname: 'Harris',
      date: { from: '2024-01-25', to: '2024-06-30' },
      gender: 'Male',
      terms: true,
    },
    {
      id: '14',
      name: '14 Ava',
      sname: 'Martin',
      date: { from: '2024-02-03' },
      gender: 'Female',
      terms: false,
    },
    {
      id: '15',
      name: '15 Andrew',
      sname: 'Thompson',
      date: { from: '2024-03-19', to: '2024-08-10' },
      gender: 'Male',
      terms: true,
    },
    {
      id: '16',
      name: '16 Ava',
      sname: 'Martin',
      date: { from: '2024-02-03' },
      gender: 'Female',
      terms: false,
    },
    {
      id: '17',
      name: '17 elm',
      sname: 'Thompson',
      date: { from: '2024-03-19', to: '2024-08-10' },
      gender: 'Male',
      terms: true,
    },
  ];
  console.log(users);
  const [page, setPage] = useState(1);
  const tableData = users.map(user => ({
    key: uuidv4(),
    name: user.name,
    sname: user.sname,
    date: `${user.date.from}   ${user.date.to}` || user.date.from,
    gender: user.gender,
    terms: user.terms ? 'Yes' : 'No',
  }));

  const rowsPerPage = 10;

  const pages = useMemo(() => {
    return users ? Math.ceil(users.length / rowsPerPage) : 0;
  }, [users, rowsPerPage]);

  return (
    <div>
      <Table
        columns={columnsUserList}
        dataSource={tableData || []}
        pagination={{
          page,
          total: pages,
          onPageChange: setPage,
          pageSize: rowsPerPage,
        }}
      />
    </div>
  );
};

export default UserList;
