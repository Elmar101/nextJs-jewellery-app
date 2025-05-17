'use client';
import { Table } from '@/components/ui/table';
import { useStore } from '@/zuztand-store/useStore';
import { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { columnsUserList } from './data';

const UserList = () => {
  const { users } = useStore();

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
