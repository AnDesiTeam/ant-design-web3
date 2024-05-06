// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/edg-circle-colorful.svg';

/**![EdgCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMyQjE1NDQiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yNC45OSAxMi41MDJ2Ni42NTZjMCAuMjk2LjAxNS41OTgtLjA1Mi44ODlhMy40NyAzLjQ3IDAgMCAxLTEuMDAyIDEuNzZjLS4yMzYuMjI3LS41My4zNzQtLjgxMS41NC0xLjkwNyAxLjExLTMuODA4IDIuMjIzLTUuNzE0IDMuMzM1LS41ODIuMzExLTEuMjcuMzY0LTEuOTE2LjI4NGEyLjYwOSAyLjYwOSAwIDAgMS0uOTYtLjMxNGMtMi4wMDctMS4xNy00LjAxNC0yLjM0My02LjAyLTMuNTEyLS40OS0uMjczLS44NTYtLjcyMy0xLjEyNS0xLjIwNy0uMjItLjQyLS4zODEtLjg4Mi0uMzgxLTEuMzYzdi03LjE4NmMuMDM3LS43LjM0Ny0xLjM2My43ODgtMS44OTJhMi40NyAyLjQ3IDAgMCAxIC42MzktLjU2NGMxLjg2NS0xLjA4NiAzLjczLTIuMTc2IDUuNTk0LTMuMjY2LjMwNy0uMTcuNTk4LS4zNzguOTMtLjQ5MmEzLjU2NCAzLjU2NCAwIDAgMSAxLjczNS0uMDk4Yy4yNTcuMDcyLjUxOS4xNDguNzUuMjg0IDIuMDMgMS4xOTEgNC4wNjMgMi4zNzMgNi4wOTIgMy41NjUuNTQxLjMyLjkzOC44NTUgMS4xOTYgMS40MjYuMTYzLjM2LjI1Ny43NTcuMjU3IDEuMTU1em0tOS4wNS0yLjQ3NmExMC42NzYgMTAuNjc2IDAgMCAxLTEuNDg3IDEuNzZjLS4yOTIuMjc3LS41NzMuNTc2LS43NC45NDctLjEzNC4yNjItLjIyNC41Ni0uMTg2Ljg2LjA0NS40MDQuMzMzLjc2LjcwNy45MDQuMzguMTUyLjgxLjExOCAxLjE4OC0uMDNhLjM5My4zOTMgMCAwIDEgLjIxNy0uMDNjLS4wNzQuNDc0LS4zNjIuODc0LS41OSAxLjI4M2wuMDEuMDY4Yy4yMDYuMjIuNDIzLjQyOC42MjguNjQ0LjA1Mi4wNDkuMS4xMTcuMTcyLjE0LjIzOS0uMTg1LjQyNi0uNDI4LjY0Ni0uNjMyLjA0OS0uMDU2LjE1LS4xMTcuMDk3LS4yMDQtLjIxMy0uNC0uNDQ5LS44MDUtLjUxNi0xLjI2Ny4wNC0uMDk0LjE1My0uMDE1LjIyLjAwOC4zNTUuMTc0Ljc4NC4yIDEuMTU1LjA1Ny41MDUtLjE5My44MTktLjc4NC43MDYtMS4zMTgtLjA4Ni0uNDgtLjM0LS45Mi0uNjg0LTEuMjU2LS41My0uNTQ1LTEuMDM5LTEuMTI3LTEuNDAxLTEuODAxYS4yMzUuMjM1IDAgMCAwLS4xNDItLjEzM3ptLTMuNjMzIDYuNTFjLS42LjMyNi0xLjAwMS45NjUtMS4xIDEuNjQ0LS4xMzcuOTUzLjQyIDEuOTQ5IDEuMjgzIDIuMzM5LjU0Ni4yMzUgMS4xOC4yMyAxLjczLjAxNS4yODQtLjExNC41MjctLjMuNzM2LS41MTkuMDc5LS4wODQuMTk0LS4xNTkuMTk0LS4yODgtLjAxLS4xMjktLjEyNi0uMi0uMjAxLS4yODgtLjA5OC0uMDg3LS4xNzYtLjItLjI4OC0uMjY5LS4xOC0uMDc5LS4yODguMTE4LS40MDQuMjE2LS40NTUuNDYyLTEuMjc0LjQ2Ni0xLjc0LjAxNWExLjI1NSAxLjI1NSAwIDAgMS0uMzc4LTEuMTJjLjA1Ni0uMzgzLjI4NC0uNzQ2LjYyNC0uOTI4LjIyLS4xMS40NjctLjE3LjcxLS4xNTkuMzQzLjAyMi42NTcuMjA0Ljg4OS40NTQuNzkyLjc4OCAxLjU1NCAxLjYwNSAyLjM0MyAyLjM5Ni40MTguNDEzLjk5Ny42NzggMS41ODcuNjU1LjQ1LjAxLjg4My0uMTcgMS4yNDktLjQyNC41MzktLjM3NS44NjctMS4wMjYuOS0xLjY4NC4wNzItMS4wNDItLjY4My0yLjA5My0xLjctMi4yOTQtLjY0OS0uMTMyLTEuMzgyLjAwNC0xLjg4Mi40NjYtLjM1Ni4zMjQtLjY4LjY4OC0xLjAzMiAxLjAyMS0uMzYzLS4yOTktLjY1LS42NzctMS4wMDUtLjk4M2ExLjc1IDEuNzUgMCAwIDAtLjUyLS4zNDFjLS4wMzYtLjAyMy0uMDQ4LS4wMzQtLjA5Ni0uMDUzYTIuMTAzIDIuMTAzIDAgMCAwLTEuODk5LjEyOXptNS4wMzcgMS4wNTJjLjI1OS0uMjU4LjYyNS0uNDA5Ljk5LS4zNzkuMzk2LjAxMS43OC4yMjMuOTkuNTY0LjMyOC41LjIzMiAxLjIxOS0uMTkgMS42MzEtLjQzNC40MjEtMS4xNzguNDc0LTEuNjQ1LjA3Ni0uMzQ3LS4yOTUtLjYzOC0uNjQ3LS45Ny0uOTU3LS4wMDQtLjAyMi0uMDA4LS4wNjQtLjAxMi0uMDgzLjI3Ny0uMjg4LjU2LS41NjQuODM3LS44NTJ6Ii8+PC9nPjwvc3ZnPg==) */
export const EdgCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-edg-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

EdgCircleColorful.displayName = 'EdgCircleColorful';