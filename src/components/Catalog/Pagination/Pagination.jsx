import { useDispatch, useSelector } from 'react-redux';
import { Btn, Counter, PagWrapper } from './Pagination.styled';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import { decrement, increment } from '../../../store/filmsSlice';

const Pagination = () => {
  const page = useSelector(state => state.pagination.page);
  const totalPages = useSelector(state => state.totalPages);
  const dispatch = useDispatch();

  return (
    <PagWrapper>
      <Btn disabled={page - 1 <= 0}>
        <SlArrowLeft size={22} onClick={() => dispatch(decrement(1))} />
      </Btn>
      <Btn disabled={page - 2 <= 0}>
        <RxDoubleArrowLeft size={36} onClick={() => dispatch(decrement(2))} />
      </Btn>
      <Counter>{page}</Counter>
      <Btn disabled={page + 2 > totalPages}>
        <RxDoubleArrowRight size={36} onClick={() => dispatch(increment(2))} />
      </Btn>
      <Btn disabled={page + 1 > totalPages}>
        <SlArrowRight size={22} onClick={() => dispatch(increment(1))} />
      </Btn>
    </PagWrapper>
  );
};

export default Pagination;
