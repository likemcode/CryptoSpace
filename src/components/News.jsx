import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import {useGetCryptosQuery} from  '../services/cryptoApi'
const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data } = useGetCryptosQuery(100);
  const {data: cryptoNews}=useGetCryptoNewsQuery(count)
  console.log(cryptoNews)
  if (!cryptoNews) return 'Loading...'
  console.log(cryptoNews)
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
          </Select>
        </Col>
      )}
      {cryptoNews.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.title}</Title>
              </div>
              <p>{news.description}</p>
              <div className="provider-container">
                <div>
                  <Avatar src={news.provider?.image?.thumbnail?.contentUrl || 'https://via.placeholder.com/30'} alt="" />
                  <Text className="provider-name">{news.provider?.name}</Text>
                </div>
                <Text>{moment(news.date).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
