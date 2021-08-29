// Module Imports
import styled from "styled-components";

export const ResultWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  justify-content: center;
  padding-top: 70px;
  ${({ fullHeight }) => fullHeight && 'height: 100vh;align-items: center;'};
`

export const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 20px 0px;
`

export const Image = styled.img`
  display: flex;
  width: 100%;
`

export const DetailLayout = styled.div`
  display: flex;
  width: 90%;
  margin: 0px auto;
  padding-top: 60px;
  ${({ isLoading }) => isLoading && 'height: 100vh;align-items: center;'};
`

export const ContentLayout = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  padding: 30px 20px;
`

export const SiderLayout = styled.div`
  display: flex;
  width: 30%;
  padding: 30px 20px;
`

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`

export const SubTitle = styled.div`
  font-size: 17px;
  color: #666;
`

export const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 20px;
`

export const InfoTitle = styled.div`
  display: flex;
  width: 20%;
  color: #878787;
`

export const InfoContent = styled.div`
  display: flex;
  width: 80%;
`

export const CoverImage = styled.img`
  height: 300px;
`