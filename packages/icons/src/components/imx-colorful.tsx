// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/imx-colorful.svg';

/**![ImxColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1pbXgtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxMzkgMTEzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMzkgMTEzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8Zz4KCTxkZWZzPgoJCTxyZWN0IGlkPSJhbnQtd2ViMy1pY29uLWlteC1jb2xvcmZ1bC1TVkdJRF8xXyIgd2lkdGg9IjEzOSIgaGVpZ2h0PSIxMTMiLz4KCTwvZGVmcz4KCTxjbGlwUGF0aCBpZD0iYW50LXdlYjMtaWNvbi1pbXgtY29sb3JmdWwtU1ZHSURfMDAwMDAwMzU1MTg5MzEzMzk1OTA0MzMxNzAwMDAwMDIzNTgwMzcyNDk5MzgxOTg0MjBfIj4KCQk8dXNlIHhsaW5rOmhyZWY9IiNhbnQtd2ViMy1pY29uLWlteC1jb2xvcmZ1bC1TVkdJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+Cgk8L2NsaXBQYXRoPgoJPGcgc3R5bGU9ImNsaXAtcGF0aDp1cmwoI2FudC13ZWIzLWljb24taW14LWNvbG9yZnVsLVNWR0lEXzAwMDAwMDM1NTE4OTMxMzM5NTkwNDMzMTcwMDAwMDAyMzU4MDM3MjQ5OTM4MTk4NDIwXyk7Ij4KCQk8cGF0aCBkPSJNMTI0LjEsMGgxNC42TDc5LjUsNjcuNmMtMS41LDEuNy0xLjYsNC4zLTAuMSw2LjFsMzQuMSwzOS43SDk4LjNMNjYuOCw3Ni42bC0xLjYtMmMtMS41LTEuNy0xLjQtNC40LDAuMS02LjEKCQkJTDEyNC4xLDB6IiBzdHlsZT0iZmlsbDogIzE3QjVDQjsiLz4KCQk8cGF0aCBkPSJNOTEuMiw3My43Yy0xLTEuMS0xLjMtMi43LTEtNC4xYzAuMy0wLjgsMC44LTEuNiwxLjQtMi4ybDMuOS00LjNsNDMuNSw1MC4zaC0xMy44CgkJCUMxMjUuMiwxMTMuNCw5OS43LDgzLjYsOTEuMiw3My43eiIgc3R5bGU9ImZpbGw6ICMxN0I1Q0I7Ii8+CgkJPHBhdGggZD0iTTE1LjIsMTEzLjRIMGw0Ni42LTUzLjljMS41LTEuNywxLjUtNC4zLDAtNkwwLjQsMEgxNWw0Ni41LDUzLjljMS4yLDEuNiwxLjQsMy45LDAuMSw1LjQKCQkJQzQ5LjQsNzMuNCwxNS4yLDExMy40LDE1LjIsMTEzLjR6IiBzdHlsZT0iZmlsbDogIzE3QjVDQjsiLz4KCQk8cGF0aCBkPSJNNDAuNiwwaC0xNGw0My4xLDQ5LjljMCwwLDAuMS0wLjEsNC45LTUuOGMxLjMtMS41LDEuNi0zLjQsMC4xLTQuOUM2NS43LDMwLDQwLjYsMCw0MC42LDB6IiBzdHlsZT0iZmlsbDogIzE3QjVDQjsiLz4KCQk8cGF0aCBkPSJNODIuNiwzNC44TDExMi41LDBIOTguM0w4Mi43LDE4LjJsLTQuNSw1LjNjLTEuNSwxLjctMS42LDQuMy0wLjEsNi4xQzc5LjIsMzAuOSw4Mi42LDM0LjgsODIuNiwzNC44eiIgc3R5bGU9ImZpbGw6ICMxN0I1Q0I7Ii8+CgkJPHBhdGggZD0iTTU2LjYsNzguNmwtMjkuOSwzNC44aDE0LjFsMTUuNi0xOC4ybDQuNS01LjNjMS41LTEuNywxLjYtNC4zLDAuMS02LjFDNTkuOSw4Mi41LDU2LjYsNzguNiw1Ni42LDc4LjZ6IiBzdHlsZT0iZmlsbDogIzE3QjVDQjsiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K) */
export const ImxColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-imx-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

ImxColorful.displayName = 'ImxColorful';