import React from "react";

export const RevenueCard = (title, amount, orderCount) => {
  return (
    <div className="bg-white rounded shadow-sm">
      <div>{title}?</div>
      <div className="flex justify-between">
        <div>{amount}</div>
        {orderCount ? (
          <div>
            {orderCount}orders
            {">"}
          </div>
        ) : null}
      </div>
    </div>
  );
};
