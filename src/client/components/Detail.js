// Module Imports
import React, { useEffect, Fragment } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Alert, Layout } from 'antd'
import { LeftOutlined } from '@ant-design/icons';
import LabelValue from './LabelValue'
import Loader from './Loader'
import { fetchDetailsData } from '../actions/ActionCreators'
import { getLanguage } from './helper'

// Style Imports
import {
  Image,
  DetailLayout,
  ContentLayout,
  SiderLayout,
  Title,
  SubTitle
} from './style'

// Constant Imports
import { fallBackImg, imgAltText, detailLabel, detailHeaderStyle, iconStyle } from './constant'

const { Header } = Layout
/**
 * @description Detail page shows the Information about the selected book
 */

const Detail = () => {

  const { id } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  const detail = useSelector(state => state.detail)
 
  const { loading, data = {} } = detail
  const { thumbnail_url: thumbnailURL, details: detailInfo = {}, error } = data
  const {
    publish_date: publishDate,
    publishers,
    subjects,
    subtitle,
    title,
    weight,
    authors,
    first_sentence: firstSentence,
    languages,
    physical_format: physicalFormat,
    revision,
    number_of_pages: noOfPages,
    physical_dimensions: dimensions,
    publish_places: publishPlaces,
    publish_country: publishCountry
  } = detailInfo
  const largeImage = thumbnailURL ? thumbnailURL.replace('-S', '-L') : fallBackImg
  const {
    authorLbl,
    formatLbl,
    weightLbl,
    DimensionsLbl,
    publishDateLbl,
    pagesLbl,
    publishersLbl,
    revisionLbl,
    publishPlaceLbl,
    publishCountryLbl,
    languageLbl
  } = detailLabel

  const handleRedirect = () => {
    history.push('/')
  }

  useEffect(() => {
    dispatch(fetchDetailsData(id))
  }, [])

  return (
    <Fragment>
      <Header style={detailHeaderStyle}>
        <LeftOutlined style={iconStyle} onClick={handleRedirect} />
        Book Information
      </Header>
      <DetailLayout isLoading={loading}>
        {loading && <Loader />}
        {error &&  <Alert message={error} type="error" />}
        {(Object.keys(data).length > 0) && (
          <Fragment>
            <SiderLayout>
              <Image src={largeImage} alt={imgAltText} />
            </SiderLayout>
            <ContentLayout>
              <Title>{title}</Title>
              <SubTitle>{subtitle}</SubTitle>
              {authors &&
                <LabelValue label={authorLbl} value={Array.isArray(authors) ? authors[0].name : ''} />
              }
              <LabelValue label={languageLbl} value={languages ? getLanguage(languages) : ''} />
              <LabelValue label={formatLbl} value={physicalFormat} />
              <LabelValue label={weightLbl} value={weight} />
              <LabelValue label={pagesLbl} value={noOfPages} />
              <LabelValue label={revisionLbl} value={revision} />
              {publishers &&
                <LabelValue label={publishersLbl} value={Array.isArray(publishers) ? publishers.join(',') : ''} />
              }
              <LabelValue label={DimensionsLbl} value={dimensions} />
              <LabelValue label={publishDateLbl} value={publishDate} />
              <LabelValue label={publishCountryLbl} value={publishCountry} />
              <LabelValue label={publishPlaceLbl} value={Array.isArray(publishPlaces) ? publishPlaces.join(',') : ''} />
            </ContentLayout>
          </Fragment>
        )}
      </DetailLayout>
    </Fragment>
  )
}

export default Detail