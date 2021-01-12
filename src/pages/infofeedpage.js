import React from 'react'
import Layout from '../components/layout'
import InfoFeed from '../components/infofeed'

const InfoFeedPage = () => (
    <Layout>
        <h1>건강정보 모음</h1>
        <p>다양한 최신건강정보들을 모아놓았습니다</p>
        <InfoFeed />
    </Layout>
)

export default InfoFeedPage