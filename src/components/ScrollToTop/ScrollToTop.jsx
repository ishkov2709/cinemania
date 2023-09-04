import ReactDOM from 'react-dom';
import { GiFlamingArrow } from 'react-icons/gi';
import { Btn } from './ScrollToTop.styled';

const ScrollToTop = ({ handler }) => {
  return ReactDOM.createPortal(
    <Btn type="button" onClick={handler}>
      <GiFlamingArrow
        style={{ transform: 'rotate(225deg)', width: 'inherit', height: 'inherit' }}
      />
    </Btn>,
    document.getElementById('portal-root')
  );
};

export default ScrollToTop;
