// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/sushiswap-colorful.svg';

/**![SushiSwapColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyIj4KCTxwYXRoIHN0eWxlPSJmaWxsOm5vbmUiIGQ9Ik0wIDBoMTkyMHYxMDgwSDB6IiB0cmFuc2Zvcm09InNjYWxlKC4yNjY2NyAuNDc0MDcpIi8+CiAgPHBhdGggZD0ibTE3NzIxLjEgNzM4NS4yOC00Mi42IDU5LjM4Yy02LjcgOS40My0xOS43IDEzLjk3LTM2LjYgMTIuNTgtMjEuOC0xLjgtNTAuNy0xMy4zMi03OC40LTMzLjE5LTI3LjctMTkuODgtNDcuOS00My41Ni01Ni43LTYzLjYxLTYuNy0xNS41NC02LjYtMjkuMjYuMi0zOC43bDQyLjUtNTkuMzhjNi44LTkuNDMgMTkuOC0xMy45NyAzNi42LTEyLjU4IDIxLjggMS44IDUwLjggMTMuMzMgNzguNSAzMy4yIDI3LjcgMTkuODcgNDcuOSA0My41NSA1Ni42IDYzLjYgNi44IDE1LjU0IDYuNiAyOS4yNy0uMSAzOC43Wm0tMTYwLjItMTE0Ljc2YzQuNC02LjEgMTMuMi03LjY4IDI0LjEtNi43OCAxOS45IDEuNjQgNDYuMSAxMi40OCA3MS40IDMwLjYyIDI1LjMgMTguMTMgNDQgMzkuNSA1MiA1Ny44IDQuMyAxMC4wMyA1LjcgMTguODcgMS4zIDI0Ljk3bDUuNyA0LjA3LTUuNy00LjA3LTQyLjYgNTkuMzhjLTQuMyA2LjA5LTEzLjEgNy42OC0yNCA2Ljc3LTE5LjktMS42My00Ni4yLTEyLjQ4LTcxLjUtMzAuNjEtMjUuMy0xOC4xNC00NC0zOS41MS01MS45LTU3LjgtNC40LTEwLjA0LTUuNy0xOC44OC0xLjMtMjQuOTdsNDIuNS01OS4zOFoiIHN0eWxlPSJmaWxsOiNmZmYiIHRyYW5zZm9ybT0ibWF0cml4KDIuMTU2MTYgMCAwIDIuMTU2MTUgLTM3NzIyLjU4NiAtMTU1OTkuMjgpIi8+CiAgPHBhdGggZD0iTTE3NTUwLjQgNzI3NS43NWMxMy45LTE5LjQgNjEtOS40NCAxMDUuMiAyMi4yMiA0NC4yIDMxLjY3IDY4LjggNzMuMTQgNTQuOSA5Mi41NGwtNDIuNSA1OS4zOGMtMTMuOSAxOS40LTYxLjEgOS40NC0xMDUuMy0yMi4yMy00NC4yLTMxLjY3LTY4LjgtNzMuMTMtNTQuOS05Mi41M2w0Mi42LTU5LjM4WiIgc3R5bGU9ImZpbGw6I2ZmZiIgdHJhbnNmb3JtPSJtYXRyaXgoMi4xNTYxNiAwIDAgMi4xNTYxNSAtMzc3MTIuMDUgLTE1NjE2LjI0NCkiLz4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgyLjIyMjA4IDAgMCAyLjIyMjA4IC00MTI5OC4yMjIgLTM1MzgzLjIzMykiPgoJCTxwYXRoIGQ9Ik0xODY0MC42IDE1OTUyLjFjNi04LjQgMTcuNi0xMi4xIDMyLjYtMTAuOSAyMC43IDEuNyA0OC4xIDEyLjggNzQuNSAzMS42IDI2LjMgMTguOSA0NS42IDQxLjQgNTMuOCA2MC40IDYgMTMuOCA2LjIgMjYgLjIgMzQuNGwtNDEuMiA1Ny42Yy02IDguNC0xNy43IDEyLjEtMzIuNiAxMC45LTIwLjctMS44LTQ4LjItMTIuOC03NC41LTMxLjctMjYuNC0xOC44LTQ1LjYtNDEuMy01My45LTYwLjMtNi0xMy44LTYuMi0yNi0uMi0zNC40bDQxLjMtNTcuNlptMTU1LjQgMTExLjR2LS4xYzQuOC02LjYgMy44LTE2LjQtLjktMjcuNC03LjktMTguMS0yNi40LTM5LjQtNTEuNi01Ny40LTI1LjEtMTgtNTEuMi0yOC43LTcwLjktMzAuMy0xMi0xLTIxLjUgMS4yLTI2LjMgNy45bC0uMi40Yy00LjUgNi43LTMuNSAxNi4yIDEuMiAyNyA3LjkgMTguMiAyNi40IDM5LjUgNTEuNSA1Ny41czUxLjIgMjguNyA3MC45IDMwLjNjMTEuOC45IDIxLjEtMS4yIDI2LTcuNWwuMy0uNXYuMVptLTY0LjItNjguNmMxMi42IDkgMjEuOSAxOS43IDI1LjggMjguOCAyLjMgNS4xIDIuOSA5LjYuNiAxMi43LTIuMiAzLjEtNi43IDQtMTIuMiAzLjUtOS45LS44LTIyLjktNi4yLTM1LjUtMTUuMi0xMi42LTktMjEuOS0xOS42LTI1LjgtMjguNy0yLjItNS4xLTIuOC05LjYtLjYtMTIuNyAyLjItMy4xIDYuNy00IDEyLjMtMy42IDkuOC45IDIyLjkgNi4yIDM1LjQgMTUuMloiIHN0eWxlPSJmaWxsOiMwZTBmMjMiLz4KICAgIDxjbGlwUGF0aCBpZD0iYW50LXdlYjMtaWNvbi1zdXNoaXN3YXAtY29sb3JmdWwtMSI+CgkJCTxwYXRoIGQ9Ik0xODY0MC42IDE1OTUyLjFjNi04LjQgMTcuNi0xMi4xIDMyLjYtMTAuOSAyMC43IDEuNyA0OC4xIDEyLjggNzQuNSAzMS42IDI2LjMgMTguOSA0NS42IDQxLjQgNTMuOCA2MC40IDYgMTMuOCA2LjIgMjYgLjIgMzQuNGwtNDEuMiA1Ny42Yy02IDguNC0xNy43IDEyLjEtMzIuNiAxMC45LTIwLjctMS44LTQ4LjItMTIuOC03NC41LTMxLjctMjYuNC0xOC44LTQ1LjYtNDEuMy01My45LTYwLjMtNi0xMy44LTYuMi0yNi0uMi0zNC40bDQxLjMtNTcuNlptMTU1LjQgMTExLjR2LS4xYzQuOC02LjYgMy44LTE2LjQtLjktMjcuNC03LjktMTguMS0yNi40LTM5LjQtNTEuNi01Ny40LTI1LjEtMTgtNTEuMi0yOC43LTcwLjktMzAuMy0xMi0xLTIxLjUgMS4yLTI2LjMgNy45bC0uMi40Yy00LjUgNi43LTMuNSAxNi4yIDEuMiAyNyA3LjkgMTguMiAyNi40IDM5LjUgNTEuNSA1Ny41czUxLjIgMjguNyA3MC45IDMwLjNjMTEuOC45IDIxLjEtMS4yIDI2LTcuNWwuMy0uNXYuMVptLTY0LjItNjguNmMxMi42IDkgMjEuOSAxOS43IDI1LjggMjguOCAyLjMgNS4xIDIuOSA5LjYuNiAxMi43LTIuMiAzLjEtNi43IDQtMTIuMiAzLjUtOS45LS44LTIyLjktNi4yLTM1LjUtMTUuMi0xMi42LTktMjEuOS0xOS42LTI1LjgtMjguNy0yLjItNS4xLTIuOC05LjYtLjYtMTIuNyAyLjItMy4xIDYuNy00IDEyLjMtMy42IDkuOC45IDIyLjkgNi4yIDM1LjQgMTUuMloiLz4KCQk8L2NsaXBQYXRoPgogICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2FudC13ZWIzLWljb24tc3VzaGlzd2FwLWNvbG9yZnVsLTEpIj4KCQkJPHBhdGggZD0iTTE3MDA0LjUgMTU3MTQuMWMxLjEgMCAyLjktMS4xIDMuOS0xLjQgMy41LTEuMSA3LTIuMiAxMC42LTMuMSAxMC41LTIuNyAyMS40LTQuMiAzMi4yLTMuMiAxNyAxLjYgMzIuNCAxNC4xIDQ5LjUgMTIuNCA5LjYtLjkgMTYuNC02LjYgMjQuOC0xMC41IDgtMy45IDE2LjgtNS42IDI1LjctNC44IDI2LjUgMi4yIDM2LjUgMjQuMiA2My40IDIzIDIyLjMtMSAxMy42LTEyLjMgMzUtMTYuMy4yLS4xIDUxLjcgMTkgNTIuMSAyMi4zIDEuNSAxMi43LTI3LjEgMTYyLjMtMjUuOCAxNjIuM2wtMjU1LjEtMzkuNS0xNi4zLTE0MS4yWiIgc3R5bGU9ImZpbGw6dXJsKCNhbnQtd2ViMy1pY29uLXN1c2hpc3dhcC1jb2xvcmZ1bC0yKSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTIuMzcxOSAxNTgxLjY1IDUzMzM3LjcpIi8+CgkJPC9nPgoJPC9nPgogIDxwYXRoIGQ9Ik0xODczMSAxNjEyMi4zYzcuOCAxLjMgMTUgMS42IDIxIC42LjgtLjEgMS40LS45IDEuMy0xLjctLjItLjgtLjktMS40LTEuNy0xLjMtNS44IDEtMTIuNi43LTIwLjEtLjYtLjgtLjEtMS42LjUtMS43IDEuMy0uMS44LjQgMS42IDEuMiAxLjdabS0xMS44LTIuNmMyIC41IDMuOSAxIDUuOSAxLjQuOC4yIDEuNi0uMyAxLjctMS4xLjItLjgtLjMtMS42LTEuMS0xLjgtMS45LS40LTMuOC0uOS01LjctMS40LS44LS4zLTEuNy4yLTEuOSAxLS4yLjguMyAxLjYgMS4xIDEuOVptLTExMS43LTk0LjdjNS42IDIyLjkgMjcuNiA0NC4zIDQ1LjMgNTkuNS42LjYgMS42LjUgMi4xLS4xLjUtLjcuNS0xLjYtLjItMi4xLTE3LjItMTQuOS0zOC44LTM1LjctNDQuMi01OC0uMi0uOC0xLjEtMS4zLTEuOS0xLjEtLjguMi0xLjMgMS0xLjEgMS44Wm0tMS4zLTkuMmMwIDEgLjEgMi4xLjIgMy4xLjEuOC45IDEuNCAxLjcgMS4zLjgtLjEgMS40LS44IDEuMy0xLjYtLjEtMS0uMi0yLS4yLTIuOSAwLS45LS43LTEuNS0xLjYtMS41LS44LjEtMS40LjgtMS40IDEuNloiIHN0eWxlPSJmaWxsOiNmZmYiIHRyYW5zZm9ybT0ibWF0cml4KDIuMjIyMDggMCAwIDIuMjIyMDggLTQxMjM0LjMwMyAtMzU0NzguNzY5KSIvPgogIDxkZWZzPgoJCTxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1zdXNoaXN3YXAtY29sb3JmdWwtMiIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDI3LjkwOCAtNTkuMjM0NyAtMTQwLjQ5OSAtMTEuNzY2MSAxNzA5NS43IDE1NzY2LjYpIj4KCQkJPHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMjdiMGU2O3N0b3Atb3BhY2l0eToxIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iLjUyIiBzdHlsZT0ic3RvcC1jb2xvcjojYzI2YmIzO3N0b3Atb3BhY2l0eToxIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I2ZhNTJhMDtzdG9wLW9wYWNpdHk6MSIvPgoJCTwvbGluZWFyR3JhZGllbnQ+Cgk8L2RlZnM+Cjwvc3ZnPgo=) */
export const SushiSwapColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-sushiswap-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

SushiSwapColorful.displayName = 'SushiSwapColorful';
