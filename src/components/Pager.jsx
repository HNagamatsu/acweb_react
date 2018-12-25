import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

//css
import { pagerContainer, pageButton, current } from "./pager.css";

const Pager = ({ total, totalPages, page = 1, path = "" }) => {
  const PAGE = parseInt(page);
  const MAX_PAGE = 5;
  return (
    <div className={pagerContainer}>
      {(() => {
        console.log(totalPages);
        let arr = [];
        let i;
        let count = 1;
        if (PAGE < 5) {
          //最初の5ページ
          i = 1;
        } else if (PAGE + 5 > totalPages) {
          //最後の5ページ
          i = totalPages - 5;
        } else {
          i = PAGE - 2;
        }
        while (i <= totalPages) {
          if (PAGE === i) {
            arr.push(<div className={`${pageButton} ${current}`}>{i}</div>);
          } else {
            arr.push(
              <Link
                to={`/${path ? path + "/" : ""}${i}`}
                className={pageButton}
              >
                {i}
              </Link>
            );
          }
          if (count === MAX_PAGE) {
            break;
          }
          i++;
          count++;
        }
        return arr;
      })()}
    </div>
  );
};
export default Pager;
