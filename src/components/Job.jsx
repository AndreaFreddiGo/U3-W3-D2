import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Job = ({ data }) => {
  const dispatch = useDispatch()

  return (
    <Row
      className="mx-0 mt-3 p-3 align-items-center justify-content-between"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
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
            type: 'ADD_TO_FAVS',
            payload: data,
          })
        }}
      >
        Add to Favourites
      </Col>
    </Row>
  )
}
export default Job
