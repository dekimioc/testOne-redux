import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getUsers, pageNumberHandler, isLoadedHandler } from '../../redux/actions/actions'
import Card from '../Card/Card'
import PaginationComponent from '../Pagination/Pagintaion'
import ErrorModal from '../ErrorModal/ErrorModal';

import './CardsWrapper.style.scss';
import Loader from '../Loader/Loader';

const CardsWrapper = () => {
    const users = useSelector(state => state.usersReducer.users);
    const isLoaded = useSelector(state => state.usersReducer.isLoaded);
    const pageNumber = useSelector(state => state.usersReducer.pageNumber);
    const errorMessage = useSelector(state => state.usersReducer.errorMessage);
    const errorDetailsMessage = useSelector(state => state.usersReducer.errorDetailsMessage);

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
        dispatch(isLoadedHandler(false))
      if (pageNumber === numPage.selected + 1) {
        return
      } else {
        dispatch(pageNumberHandler(numPage.selected + 1));
        scrollToTopHandler();
      }
  };

    return (
        !errorMessage && errorMessage.length === 0 ? <div className="container-fluid" id="cards-wrapper">
            {isLoaded ? users.map(e => <Card 
                                            key={e.id} 
                                            imgSrc={e.owner.avatar_url} 
                                            userName={Object.keys(e.files)[0]} 
                                            alt={e.owner.login} 
                                            elId={e.id} />
                                    ) : <Loader />} 
            <PaginationComponent changeCurrentPage={(numPage) => changeCurrentPage(numPage)} />
        </div> : <ErrorModal errorText={errorMessage} errorDetails={errorDetailsMessage} />
    )
}

export default CardsWrapper;