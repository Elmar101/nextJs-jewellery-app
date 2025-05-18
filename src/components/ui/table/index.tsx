'use client';
import {
  Table as HerouTable,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Spinner,
  getKeyValue,
  Input,
  Card,
  SortDescriptor,
  Button,
  Tooltip,
} from '@heroui/react';
import { ArrowDown, ArrowUp, ArrowUpDown, Search } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

export type ColumnType<T> = {
  key: keyof T | string;
  label: string;
  allowsSorting?: boolean;
};

export type DataTableProps<T> = {
  columns: ColumnType<T>[];
  dataSource: T[];
  isLoading?: boolean;
  pagination?: {
    page: number;
    total: number;
    onPageChange: (page: number) => void;
    pageSize: number;
  };
};

export function Table<T extends Record<string, any>>({
  columns,
  dataSource,
  isLoading = false,
  pagination,
}: DataTableProps<T>) {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: '',
    direction: 'ascending',
  });

  useEffect(() => {
    const initialFilters: Record<string, string> = {};
    columns.forEach(column => {
      initialFilters[String(column.key)] = '';
    });
    setFilters(initialFilters);

    // İlk column-u default sort kimi qur
    if (columns.length > 0) {
      setSortDescriptor({
        column: String(columns[0].key),
        direction: 'ascending',
      });
    }
  }, [columns]);

  const handleFilterChange = (key: string, value: string): void => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
    }));
    // Sort burada dəyişmir
  };

  const filteredData = useMemo(() => {
    if (!dataSource) return [];

    return dataSource.filter(item =>
      Object.keys(filters).every(key => {
        const filterValue = filters[key]?.toLowerCase() || '';
        if (!filterValue) return true;

        const itemValue = String(item[key as keyof T] || '').toLowerCase();
        return itemValue.includes(filterValue);
      }),
    );
  }, [dataSource, filters]);

  const sortedData = useMemo(() => {
    if (!sortDescriptor.column) return filteredData;

    const columnKey = sortDescriptor.column as keyof T;

    return [...filteredData].sort((a, b) => {
      const first = a[columnKey] ?? '';
      const second = b[columnKey] ?? '';

      if (!isNaN(Number(first)) && !isNaN(Number(second))) {
        return sortDescriptor.direction === 'ascending'
          ? Number(first) - Number(second)
          : Number(second) - Number(first);
      }

      const cmp = String(first).localeCompare(String(second));
      return sortDescriptor.direction === 'ascending' ? cmp : -cmp;
    });
  }, [filteredData, sortDescriptor.column, sortDescriptor.direction]);

  const pagedData = useMemo(() => {
    if (!pagination) return sortedData;
    const start = (pagination.page - 1) * pagination.pageSize;
    const end = start + pagination.pageSize;
    return sortedData.slice(start, end);
  }, [sortedData, pagination]);

  const loadingState = isLoading && dataSource.length === 0 ? 'loading' : 'idle';

  const renderFilterInput = (columnKey: string): React.ReactNode => (
    <Input
      isClearable
      size="sm"
      placeholder={`Filter ${columnKey}...`}
      startContent={<Search className="text-default-400" width={16} />}
      value={filters[columnKey] || ''}
      onValueChange={value => handleFilterChange(columnKey, value)}
      className="w-full"
    />
  );

  const renderColumnHeader = (column: ColumnType<T>): React.ReactNode => {
    const { key, label } = column;
    const columnKeyStr = String(key);
    const isSorted = sortDescriptor.column === columnKeyStr;
    const sortIcon = isSorted ? (
      sortDescriptor.direction === 'ascending' ? (
        <ArrowUp className="ml-1 text-primary" width={16} />
      ) : (
        <ArrowDown className="ml-1 text-primary" width={16} />
      )
    ) : (
      <ArrowUpDown className="ml-1 text-default-400" width={16} />
    );

    return (
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center">
          <span>{label}</span>
          {column.allowsSorting && (
            <Tooltip content={`Sort by ${label}`}>
              <Button
                isIconOnly
                variant="light"
                size="sm"
                className="ml-1"
                onPress={() => {
                  if (isSorted) {
                    setSortDescriptor({
                      column: columnKeyStr,
                      direction:
                        sortDescriptor.direction === 'ascending' ? 'descending' : 'ascending',
                    });
                  } else {
                    setSortDescriptor({
                      column: columnKeyStr,
                      direction: 'ascending',
                    });
                  }
                }}
              >
                {sortIcon}
              </Button>
            </Tooltip>
          )}
        </div>
        {renderFilterInput(columnKeyStr)}
      </div>
    );
  };

  return (
    <Card className="p-6">
      <HerouTable
        aria-label="Data table with sorting and filtering"
        bottomContent={
          pagination ? (
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={pagination.page}
                total={Math.ceil(sortedData.length / pagination.pageSize)}
                onChange={pagination.onPageChange}
              />
            </div>
          ) : null
        }
        removeWrapper
      >
        <TableHeader>
          {columns.map(column => (
            <TableColumn key={String(column.key)} allowsSorting={false}>
              {renderColumnHeader(column)}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody
          items={pagedData}
          loadingContent={loadingState ? <Spinner label="Loading data..." /> : null}
          loadingState={loadingState}
          emptyContent={'No results found'}
        >
          {(item: T) => {
            const rowKey = item.id || item.key || JSON.stringify(item);
            return (
              <TableRow
                key={rowKey}
                className="hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              >
                {columnKey => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
              </TableRow>
            );
          }}
        </TableBody>
      </HerouTable>
    </Card>
  );
}
