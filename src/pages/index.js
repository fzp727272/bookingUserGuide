import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: '活动管理',
    description: (
      <>
        <li><a href="docs/event/event-flow">活动流程说明</a></li>
        <li><a href="docs/event/event-create">创建活动</a></li>
        <li><a href="docs/event/event-pay">付费活动</a></li>
        <li><a href="docs/event/event-sign-in">活动签到</a></li>
        <li><a href="docs/event/event-management">报名管理</a></li>
      </>
    ),
  },
  {
    title: '次卡管理',
    description: (
      <>
        <li><a href="/docs/ticket/ticket-flow">次卡管理流程</a></li>
        <li><a href="/docs/ticket/ticket-create">新建次卡</a></li>
        <li><a href="/docs/ticket/ticket-distribute">次卡分配</a></li>
        <li><a href="/docs/ticket/ticket-use">次卡使用</a></li>
      </>
    ),
  },
  {
    title: '次卡包管理',
    description: (
      <>

        <li><a href="docs/ticket-pack/ticket-pack">什么是次卡包</a></li>
        <li><a href="docs/ticket-pack/ticket-pack-create">创建/编辑次卡包</a></li>
        <li><a href="docs/ticket-pack/ticket-pack-pay">付费次卡包 </a></li>
        <li><a href="docs/ticket-pack/ticket-pack-distribute">次卡包分配 </a></li>
        <li><a href="docs/ticket-pack/ticket-pack-refund">次卡包退款/退回 </a></li>
      </>
    ),
  },
  {
    title: '数据报表',
    description: (
      <>
        <li><a href="docs/report/report-member">新会员招募和参与者购买统计</a></li>
        <li><a href="docs/report/report-city-income">城市活动收入查看</a></li>
        <li><a href="docs/report/report-city-event">某个运动在城市的报名概况</a></li>
        <li><a href="docs/report/report-city-contrast">运动在多城市的对比</a></li>

      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--3', styles.feature)}>
      <h3>{title}</h3>
      <p style={{ listStyleType: 'none' }}>{description}</p>
    </div>
  );
}


function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
    >

      {/* <header className={clsx('hero', styles.heroBanner)}> */}
      {/* <div className="container"> */}
      <div className={styles.showContainer}>
        <h1 className="hero__title" style={{ fontSize: 48, marginTop: 48, textAlign: 'center' }}>Booking后台使用指南</h1>
        <div style={{ width: 80, height: 4, background: '#007DBC', margin: '0 auto', borderRadius: 5, marginTop: 24 }}></div>
        {/* 
            <p className="hero__subtitle" style={{fontSize:18}}>欢迎使用迪卡侬运动连活动管理后台，在我们的系统中您可以使用</p>
          <img src="/img/banner.png"  style={{width:300}}></img>
             */}

        {/* <div className={styles.rightContainer}>
         
            </div> */}
      </div>

      {/* </header> */}
      <main className="main-container" style={{ paddingTop: 32 }}>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
