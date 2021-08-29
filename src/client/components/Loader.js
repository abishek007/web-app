// Module Imports
import React from 'react'
import { Spin } from 'antd'

// Style Imports
import { LoadingWrapper } from './style'

// Constant Imports
import { loaderSize } from './constant'

/**
 * @description Loader Shows during API Request
 */

const Loader = () => (
  <LoadingWrapper>
    <Spin size={loaderSize} />
  </LoadingWrapper>
)

export default Loader 