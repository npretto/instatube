import React from 'react'
import { Col, Row } from 'antd'
import { useDispatch } from 'react-redux'
import SearchBar from './components/SearchBar'
import 'antd/dist/antd.css'
import './App.css'
import { search } from './features/search'

function App() {
  const dispatch = useDispatch()

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
    </div>
  )
}

export default App
