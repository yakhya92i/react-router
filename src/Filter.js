import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Filter ({Title, SetTitle, Rating, SetRating}) {
    return(
        <div style = {{margin: '6vw'}}>
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default" className='bg-success'>
                    Titre
                </InputGroup.Text>
                <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value = {Title}
                onChange={(e) => {SetTitle(e.target.value)}}
                className='inputPlace'
                placeholder = "Entrez le titre"
                />
            </InputGroup>
            <br />
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default" className='bg-success'>
                    Rating
                </InputGroup.Text>
                <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value = {Rating}
                onChange={(e) => {SetRating(e.target.value)}}
                className='inputPlace'
                placeholder = "Entrez le rating"
                />
            </InputGroup>
        </div>
    );
}

export default Filter;