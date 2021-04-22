import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getUsers, pageNumberHandler } from '../../redux/actions/actions'
import Card from '../Card/Card'
import PaginationComponent from '../Pagination/Pagintaion'
import ErrorModal from '../ErrorModal/ErrorModal';

import './CardsWrapper.style.scss';
import Loader from '../Loader/Loader';

const CardsWrapper = () => {
    const users = useSelector(state => state.usersReducer.users);
    const isLoaded = useSelector(state => state.usersReducer.isLoaded);
    const pageNumber = useSelector(state => state.usersReducer.pageNumber);

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getUsers());
  }, [dispatch, pageNumber]);

    const scrollToTopHandler = () => {
        if (isLoaded) {
          window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        }
      }

    const changeCurrentPage = numPage => {
    //   setIsLoaded(false)
      if (pageNumber === numPage.selected + 1) {
        return
      } else {
        dispatch(pageNumberHandler(numPage.selected + 1));
        scrollToTopHandler();
      }
  };

    return (
    <div className="container-fluid" id="cards-wrapper">
            <Card data={users} /> 
            <PaginationComponent changeCurrentPage={(numPage) => changeCurrentPage(numPage)} />
        </div> 
    )
}

export default CardsWrapper;