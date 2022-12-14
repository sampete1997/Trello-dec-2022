import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 80,position: "fixed",
            left: "50%",
            top: "50%",
        }}
        spin
    />
);
const Spinner = () => <Spin indicator={antIcon} />;
export default Spinner;