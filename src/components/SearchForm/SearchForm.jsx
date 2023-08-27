import { CiSearch } from 'react-icons/ci';
import { Form, Input, BtnForm } from './SearchForm.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../store/films/filmsSlice';

const SearchForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: ({ search }) => {
      if (search) {
        dispatch(setSearch(search));
        if (location.pathname !== '/catalog') navigate('/catalog');
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <label>
        <Input
          type="text"
          name="search"
          placeholder="Search"
          className="animate__animated animate__fadeInDown"
          onChange={formik.handleChange}
          value={formik.values.search}
        />
      </label>
      <BtnForm type="submit">
        <CiSearch size={24} color="#939393" />
      </BtnForm>
    </Form>
  );
};

export default SearchForm;
