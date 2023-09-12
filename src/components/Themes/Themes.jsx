import { useLocation } from 'react-router-dom';
import { CloseLink, Container, ContentBox, Section } from './Themes.styled';
import { RxCross1 } from 'react-icons/rx';
import Slider from './Slider';

const Themes = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  return (
    <Section>
      <Container className="container">
        <ContentBox>
          <CloseLink to={backLink}>
            <RxCross1 style={{ width: 'inherit', height: 'inherit' }} />
          </CloseLink>
          <Slider />
        </ContentBox>
      </Container>
    </Section>
  );
};

export default Themes;
