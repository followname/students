import React, { useEffect, useMemo, useState } from 'react';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
// import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import Filter from './Filter'
import axios from 'axios';
import './table.css'

export const Table = () => {

    const [loadingData, setLoadingData] = useState(true);

    const columns = useMemo(() => COLUMNS, []);
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            await axios
                .get("http://localhost:5000/api/items")
                .then((res => {
                    console.log(res.data);
                    setData(res.data);
                    setLoadingData(false);
                }));
        }
        if(loadingData) {
            getData();
        }
    }, []);

    const tableExample = useTable({
            columns,
            data
    },
    useGlobalFilter,
    useSortBy);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = tableExample;

    const { globalFilter } = state;

    return (
        <>
            <Filter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map( column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? ' ⬆️' : ' ⬇️') : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (        
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
};