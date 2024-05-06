// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/grc-circle-colorful.svg';

/**![GrcCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSIjNTQxMUIzIi8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE2LjA1MyA1Yy41My4zMTkgMS4wNTYuNjQ1IDEuNTkuOTU2IDIuNTM1IDEuNDcgNS4wNyAyLjkzOCA3LjYwOCA0LjQwMi4xNjcuMDk2LjI0MS4yMDMuMjQxLjQwOC0uMDA1IDMuNDkyLS4wMDQgNi45ODQuMDA4IDEwLjQ3NiAwIC4yMjgtLjEwNC4zMjMtLjI3LjQxOS0zLjAxNyAxLjc0Ni02LjAzMiAzLjQ5NS05LjA0NyA1LjI0NC0uMDQ2LjAyNy0uMDg3LjA2My0uMTMuMDk1aC0uMTFjLS45MS0uNTM2LTEuODItMS4wNzctMi43MzMtMS42MDgtMi4xNTQtMS4yNTEtNC4zMS0yLjUtNi40NjgtMy43NDMtLjE4My0uMTA1LS4yNDMtLjIyNS0uMjQyLS40MzUuMDEtMy40NjQuMDEyLTYuOTI4LjAwNS0xMC4zOTMgMC0uMjQ4LjA4NS0uMzczLjI4OS0uNDkgMi45ODktMS43MjQgNS45NzMtMy40NTQgOC45NTgtNS4xODQuMDY5LS4wNC4xMjgtLjA5OC4xOTEtLjE0N2guMTF6bTIuODA2IDE3LjQ4Yy40MTMuMjgzLjgxNy41OCAxLjIzMy44OC4wMjMtLjAxLjA1Ny0uMDI0LjA4OC0uMDQxIDEuMzUtLjc4MSAyLjcwMy0xLjU2IDQuMDQ5LTIuMzUuMDgtLjA0Ny4xNS0uMTg1LjE1LS4yOC4wMDctMy4xMjYuMDA2LTYuMjUxLS4wMDMtOS4zNzZhLjM3Ny4zNzcgMCAwIDAtLjE1Ni0uMjc1Yy0xLjMzLS43ODItMi42NjctMS41NS0zLjk5OC0yLjMyOS0uMTM4LS4wOC0uMjE1LS4wNTYtLjMzMi4wMzUtLjMyMy4yNTMtMy40OTkgMi4xOTMtNC43NDMgMi45NC0uOTcyLjU4Mi0xLjkyMiAxLjE5Ni0yLjY3NCAyLjA3LTEuMDM3IDEuMjA1LTEuMTM0IDIuODc1LS4yMjcgNC4xODUuNDQ5LjY1IDEuMDQ4IDEuMTQ0IDEuNjkgMS41ODMuNTEyLjM0OSAxLjA0LjY3MyAxLjU2IDEuMDA4LS4wMTQuMDItLjAyMi4wNC0uMDM2LjA0OC0uNjg2LjM5OC0xLjM3LjgtMi4wNjQgMS4xODctLjA2Ny4wMzctLjIwNiAwLS4yODItLjA0OGExMC43NjUgMTAuNzY1IDAgMCAxLTIuMDE0LTEuNjhjLTEuNzMtMS44MTQtMi4wODItNC43ODctLjgyLTYuOTU2YTcuMzggNy4zOCAwIDAgMSAyLjM2LTIuNDgxYzEuMjYtLjgyNCA0Ljc3LTIuOTA3IDUuMjM1LTMuMTkyLS4wNC0uMDUyLS4wNTEtLjA4LS4wNzItLjA5My0uNTUyLS4zMjItMS4xLS42NS0xLjY2LS45NTctLjA4Mi0uMDQ1LS4yMzEtLjAyOC0uMzIuMDE4LS4zMDguMTU5LS42MDMuMzQyLS45MDIuNTE3LS4yNjQuMTU0LS41MjcuMzEtLjgzLjQ4OWwxLjQzOC45MDRjLS43MzUuNDM0LTEuNDMuODUtMi4xMzMgMS4yNTMtLjA1Ni4wMzItLjE3Ni4wMDctLjIzNy0uMDM1YTE3LjM4IDE3LjM4IDAgMCAxLTEuMDE4LS43NGMtLjE0NS0uMTE1LS4yNDEtLjEyNi0uNDAzLS4wMzFhNDg4LjA2IDQ4OC4wNiAwIDAgMS0zLjkzNCAyLjI3NmMtLjE0NS4wODMtLjE5Mi4xOC0uMTkyLjM0OC4wMDUgMy4wOTguMDA0IDYuMTk2LS4wMDEgOS4yOTMgMCAuMTY2LjA0My4yNjQuMTkyLjM1IDEuMzA2Ljc0OCAyLjYwOCAxLjUwNCAzLjkwNyAyLjI2NS4xNDQuMDg1LjI0LjA4MS4zODUtLjAxNi45MzItLjYyMyA1LjE5Ni0zLjI5NiA2LjM4MS00LjAzMy4yMDEtLjEyNS4zNy0uMzA0LjU1Mi0uNDU4bC0uMDMtLjA3aC00LjQyNmMuNDUtLjc4Mi44Ny0xLjUyIDEuMzA1LTIuMjQ5LjA0LS4wNjYuMTg3LS4wOTQuMjg1LS4wOTQgMi4wMDctLjAwNSA0LjAxNS0uMDAzIDYuMDIyLS4wMDMuMDggMCAuMTYuMDA5LjI1Ny4wMTQuMDA1LjA5NS4wMjcuMTguMDA5LjI1NC0uMTMyLjU0OS0uMjIgMS4xMTYtLjQyIDEuNjQtLjQ3NCAxLjI0Ni0xLjM1MyAyLjIwNC0yLjQyNCAyLjk0Mi0xLjE3LjgwNS00Ljg5NSAzLTUuNTI3IDMuMzc3LjAzLjA1My4wMzQuMDc1LjA0Ny4wODMuMzg1LjIyNy43OTguNDE3IDEuMTQ5LjY4OS41MDUuMzkuOTQ1LjM4OCAxLjQ1IDAgLjM2NC0uMjc5Ljc5LS40NzYgMS4yMzEtLjczNWwtMS40NjQtLjkxNWMuMDQtLjAzNS4wNjMtLjA2My4wOTItLjA4LjY3LS4zODkgMS4zNC0uNzggMi4wMTYtMS4xNi4wNjQtLjAzNS4xOTQtLjAxNi4yNTkuMDI5em0yLjg5NC05LjMzN2MuMzQ1LjYxMi42MDIgMS4zOTkuNjQgMi4wMDYtLjY3OCAwLTEuMzMyLjAwNC0xLjk4Ny0uMDA1LS4wNi0uMDAxLS4xNTQtLjA3LS4xNzMtLjEyOC0uMzItLjk4OC0xLjAwMy0xLjY5LTEuODEtMi4yOC0uNTczLS40MTktMS4xODMtLjc4OC0xLjc3Ni0xLjE4LS4wNS0uMDMyLS4wOTktLjA2Ny0uMTgtLjEyMy4xMzUtLjA4MS4yNC0uMTQ2LjM0OC0uMjA5LjU1Mi0uMzIgMS4xLS42NDcgMS42Ni0uOTU1LjEtLjA1Ni4yOC0uMDkuMzYxLS4wMzcgMS4xNy43NjkgMi4yMTUgMS42NjcgMi45MTcgMi45MTF6Ii8+PC9nPjwvc3ZnPg==) */
export const GrcCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-grc-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

GrcCircleColorful.displayName = 'GrcCircleColorful';