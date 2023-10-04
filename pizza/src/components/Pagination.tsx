import React from 'react';
import styles from '../components/PaginationStyles.module.scss';
import ReactPaginate from 'react-paginate';
type PaginationProps = {
  onChange: any;
};
const Pagination: React.FC<PaginationProps> = ({ onChange }) => {
  return (
    <>
      <ReactPaginate
        className={styles.main}
        breakLabel="..."
        nextLabel=" >"
        onPageChange={event => {
          onChange(event.selected + 1);
        }}
        pageRangeDisplayed={8}
        pageCount={3}
        previousLabel="<"
        nextClassName={styles.next}
        nextLinkClassName={styles.link}
        pageLinkClassName={styles.boll}
        previousClassName={styles.previos}
        pageClassName={styles.wrap}
        previousLinkClassName={styles.previosLink}
      />
    </>
  );
};

export default Pagination;
