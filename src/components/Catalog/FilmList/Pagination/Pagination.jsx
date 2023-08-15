import { useSelector } from 'react-redux';
import { Btn, Counter, PagWrapper } from './Pagination.styled';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';

const Pagination = () => {
  const page = useSelector(state => state.pagination.page);
  return (
    <PagWrapper>
      <Btn>
        <SlArrowLeft size={22} />
      </Btn>
      <Btn>
        <RxDoubleArrowLeft size={36} />
      </Btn>
      <Counter>{page}</Counter>
      <Btn>
        <RxDoubleArrowRight size={36} />
      </Btn>
      <Btn>
        <SlArrowRight size={22} />
      </Btn>
    </PagWrapper>
  );
};

export default Pagination;
