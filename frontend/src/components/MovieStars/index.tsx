import './styles.css';
import {ReactComponent as Starfull} from 'assets/img/star-full.svg';
import {ReactComponent as StarHalf} from 'assets/img/star-half.svg';
import {ReactComponent as StarEmpty} from 'assets/img/star-empty.svg';
function MovieStars(){
    return(
      <div className="dsmovie-stars-container">
          <Starfull />
          <Starfull />
          <Starfull />
          <StarHalf />
          <StarEmpty />
      </div>  
    );

}
export default MovieStars;