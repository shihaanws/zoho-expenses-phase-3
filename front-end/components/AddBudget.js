import React from "react";

export default function AddBudget() {
  const styles = {
    MozAppearance: "textfield",
    WebkitAppearance: "none",
    margin: "0",
  };

  const tableData = {
    Months: [
      "Apr 2021",
      "May 2021",
      "Jun 2021",
      "Jul 2021",
      "Aug 2021",
      "Sep 2021",
      "Oct 2021",
      "Nov 2021",
      "Dec 2021",
      "Jan 2022",
      "Feb 2022",
      "Mar 2022",
    ],
    Expense: [
      "Expense",
      "Office Supplies",
      "Travel Expense",
      "Telephone Expense",
      "Automobile Expense",
      "IT and Internet Expenses",
      "Meals and Entertainment",
      "Other Expenses",
      "Lodging",
      "Parking",
      "Fuel/Mileage Expenses",
    ],
  };

  const handleTableChanges = (rowIndex, columnIndex, value) => {
    try {
      const columnTotalSelector = document.getElementById(
        `totalcol-${columnIndex}`
      );
      const rowTotalSelector = document.getElementById(`totalrow-${rowIndex}`);
      const mainTotalSelector = document.getElementById("main-total");

      const { columnTotal, rowTotal } = getColumnListTotal(
        rowIndex,
        columnIndex
      );

      columnTotalSelector.textContent = columnTotal;
      rowTotalSelector.textContent = rowTotal;

      const finalColumnTotal = getSubTotal();

      mainTotalSelector.textContent = finalColumnTotal;
    } catch (err) {
      console.log(err);
    }
  };

  const getSubTotal = () => {
    try {
      var finalColumnTotal = 0;

      for (let i = 0; i < tableData.Months.length; i++) {
        const totalColumnData = document.getElementById(`totalcol-${i}`);

        const totalColumnValue = parseInt(totalColumnData.textContent)
          ? parseInt(totalColumnData.textContent)
          : 0;
        finalColumnTotal += totalColumnValue;
      }

      return finalColumnTotal;
    } catch (err) {
      console.log(err);
    }
  };

  const getColumnListTotal = (rowIndex, columnIndex) => {
    try {
      var rowTotal = 0;
      var columnTotal = 0;

      for (let i = 0; i < 12; i++) {
        const rowData = document.getElementById(`row-${rowIndex}-col-${i}`)
          .children[0];

        const rowValue = parseInt(rowData.value) ? parseInt(rowData.value) : 0;
        rowTotal += rowValue;
      }

      for (let i = 0; i < tableData.Expense.length; i++) {
        const columnData = document.getElementById(
          `row-${i}-col-${columnIndex}`
        ).children[0];
        const columnValue = parseInt(columnData.value)
          ? parseInt(columnData.value)
          : 0;
        columnTotal += columnValue;
      }

      return {
        rowTotal,
        columnTotal,
      };
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <div className="container">
        <div className=" mt-5">
          <table className="table table-bordered ">
            <thead>
              <tr>
                <th className="category-header text-center">Category</th>
                {tableData.Months.map((list, index) => {
                  return (
                    <th
                      className="text-right"
                      style={{ width: 100 }}
                      key={index}
                    >
                      {list}
                    </th>
                  );
                })}

                <th className="text-right text-center" style={{ width: 100 }}>
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.Expense.map((list, rowIndex) => {
                return (
                  <tr key={rowIndex} id={`row-${rowIndex}`}>
                    <td className="">{list}</td>
                    {tableData.Months.map((ls, colIndex) => {
                      return (
                        <td
                          className="amount-column"
                          key={colIndex}
                          id={`row-${rowIndex}-col-${colIndex}`}
                        >
                          <input
                            className="form-control cursor-pointer"
                            type="text"
                            onChange={(e) =>
                              handleTableChanges(
                                rowIndex,
                                colIndex,
                                e.target.value
                              )
                            }
                          />
                          {/* <input   type="number"/> */}
                        </td>
                      );
                    })}
                    <td
                      className="text-center budget-total ember-view"
                      id={`totalrow-${rowIndex}`}
                    >
                      <span className="form-control-static">0</span>
                    </td>
                  </tr>
                );
              })}

              {/**/}
              <tr className="text-center" id="final-total">
                <td className="text-overflow">Total</td>
                <td id="totalcol-0" className="text-right">
                  <span className="">0</span>
                </td>
                <td id="totalcol-1" className="text-right">
                  <span className="">0</span>
                </td>
                <td id="totalcol-2" className="text-right">
                  <span className="">0</span>
                </td>
                <td id="totalcol-3" className="text-right">
                  <span className="">0</span>
                </td>
                <td id="totalcol-4" className="text-right">
                  <span className="">0</span>
                </td>
                <td id="totalcol-5" className="text-right">
                  <span className="">0</span>
                </td>
                <td id="totalcol-6" className="text-right">
                  <span className="">0</span>
                </td>
                <td id="totalcol-7" className="text-right">
                  <span className="">0</span>
                </td>
                <td id="totalcol-8" className="text-right">
                  <span className="">0</span>
                </td>
                <td id="totalcol-9" className="text-right">
                  <span className="">0</span>
                </td>
                <td id="totalcol-10" className="text-right">
                  <span className="">0</span>
                </td>
                <td id="totalcol-11" className="text-right">
                  <span className=""> 0</span>
                </td>
                <td id="main-total" className="text-right">
                  <span className="">0</span>
                </td>
              </tr>
              {/* <tr className="text-center" id="final-total">
              <td className="text-overflow">Total</td>
              <td id="totalcol-0" className="text-right">
                <span className="">0</span>
              </td>
              <td id="totalcol-1" className="text-right">
                <span className="">0</span>
              </td>
              <td id="totalcol-2" className="text-right">
                <span className="">0</span>
              </td>
              <td id="totalcol-3" className="text-right">
                <span className="">0</span>
              </td>
              <td id="totalcol-4" className="text-right">
                <span className="">0</span>
              </td>
              <td id="totalcol-5" className="text-right">
                <span className="">0</span>
              </td>
              <td id="totalcol-6" className="text-right">
                <span className="">0</span>
              </td>
              <td id="totalcol-7" className="text-right">
                <span className="">0</span>
              </td>
              <td id="totalcol-8" className="text-right">
                <span className="">0</span>
              </td>
              <td id="totalcol-9" className="text-right">
                <span className="">0</span>
              </td>
              <td id="totalcol-10" className="text-right">
                <span className="">0</span>
              </td>
              <td id="totalcol-11" className="text-right">
                <span className=""> 0</span>
              </td>
              <td id="main-total" className="text-right">
                <span className="">0</span>
              </td>
            </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
