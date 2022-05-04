import './item.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Item ({item}) {
    return (
      
      <div className="card">
        <div className="header">{item.title}</div>

        <div className="content">
          <div className="img-container">
            <img className="imagen" src={item.image} alt="imagen" />
          </div>
        </div>

        <div className="footer">{item.precio}</div>
      </div>
    );
}

export default Item