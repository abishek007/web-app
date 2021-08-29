// Module Imports
import React from 'react'

// Style Imports
import { InfoWrapper, InfoTitle, InfoContent } from './style'

/**
 * @description LabelValue Shows the specific Information label and value
 */

const LabelValue = ({ label, value }) => (
  value 
  ? (<InfoWrapper>
      <InfoTitle>{label}</InfoTitle>
      <InfoContent>{value}</InfoContent>
    </InfoWrapper>)
  : null
)

export default LabelValue 