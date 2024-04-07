// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/wallet-connect-colorful.svg';

/**![WalletConnectColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzEyLjAwMDAwMCwgLTExNjUuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3MTIuMDAwMDAwLCAxMTY1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTIxNy4zMTEzMDUsMzMxLjU3NDExMyBDMzgwLjA2MzY1LDE3Mi4xNDE5NjIgNjQzLjkzNzMzOSwxNzIuMTQxOTYyIDgwNi42ODk2NzcsMzMxLjU3NDExMyBMODI2LjI3NzE4NSwzNTAuNzYyMDI3IEM4MzQuNDE0ODAxLDM1OC43MzM2MzQgODM0LjQxNDgwMSwzNzEuNjU4MTY0IDgyNi4yNzcxODUsMzc5LjYyOTc3NSBMNzU5LjI3MjIzMSw0NDUuMjY3ODA4IEM3NTUuMjAzNDIxLDQ0OS4yNTM2MTUgNzQ4LjYwNjU3OSw0NDkuMjUzNjE1IDc0NC41Mzc3NjksNDQ1LjI2NzgwOCBMNzE3LjU4MzAzNSw0MTguODYyOTU1IEM2MDQuMDQyOTMyLDMwNy42MzkxMDIgNDE5Ljk1ODA1MywzMDcuNjM5MTAyIDMwNi40MTc5NDgsNDE4Ljg2Mjk1NSBMMjc3LjU1MTY1NCw0NDcuMTQwMzc0IEMyNzMuNDgyODQzLDQ1MS4xMjYxNzggMjY2Ljg4NTk5OSw0NTEuMTI2MTc4IDI2Mi44MTcxOTQsNDQ3LjE0MDM3NCBMMTk1LjgxMjI0LDM4MS41MDIzNDEgQzE4Ny42NzQ2MjMsMzczLjUzMDczIDE4Ny42NzQ2MjMsMzYwLjYwNjIgMTk1LjgxMjI0LDM1Mi42MzQ1OTMgTDIxNy4zMTEzMDUsMzMxLjU3NDExMyBaIE05NDUuMjYyMjUsNDY3LjMyMDUwNiBMMTAwNC44OTY3OSw1MjUuNzM4Njg2IEMxMDEzLjAzNDM2LDUzMy43MTAyNTYgMTAxMy4wMzQ0MSw1NDYuNjM0NzA5IDEwMDQuODk2ODksNTU0LjYwNjMzMiBMNzM2LjAwMDYzOSw4MTguMDIxMTQ5IEM3MjcuODYzMDc5LDgyNS45OTI4MTUgNzE0LjY2OTM5NSw4MjUuOTkyOTA1IDcwNi41MzE3MjIsODE4LjAyMTM1NSBDNzA2LjUzMTY4OCw4MTguMDIxMzIyIDcwNi41MzE2NDgsODE4LjAyMTI4MiA3MDYuNTMxNjE1LDgxOC4wMjEyNDkgTDUxNS42ODU0MTUsNjMxLjA2ODA4NSBDNTEzLjY1MTAxMiw2MjkuMDc1MTg0IDUxMC4zNTI1ODksNjI5LjA3NTE4NCA1MDguMzE4MTg2LDYzMS4wNjgwODUgQzUwOC4zMTgxNzIsNjMxLjA2ODA5OSA1MDguMzE4MTYyLDYzMS4wNjgxMTIgNTA4LjMxODE0OSw2MzEuMDY4MTIyIEwzMTcuNDc2MDE0LDgxOC4wMjExNDkgQzMwOS4zMzg0NzgsODI1Ljk5MjgzNSAyOTYuMTQ0NzkyLDgyNS45OTI5NjkgMjg4LjAwNzA5Myw4MTguMDIxNDM5IEMyODguMDA3MDQ2LDgxOC4wMjEzOTIgMjg4LjAwNjk5NSw4MTguMDIxMzQ1IDI4OC4wMDY5NDQsODE4LjAyMTI5MiBMMTkuMTAzMjEwNSw1NTQuNjAyOTc2IEMxMC45NjU1OTY1LDU0Ni42MzEzNyAxMC45NjU1OTY1LDUzMy43MDY4MzggMTkuMTAzMjEwNSw1MjUuNzM1MjMxIEw3OC43Mzc4NTYyLDQ2Ny4zMTcxNSBDODYuODc1NDcwMSw0NTkuMzQ1NTQzIDEwMC4wNjkxNTYsNDU5LjM0NTU0MyAxMDguMjA2Nzc0LDQ2Ny4zMTcxNSBMMjk5LjA1NTc1MSw2NTQuMjcyOTI3IEMzMDEuMDkwMTU3LDY1Ni4yNjU4MjggMzA0LjM4ODU3NCw2NTYuMjY1ODI4IDMwNi40MjI5OCw2NTQuMjcyOTI3IEMzMDYuNDIzMDEsNjU0LjI3Mjg5NyAzMDYuNDIzMDM3LDY1NC4yNzI4NyAzMDYuNDIzMDY4LDY1NC4yNzI4NDcgTDQ5Ny4yNjI0OCw0NjcuMzE3MTUgQzUwNS4zOTk5MSw0NTkuMzQ1MzU5IDUxOC41OTM1OTgsNDU5LjM0NTA2IDUyNi43MzE0MDEsNDY3LjMxNjQ4NCBDNTI2LjczMTUxNCw0NjcuMzE2NTk2IDUyNi43MzE2MjcsNDY3LjMxNjcwOCA1MjYuNzMxNzM3LDQ2Ny4zMTY4MiBMNzE3LjU4MDQ2Miw2NTQuMjcyODQ3IEM3MTkuNjE0ODY2LDY1Ni4yNjU3NDUgNzIyLjkxMzI4OCw2NTYuMjY1NzQ1IDcyNC45NDc2OTIsNjU0LjI3Mjg0NyBMOTE1Ljc5MzMzMyw0NjcuMzIwNTA2IEM5MjMuOTMwOTQ5LDQ1OS4zNDg4OTYgOTM3LjEyNDYzMyw0NTkuMzQ4ODk2IDk0NS4yNjIyNSw0NjcuMzIwNTA2IEw5NDUuMjYyMjUsNDY3LjMyMDUwNiBaIiBmaWxsPSIjM0I5OUZDIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==) */
export const WalletConnectColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>(
  (props, ref) => {
    const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('web3-icon-wallet-connect-colorful');

    return (
      <AntdIcon
        {...props}
        className={classnames(prefixCls, props.className)}
        ref={ref}
        component={SVGComponent}
      />
    );
  },
);

WalletConnectColorful.displayName = 'WalletConnectColorful';
