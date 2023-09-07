import { useDispatch, useSelector } from 'react-redux';
import { Btn, Counter, PagWrapper } from './Pagination.styled';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import { decrement, increment } from '../../../store/films/filmsSlice';

const Pagination = () => {
  const page = useSelector(state => state.films.pagination.page);
  const totalPages = useSelector(state => state.films.pagination.totalPages);
  const dispatch = useDispatch();

  return (
    <PagWrapper>
      <Btn className="one" disabled={page - 1 <= 0} onClick={() => dispatch(decrement(1))}>
        <SlArrowLeft style={{ width: 'inherit', height: 'inherit' }} />
      </Btn>
      <Btn disabled={page - 2 <= 0} onClick={() => dispatch(decrement(2))}>
        <RxDoubleArrowLeft style={{ width: 'inherit', height: 'inherit' }} />
      </Btn>
      <Counter>{page}</Counter>
      <Btn disabled={page + 2 > totalPages} onClick={() => dispatch(increment(2))}>
        <RxDoubleArrowRight style={{ width: 'inherit', height: 'inherit' }} />
      </Btn>
      <Btn className="one" disabled={page + 1 > totalPages} onClick={() => dispatch(increment(1))}>
        <SlArrowRight style={{ width: 'inherit', height: 'inherit' }} />
      </Btn>
    </PagWrapper>
  );
};

export default Pagination;
