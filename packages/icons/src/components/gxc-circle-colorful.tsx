// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/gxc-circle-colorful.svg';

/**![GxcCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLWd4Yy1jaXJjbGUtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDQ0Ni40IDQ0Ni40Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImFudC13ZWIzLWljb24tZ3hjLWNpcmNsZS1jb2xvcmZ1bC1saW5lYXItZ3JhZGllbnQiIHgxPSIyNjkuOTUiIHkxPSIxMjcuOTYiIHgyPSIyNjkuOTUiIHkyPSI0MTYiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSwgMCwgMCwgLTEsIDAsIDU0MikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMyZjc1YmIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwYTQxODUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48dGl0bGU+Z3hjaGFpbi1neGMtbG9nbzwvdGl0bGU+PGNpcmNsZSBjeD0iMjIzLjIiIGN5PSIyMjMuMiIgcj0iMjIzLjIiIGZpbGw9IiNiM2IzYjMiLz48cGF0aCBkPSJNMTQwLjcsMTQwLjhjMTguMjgtMTkuMTIsNTEuNjctMTkuODgsNzAuNTctMS4zcTI5LjYsMjguOTMsNTguNTcsNTguNDFjMjAuNTctMTkuNTQsMzkuOC00MC4zOCw2MC40NS01OS44NCwxOS42NS0xNy43NCw1My0xNS42LDcwLjQ5LDQuMjgsMTcuODksMTguNzQsMTcuNiw1MS40NS0xLDY5LjY1LTE5LjExLDE5LjQ2LTM4LjQ2LDM4LjYyLTU3LjczLDU3LjkxLDE5LjY5LDIwLjMsNDAuMjIsMzkuNzksNTkuNzQsNjAuMzQsMTcuNTIsMTkuMjEsMTUuODQsNTEuOTEtMy4xMyw2OS41Ny0xOC42OSwxOC44Ni01Mi4xNywxOC45MS03MC44MiwwLTE5LjQtMTktMzguMzgtMzguNTQtNTcuNjUtNTcuNjYtMjAuNTcsMTkuNzktNDAuMTgsNDAuNTUtNjEsNjAuMTMtMTkuOSwxNy42Ni01My40NywxNS03MC42MS01LjI0LTE3LjI2LTE4LjctMTYuODUtNTAuNTcsMS4xNy02OC42OUMxNTYuNjcsMzExLDE3My44OSwyOTMuOTMsMTkxLjE2LDI3N2M3LjIzLDcuMjEsMTQuNDcsMTQuNDcsMjEuNywyMS42OC0xNi45MywxNy40OS0zNC43NCwzNC4yMi01MS40Miw1Mi0xMS4yNSwxMS41My0xLjM0LDMzLDE0LjQ2LDMyLjc1LDkuNTcsMC44NCwxNi4xOC03LjA5LDIyLjQxLTEzLjA4LDE2LjUxLTE2LjgyLDMzLjI4LTMzLjM0LDQ5Ljc5LTUwLjE1LTM2LTM2LjMxLTcyLjU4LTcyLjEzLTEwOC40LTEwOC42MS0xOC42OS0xOC44My0xOC4xLTUyLjQyLDEtNzAuN20yMC45LDQ4LjgyYzE5LjA2LDE5Ljg4LDM4Ljg0LDM5LDU4LjIzLDU4LjU5cTE0LTE0LjIyLDI4LjI2LTI4LjI2Yy0xOC43Ny0xOC45MS0zNy40Ni0zOC01Ni40OC01Ni42MS02LjA2LTYuNTQtMTYuNDMtOS0yNC4zNC00LjI4LTExLDUuMzMtMTQuNDYsMjEuNjgtNS42OSwzMC41N20xODYuMzQtMjUuNzljLTM1Ljc5LDM1LjE0LTcwLjg2LDcxLTEwNi40OCwxMDYuMzQsOS42Miw5LjMxLDE5LjE5LDE4LjY2LDI4LjU1LDI4LjIyLDcuMTktNy4wOSwxNC4zNC0xNC4yNiwyMS40OS0yMS40Myw3LjIzLDcuMjEsMTQuNDIsMTQuNDcsMjEuNywyMS42NC03LjA2LDcuMjEtMTQuMTcsMTQuMzQtMjEuMzYsMjEuNDcsMTkuMzEsMTkuNDIsMzguMjUsMzkuMjEsNTguMiw1OCwxMC4xMiwxMC42NiwyOS43Nyw0LjE5LDMyLjY5LTkuODUsMy4xMy05Ljk0LTQtMTguNTMtMTAuNzQtMjQuNzhxLTQ3LjYtNDcuMzctOTUtOTQuOTQsMTAuODUtMTAuODIsMjEuNjEtMjEuNzJjNy4xOSw3LjE3LDE0LjM4LDE0LjM0LDIxLjc0LDIxLjM5LDE4Ljk0LTE5LjYyLDM5LTM4LjE2LDU3LjY1LTU4LjA4LDkuNDEtOS4xNCw1LjY0LTI2LjYzLTYuMzUtMzEuNTgtOC4wNy00LjE1LTE3LjktMS4yMi0yMy43MSw1LjMyaDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDYuNTggLTQzLjI3KSIgZmlsbD0idXJsKCNhbnQtd2ViMy1pY29uLWd4Yy1jaXJjbGUtY29sb3JmdWwtbGluZWFyLWdyYWRpZW50KSIvPjwvc3ZnPg==) */
export const GxcCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-gxc-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

GxcCircleColorful.displayName = 'GxcCircleColorful';
