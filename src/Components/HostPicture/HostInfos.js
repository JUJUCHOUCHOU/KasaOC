import './HostInfosStyle.scss';

//host info need props to works
function HostInfos(props) {
// give props name and Image 

  return (
    <div className='hostInfo'>
      <h6 className="InfoLocationHostName">{props.text}</h6>
      <img
        src={props.image}
        alt={`location host ${props.text}`}
        className="InfoLocationPictureHost"
      />
      </div>
  );
}

export default HostInfos;