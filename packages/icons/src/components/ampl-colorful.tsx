// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/ampl-colorful.svg';

/**![AmplColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1hbXBsLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDIyLjggNDMxLjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyMi44IDQzMS44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cjx0aXRsZT5sb2dvX2JsYWNrPC90aXRsZT4KPHBhdGggZD0iTTAuMyw0MzEuOGMtMC4zLTYtMC40LTEyLTAuMS0xOGMyLTAuNiw0LTEsNi4xLTEuM2M2LTEsMTItMi41LDE3LjgtNC4yYzEuNi0wLjUsMy4yLTEuMSw0LjgtMS43YzcuNy0zLDE0LjUtOCwxOS43LTE0LjQKCWMzLjYtNC41LDYuNy05LjQsOS40LTE0LjVjMy44LTcsNy4xLTE0LjMsMTAuMS0yMS43YzYtMTUsMTItMjkuOSwxNy45LTQ0LjljMjAuNC01MS42LDQwLjgtMTAzLjIsNjEuMi0xNTQuOAoJYzE5LjMtNDkuMSwzOC4zLTk4LjIsNTYuOS0xNDcuNmMwLjQtMSwwLjgtMiwxLjItM2M2LjktMS45LDEzLjYtMy45LDIwLjYtNS44YzAuNCwxLDAuOCwxLjksMS4xLDIuOGM3LjksMjIsMTUuOCw0NCwyMy42LDY2LjEKCWMyNi45LDc1LjEsNTMuOCwxNTAuMSw4MS40LDIyNC45YzcuNiwyMC40LDE1LjIsNDAuOSwyMi45LDYxLjNjMyw4LjMsNi42LDE2LjUsMTAuNywyNC4zYzEuOCwzLjQsMy43LDYuNiw1LjgsOS44CgljNi40LDEwLDE2LjMsMTcuMSwyNy44LDIwLjFjNi4yLDEuNiwxMi40LDIuOSwxOC44LDMuN2w0LjUsMC43YzAuNiwyLDAuMywzLjksMC4zLDUuOHMwLDQuMSwwLDYuMWMwLjEsMiwwLDMuOS0wLjEsNS45CgljLTAuNiwwLjEtMS4xLDAuMi0xLjcsMC4zYy0wLjcsMC0xLjQsMC0yLjEsMEgyNjIuOGMtMC4yLTAuMy0wLjMtMC43LTAuNC0xLjFjMC01LjQsMC0xMC44LDAtMTYuMmMwLTAuMiwwLjEtMC41LDAuMi0wLjcKCWMxLjMtMC40LDIuNi0wLjYsNC0wLjhjNi41LTAuOSwxMi45LTIuMSwxOS4zLTMuOGMyLjUtMC43LDUuMS0xLjYsNy41LTIuNmMxLjItMC41LDIuNC0xLjEsMy42LTEuOGM2LjMtMy41LDguOC05LDguMi0xNgoJYy0wLjMtMy4yLTAuOC02LjMtMS43LTkuNGMtMS4zLTQuOC0zLTkuNS00LjYtMTQuMWMtMzIuOC05MS41LTY1LjItMTgzLjEtOTcuMy0yNzQuOWMtMC4zLTEtMC41LTIuMS0xLjUtM2MtMC4zLDAuMi0wLjgsMC40LTEsMC42CgljLTAuMywwLjUtMC41LDEtMC42LDEuNWMtMTUuNyw0NS4xLTMyLjQsODkuOS00OSwxMzQuNmMtMTIuMywzMy4xLTI0LjYsNjYuMy0zNiw5OS43Yy00LjYsMTMuNC05LDI2LjktMTMuMyw0MC40CgljLTEuNyw1LjItMi45LDEwLjUtMy43LDE1LjhjLTAuNiwzLjYtMC43LDcuMi0wLjMsMTAuOWMwLjUsNC43LDMsOSw2LjksMTEuOGMyLjUsMS44LDUuMywzLjIsOC4zLDQuMmM0LjcsMS43LDkuNSwyLjksMTQuNCwzLjcKCWM1LjQsMSwxMC44LDEuOCwxNi4zLDIuNmMwLjQsMC4xLDAuNywwLjEsMS4yLDAuMmMwLjEsMC40LDAuMiwwLjgsMC4zLDEuMmMwLDUuMiwwLDEwLjUsMCwxNS43YzAsMC4zLTAuMSwwLjYtMC4yLDAuOQoJYy0wLjUsMC4xLTEsMC4yLTEuNSwwLjJjLTAuNywwLTEuNCwwLTIuMSwwTDAuMyw0MzEuOEwwLjMsNDMxLjh6Ii8+Cjwvc3ZnPgo=) */
export const AmplColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-ampl-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

AmplColorful.displayName = 'AmplColorful';
