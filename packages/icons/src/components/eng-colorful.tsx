// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/eng-colorful.svg';

/**![EngColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIxODcgMjUwMCI+PHBhdGggZmlsbD0iI2VhMjU5ZSIgZD0iTTEwOTUgNjQybDUwOSAzMDctNTA5IDI5MS01MzItMjkxeiIvPjxwYXRoIGZpbGw9IiMwMTRjOTkiIGQ9Ik01NjMgOTYwbDUzMiAyOTAtMyA1OTItNTI5LTI4MHoiLz48cGF0aCBmaWxsPSIjMDhiMGY5IiBkPSJNMTA5NSAxMjUwbDUxNS0yOTAgMTUgNjAyLTUyMyAyOTF6Ii8+PGcgZmlsbD0iIzJmMmYyZiI+PHBhdGggZD0iTTIxNTMgNjA1bC04LTUtNTA4LTI5MUwxMTA1IDRsLTctNC02IDNhMjAzIDIwMyAwIDAgMC0yOSAxM0w1OTkgMjg3IDI1IDYyM0MxIDYzNCAyIDY1OSAyIDY3NHYxMWwtMSA4NTItMSAzMTZjLTEgMTkgNyAzNiAyMSA0Mmw2NjAgMzc1IDM5MCAyMjJjOCA1IDE3IDggMjUgOGEyOSAyOSAwIDAgMCAxOS02bDU2NC0zMjUgNDgwLTI3NmMxOC04IDI5LTI2IDI2LTQzbDItMTE5N2MzLTI4LTIwLTQxLTM0LTQ4bS0xMDU5IDc2bDQ2NSAyNzAtNDY0IDI2Ny0xNTgtODktMzEyLTE3NyA0NjktMjcxbTUyOCAyMzNsLTUwNC0yOTNhNDAgNDAgMCAwIDAtNDYtMUw1NjIgOTE2IDk4IDY1M2wzMjQtMTg5IDY3My0zOTMgNjE5IDM1NSAzNzggMjE3LTQ3MCAyNzFNNjYgNzA4bDQ2MiAyNjIgOSA1NzZjLTEgMTggOCAzNCAyMiA0MWwzMDcgMTc2IDE5NyAxMTN2NTM5TDY0IDE4NDd6bTUyNiAyOThsNDcyIDI2Ny0xIDUzMC00NjItMjY1em01MzUgODcxbDE5Ny0xMTQgMzA0LTE3NCAzLTJjNi0zIDEzLTggMTgtMTVsMy00di01bC0xLTM4MlY5NzFsNDcyLTI3M3Y0NjVsLTEgNjc4LTYzMyAzNjQtMzYzIDIwOSAxLTUzN20wLTczdi01MzFsNDY1LTI2OHY1MzJsLTQ2NSAyNjciLz48cGF0aCBkPSJNMTA4MSAxMzNjLTE0IDItMjYgMTEtMzIgMjMtNiAxNC01IDI5IDIgMzkgOCAxMiAyMSAxOSAzNiAxOWE3MyA3MyAwIDAgMCA4LTFjMTctMiAzMC0xNCAzMy0yOWEzOCAzOCAwIDAgMC05LTM4IDQxIDQxIDAgMCAwLTM4LTEzbTI3IDE3NWMtMTUtOC0zMi03LTQ0IDEtMTEgNi0xOCAxOC0yMCAzMS0xIDE0IDUgMjYgMTMgMzNhNDAgNDAgMCAwIDAgMjkgMTEgNDYgNDYgMCAwIDAgMTgtNGMxNi02IDI1LTIxIDI1LTM2IDEtMTQtOC0yOC0yMS0zNm0xIDE3MmMtMTQtOS0zMS05LTQ0LTItMTIgNi0yMCAxOC0yMSAzMnM1IDI5IDE2IDM2YTQxIDQxIDAgMCAwIDI2IDggNDYgNDYgMCAwIDAgMTgtNCAzOSAzOSAwIDAgMCA1LTcwTTQzMCAxNjAxYy0xNSA0LTI2IDE2LTI5IDMxLTMgMTYgMiAzMSAxMyA0MGEzNyAzNyAwIDAgMCAyNSA5IDM5IDM5IDAgMCAwIDktMWMxMy0zIDI0LTEyIDI4LTIzIDctMTQgNS0zMS03LTQ0YTM3IDM3IDAgMCAwLTM5LTEybTEyOTIgODFhMzUgMzUgMCAwIDAgMTAtMmMxMy0zIDI0LTEyIDI3LTIyIDctMTUgNC0zMy03LTQ2YTM5IDM5IDAgMCAwLTQxLTExYy0xNCA0LTI1IDE2LTI4IDMxLTMgMTYgMyAzMSAxNCA0MCA2IDcgMTUgMTAgMjUgMTBtLTE0MzggNWMtMTUgNS0yNSAxOS0yNiAzNS0yIDE3IDYgMzMgMTkgNDBhMzggMzggMCAwIDAgMjAgNiA0MiA0MiAwIDAgMCAxNy00YzEzLTYgMjItMTggMjMtMjkgMy0xNS0zLTMxLTE1LTQxYTM2IDM2IDAgMCAwLTM4LTdtMTU4MCA4MGEzOSAzOSAwIDAgMCAxNC0yYzE0LTUgMjQtMTcgMjUtMjkgNC0xNSAwLTMwLTEyLTQxYTM4IDM4IDAgMCAwLTQwLTggNDMgNDMgMCAwIDAtMTIgNzIgNDAgNDAgMCAwIDAgMjUgOG0tMTY5MCA5Yy0xMi03LTI3LTctMzggMC0xMyA3LTIxIDIwLTIxIDM2czggMzAgMjEgMzZhMzUgMzUgMCAwIDAgMTggNSA0MSA0MSAwIDAgMCAyMi02YzEzLTkgMjAtMjQgMTktMzcgMC0xNC04LTI3LTIxLTM1bTE4MDkgNjlhMzYgMzYgMCAwIDAgMjQgOSAzOSAzOSAwIDAgMCAxNS0zYzE0LTYgMjQtMjAgMjUtMzIgMy0xNi00LTMyLTE4LTQxLTEzLTktMjktOS00MS0xYTQyIDQyIDAgMCAwLTIwIDM0Yy0xIDE0IDUgMjcgMTUgMzQiLz48L2c+PC9zdmc+) */
export const EngColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-eng-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

EngColorful.displayName = 'EngColorful';
