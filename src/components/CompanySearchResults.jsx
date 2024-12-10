import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { Link, useParams } from 'react-router-dom'

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([])
  const params = useParams()

  const baseEndpoint =
    'https://strive-benchmark.herokuapp.com/api/jobs?company='

  useEffect(() => {
    getJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company)
      if (response.ok) {
        const { data } = await response.json()
        setJobs(data)
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col className="my-3 d-flex justify-content-between align-items-center">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          <div>
            <Link to="/" className="btn btn-outline-dark me-3">
              Home
            </Link>
            <Link to="/favourites" className="btn btn-outline-dark">
              Favourites
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="my-1">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
