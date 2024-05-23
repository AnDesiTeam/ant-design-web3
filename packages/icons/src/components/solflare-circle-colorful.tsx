// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/solflare-circle-colorful.svg';

/**![SolflareCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+CjxkZWZzPgogIDxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1zb2xmbGFyZS1jaXJjbGUtY29sb3JmdWwtMDEiIHgxPSIxMy4zNzUlIiB4Mj0iNzAuMjQxJSIgeTE9IjE1LjkwNyUiIHkyPSI2Ny42MDIlIj4KICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkMxMEIiLz4KICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0ZCM0YyRSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJhZGlhbEdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLXNvbGZsYXJlLWNpcmNsZS1jb2xvcmZ1bC0wMiIgY3g9IjM4LjU4JSIgY3k9IjMxLjU0JSIgcj0iNzMuNDkzJSIgZng9IjM4LjU4JSIgZnk9IjMxLjU0JSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCguMzc4MiAuOTI0MDEgLS45MTM5NCAuMzgyMzcgLjUyOCAtLjE2MikiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0ZGQzEwQiIvPgogICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkIzRjJFIi8+CiAgPC9yYWRpYWxHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgIDxwYXRoIGZpbGw9InVybCgjYW50LXdlYjMtaWNvbi1zb2xmbGFyZS1jaXJjbGUtY29sb3JmdWwtMDEpIiBkPSJNMzg4LjI0MiA3MzkuMDAxYzguMTEzIDAgMTQuNjY5IDYuNDk0IDE0LjY2OSAxNC41IDAgOC4wMi02LjU1NiAxNC40OTktMTQuNjU0IDE0LjQ5OS04LjA0Ny4wMzQtMTQuNjAyLTYuNDUzLTE0LjY1My0xNC41IDAtOC4wMDUgNi41NTUtMTQuNDk5IDE0LjY1My0xNC40OTl6TTM3Mi4zMzkgNDYuMTk3YTE1LjI3IDE1LjI3IDAgMCAxIDEzLjkyOCAxMy4wNjVsMTcuNDMgMTI2LjcxNWM1Ljg2MiA0MS44NzggNTYuMzYyIDYwLjAwMiA4Ny41MzYgMzEuNTU5TDY2NS45NjUgNTguNDljNC4yMjktMy44MjggMTAuNzQzLTMuNTY3IDE0LjY1My41ODZhMTAuMTggMTAuMTggMCAwIDEgLjI2MyAxMy42MmwtMTUyLjM5NyAxNzUuNzhjLTI4LjA0MiAzMi4zLTcuMzQyIDgyLjc0IDM1LjQxNSA4Ni4zMzNsMTM0LjQ1OCAxMi45NTdhMTIuMDggMTIuMDggMCAwIDEgMTAuOTUxIDEzLjE1NyAxMi4wOSAxMi4wOSAwIDAgMS0xMC4yNDIgMTAuNzJsLTE0MS4yNzUgMjIuMDU4Yy00MS4wMyA1LjYtNTkuNjAxIDU0LjE3Mi0zMi45MTcgODUuNzMxbDQ5LjY2OCA1OC41NTJhMTEuMDQ0IDExLjA0NCAwIDAgMS0xLjM4OCAxNS43MDMgMTEuMzggMTEuMzggMCAwIDEtMTQuMTE0LjMwOGwtNjEuMjItNDYuMjQzYy0zMy4wNC0yNC44MzQtODAuNjcyLTMuNzE4LTg0LjE1OCAzNy40MDVsLTEzLjQ5NyAxNjAuMzcxYy0uNjA0IDYuNjYtNi40OCAxMS41NzgtMTMuMTQyIDEwLjk5OGExMi4xMjQgMTIuMTI0IDAgMCAxLTExLjA2LTEwLjM2NUwzNTQuNTcgNTUxLjIzNWMtNS43MzgtNDEuODYzLTU2LjIzOC02MC4wMDItODcuNTM1LTMxLjU1OWwtMTg1LjkgMTY5LjI3MmE5LjU2MyA5LjU2MyAwIDAgMS0xMy4zODgtLjU0IDkuMjcgOS4yNyAwIDAgMS0uMjMyLTEyLjQzMkwyMjkuNzY4IDQ4OC43NWMyOC4wNDItMzIuMyA3LjQ2NS04Mi43MzktMzUuMjkyLTg2LjM0OEw1OS45ODcgMzg5LjQ0NWExMi4wOCAxMi4wOCAwIDAgMS0xMC45NTItMTMuMTU4IDEyLjExIDEyLjExIDAgMCAxIDEwLjI0Mi0xMC43MkwyMDAuNDYgMzQzLjUxYzQxLjAzLTUuNTg0IDU5LjcyNS01NC4xNTcgMzMuMDQtODUuNzE2bC0zMy44MS0zOS44NTdhMTMuNjk3IDEzLjY5NyAwIDAgMSAxLjc0Mi0xOS40NjYgMTQuMTE0IDE0LjExNCAwIDAgMSAxNy40NzYtLjM4Nmw0MS41MjQgMzEuMzc0YzMzLjA0IDI0Ljg1IDgwLjY3MiAzLjczMyA4NC4xNTgtMzcuMzlsMTEuMTY3LTEzMi4wMzZjLjc2Ny04LjM4OSA4LjE3NS0xNC41NzYgMTYuNTY2LTEzLjgzNnpNMTQuNjY5IDM2MS40OGM4LjA5OCAwIDE0LjY1NCA2LjQ3OCAxNC42NTQgMTQuNDk5IDAgOC4wMDUtNi41NTYgMTQuNS0xNC42NTQgMTQuNS04LjA1My4wNDItMTQuNjE4LTYuNDQ3LTE0LjY2OS0xNC41IDAtOC4wMiA2LjU3MS0xNC41IDE0LjY1NC0xNC41em03MzUuNDUzLTE0LjczMWM4LjA4MyAwIDE0LjY1NCA2LjQ3OCAxNC42NTQgMTQuNSAwIDguMDItNi41NzEgMTQuNDk5LTE0LjY1NCAxNC40OTktOC4wNTIuMDQyLTE0LjYxOC02LjQ0Ny0xNC42NjktMTQuNSAwLTguMDIgNi41NTYtMTQuNDk5IDE0LjY1NC0xNC40OTl6TTM3MC4xOTUgMGM4LjA5OCAwIDE0LjY1MyA2LjQ5NCAxNC42NTMgMTQuNSAwIDguMDItNi41NTUgMTQuNDk5LTE0LjY1MyAxNC40OTlhMTQuNTc3IDE0LjU3NyAwIDAgMS0xNC42NTQtMTQuNUMzNTUuNTQxIDYuNDk0IDM2Mi4wOTcgMCAzNzAuMTk1IDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMCAxMjgpIi8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI2FudC13ZWIzLWljb24tc29sZmxhcmUtY2lyY2xlLWNvbG9yZnVsLTAyKSIgZD0iTTM3OS4wMDIgNTA1LjYyNGM3Ni41MDcgMCAxMzguNTE1LTYxLjM0NCAxMzguNTE1LTEzNy4wMTggMC03NS42NTktNjIuMDA4LTEzNy4wMDMtMTM4LjUxNS0xMzcuMDAzcy0xMzguNTE0IDYxLjM0NC0xMzguNTE0IDEzNy4wMDNjMCA3NS42NzQgNjIuMDA3IDEzNy4wMDMgMTM4LjUxNCAxMzcuMDAzeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMwIDEyOCkiLz4KICA8L2c+Cjwvc3ZnPgo=) */
export const SolflareCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-solflare-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

SolflareCircleColorful.displayName = 'SolflareCircleColorful';
