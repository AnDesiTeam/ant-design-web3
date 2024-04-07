// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/oeth-circle-colorful.svg';

/**![OethCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTUwLjUwMSAyOTkuNDk5QzIzMy4wNjcgMjk5LjIyMiAyOTkuNzc2IDIzMi4wNjUgMjk5LjQ5OSAxNDkuNDk5QzI5OS4yMjIgNjYuOTMzIDIzMi4wNjUgMC4yMjQzMDMgMTQ5LjQ5OSAwLjUwMDk4MkM2Ni45MzMgMC43Nzc2NjEgMC4yMjQyOTIgNjcuOTM0OSAwLjUwMDk3MSAxNTAuNTAxQzAuNzc3NjUgMjMzLjA2NyA2Ny45MzQ5IDI5OS43NzYgMTUwLjUwMSAyOTkuNDk5WiIgZmlsbD0iIzAwNzRGMCIvPgo8cGF0aCBvcGFjaXR5PSIwLjIiIGQ9Ik0yNDMuNDQ2IDI0Mi44NDhDMjk0LjcwNSAxOTEuMjQ3IDI5NC40NDkgMTA3LjgxMSAyNDIuODQ3IDU2LjU1MTlDMTkxLjI0NSA1LjI5MjY2IDEwNy44MSA1LjU0OTM4IDU2LjU1MDggNTcuMTUwOUwyNDMuNDQ2IDI0Mi44NDhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTQzLjg5NSA5MC45NTVDMTQ1LjkwMiA5MC43NDk5IDE0Ny45MzkgOTAuNjQ0OCAxNTAgOTAuNjQ0OEMxODIuNzY5IDkwLjY0NDggMjA5LjMzMyAxMTcuMjA5IDIwOS4zMzMgMTQ5Ljk3OEMyMDkuMzMzIDE3NS41MzEgMTkzLjE4IDE5Ny4zMTIgMTcwLjUyNyAyMDUuNjY1TDE1MC4zOTUgMjMzLjk3N0MxOTYuNjA1IDIzMy43NjQgMjM0IDE5Ni4yMzggMjM0IDE0OS45NzhDMjM0IDEwNi41MzkgMjAxLjAyNyA3MC44MDE3IDE1OC43NDUgNjYuNDI3OUwxNDMuODk1IDkwLjk1NVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNDguMDk0IDY1Ljk5OTNDMTAyLjU4MiA2Ny4wMTI2IDY2IDEwNC4yMjMgNjYgMTQ5Ljk3OEM2NiAxOTIuNzg0IDk4LjAxODUgMjI4LjExMSAxMzkuNDEyIDIzMy4zMTdMMTU2Ljc1MiAyMDguOTMxQzE1NC41MzYgMjA5LjE4MiAxNTIuMjgzIDIwOS4zMTEgMTUwIDIwOS4zMTFDMTE3LjIzMSAyMDkuMzExIDkwLjY2NjcgMTgyLjc0NyA5MC42NjY3IDE0OS45NzhDOTAuNjY2NyAxMjMuNzE5IDEwNy43MjUgMTAxLjQ0NCAxMzEuMzY1IDkzLjYzMDJMMTQ4LjA5NCA2NS45OTkzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE3MC41MjggMjA1LjY2NUMxOTMuMTgxIDE5Ny4zMTIgMjA5LjMzNSAxNzUuNTMyIDIwOS4zMzUgMTQ5Ljk3OUgyMzQuMDAxQzIzNC4wMDEgMTk2LjIzOSAxOTYuNjA3IDIzMy43NjUgMTUwLjM5NiAyMzMuOTc4TDE3MC41MjggMjA1LjY2NVoiIGZpbGw9InVybCgjYW50LXdlYjMtaWNvbi1vZXRoLWNpcmNsZS1jb2xvcmZ1bC1wYWludDBfbGluZWFyXzQzMl85OTgpIi8+CjxwYXRoIGQ9Ik0xNDguMDk0IDY1Ljk5OTNDMTAyLjU4MiA2Ny4wMTI2IDY2IDEwNC4yMjMgNjYgMTQ5Ljk3OEM2NiAxNDkuOTc4IDkwLjY2NjcgMTUwLjMzMyA5MC42NjY3IDE0OS45NzhDOTAuNjY2NyAxMjMuNzE5IDEwNy43MjUgMTAxLjQ0NCAxMzEuMzY1IDkzLjYzMDJMMTQ4LjA5NCA2NS45OTkzWiIgZmlsbD0idXJsKCNhbnQtd2ViMy1pY29uLW9ldGgtY2lyY2xlLWNvbG9yZnVsLXBhaW50MV9saW5lYXJfNDMyXzk5OCkiLz4KPHBhdGggZD0iTTE0OS44NDkgMjE4LjY0NkwxOTIuMDI3IDE1OS4yNTFMMTQ5Ljg0OSAxODQuMTQyTDEwNy42OTUgMTU5LjI1MUwxNDkuODQ5IDIxOC42NDZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBvcGFjaXR5PSIwLjEiIGQ9Ik0xNDkuODUgMjE4LjY0NkwxOTIuMDI3IDE1OS4yNTFMMTQ5Ljg1IDE4NC4xNDJWMjE4LjY0NloiIGZpbGw9IiMwMDc0RjAiLz4KPHBhdGggZD0iTTE0OS43MjEgMTc2LjI1OUwxOTIuMTA3IDE1MS4zMjNMMTQ5LjcyMSA4MS4zMTMxTDEwNy4zMzQgMTUxLjMyM0wxNDkuNzIxIDE3Ni4yNTlaIiBmaWxsPSJ1cmwoI2FudC13ZWIzLWljb24tb2V0aC1jaXJjbGUtY29sb3JmdWwtcGFpbnQyX2xpbmVhcl80MzJfOTk4KSIvPgo8cGF0aCBkPSJNMTQ5LjcyMSAxNzYuMjU5TDE5Mi4xMDcgMTUxLjMyM0wxNDkuNzIxIDgxLjMxMzFMMTA3LjMzNCAxNTEuMzIzTDE0OS43MjEgMTc2LjI1OVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIG9wYWNpdHk9IjAuMSIgZD0iTTE0OS43MjEgMTc2LjI1N0wxMDcuMzM0IDE1MS4zMjNMMTQ5LjcyMSA4MS4zMTMxTDE0OS43MjEgMTc2LjI1N1oiIGZpbGw9IiMwMDc0RjAiLz4KPHBhdGggb3BhY2l0eT0iMC4xIiBkPSJNMTQ5LjcyMSAxNzYuMjZWMTMxLjQ1MUwxMDcuMzM0IDE1MS4zMjNMMTQ5LjcyMSAxNzYuMjZaIiBmaWxsPSIjMDA3NEYwIi8+CjxwYXRoIG9wYWNpdHk9IjAuMSIgZD0iTTE0OS43MjEgMTc2LjI2VjEzMS40NTFMMTkyLjEwNyAxNTEuMzIzTDE0OS43MjEgMTc2LjI2WiIgZmlsbD0iIzAwNzRGMCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLW9ldGgtY2lyY2xlLWNvbG9yZnVsLXBhaW50MF9saW5lYXJfNDMyXzk5OCIgeDE9Ijk0LjY5NjEiIHkxPSIyNTUuMjI4IiB4Mj0iMTg3LjIwNyIgeTI9IjE5NC42MjkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzFBODJGRiIgc3RvcC1vcGFjaXR5PSIwLjUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImFudC13ZWIzLWljb24tb2V0aC1jaXJjbGUtY29sb3JmdWwtcGFpbnQxX2xpbmVhcl80MzJfOTk4IiB4MT0iMTk1LjMzMyIgeTE9IjI3LjMzNCIgeDI9IjEwNi44MTkiIHkyPSI5MS4yODg2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxQTgyRkYiIHN0b3Atb3BhY2l0eT0iMC41Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLW9ldGgtY2lyY2xlLWNvbG9yZnVsLXBhaW50Ml9saW5lYXJfNDMyXzk5OCIgeDE9IjU5LjU0NCIgeTE9IjEwNi42NjUiIHgyPSIxMzMuODAyIiB5Mj0iMTUxLjk4MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMUMzMTNGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K) */
export const OethCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-oeth-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

OethCircleColorful.displayName = 'OethCircleColorful';
