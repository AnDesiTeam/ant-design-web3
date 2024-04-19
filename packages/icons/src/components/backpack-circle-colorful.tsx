// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/backpack-circle-colorful.svg';

/**![BackpackCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+CiAgPGNpcmNsZSBjeD0iNTEyIiBjeT0iNTEyIiByPSI1MTIiIGZpbGw9IiNERDNGM0QiLz4KICA8cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00OTcuMjI4IDEyOC4yNzVjLTQ3LjM2NyAyLjk1Ny04MC43OTMgMTkuNTM4LTEwMS4zODcgNTAuMTY1LTMuNTkgNS4zODYtOS4xMzYgMTUuNDcyLTEwLjU2MSAxOS4xMTZsLS40NzYgMS4zMiA1LjMzNC0xLjQ3OWMxMS4zLTMuMTY4IDI2LjUwOC02LjA3MiAzOS43MS03LjYwNCAxNS4zMTMtMS43NDIgMjUuNzY5LTEuOTU0IDg5LjI0MS0xLjY5IDU0LjI4NC4xNTkgNjMuOTQ4LjMxNyA3MS4wMjMgMS4xMSAxNi4yNjUgMS43NDIgMzAuOTk3IDQuMzMgNDMuNTY1IDcuNjU2IDMuMjIxLjg0NSA1LjkxNCAxLjQyNiA2LjAyIDEuMzIuNDc1LS40MjItNi40NDItMTMuNDEyLTkuOTI4LTE4LjY5My0xOS45MDctMzAuMTUyLTUwLjk1Ny00Ni42MjctOTUuODQyLTUwLjY5My04LjYwNy0uNzkyLTI4LjA0LTEuMDU2LTM2LjctLjUyOE00MzcuNzY4IDI0NC41Yy00My4zIDMuNDMyLTgxLjM3MyAxOC40MjktMTEyLjIxMSA0NC4zNTYtNy42NTcgNi40NDMtMjAuMDE0IDE5LjA2My0yNi4wMzMgMjYuNjE0LTkuNCAxMS43MjMtMTkuMjIyIDI3LjQ2LTI1Ljc3IDQxLjE4OS0xMy42NzYgMjguNjczLTIxLjE3NSA1Ny41MDUtMjQuODE4IDk1LjU3OC0uODk4IDkuMTg4LTEuMzIgMTU2LjE0Ni0uNDc1IDE2MC41MjkgMS42OSA4LjUwMSA3LjY1NiAxNS4xNTUgMTUuODk0IDE3Ljc0MiAzLjExNiAxLjAwNCA5LjI0MSAxLjAwNCAyNDcuNjU4IDEuMDA0aDI0NC40OWwzLjI3NC0xLjExYzguNDQ5LTIuNzk4IDE0LjA5OS05LjEzNSAxNS42My0xNy41ODMuNzQtNC4wNjcuNzkyLTEzNi40NS4wNTMtMTUwLjAyMS0yLjAwNy0zNi44MDYtMTAuNTA4LTY5Ljg2Mi0yNS44NzUtMTAwLjU5NS0xMS40NTktMjIuOTE3LTI0Ljc2Ni00MS4xODgtNDIuNTYxLTU4LjYxNC0yNC43NjYtMjQuMjM4LTUzLjg2Mi00MS4xODgtODcuNDk5LTUwLjkwNC0xMS44MjgtMy40MzMtMjMuMzQtNS42NS00MC4yMzgtNy44MTYtNS44MDgtLjczOS0xMzIuNy0xLjA1Ni0xNDEuNTE5LS4zN204MC45NTEgNjUuNDI2YzExLjE0MiAxLjAwMyAyMC42NDcgMy42NDMgMzAuMjA1IDguNDQ5IDMwLjE1MiAxNS4xMDIgNDguMjEyIDQ1LjQ2NSA0Ni44MzkgNzguNjgtLjg5OCAyMS42NS05LjE4OCA0MC41MDItMjQuNjYgNTYuMDI3LTEyLjMwNCAxMi4zNTYtMjUuNDUzIDE5LjUzOC00Mi43NzMgMjMuMjg3LTQuNzUzIDEuMDAzLTcuMDc2IDEuMTYyLTE2LjYzNCAxLjE2Mi05LjQ1MiAwLTExLjg4MS0uMTU5LTE2LjQyMi0xLjE2Mi03LjkyMS0xLjY5LTEyLjkzOC0zLjQ4NS0yMC41NDItNy4xODItMTQuMDQ2LTYuODY0LTI1LjEzNS0xNi43OTItMzMuNzQyLTMwLjA0Ni05LjkyOC0xNS4yMDgtMTQuNjgtMzQuMjctMTMuMDQzLTUxLjk2IDEuMTA5LTEyLjE0NiAzLjM4LTIwLjE3MiA4Ljc2NS0zMS4wNSA3LjkyMS0xNiAyMS40OTItMjkuNTcxIDM3LjQ5Mi0zNy40OTIgMTAuMzUtNS4xMjIgMTkuMjc0LTcuNzEgMzAuMDQ3LTguNjYgNi45MTctLjYzNCA3Ljg2OC0uNjM0IDE0LjQ2OC0uMDUzTTI2NS45NCA2ODcuMjc0Yy05LjI0MiAyLjQ4Mi0xNS44OTUgOS42MTEtMTcuNDggMTguNzQ2LS40MjIgMi4zNzctLjUyOCAyNC44NzItLjQyMiA3Ni43OGwuMTU5IDczLjQgMS4yMTQgNC4yMjRjNS4wMTcgMTcuOSAxNy40NzkgMjkuNTcgMzYuNTQxIDM0LjQ4MiAzLjE2OS43OTIgMjAuNjQ3Ljg0NSAyMjEuNzg0IDEuMDU2IDE1MS45NzQuMTA2IDIyMC4xNDYgMCAyMjQuMzE4LS40MjMgMjAuODU4LTEuOTUzIDM2Ljk2NC0xNS4yNiA0Mi40NTUtMzUuMTE1bDEuMjE1LTQuMjI1LjE1OC03My42NjNjLjEwNi01My45MTUgMC03NC41MS0uNDIyLTc2LjgzMy0xLjc5NS05LjE4OC05LjE4OC0xNi43OTItMTguMzc2LTE4LjY5My0yLjAwNy0uNDIyLTY5LjY1LS41OC0yNDUuNTQ2LS41MjgtMjEwLjIyIDAtMjQzLjExNy4xMDYtMjQ1LjU5OS43OTIiLz4KPC9zdmc+Cg==) */
export const BackpackCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-backpack-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

BackpackCircleColorful.displayName = 'BackpackCircleColorful';
