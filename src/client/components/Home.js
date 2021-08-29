// Module Imports
import React, { useState, useCallback, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Input, Card, Layout, Alert } from 'antd'
import Loader from './Loader'
import { fetchSearchData } from '../actions/ActionCreators'
import { debounce } from './helper'

// Style Imports
import { ResultWrapper, CoverImage } from './style'

// Constant Imports
import {
  fallBackImg,
  cardStyle,
  headerStyle,
  searchStyle,
  searchPlaceholder,
  imgAltText
} from './constant'

const { Meta } = Card
const { Search } = Input
const { Header } = Layout

/**
 * @description Home page shows the List of book with infinite scroll
 *  and we can search the specific book in search bar
*/

const Home = () => {

  const delay = 500
  const { data: listing, loading, hasMore, error } = useSelector(state => state.listing)
  const fullHeight = loading && !listing.length
  const dispatch = useDispatch()
  const [pageNo, setPageNo] = useState(1)
  const [query, setQuery] = useState('')
  const observer = useRef()

  /**
    * @function lastBookElementRef
    * @description Used to show books results on infinite scroll
  */
  const lastBookElementRef = useCallback(node => {
    if (loading) {
      return
    }
    if (observer.current) {
      observer.current.disconnect()
    }
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore > 40) {
        setPageNo(prevPageNo => prevPageNo + 1)
      }
    })
    if (node) {
      observer.current.observe(node)
    }
  }, [loading])

  /**
    * @function getSearchOnClick
    * @description Used to get results on typing
  */
  const getSearchData = (event) => {
    const { value } = event.target
    const pageNo = 1
    const isReset = true
    dispatch(fetchSearchData(value, pageNo, isReset))
    setPageNo(pageNo)
    setQuery(value)
  }

  /**
    * @function getSearchOnClick
    * @description Used to get results on click of Search button
  */
  const getSearchOnClick = () => {
    const isReset = true
    if (query) {
      dispatch(fetchSearchData(query, pageNo, isReset))
    }
  }

  /**
    * @function handleRedirect
    * @description Open the Book detail page on new tab
  */
  const handleRedirect = (id) => (
    window.open(`${window.location.origin}/detail/${id}`, "_blank")
  )

  /**
    * @function getBookImage
    * @description Give's the Book Image URL Implemented with fallback URL
  */
  const getBookImage = (key) => {
    return key ? `https://covers.openlibrary.org/b/OLID/${key}.jpg` : fallBackImg
  }

  useEffect(() => {
      dispatch(fetchSearchData(query, pageNo))
  }, [pageNo])

  /**
    * @function handleSearch
    * @description Used debounce to limit the function call when user typing
  */
  const handleSearch = useCallback(debounce(getSearchData, delay))

  return (
    <div>
      <Header style={headerStyle}>
        <Search
          placeholder={searchPlaceholder}
          onChange={handleSearch}
          onSearch={getSearchOnClick}
          enterButton
          style={searchStyle}
        />
      </Header>
      <ResultWrapper fullHeight={fullHeight}>
        {Array.isArray(listing) && listing.map((book, index) => (
          listing.length === index + 1
            ? (
              <div key={book.key} ref={lastBookElementRef} onClick={() => handleRedirect(book.isbn[0])}>
                <Card
                  hoverable
                  style={cardStyle}
                  cover={<CoverImage alt={imgAltText} src={getBookImage(book.cover_edition_key)} />}
                >
                  <Meta title={book.title} description={book.author_name ? book.author_name[0] : ""} />
                </Card>
              </div>
            )
            : (
              <div key={book.key} onClick={() => handleRedirect(book.isbn[0])}>
                <Card
                  key={book.key}
                  hoverable
                  style={cardStyle}
                  cover={<CoverImage alt={imgAltText} src={getBookImage(book.cover_edition_key)} />}
                >
                  <Meta title={book.title} description={book.author_name ? book.author_name[0] : ""} />
                </Card>
              </div>
            )))
        }
        {loading && <Loader />}
        {error &&  <Alert message={error} type="error" />}
      </ResultWrapper>
    </div>
  )
}

export default Home