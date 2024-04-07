// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/exp-circle-colorful.svg';

/**![ExpCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSIjRkZBQTVDIi8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI2IDE0LjcxN2MtLjAwNC4wMzktLjAxLjA3Ny0uMDEuMTE2LS4wMDUgMS4yMi0uMDEgMi40NDEtLjAxMiAzLjY2MmwtLjAwNCAyLjUwN2MwIC4wOC0uMDA3LjE2LS4wMTIuMjYtLjA0NC0uMDItLjA3Ni0uMDMzLS4xMDYtLjA1bC00LjY1NC0yLjU5NWMtLjA4My0uMDQ2LS4wOS0uMDg3LS4wNS0uMTY5Ljc5My0xLjYyOC43OTYtMy4yNi4wMTUtNC44OTItLjAzNy0uMDc4LS4wMy0uMTE3LjA1LS4xNjFsNC42NTYtMi42MTNjLjAzOS0uMDIyLjA4NC0uMDMzLjEyNy0uMDQ5djMuOTg0ek0xNi4zIDVjLjA3OC4wNDcuMTU1LjA5Ny4yMzUuMTQybDkuMDQ5IDUuMDg1Yy4wMzQuMDE5LjA2Ni4wNC4xMTMuMDY4LS4wNDIuMDI3LS4wNy4wNDctLjEwMS4wNjRsLTQuNjE4IDIuNTc5Yy0uMTIxLjA2Ny0uMTIuMDY2LS4yLS4wNDgtMS4wMjQtMS40MzUtMi40MjgtMi4yNTUtNC4yMTItMi40NjNhMS4zIDEuMyAwIDAgMC0uMTYtLjAxYy0uMDk0IDAtLjEzLS4wMzYtLjEzLS4xMzUtLjAwMS0xLjAxMy0uMDA3LTIuMDI3LS4wMS0zLjA0bC0uMDAzLTIuMDk5YzAtLjA0OC4wMTEtLjA5NS4wMTctLjE0M2guMDJ6bS0uNjIgMjJjLS4wMzQtLjAyNS0uMDY1LS4wNTMtLjEtLjA3M2wtOS4xMTctNS4xMjVjLS4wNDMtLjAyNC0uMDg0LS4wNS0uMTQzLS4wODQuMDQtLjAyNy4wNjYtLjA0OC4wOTYtLjA2NSAxLjUzLS44NTUgMy4wNi0xLjcwOSA0LjU5LTIuNTY2LjA5Mi0uMDUyLjEzNS0uMDMyLjE5Mi4wNDcuOTU2IDEuMzI2IDIuMjYyIDIuMTEgMy45MDEgMi4zNzcuMTY3LjAyNy4zMzguMDQuNTA3LjA0OC4wOTYuMDA0LjEzNC4wMy4xMzQuMTMtLjAwMS44OTcuMDAzIDEuNzk0LjAwNiAyLjY5bC4wMDUgMi41NDZjMCAuMDI1LS4wMDcuMDUtLjAxMS4wNzVoLS4wNnpNNiAyMC40NWMuMDA1LS4wMy4wMTUtLjA2MS4wMTYtLjA5MmwuMDA0LTEuMjYzLjAwNy0yLjgyNy4wMTMtNC40NTkuMDA1LS45NjFjMC0uMDI4LjAwNC0uMDU2LjAwNy0uMTAxLjA0NC4wMjEuMDc2LjAzNC4xMDYuMDUxIDEuNTIyLjg1IDMuMDQzIDEuNyA0LjU2NyAyLjU0OC4wODkuMDQ5LjEwMS4wODcuMDU3LjE4LS44IDEuNjQxLS43OTYgMy4yODQgMCA0LjkyNy4wNjUuMTMyLjA2Ny4xMzEtLjA2My4yMDQtMS41MjguODYtMy4wNTYgMS43MTgtNC41ODUgMi41NzUtLjAzOS4wMjItLjA5LjAyNC0uMTM0LjAzNXYtLjgxNnptMTMuNDczLS45M2MuMTYzLS41NzMuMjE2LTEuMTUuMTgtMS43MzYtLjA0Mi0uNzE4LS4yMi0xLjQtLjU5NC0yLjAyNi0uNDMtLjcyMi0xLjA1Mi0xLjI0NS0xLjgxLTEuNjI1LS4yLS4xMDEtLjIyMi0uMDUtLjEwMy0uMy4yNjktLjU2My43NC0uOTEzIDEuMzItMS4xMzdhNC4xMSA0LjExIDAgMCAxIDEuMjU4LS4yNDYuMjM2LjIzNiAwIDAgMSAuMTYuMDcyIDQuOTk0IDQuOTk0IDAgMCAxIDEuMzM4IDIuNzM5Yy4zODMgMi42MDctMS4zMTYgNS4wNTQtMy45NTQgNS43MDItMi45MjcuNzItNS44OTYtMS4wODItNi41MDQtMy45NDQtLjU2OC0yLjY3OSAxLjE0OC01LjI3IDMuNzA4LTUuOTU0IDEuOTIzLS41MTMgMy42MjktLjEwNCA1LjEyMiAxLjE3bC4xNjkuMTQ0LS4wMjEuMDMyYy0uMTQ3LS4wMTgtLjI5My0uMDQtLjQ0LS4wNTQtLjkxMy0uMDg2LTEuODExLS4wMjYtMi42ODIuMjczYTQuNDY1IDQuNDY1IDAgMCAwLTIuNTA4IDIuMDg1Yy0uMDguMTQyLS4wODYuMTQzLS4yNC4wOWExLjMxIDEuMzEgMCAwIDEtLjUxOS0uMzM3IDIuNzQ3IDIuNzQ3IDAgMCAxLS42MjktMS4wMzljLS4xMTctLjM0LS4yMDMtLjY5LS4zMDMtMS4wMzUtLjAwOC0uMDI3LS4wMTQtLjA1NS0uMDM4LS4wODQtLjAxNC4wOC0uMDMuMTU4LS4wNDIuMjM4LS4wMTIuMDgtLjAyMi4xNi0uMDMuMjQtLjA5NS44OTQtLjA0NCAxLjc3NC4yNjUgMi42MjcuMzg0IDEuMDY0IDEuMTA3IDEuODMgMi4xNjMgMi4yOTYuMTM4LjA2MS4xMzguMDYyLjA2NC4xODgtLjM5MS42NjQtMS4wMDQuOTk4LTEuNzYxIDEuMTEyLS4zNTIuMDUzLS43MDQuMDMyLTEuMDYzLjAwNi4wMzMuMDEzLjA2NS4wMjguMDk4LjA0IDEuNzMuNTk1IDMuNjMuMzI4IDUuMDYxLTEuMTg2YTYuOTMgNi45MyAwIDAgMCAuOTM4LTEuMjY3Yy4wNjgtLjExOC4wNzMtLjExOS4xODMtLjAzOS40NjkuMzQyLjc0OC44MS45NCAxLjMzNS4xNzkuNDgzLjI1Ljk4NS4yNjcgMS40OTYuMDAxLjA0MS4wMDQuMDgyLjAwNy4xMjN6bTYuMjY4IDIuMjEybC05LjQ2MyA1LjI0OWMtLjAwNS0uMDU1LS4wMTItLjA4OS0uMDEyLS4xMjIgMC0xLjczIDAtMy40Ni0uMDAyLTUuMTkgMC0uMDc3LjAyMy0uMTA1LjEwNi0uMTEyIDEuODQtLjE1MiAzLjI5OS0uOTU4IDQuMzctMi40MjMuMDkzLS4xMjkuMDkyLS4xMy4yMy0uMDUzbDQuNjQzIDIuNTc1Yy4wMzYuMDIuMDcyLjA0My4xMjguMDc2ek0xNS43MzkgNS4wMzZjLjAwMy4wNTYuMDA2LjA5LjAwNi4xMjQgMCAxLjcwNyAwIDMuNDE0LjAwMiA1LjEyIDAgLjA4LS4wMTIuMTItLjExLjEyNy0xLjg3OC4xMzYtMy4zNjMuOTQ5LTQuNDUxIDIuNDQzLS4wODYuMTE4LS4wODQuMTE5LS4yMS4wNDlsLTQuNTIxLTIuNTFjLS4wNTMtLjAzLS4xMDItLjA2Ni0uMTUzLS4xLjA1Mi0uMDM2LjEtLjA3Ny4xNTYtLjEwOGw5LjExLTUuMDU2Yy4wNTEtLjAyOC4xMDMtLjA1My4xNy0uMDg5eiIvPjwvZz48L3N2Zz4=) */
export const ExpCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-exp-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

ExpCircleColorful.displayName = 'ExpCircleColorful';
