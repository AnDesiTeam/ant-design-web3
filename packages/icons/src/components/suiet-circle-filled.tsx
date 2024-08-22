// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/suiet-circle-filled.svg';

/**![SuietCircleFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMjQiIGhlaWdodD0iMTAyNCI+CiAgPGNpcmNsZSBjeD0iNTEyIiBjeT0iNTEyIiByPSI1MTIiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgogIDxnIGZpbGw9JyNmZmYnPgogICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNzU3LjU4MiA2NTQuMjI5Yy01MS45OTggMC05OS45OTYtNTIuMDc5LTEyNC43OTUtODQuMTI3LTI0LjggMzIuMDQ4LTcyLjc5OCA4NC4xMjctMTI0Ljc5NyA4NC4xMjdzLTk5Ljk5Ni01Mi4wNzktMTI0Ljc5NS04NC4xMjdDMzU5Ljk5NSA2MDIuMTUgMzExLjk5NyA2NTQuMjMgMjYwIDY1NC4yM2MtMTEuMiAwLTIwLTguODEzLTIwLTIwLjAzczguOC0yMC4wMzEgMjAtMjAuMDMxYzQxLjU5OCAwIDkyLjc5Ny02Ni41IDEwNy4xOTUtODkuNzM0IDQtNS42MSAxMC40LTkuNjE2IDE2LjgtOS42MTZzMTMuNiAzLjIwNCAxNi44IDkuNjE2YzE0LjM5OSAyMy4yMzMgNjUuNTk3IDg5LjczNCAxMDcuMTk1IDg5LjczNCA0MS42IDAgOTIuNzk3LTY2LjUgMTA3LjE5Ny04OS43MzQgNC01LjYxIDEwLjQtOS42MTYgMTYuOC05LjYxNiA3LjIgMCAxMy42IDMuMjA0IDE2Ljc5OSA5LjYxNiAxNC40IDIzLjIzMyA2NS41OTggODkuNzM0IDEwNy4xOTYgODkuNzM0IDExLjIgMCAyMCA4LjgxMyAyMCAyMC4wM3MtNy4yIDIwLjAzLTE4LjQgMjAuMDMiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTc1Ny41ODIgNzY4Yy01MS45OTggMC05OS45OTYtNTIuMDc4LTEyNC43OTUtODQuMTI2QzYwNy45ODcgNzE1LjkyMiA1NTkuOTkgNzY4IDUwNy45OSA3NjhzLTk5Ljk5Ni01Mi4wNzgtMTI0Ljc5NS04NC4xMjZDMzU5Ljk5NSA3MTUuOTIyIDMxMS45OTcgNzY4IDI2MCA3NjhjLTExLjIgMC0yMC04LjgxMy0yMC0yMC4wMyAwLTExLjIxNiA4LjgtMjAuMDMgMjAtMjAuMDMgNDEuNTk4IDAgOTIuNzk3LTY2LjUgMTA3LjE5NS04OS43MzUgNC01LjYxIDEwLjQtOS42MTUgMTYuOC05LjYxNXMxMy42IDMuMjA1IDE2LjggOS42MTVjMTQuMzk5IDIzLjIzNSA2NS41OTcgODkuNzM0IDEwNy4xOTUgODkuNzM0IDQxLjYgMCA5Mi43OTctNjYuNDk5IDEwNy4xOTctODkuNzM0IDQtNS42MSAxMC40LTkuNjE1IDE2LjgtOS42MTUgNy4yIDAgMTMuNiAzLjIwNSAxNi43OTkgOS42MTUgMTQuNCAyMy4yMzUgNjUuNTk4IDg5LjczNCAxMDcuMTk2IDg5LjczNCAxMS4yIDAgMjAgOC44MTUgMjAgMjAuMDMgMCAxMS4yMTgtNy4yIDIwLjAzMS0xOC40IDIwLjAzMU0yNzMuNTk4IDU2Mi44OTFjLTkuNiAwLTE3LjU5OC02LjQxLTE5Ljk5OC0xNi4wMjQtMi40LTE2LjAyNC00LTMyLjA0OC00LTQ3LjI3MiAwLTE0My40MTYgMTE1Ljk5NS0yNTkuNTkgMjU5LjE5LTI1OS41OSAxNDMuMTk2LS44MDIgMjU5LjE5MiAxMTYuMTc0IDI1OS4xOTIgMjU5LjU5IDAgMTYuMDI0LTEuNiAzMS4yNDgtNCA0Ni40Ny0xLjYgMTEuMjE4LTEyIDE4LjQyOC0yMy4yIDE2LjAyNS0xMS4xOTgtMS42MDItMTguMzk4LTEyLjAxOC0xNS45OTgtMjMuMjM2IDIuNC0xMi44MTkgMy4yLTI2LjQ0IDMuMi0zOS4yNTkgMC0xMjAuOTgyLTk4LjM5Ny0yMTkuNTMxLTIxOS4xOTQtMjE5LjUzMS0xMjAuNzk1IDAtMjE5LjE5MiA5Ny43NDctMjE5LjE5MiAyMTkuNTMxIDAgMTMuNjIxIDEuNiAyNy4yNDIgNCA0MC4wNjEgMS42IDExLjIxOC00LjggMjEuNjMyLTE2IDIzLjIzNXoiLz4KICA8L2c+Cjwvc3ZnPgo=) */
export const SuietCircleFilled = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-suiet-circle-filled');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

SuietCircleFilled.displayName = 'SuietCircleFilled';
