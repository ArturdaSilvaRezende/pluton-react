import * as C from './style';

const PortfolioNavpill = (props) => {
  return (
    <C.PortfolioNavpill>
      <button
        onClick={() => props.setActiveFilter('all')}
        className={props.activeFilter === 'all' ? 'active' : ''}
      >
        All
      </button>
      <button
        onClick={() => props.setActiveFilter('web')}
        className={props.activeFilter === 'web' ? 'active' : ''}
      >
        Web
      </button>
      <button
        onClick={() => props.setActiveFilter('photo')}
        className={props.activeFilter === 'photo' ? 'active' : ''}
      >
        Photo
      </button>
      <button
        onClick={() => props.setActiveFilter('identity')}
        className={props.activeFilter === 'identity' ? 'active' : ''}
      >
        Identity
      </button>
    </C.PortfolioNavpill>
  );
};

export default PortfolioNavpill;
