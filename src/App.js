import React from 'react'
import { Col, Row } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from './components/SearchBar'
import 'antd/dist/antd.css'
import './App.css'
import { search, getFirstResult } from './features/search'

function App() {
  const dispatch = useDispatch()

  const video = useSelector(getFirstResult)

  return (
    <div className="App">
      <Row>
        <Col
          xs={{ span: 24, offset: 0 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 18, offset: 3 }}
        >
          <SearchBar onChange={text => dispatch(search(text))} />
        </Col>
      </Row>
      <Row>
        <Col>
          {video ? (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          ) : (
            <p>Search something..</p>
          )}
        </Col>
      </Row>
    </div>
  )
}

export default App
