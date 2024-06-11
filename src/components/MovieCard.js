import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function MovieCard({Title, Description, PosterURL, Rating, ID}) {
    return(
        <div className='col-12 col-lg-4'>
            <Card style={{ width: '25rem', minHeight: '820px', marginTop: '15px', backgroundColor: 'blue'}}>
                <Link to={`/${ID}/${Title}`}><Card.Img variant="top" src={PosterURL} alt = "filmPoster" style={{ width: '150px', height: '150px' }} /></Link>
                <Card.Body>
                    <Card.Title style = {{fontWeight: 'bold'}}>{Title}</Card.Title>
                    <Card.Text>
                        {Description}
                    </Card.Text>
                    <span style = {{fontWeight: 'bold'}}>{Rating}</span>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieCard;