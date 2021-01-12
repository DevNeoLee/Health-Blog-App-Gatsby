import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import indexStyles from './index.module.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="건강 지식 대백과" />
    <h1>내츄럴 비타민</h1>
    <p>건강은 많은 지식이 필요합니다. 당신의 몸, 그리고 음식과 영양소를 통한 치료효과들에 대한 지식을 늘리세요.</p>
    <div style={{ maxWidth: `900px`, marginBottom: `2rem` }}>
      <Image />
    </div>
    <div>
      <h2 className={indexStyles.aquamarine}>건강 기사들</h2>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
    <div>
      <h2>건강식품에 대한 정보 모음</h2>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
    <div>
      <h2>질병별 권장식품 정보 모음</h2>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>

  </Layout>
)

export default IndexPage
