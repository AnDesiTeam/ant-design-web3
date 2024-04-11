// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/backpack-colorful.svg';

/**![BackpackColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+CiAgPHBhdGggZmlsbD0iI0REM0YzRCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNDkyLjMwMy4zNjZDNDI5LjE0OCA0LjMxIDM4NC41OCAyNi40MTcgMzU3LjEyMSA2Ny4yNTNjLTQuNzg4IDcuMTgyLTEyLjE4IDIwLjYzLTE0LjA4MSAyNS40ODhsLS42MzQgMS43NiA3LjExMS0xLjk3MWMxNS4wNjctNC4yMjUgMzUuMzQ1LTguMDk3IDUyLjk0Ni0xMC4xNCAyMC40MTktMi4zMjMgMzQuMzYtMi42MDQgMTE4Ljk4OS0yLjI1MiA3Mi4zNzkuMjExIDg1LjI2My40MjIgOTQuNjk4IDEuNDc4IDIxLjY4NSAyLjMyNCA0MS4zMyA1Ljc3NCA1OC4wODYgMTAuMjEgNC4yOTUgMS4xMjYgNy44ODYgMS45IDguMDI3IDEuNzYuNjMzLS41NjQtOC41OS0xNy44ODQtMTMuMjM3LTI0LjkyNS0yNi41NDQtNDAuMjAyLTY3Ljk0My02Mi4xNy0xMjcuNzktNjcuNTlDNTI5Ljc2LjAxMyA1MDMuODUtLjMzOSA0OTIuMzA0LjM2NU00MTMuMDI1IDE1NS4zMzNjLTU3LjczNCA0LjU3Ni0xMDguNDk4IDI0LjU3Mi0xNDkuNjE2IDU5LjE0Mi0xMC4yMSA4LjU5LTI2LjY4NSAyNS40MTctMzQuNzExIDM1LjQ4Ni0xMi41MzMgMTUuNjMtMjUuNjI4IDM2LjYxMS0zNC4zNTkgNTQuOTE3LTE4LjIzNSAzOC4yMzItMjguMjMzIDc2LjY3NC0zMy4wOTEgMTI3LjQzOC0xLjE5NyAxMi4yNS0xLjc2IDIwOC4xOTQtLjYzNCAyMTQuMDM4IDIuMjUzIDExLjMzNiAxMC4yMSAyMC4yMDcgMjEuMTkzIDIzLjY1NyA0LjE1NCAxLjMzOCAxMi4zMjEgMS4zMzggMzMwLjIxIDEuMzM4aDMyNS45ODdsNC4zNjUtMS40NzljMTEuMjY1LTMuNzMxIDE4Ljc5OS0xMi4xOCAyMC44NC0yMy40NDUuOTg2LTUuNDIyIDEuMDU3LTE4MS45MzMuMDcxLTIwMC4wMjgtMi42NzUtNDkuMDc0LTE0LjAxMS05My4xNDktMzQuNS0xMzQuMTI2LTE1LjI3OC0zMC41NTctMzMuMDItNTQuOTE4LTU2Ljc0OC03OC4xNTItMzMuMDIxLTMyLjMxNy03MS44MTYtNTQuOTE4LTExNi42NjUtNjcuODczLTE1Ljc3MS00LjU3Ni0zMS4xMi03LjUzMy01My42NS0xMC40Mi03Ljc0NS0uOTg2LTE3Ni45MzQtMS40MDgtMTg4LjY5Mi0uNDkzbTEwNy45MzQgODcuMjM1YzE0Ljg1NiAxLjMzOCAyNy41MyA0Ljg1OCA0MC4yNzMgMTEuMjY1IDQwLjIwMyAyMC4xMzYgNjQuMjgyIDYwLjYyIDYyLjQ1MiAxMDQuOTA3LTEuMTk3IDI4Ljg2Ny0xMi4yNTEgNTQuMDAyLTMyLjg4IDc0LjcwMi0xNi40MDYgMTYuNDc2LTMzLjkzNyAyNi4wNTEtNTcuMDMgMzEuMDUtNi4zMzcgMS4zMzgtOS40MzUgMS41NDktMjIuMTc5IDEuNTQ5LTEyLjYwMyAwLTE1Ljg0Mi0uMjExLTIxLjg5Ny0xLjU1LTEwLjU2LTIuMjUyLTE3LjI1LTQuNjQ2LTI3LjM4OC05LjU3NC0xOC43MjktOS4xNTMtMzMuNTE0LTIyLjM5LTQ0Ljk5LTQwLjA2Mi0xMy4yMzctMjAuMjc4LTE5LjU3NC00NS42OTUtMTcuMzkxLTY5LjI4MSAxLjQ3OC0xNi4xOTQgNC41MDYtMjYuODk2IDExLjY4Ny00MS40IDEwLjU2Mi0yMS4zMzMgMjguNjU2LTM5LjQyOCA0OS45OS00OS45ODkgMTMuOC02LjgzIDI1LjY5OC0xMC4yOCA0MC4wNjItMTEuNTQ3IDkuMjIzLS44NDUgMTAuNDktLjg0NSAxOS4yOTEtLjA3TTE4My45MTkgNzQ1LjdjLTEyLjMyMSAzLjMwOC0yMS4xOTMgMTIuODEzLTIzLjMwNSAyNC45OTQtLjU2MyAzLjE2OC0uNzA0IDMzLjE2Mi0uNTYzIDEwMi4zNzJsLjIxMSA5Ny44NjYgMS42MiA1LjYzM2M2LjY4OCAyMy44NjggMjMuMzA0IDM5LjQyOCA0OC43MjEgNDUuOTc2IDQuMjI1IDEuMDU2IDI3LjUzIDEuMTI3IDI5NS43MTEgMS40MDggMjAyLjYzMy4xNDEgMjkzLjUyOSAwIDI5OS4wOTEtLjU2MyAyNy44MTEtMi42MDUgNDkuMjg1LTIwLjM0OCA1Ni42MDgtNDYuODIxbDEuNjE5LTUuNjMzLjIxMS05OC4yMThjLjE0MS03MS44ODYgMC05OS4zNDUtLjU2My0xMDIuNDQzLTIuMzk0LTEyLjI1LTEyLjI1LTIyLjM5LTI0LjUwMi0yNC45MjQtMi42NzUtLjU2My05Mi44NjctLjc3NC0zMjcuMzk0LS43MDQtMjgwLjI5MiAwLTMyNC4xNTYuMTQtMzI3LjQ2NSAxLjA1NiIvPgo8L3N2Zz4K) */
export const BackpackColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-backpack-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

BackpackColorful.displayName = 'BackpackColorful';
