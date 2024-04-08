// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/etherscan-circle-colorful.svg';

/**![EtherscanCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjEzLjU0NjY1NSw0ODguMzMwMjk1IEMyMTMuNTQ2NjU1LDQ2NC42MjkzMjcgMjMyLjk5NTg2NCw0NDUuMTU5MjA3IDI1Ni42MzAzNDYsNDQ1LjE1OTIwNyBMMjU2LjYzMDM0Niw0NDUuMTU5MjA3IEwzMjkuMjk4MTcyLDQ0NS4xNTkyMDcgQzM1Mi45NzM2ODYsNDQ1LjE1OTIwNyAzNzMuMjQzNTM3LDQ2NC42MjkzMjcgMzczLjI0MzUzNyw0ODkuMTkyODk1IEwzNzMuMjQzNTM3LDQ4OS4xOTI4OTUgTDM3My4yNDM1MzcsNzYzLjU0MDg0OSBDMzgxLjY5NjE0Nyw3NjAuOTk0MTI1IDM5MS44MzEwNzMsNzU4LjQ0NzQgNDAzLjY4OTM0Niw3NTUuOTAwNjc2IEM0MTkuNzMyODkyLDc1MS42Njk4MjcgNDMxLjU5MTE2NSw3MzcuMjkzMTU2IDQzMS41OTExNjUsNzIwLjMyODY4NSBMNDMxLjU5MTE2NSwzNzkuOTMwMTk4IEM0MzEuNTkxMTY1LDM1Ni4yMjkyMjkgNDUxLjA0MDM3NCwzMzUuODk2NTA5IDQ3NS41MzY1MywzMzUuODk2NTA5IEw1NDguMjA0MzU2LDMzNS44OTY1MDkgQzU3MS44Nzk4NzEsMzM1Ljg5NjUwOSA1OTIuMTQ5NzIyLDM1NS4zNjY2MjkgNTkyLjE0OTcyMiwzNzkuOTMwMTk4IEw1OTIuMTQ5NzIyLDY5NS44MDYxOTIgQzU5Mi4xNDk3MjIsNjk1LjgwNjE5MiA2MDkuOTE2NjE1LDY4OC4xNjYwMTggNjI3LjY0MjQ3Nyw2ODAuNTY2OTIxIEM2NDEuMTgzMDY2LDY3NC42NTE5NDggNjQ5LjYzNTY3Niw2NjEuOTU5NDAxIDY0OS42MzU2NzYsNjQ2LjY3OTA1NCBMNjQ5LjYzNTY3NiwyNjkuODg3MDUyIEM2NDkuNjM1Njc2LDI0Ni4xODYwODQgNjY5LjA4NDg4NSwyMjUuODUzMzY0IDY5Mi43NjAzOTksMjI1Ljg1MzM2NCBMNzY1LjQyODIyNSwyMjUuODUzMzY0IEM3ODkuMTAzNzM5LDIyNS44NTMzNjQgODA4LjU1Mjk0OSwyNDUuMzIzNDg0IDgwOC41NTI5NDksMjY5Ljg4NzA1MiBMODA4LjU1Mjk0OSw1ODAuNjY5NTk3IEM4NzEuMDg1ODQ5LDUzNC45NTE3ODUgOTM1LjM0MjA5OCw0NzkuOTA5Njc0IDk4Ni4wNTc3NTcsNDEzLjg1OTE0MSBDMTAwMS4yODA2NiwzOTQuMzg5MDIxIDEwMDUuNTA2OTcsMzY4Ljk2Mjg1MiA5OTcuMDU0MzU3LDM0NS4yNjE4ODMgQzkwNC4wNzU2NDcsNzcuNjkxNTAyOCA2MTEuNjgwOTk1LC02NC41OTY0NjEyIDM0NC42MDMxNDEsMjguNTY0MzY1MSBDNzcuNTI1Mjg2MSwxMjEuNzI1MTkxIC02NC40NDU3MzUsNDE0LjY4MDY2NSAyOC40OTE5NDIxLDY4Mi4yOTIxMjEgQzM4LjYyNjg2NzYsNzEyLjc3MDY2MyA1Mi4xNjc0NTY0LDc0MS41NjUwODEgNjguMjExMDAyNCw3NjkuNDk2ODk4IEM4MC44ODk5MTczLDc5MS41MTM3NDMgMTA0LjU2NTQzMSw4MDQuMjA2Mjg5IDEyOS45MjMyNjEsODAxLjY1OTU2NSBDMTQzLjQ2Mzg1LDgwMC43OTY5NjQgMTYwLjM2OTA3LDc5OS4xMTI4NCAxODEuNDU5NTYzLDc5Ni41NjYxMTYgQzIwMC4wNDcwOTgsNzk0Ljg4MTk5MSAyMTMuNTg3Njg3LDc3OC43ODAxMiAyMTMuNTg3Njg3LDc2MC4xMzE1MjQgTDIxMy41NDY2NTUsNDg4LjMzMDI5NSBMMjEzLjU0NjY1NSw0ODguMzMwMjk1IFoiIGZpbGw9IiMyMTMyNUIiPjwvcGF0aD4KICA8cGF0aCBkPSJNMjEyLjk1NTc1Miw5MjYuMDEzODY3IEM0NDEuMjAxMjI3LDEwOTIuNDM4OTcgNzYwLjQyNTk1MywxMDQxLjc0NTA5IDkyNi4zMTQ4NjIsODEyLjgyMzQ4OSBDOTg5LjQ4OTIxOSw3MjQuOTU5NTYgMTAyNCw2MTkuMzUwNzIzIDEwMjQsNTExLjI0MjAyNyBDMTAyNCw0OTkuMzk4NDI4IDEwMjMuMTQxMzIsNDg3LjU5NTgxMSAxMDIyLjMyMzUzLDQ3NS43NTIyMTIgQzgzNi4yMzUxODEsNzU1LjM2NzY5MiA0OTEuNzQwNzEyLDg4Ni4zMDI5NzggMjEyLjk1NTc1Miw5MjYuMDEzODY3IEwyMTIuOTU1NzUyLDkyNi4wMTM4NjcgWiIgZmlsbD0iIzk3OTY5NSI+PC9wYXRoPgo8L3N2Zz4K) */
export const EtherscanCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-etherscan-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

EtherscanCircleColorful.displayName = 'EtherscanCircleColorful';
