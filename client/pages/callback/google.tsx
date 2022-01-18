import useOAuth from 'lib/hooks/useOAuth';
import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';
/* Constants =========================================================== */
const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;
/* Prop =========================================================== */
type Prop = {};
/* <google/> =========================================================== */
const SpinWrap = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export default function google() {
    useOAuth();
    return (
        <SpinWrap>
            <Spin indicator={antIcon} />
        </SpinWrap>
    );
}
google.defaultProps = {};
