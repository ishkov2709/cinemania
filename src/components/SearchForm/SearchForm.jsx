import { CiSearch } from 'react-icons/ci';
import { Form, Input, BtnForm } from './SearchForm.styled';

const SearchForm = () => {
  return (
    <Form>
      <label>
        <Input
          type="text"
          name="search"
          placeholder="Search"
          className="animate__animated animate__fadeInDown"
        />
      </label>
      <BtnForm>
        <CiSearch size={24} color="#939393" />
      </BtnForm>
    </Form>
  );
};

export default SearchForm;
