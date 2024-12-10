import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Favourites = () => {
  const favArray = useSelector((reduxState) => {
    return reduxState.favourites.content
  })

  const dispatch = useDispatch()

  return (
    <Container>
      <Row>
        <Col className="my-3 d-flex justify-content-between align-items-center">
          <h1 className="display-4">Favourites companies:</h1>
          <Link to="/" className="btn btn-outline-dark">
            Home
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="my-1">
          {favArray.map((data, i) => (
            <Row
              key={data._id}
              className="mx-0 mt-3 p-3 align-items-center justify-content-between"
              style={{ border: '1px solid #00000033', borderRadius: 4 }}
            >
              <Col xs={3}>
                <Link to={`/${data.company_name}`}>{data.company_name}</Link>
              </Col>
              <Col
                xs={2}
                className="btn btn-outline-dark"
                onClick={() => {
                  // da questo onClick scaturiremo un cambio di stato!
                  // per farlo dobbiamo fare il "dispatch" di una "action"
                  // in modo da "risvegliare" il reducer!
                  dispatch({
                    // dobbiamo come minimo specificare il "tipo" dell'azione
                    // con una proprietà "type"
                    type: 'REMOVE_FROM_FAVS',
                    payload: i,
                  })
                }}
              >
                Remove from Favourites
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default Favourites
