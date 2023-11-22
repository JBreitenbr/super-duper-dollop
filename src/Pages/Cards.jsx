function Cards(props){
  return (  <div className="card project-card-view">
<h5 className="card-title">{props.title}</h5>
<a href={props.demoUrl} className="card-pic" target="_blank"> <img className="card-img-top img-custom" src={props.img} alt={props.alt}/></a>
  <div className="card-body">
    <a href={props.demoUrl} className="btn btn-primary" target="_blank" style={{marginRight:"5px"}}>Demo</a>
    <a href={props.githubUrl} className="btn btn-secondary" target="_blank">Source</a>
  </div>
</div>)};
export default Cards;
