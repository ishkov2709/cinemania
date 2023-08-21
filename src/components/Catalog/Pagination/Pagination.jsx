import { useDispatch, useSelector } from 'react-redux';
import { Btn, Counter, PagWrapper } from './Pagination.styled';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import { decrement, increment } from '../../../store/filmsSlice';

const Pagination = () => {
  const page = useSelector(state => state.pagination.page);
  const totalPages = useSelector(state => state.pagination.totalPages);
  const dispatch = useDispatch();

  return (
    <PagWrapper>
      <Btn disabled={page - 1 <= 0} onClick={() => dispatch(decrement(1))}>
        <SlArrowLeft size={22} />
      </Btn>
      <Btn disabled={page - 2 <= 0} onClick={() => dispatch(decrement(2))}>
        <RxDoubleArrowLeft size={36} />
      </Btn>
      <Counter>{page}</Counter>
      <Btn disabled={page + 2 > totalPages} onClick={() => dispatch(increment(2))}>
        <RxDoubleArrowRight size={36} />
      </Btn>
      <Btn disabled={page + 1 > totalPages} onClick={() => dispatch(increment(1))}>
        <SlArrowRight size={22} />
      </Btn>
    </PagWrapper>
  );
};

export default Pagination;
