import ReactDOM from 'react-dom';
import { GiFlamingArrow } from 'react-icons/gi';
import { Btn } from './ScrollToTop.styled';

const ScrollToTop = ({ handler }) => {
  return ReactDOM.createPortal(
    <Btn type="button" onClick={handler}>
      <GiFlamingArrow size={65} style={{ transform: 'rotate(225deg)' }} />
    </Btn>,
    document.getElementById('portal-root')
  );
};

export default ScrollToTop;
