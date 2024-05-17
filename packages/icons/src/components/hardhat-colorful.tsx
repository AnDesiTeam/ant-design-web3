// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/hardhat-colorful.svg';

/**![HardhatColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAyNTYgMTc3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KICAgIDx0aXRsZT5IYXJkaGF0PC90aXRsZT4KICAgIDxnPgoJCQkJPHBhdGggZD0iTTI1NiwxNDguNDA2NjA3IEMyNTYsMTQ4LjQwNjYwNyAyMTcuMDA3MjUzLDE0Mi42Mjk5MDMgMTk2LjQwMjU1OSwxNDAuOTczMDE5IEMxNzYuNjE1MTEyLDEzOS4zODMzMDcgMTUzLjE2Njg0NiwxMzguNDY1MzAzIDEyOC4wMTEzMTksMTM4LjQ2NTMwMyBDMTAyLjg1NTc5MiwxMzguNDY1MzAzIDc5LjQwNzUyNjUsMTM5LjM4MzMwNyA1OS42MjU2NzY2LDE0MC45NzMwMTkgQzM5LjAxNTM4NDcsMTQyLjY1MjI5NCAwLjAyODIzNTY3NTUsMTUwLjY2ODAyOSAwLjAyODIzNTY3NTUsMTUwLjY2ODAyOSBMMC4wMjgyMzU2NzU1LDE2MC43NDM2NzQgQzAuMDI4MjM1Njc1NSwxNjkuNjk5ODAzIDU3LjMzMDY2ODUsMTc2Ljk3NjY1OCAxMjguMDExMzE5LDE3Ni45NzY2NTggQzE5OC42OTE5NywxNzYuOTc2NjU4IDI1NS45OTQ0MDIsMTY5LjY5OTgwMyAyNTUuOTk0NDAyLDE2MC43NDM2NzQgTDI1NiwxNDguNDA2NjA3IFoiIGZpbGw9IiNGMEQ1MEMiPjwvcGF0aD4KCQkJCTxwYXRoIGQ9Ik04OC42NjAzMjczLDE0Ljc2NDM2OTEgQzQxLjkyNTUyMjUsMzEuNDE2MzgwMyAxMC43MTY2NzQyLDc1LjY2NDU4OCAxMC43MTQwMTcxLDEyNS4yNzc0MDMgTDEwLjcxNDAxNzEsMTQxLjg5MTAyMyBDMjcuMzkxNDE2OSwxMzcuOTA2NjgzIDQ0LjM5NTQzMzUsMTM1LjQ0MTEzOCA2MS41MTc2NTg4LDEzNC41MjQ2MDcgQzYxLjQwMTk3NTUsMTMxLjMzNzcxNyA2MS4zNDIyNjgsMTI4LjEyNjU3MiA2MS4zMzg1MzYyLDEyNC44OTExNyBDNjEuMzU1MzI5LDgxLjI5NzIxMjQgNzEuODc4NzgwNiw0Mi4wNjkzNjc0IDg4LjY2MDMyNzMsMTQuNzY0MzY5MSBaIiBmaWxsPSIjRjBENTBDIj48L3BhdGg+CgkJCQk8cGF0aCBkPSJNMjQ1LjMwMzE1LDEyNS4yNzc0MDMgQzI0NS4zNDMxMjYsOTguMDU0NTQzMiAyMzUuODczMzYxLDcxLjY3MjY0NTQgMjE4LjUyOTc5NSw1MC42ODk2NDE2IEMyMjYuMDQ4NDkxLDc0LjcwMzc1NzMgMjI5Ljc5NDkzOCw5OS43MzkyMzU4IDIyOS42MzUzOTUsMTI0LjkwMjM2NSBDMjI5LjYzNTM5NSwxMjkuNDgxMTg2IDIyOS41MTc4NDYsMTM0LjAwNzc2MyAyMjkuMjgyNzQ4LDEzOC40ODIwOTYgQzIzNC42MjAxMDUsMTM5LjMwMzU4NSAyMzkuOTA2OTg3LDE0MC40MjQ4NzUgMjQ1LjExODMwMywxNDEuODQwNjQ0IEwyNDUuMzAzMTUsMTI1LjI3NzQwMyBaIiBmaWxsPSIjRkZGMDREIj48L3BhdGg+CgkJCQk8cGF0aCBkPSJNMjQ1LjMwMzE1LDEyNS4yNzc0MDMgQzI0NS4zNDMxMjYsOTguMDU0NTQzMiAyMzUuODczMzYxLDcxLjY3MjY0NTQgMjE4LjUyOTc5NSw1MC42ODk2NDE2IEMyMjYuMDQ4NDkxLDc0LjcwMzc1NzMgMjI5Ljc5NDkzOCw5OS43MzkyMzU4IDIyOS42MzUzOTUsMTI0LjkwMjM2NSBDMjI5LjYzNTM5NSwxMjkuNDgxMTg2IDIyOS41MTc4NDYsMTM0LjAwNzc2MyAyMjkuMjgyNzQ4LDEzOC40ODIwOTYgQzIzNC42MjAxMDUsMTM5LjMwMzU4NSAyMzkuOTA2OTg3LDE0MC40MjQ4NzUgMjQ1LjExODMwMywxNDEuODQwNjQ0IEwyNDUuMzAzMTUsMTI1LjI3NzQwMyBaIiBmaWxsPSIjRkZFQTAwIj48L3BhdGg+CgkJCQk8cGF0aCBkPSJNMjE4LjUyOTc5NSw1MC42ODQwNDQgQzE4Ny4xMDQzMTMsMTIuNTkwMjg2OCAxMzUuMjAwMTkzLC0xLjc2NjEyNDI5IDg4LjY2NTkyNDgsMTQuNzY0MzY5MSBDNzEuODczMTgzLDQyLjA2OTM2NzQgNjEuMzU1MzI5LDgxLjI5NzIxMjQgNjEuMzU1MzI5LDEyNC44OTY3NjggQzYxLjM1NTMyOSwxMjguMTMyMTY5IDYxLjQxNTAzNjUsMTMxLjM0MzMxNSA2MS41MzQ0NTE2LDEzNC41MzAyMDQgQzc4Ljk5ODkwMzEsMTMzLjE4MTE4NyA5OS4yMTczNjQzLDEzMi4zNDcxNDggMTIwLjg2ODgwNiwxMzIuMTk2MDEzIEMxMjAuODY4ODA2LDEzMi4xOTYwMTMgMTI1Ljc4OTA4LDEzMi4xOTYwMTMgMTI4LjAyMjUxNCwxMzIuMTk2MDEzIEMxNjEuODg5MjYyLDEzMS43ODk1OTQgMTk1LjczOTQ0OSwxMzMuODk4MjE1IDIyOS4yOTM5NDMsMTM4LjUwNDQ4NiBDMjI5LjUyMTU3OCwxMzQuMDI2NDIyIDIyOS42MzkxMjcsMTI5LjQ5OTg0NSAyMjkuNjQ2NTksMTI0LjkyNDc1NiBDMjI5LjgwNTUsOTkuNzUxNjU3OCAyMjYuMDU1MjM5LDc0LjcwNjQ4NzkgMjE4LjUyOTc5NSw1MC42ODQwNDQgTDIxOC41Mjk3OTUsNTAuNjg0MDQ0IFoiIGZpbGw9IiNGRkYwNEQiPjwvcGF0aD4KCQkJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgxLjM5NDY2OCwgMC4wMDAwMDApIiBmaWxsPSIjRkZGMDREIj4KCQkJCQkJPHBhdGggZD0iTTkzLjc5ODY1ODUsNTguNDQyMjkwNyBMODYuMzY1MDcxNCwxMS45ODIzNzE2IEM4NS44MzcwMTg0LDguNTY0MTU3MTIgODMuMzg3OTA4NCw1Ljc1NTUyNDc0IDgwLjA3MzM5MDgsNC43NjcwOTAxMyBDNTguNDE0MDM0OSwtMS41ODkwMzAwNCAzNS4zODQ2MjM3LC0xLjU4OTAzMDA0IDEzLjcyNTI2NzcsNC43NjcwOTAxMyBDMTAuNDEyOTMyOSw1Ljc1NzM0MDY1IDcuOTY2MzIxMzEsOC41NjU2MDYyOSA3LjQzOTE4NDY1LDExLjk4MjM3MTYgTDAsNTguNDQyMjkwNyI+PC9wYXRoPgoJCQkJPC9nPgoJCQkJPHBhdGggZD0iTTEyOC4wMjI1MTQsMTMxLjIxMDgzOSBDMTI1Ljc4MzQ4MiwxMzEuMjEwODM5IDEyMy41NjEyNDIsMTMxLjIxMDgzOSAxMjEuMzU1Nzk2LDEzMS4yMTA4MzkgTDEyMS4xMDk1MDIsMTMxLjIxMDgzOSBMMTIwLjg2MzIwOSwxMzEuMjEwODM5IEM1My41MDc1MjEsMTMxLjY4MTAzNiAwLjAzMzgzMzI1NjEsMTM4Ljc1NjM3OCAwLjAzMzgzMzI1NjEsMTQ3LjQxNTgzNSBMMC4wMzM4MzMyNTYxLDE1OS45NjU2MSBDLTAuMDc1MjkyMTIzLDE2MC43MDEwNTcgMC4wODE1MDY5ODkyLDE2MS40NTEzMTEgMC40NzYwNDIxMjUsMTYyLjA4MTQ5NiBDMy44OTY5MDg0LDE1OS41MTIyNjMgNy44Mjg5OTY2LDE1Ny43MDY1NTcgMTIuMDA3MDU4MiwxNTYuNzg2MTg1IEMyMi42NDc4MDkzLDE1NC4xOTcxMzEgMzMuNDYyOTMzMiwxNTIuMzg2MTkxIDQ0LjM2NjY3MTgsMTUxLjM2NzcyNyBDNTAuNTU5MzIxNiwxNTAuNjg4NDYxIDU2Ljc0NDc0MDIsMTUyLjcwNzQ0IDYxLjM0NDEzMzgsMTU2LjkwOTMzMSBDNjkuNzY1NTY3LDE2NC42MTg5NzYgODAuNzY5MzEsMTY4Ljg5NDY1OSA5Mi4xODY4MDMxLDE2OC44OTM3NTIgTDE2My44MzU4MzUsMTY4Ljg5Mzc1MiBDMTc1LjI1MzIyNiwxNjguODkzNzUyIDE4Ni4yNTY3NzksMTY0LjYxODUwNiAxOTQuNjc4NTA0LDE1Ni45MDkzMzEgTDE5NC42Nzg1MDQsMTU2LjkwOTMzMSBDMTk5LjI3NzU0NiwxNTIuNzAyNTg0IDIwNS40NjYwNTksMTUwLjY4MTIyIDIxMS42NjE1NjQsMTUxLjM2MjEyOSBDMjIyLjU2MzQ3LDE1Mi4zODA0ODkgMjMzLjM3Njc0MSwxNTQuMTkxNDMyIDI0NC4wMTU1OCwxNTYuNzgwNTg3IEMyNDcuOTcyMzg2LDE1Ny41NDE0NjEgMjUxLjcwOTI2NCwxNTkuMTc2NTg0IDI1NC45NTMyNTIsMTYxLjU2NjUxOSBDMjU1LjEzNzk3MywxNjEuNzUxMjM5IDI1NS4zNTA2ODEsMTYxLjkxMzU2OSAyNTUuNTEzMDEsMTYyLjA4MTQ5NiBDMjU1LjkxMDI4LDE2MS40NDgyMDEgMjU2LjA2OTAzMywxNjAuNjk0MTI4IDI1NS45NjA4MTcsMTU5Ljk1NDQxNSBMMjU1Ljk2MDgxNywxNDcuNDA0NjQgQzI1NiwxMzguNDc2NDk4IDE5OC42OTc1NjcsMTMxLjIxMDgzOSAxMjguMDIyNTE0LDEzMS4yMTA4MzkgWiIgZmlsbD0iI0ZGRjA0RCI+PC9wYXRoPgoJCQkJPHBvbHlnb24gZmlsbD0iIzZFNkY3MCIgcG9pbnRzPSIxNTQuOTgwNDYyIDkzLjk0MjE0NyAxMjcuOTg4OTI5IDExMC41NTU3NjYgMTI3Ljk4ODkyOSAxMzIuMTM0NDQiPjwvcG9seWdvbj4KCQkJCTxwb2x5Z29uIGZpbGw9IiMwQTBBMEEiIHBvaW50cz0iMTI4LjAxNjkxNyAxMzIuMTM0NDQgMTI4LjAxNjkxNyAxMTAuNTU1NzY2IDEwMS4wMjUzODMgOTMuOTQyMTQ3Ij48L3BvbHlnb24+CgkJCQk8cG9seWdvbiBmaWxsPSIjMEEwQTBBIiBwb2ludHM9IjEwMS4wMjUzODMgODQuMDg0ODA3NiAxMDEuMDI1MzgzIDg0LjA4NDgwNzYgMTI4LjAxNjkxNyA5OS42OTA4NjIzIDEyOC4wMTY5MTcgNDAuNDI5Mjc2MyI+PC9wb2x5Z29uPgoJCQkJPHBvbHlnb24gZmlsbD0iIzZFNkY3MCIgcG9pbnRzPSIxNTQuOTgwNDYyIDg0LjA4NDgwNzYgMTI3Ljk4ODkyOSA0MC40MjM2Nzg3IDEyNy45ODg5MjkgNDAuNDIzNjc4NyAxMjcuOTg4OTI5IDY4LjQ3MzE1NTIgMTI3Ljk4ODkyOSA2OC40NzMxNTUyIDEyNy45ODg5MjkgOTkuNjg1MjY0OCAxNTQuOTgwNDYyIDg0LjA3OTIxIDE1NC45ODA0NjIgODQuMDc5MjEiPjwvcG9seWdvbj4KCQk8L2c+Cjwvc3ZnPgo=) */
export const HardhatColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-hardhat-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

HardhatColorful.displayName = 'HardhatColorful';