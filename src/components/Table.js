import React, { useMemo } from "react";
import styled from "styled-components";
import { useTable, usePagination } from "react-table";

import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  useTheme,
  ThemeProvider,
} from "@blend-ui/core";

import { BlendIcon } from "@blend-ui/icons";

import feDropRight from "@iconify/icons-fe/drop-right";
import feDropLeft from "@iconify/icons-fe/drop-left";
import feArrowRight from "@iconify/icons-fe/arrow-right";
import feArrowLeft from "@iconify/icons-fe/arrow-left";

const Styles = styled(Box)`
  //   padding: 1rem;
  padding-bottom: 0;

  background: #08011c;
  //   background: white;
  color: white;
  table {
    width: 975px;
    height: 433px;
    border-spacing: 0;
    // border: 1px solid white;
    padding-left: 15px;

    tr {
      padding-left: 15px;

      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th {
      padding-left: 16px;
      padding-right: 16px;
      text-align: left;
      height: 48px;
      border-bottom: 1px solid #4b4b4b;
    }
    ,
    td {
      margin: 0;
      //   padding: 0.5rem;
      border-bottom: 1px solid #4b4b4b;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    background: #231d35;
    padding-top: 36px;
    padding-left: 16px;
    font-size: 12px;
    color: #d2d2d2;
  }
`;

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 8 },
    },
    usePagination,
  );

  // Render the UI for your table
  return (
    <>
      <Styles>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
        <div
          className="pagination"
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>
            Showing{" "}
            <strong>
              {pageIndex + 1} - {pageOptions.length} of {data.length}
            </strong>{" "}
          </span>
          <div>
            <BlendIcon
              iconify={feDropLeft}
              onClick={() => gotoPage(0)}
              color={!canPreviousPage ? "black" : "white"}
            />
            <BlendIcon
              iconify={feArrowLeft}
              onClick={() => previousPage()}
              color={!canPreviousPage ? "black" : "white"}
            />
            <BlendIcon
              iconify={feArrowRight}
              onClick={() => nextPage()}
              color={!canNextPage ? "black" : "white"}
            />
            <BlendIcon
              iconify={feDropRight}
              onClick={() => gotoPage(pageCount - 1)}
              color={!canNextPage ? "black" : "white"}
            />
          </div>
        </div>
      </Styles>
    </>
  );
}

// function App() {
//   return (
//     <Styles>
//       <Table columns={columns} data={data} />
//     </Styles>
//   );
// }

export default Table;
