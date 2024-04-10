// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/frxeth-circle-colorful.svg';

/**![FrxethCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1mcnhldGgtY2lyY2xlLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjgzLjQ2IDI4My40NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjgzLjQ2IDI4My40NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoKPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTQxLjczLDI4My40NmMtMTkuMTMsMC0zNy42OS0zLjc1LTU1LjE3LTExLjE0Yy0xNi44OC03LjE0LTMyLjAzLTE3LjM2LTQ1LjA1LTMwLjM3CgkJCWMtMTMuMDEtMTMuMDEtMjMuMjMtMjguMTctMzAuMzctNDUuMDVDMy43NSwxNzkuNDIsMCwxNjAuODYsMCwxNDEuNzNzMy43NS0zNy42OSwxMS4xNC01NS4xN2M3LjE0LTE2Ljg4LDE3LjM2LTMyLjAzLDMwLjM3LTQ1LjA1CgkJCUM1NC41MywyOC41LDY5LjY4LDE4LjI4LDg2LjU2LDExLjE0QzEwNC4wNCwzLjc1LDEyMi42LDAsMTQxLjczLDBzMzcuNjksMy43NSw1NS4xNywxMS4xNGMxNi44OCw3LjE0LDMyLjAzLDE3LjM2LDQ1LjA1LDMwLjM3CgkJCWMxMy4wMSwxMy4wMSwyMy4yMywyOC4xNywzMC4zNyw0NS4wNWM3LjM5LDE3LjQ4LDExLjE0LDM2LjA0LDExLjE0LDU1LjE3cy0zLjc1LDM3LjY5LTExLjE0LDU1LjE3CgkJCWMtNy4xNCwxNi44OC0xNy4zNiwzMi4wMy0zMC4zNyw0NS4wNWMtMTMuMDEsMTMuMDEtMjguMTcsMjMuMjMtNDUuMDUsMzAuMzdDMTc5LjQyLDI3OS43MiwxNjAuODYsMjgzLjQ2LDE0MS43MywyODMuNDZ6IiBzdHlsZT0iZmlsbDogI0ZGRkZGRjsiLz4KCTwvZz4KCTxnPgoJCTxjaXJjbGUgY3g9IjE0MS43MyIgY3k9IjE0MS43MyIgcj0iMTM0LjIyIi8+Cgk8L2c+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjE0NS4wMywxMTYuNTIgMTQ1LjAzLDE3OC4zNiAyMDUuNTcsMTQxLjY3IAkJIiBzdHlsZT0iZmlsbDogI0ZGRkZGRjsiLz4KCQk8cG9seWdvbiBwb2ludHM9IjE0NS4wMywxMDkuNTQgMjA1LjAyLDEzNC40NyAxOTAuNjgsMTExLjA5IDIyMS4xNyw4MC42IDIwMi45NSw2Mi4zNyAxNzYuODMsODguNSAxNDUuMDMsMzYuNjYgCQkiIHN0eWxlPSJmaWxsOiAjRkZGRkZGOyIvPgoJCTxwb2x5Z29uIHBvaW50cz0iMTM4LjU5LDE3OC4zNiAxMzguNTksMTE2LjUyIDc4LjA1LDE0MS42NyAJCSIgc3R5bGU9ImZpbGw6ICNGRkZGRkY7Ii8+CgkJPHBvbHlnb24gcG9pbnRzPSI3OC42LDEzNC40NyAxMzguNTksMTA5LjU0IDEzOC41OSwzNi42NiAxMDYuOCw4OC41IDgwLjY3LDYyLjM3IDYyLjQ1LDgwLjYgOTIuOTQsMTExLjA4IAkJIiBzdHlsZT0iZmlsbDogI0ZGRkZGRjsiLz4KCQk8cG9seWdvbiBwb2ludHM9IjIwNC44OSwxNjAuOTIgMTQ1LjAzLDE5Ny4yIDE0NS4wMywyNDUuMjUgMTY5LjY2LDIxMC41NCAxOTUuMzcsMjM2LjI1IDIxMy41OSwyMTguMDMgMTg0Ljc5LDE4OS4yMyAKCQkJCQkiIHN0eWxlPSJmaWxsOiAjRkZGRkZGOyIvPgoJCTxwb2x5Z29uIHBvaW50cz0iMTM4LjU5LDE5Ny4yIDc4LjczLDE2MC45MiA5OC44MywxODkuMjMgNzAuMDMsMjE4LjAzIDg4LjI1LDIzNi4yNSAxMTMuOTYsMjEwLjU1IDEzOC41OSwyNDUuMjQgCQkKCQkJIiBzdHlsZT0iZmlsbDogI0ZGRkZGRjsiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K) */
export const FrxethCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-frxeth-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

FrxethCircleColorful.displayName = 'FrxethCircleColorful';
