const PortfolioDescription = (props) => {
  return (
    <div className="portfolio__description zoomIn">
      <h4>Webste for Some Client</h4>
      <div>
        <p>
          <span>Client: </span>
          <span>{props.client}</span>
        </p>
        <p>
          <span>Date: </span>
          <span>{props.date}</span>
        </p>
        <p>
          <span>Skills: </span>
          <span>{props.skills}</span>
        </p>
        <p>
          <span>Link: </span>
          <span>{props.link}</span>
        </p>
      </div>
    </div>
  );
};

export default PortfolioDescription;
