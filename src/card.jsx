import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const CardDesign = () => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="img/laptop.jpg" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);
export default CardDesign;