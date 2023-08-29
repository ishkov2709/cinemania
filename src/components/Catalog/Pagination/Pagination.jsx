import { useDispatch, useSelector } from 'react-redux';
import { Btn, Counter, PagWrapper } from './Pagination.styled';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import { decrement, increment } from '../../../store/films/filmsSlice';

const Pagination = () => {
  const page = useSelector(state => state.films.pagination.page);
  const totalPages = useSelector(state => state.films.pagination.totalPages);
  const dispatch = useDispatch();

  const changeIconSizeOneTap = () => {
    if (window.innerWidth < 744) return 22;
    if (window.innerWidth >= 744) return 36;
  };

  const changeIconSizeDoubleTap = () => {
    if (window.innerWidth < 744) return 36;
    if (window.innerWidth >= 744) return 48;
  };

  return (
    <PagWrapper>
      <Btn disabled={page - 1 <= 0} onClick={() => dispatch(decrement(1))}>
        <SlArrowLeft size={changeIconSizeOneTap()} />
      </Btn>
      <Btn disabled={page - 2 <= 0} onClick={() => dispatch(decrement(2))}>
        <RxDoubleArrowLeft size={changeIconSizeDoubleTap()} />
      </Btn>
      <Counter>{page}</Counter>
      <Btn disabled={page + 2 > totalPages} onClick={() => dispatch(increment(2))}>
        <RxDoubleArrowRight size={changeIconSizeDoubleTap()} />
      </Btn>
      <Btn disabled={page + 1 > totalPages} onClick={() => dispatch(increment(1))}>
        <SlArrowRight size={changeIconSizeOneTap()} />
      </Btn>
    </PagWrapper>
  );
};

export default Pagination;
