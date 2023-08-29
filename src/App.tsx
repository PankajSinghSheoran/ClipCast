import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar, Button, Card } from 'antd';
import { Col, Row } from 'antd';
import ClipCast from './ClipCast (1).png';
import AvatarLogo from './Avatar.png';
import './App.css';
import {
  LikeOutlined,
  DislikeOutlined,
  CommentOutlined,
} from '@ant-design/icons';

const { Meta } = Card;
function App() {
  return (
    <>
      <div
        className="Navbar"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          icon={<AntDesignOutlined />}
          src={ClipCast}
          style={{ marginLeft: '25px' }}
        />
        <div
          className="NavItems"
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            margin: '20px',
            width: '30%',
          }}
        >
          <Button type="primary" size={'large'} className="btnprimary">
            Home
          </Button>
          <Button type="primary" size={'large'} className="btnprimary">
            Browse
          </Button>
          <Button type="primary" size={'large'} className="btnprimary">
            Upload
          </Button>
          <Button type="primary" size={'large'} className="btnprimary">
            Help
          </Button>
          <Button type="primary" size={'large'} className="btnprimary">
            Stats
          </Button>
        </div>
        <Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          icon={<AntDesignOutlined />}
          src={AvatarLogo}
          style={{ marginRight: '25px' }}
        />
      </div>
      <div style={{ marginTop: '30px', width: '100%' }}>
        <Row
          justify="space-around"
          style={{ marginTop: '30px', width: '100%' }}
        >
          <Col span={4}>
            <Card
              className="antd-card"
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <LikeOutlined key="like" />,
                <DislikeOutlined key="dislike" />,
                <CommentOutlined key="comment" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              className="antd-card"
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <LikeOutlined key="like" />,
                <DislikeOutlined key="dislike" />,
                <CommentOutlined key="comment" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              className="antd-card"
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <LikeOutlined key="like" />,
                <DislikeOutlined key="dislike" />,
                <CommentOutlined key="comment" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              className="antd-card"
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <LikeOutlined key="like" />,
                <DislikeOutlined key="dislike" />,
                <CommentOutlined key="comment" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
        </Row>
        <Row
          justify="space-around"
          style={{ marginTop: '30px', width: '100%' }}
        >
          <Col span={4}>
            <Card
              className="antd-card"
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <LikeOutlined key="like" />,
                <DislikeOutlined key="dislike" />,
                <CommentOutlined key="comment" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              className="antd-card"
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <LikeOutlined key="like" />,
                <DislikeOutlined key="dislike" />,
                <CommentOutlined key="comment" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              className="antd-card"
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <LikeOutlined key="like" />,
                <DislikeOutlined key="dislike" />,
                <CommentOutlined key="comment" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              className="antd-card"
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <LikeOutlined key="like" />,
                <DislikeOutlined key="dislike" />,
                <CommentOutlined key="comment" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
        </Row>
        <Row
          justify="space-around"
          style={{ marginTop: '30px', width: '100%' }}
        >
          <Col span={4}>
            <Card
              className="antd-card"
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <LikeOutlined key="like" />,
                <DislikeOutlined key="dislike" />,
                <CommentOutlined key="comment" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              className="antd-card"
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <LikeOutlined key="like" />,
                <DislikeOutlined key="dislike" />,
                <CommentOutlined key="comment" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              className="antd-card"
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <LikeOutlined key="like" />,
                <DislikeOutlined key="dislike" />,
                <CommentOutlined key="comment" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              className="antd-card"
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <LikeOutlined key="like" />,
                <DislikeOutlined key="dislike" />,
                <CommentOutlined key="comment" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;
