import ReactPaginate from 'react-paginate'
import PropTypes from 'prop-types'

import './Pagination.style.scss'

const PaginationComponent = ({changeCurrentPage}) => {
    return (
        <div className="pagination-container">
            <ReactPaginate 
                nextLabel={">"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={100}
                marginPagesDisplayed={2}
                pageRangeDisplayed={1}
                onPageChange={changeCurrentPage}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
                previousLabel={"<"}
            />
        </div>
    )
};

PaginationComponent.propTypes = {
  changeCurrentPage: PropTypes.func.isRequired
}


export default PaginationComponent