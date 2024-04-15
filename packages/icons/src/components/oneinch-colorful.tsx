// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/oneinch-colorful.svg';

/**![OneInchColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi0xaW5jaC1jb2xvcmZ1bC1sb2dvIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDcwNi44IDY2NS4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3MDYuOCA2NjUuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoKPHBhdGggZD0iTTE2OC4yLDM2Ni41TDE4Ni45LDIyNkwyNC43LDExMy40bDE0OC4yLDUwLjJsMzUtNTMuN2wxMjcuOC03OS4zbDI4MS43LDE1NS4ybDE0LjYsMjM2LjhMNTA2LjUsNTk3bC05OS4yLDE1LjIKCWw1MS4zLTkzLjl2LTkwLjRsLTM3LjMtNzAuNmwtMzcuOS0yNS4xbC01OC4zLDYwLjF2NjMuNmwtNDUuNSw0Mi42bC01Ny44LDdMMTk2LjIsNTIwbC00Mi0xMy40bC0xNy41LTYzbDMxLjUtNDQuM1YzNjYuNXoiIHN0eWxlPSJmaWxsOiAjRkZGRkZGOyIvPgo8cGF0aCBkPSJNNDI3LjIsMTEyLjJjLTMwLjktNi40LTY0LjctNC43LTY0LjctNC43cy0xMS4xLDUxLjMtNzkuOSw2NC44QzI4My4xLDE3Mi4zLDM3My41LDIwMy4yLDQyNy4yLDExMi4yeiIgc3R5bGU9ImZpbGw6ICM5NEE2QzM7Ii8+CjxwYXRoIGQ9Ik00NTUuMiw1NzcuN2MzNy4zLTI5LjIsNjUuMy02OS40LDc4LjItMTE0LjljMC42LTEuNyw1LjgtNC43LDkuMy03YzUuOC0zLjUsMTEuNy02LjQsMTIuOC0xMS4xCgljMi4zLTEzLjQsMy41LTI3LjQsMy41LTQxLjRjMC01LjItNS4zLTEwLjUtMTAuNS0xNS43Yy00LjEtMy41LTguMi03LjYtOC4yLTEwLjVjLTUuOC01My4xLTMwLjMtMTAyLjctNjkuNC0xMzguOGwtNC4xLDQuMQoJYzM3LjksMzUuNiw2Mi40LDg0LDY3LjcsMTM1LjNjMC42LDQuNyw1LjIsOS4zLDkuOSwxNGM0LjEsMy41LDguOCw4LjgsOC44LDExLjFjMCwxMy40LTEuMiwyNi44LTMuNSw0MC4yYy0wLjYsMi4zLTUuOCw0LjctOS45LDcKCWMtNS44LDIuOS0xMS4xLDUuOC0xMi4yLDEwLjVjLTE0LDQ5LjYtNDYuMSw5Mi44LTg4LjcsMTIwLjhjNy42LTE2LjMsMzEuNS02OS40LDQ0LjMtOTYuM2wtMi4zLTg2LjNsLTc0LjEtNzEuN2wtNDIsNS44bC00Ni4xLDc0LjcKCWMwLDAsMjEuNiwyNy40LTguOCw1OS41Yy0yOS43LDMxLjUtNTMuMSwzOC41LTUzLjEsMzguNWwtMjEuNi0xMS43YzYuNC04LjIsMTkuMy0yMC40LDI5LjItMjguNmMxNi45LTE0LDMzLjgtMTUuMiwzMy44LTMwLjMKCUMyOTguOSw0MDMuMywyNjUsNDEyLDI2NSw0MTJsLTEyLjMsMTEuN2wtNS4yLDQzLjJMMjIxLjksNDk5bC0yLjktMC42bC00Mi05LjNjMCwwLDI1LjctMTMuNCwyOS44LTI4LjZjNC4xLTE0LjYtOC4yLTYzLTguOC02NS45CgljMC42LDAuNiwxMi4zLDEwLjUsMTcuNSwyNi44YzkuMy0yNS43LDIxLjYtNTAuMiwyNS4xLTUyLjVjMy41LTIuMyw1MC43LTI3LjQsNTAuNy0yNy40bC0xNS43LDQxLjRsMTEuNy02LjRsMjgtNjguOAoJYzAsMCwyNy40LTEzLjQsNDcuOC0xMy40YzM2LjctMC42LDkxLTQ1LjUsNjYuNS0xMjZjNywyLjksMTI4LjMsNjMuNiwxNDkuMywxODIuNkM1OTQuNiw0NDIuNCw1NDIuNyw1MjguMSw0NTUuMiw1NzcuN3oiIHN0eWxlPSJmaWxsOiAjOTRBNkMzOyIvPgo8cGF0aCBkPSJNMzE2LjQsMTI1YzEzLjQtMTUuOCw4LjItMzkuMSw4LjItMzkuMWwtMzkuMSw1Ny44QzI4NC45LDE0My43LDI5OS40LDE0NC4zLDMxNi40LDEyNXoiIHN0eWxlPSJmaWxsOiAjMUIzMTRGOyIvPgo8cGF0aCBkPSJNMTg1LjEsNDQwLjZsNC43LTIzLjNjMCwwLTE5LjMsMzMuOC0yMSwzOC41Yy0xLjgsNS4zLDEuMiwxNC42LDguNywxNGM3LjYtMC42LDE2LjktMTEuNywxNi45LTE5LjgKCUMxOTQuNCw0MzkuNSwxODUuMSw0NDAuNiwxODUuMSw0NDAuNnoiIHN0eWxlPSJmaWxsOiAjMUIzMTRGOyIvPgo8cGF0aCBkPSJNNTMxLjYsNjkuNmMwLDAsMjkuMiwxLjIsNTkuNSw0LjdjLTY4LjMtNTMuNy0xMzMtNjkuNC0xODUuNS02OS40Yy03Mi4zLDAtMTIxLjMsMjkuOC0xMjQuMywzMS41bDIyLjgtMzYuMgoJYzAsMC05MS04LjgtMTIzLjEsODcuNWMtOC4yLTIwLjQtMTUuNy01MC4yLTE1LjctNTAuMlMxMTgsNzksMTQwLjIsMTQ3LjhDODUuOSwxMjgsOC40LDEwMC41LDUuNCwxMDBjLTQuMS0wLjYtNS4zLDEuMi01LjMsMS4yCglzLTEuMiwxLjcsMi4zLDQuN0M4LjksMTExLDEzMS40LDIwMS41LDE1OC4zLDIxOWMtNS44LDIxLTUuOCwzMC45LDAsNDAuOGM4LjIsMTMuNCw4LjcsMjAuNCw3LjYsMzAuM2MtMS4yLDkuOS0xMS43LDk1LjctMTQsMTA2LjIKCWMtMi4zLDEwLjUtMjYuOCw0Ny44LTI1LjcsNTguOWMxLjIsMTEuMSwxNi4zLDU4LjMsMjkuOCw2My42YzkuOSwzLjUsMzQuNCwxMS4xLDUwLjcsMTEuMWM1LjgsMCwxMS4xLTEuMiwxMy40LTMuNQoJYzkuOS04LjcsMTIuOC0xMC41LDE5LjgtMTAuNWMwLjYsMCwxLjIsMCwxLjcsMGMyLjksMCw2LjQsMC42LDEwLjUsMC42YzkuMywwLDIxLjYtMS44LDMwLjMtOS45YzEyLjgtMTIuOCwzNS0zMC4zLDQyLTM4LjUKCWM4LjgtMTEuMSwxMy40LTI2LjIsMTEuMS00MS40Yy0xLjgtMTQsNS44LTI2LjMsMTQuNi0zOC41YzExLjEtMTQuNiwzMS41LTQwLjgsMzEuNS00MC44QzQyMS45LDM3Ny42LDQ0Nyw0MjMuNyw0NDcsNDc1CgljMCw5MS03OS4zLDE2NC41LTE3Ny4zLDE2NC41Yy0xNS4yLDAtMjkuNy0xLjctNDQuMy01LjJjNDQuOSwxNS43LDgyLjgsMjEsMTEzLjgsMjFjNjUuOSwwLDEwMC45LTIzLjksMTAwLjktMjMuOQoJcy0xMi4yLDE1LjgtMzIuMSwzMy44YzAuNiwwLDAuNiwwLDAuNiwwYzEwOS4xLTE1LjIsMTYyLjItMTA1LDE2Mi4yLTEwNXMtNC4xLDI5LjItOS4zLDQ5QzcwNi42LDUwMC4xLDY4Mi4xLDM2My42LDY4MS41LDM1OQoJYzEuMiwxLjcsMTUuOCwxOS4yLDIzLjMsMjguNkM3MjguMiwxNDcuMiw1MzEuNiw2OS42LDUzMS42LDY5LjZ6IE0zMDguMiw0NTMuNWMtMi4zLDIuOS0xMi4yLDExLjctMTkuMiwxOC4xCgljLTcsNi40LTE0LjYsMTIuOC0yMC40LDE4LjdjLTIuMywyLjMtNywzLjUtMTQsMy41Yy0yLjMsMC00LjcsMC02LjQsMGMtMS4yLDAtMi4zLDAtMy41LDBzLTEuOCwwLTIuMywwYy0xLjgsMC0zLjUsMC01LjMsMAoJYzguOC0xMS43LDM0LjQtMzguNSw0My4yLTQ0LjNjMTAuNS03LDE1LjgtMTQsOS4zLTI2LjJjLTYuNC0xMi4zLTIzLjMtOS4zLTIzLjMtOS4zczkuOS00LjEsMTguNy00LjFjLTExLjEtMi45LTI1LjEsMC0zMS41LDYuNAoJYy03LDYuNC01LjgsMjkuMi04LjcsNDMuN2MtMi45LDE1LjItMTIuOCwyMi44LTI4LDM2LjhjLTguMiw3LjYtMTQsOS45LTE4LjcsOS45Yy05LjktMS43LTIxLjYtNC43LTI5LjgtNy42CgljLTUuOC03LjYtMTQuNi0zMi43LTE2LjktNDMuMmMxLjctNS44LDguNy0xOC4xLDEyLjItMjUuMWM3LTEzLjQsMTEuMS0yMSwxMi4zLTI4YzIuMy05LjksOS45LTcxLjIsMTIuOC05Ni44CgljNy42LDkuOSwxOC4xLDI2LjMsMTUuNywzNi44YzE2LjktMjMuOSw0LjctNDcuMy0xLjItNTYuNmMtNS4yLTkuMy0xMi4yLTI4LTYuNC00Ny44YzUuOC0xOS44LDI2LjgtNzQuNywyNi44LTc0LjdzNywxMi4zLDE2LjksOS45CgljOS45LTIuMyw4OS44LTEyMi41LDg5LjgtMTIyLjVzMjEuNiw0Ny4yLTEuMiw4MS43Yy0yMy4zLDM0LjQtNDYuMSw0MC44LTQ2LjEsNDAuOHMzMi4xLDUuOCw2MS44LTE1LjgKCWMxMi4yLDI4LjYsMjMuOSw1OC4zLDI0LjUsNjIuNGMtMS44LDQuMS0yNS4xLDYwLjEtMjcuNCw2My42Yy0xLjIsMS4yLTkuMywzLjUtMTUuMiw0LjdjLTkuOSwyLjktMTUuNyw0LjctMTguMSw2LjQKCWMtNC4xLDMuNS0yMi44LDU0LjgtMzEuNSw3OS45Yy0xMC41LDIuOS0yMSw4LjgtMjguNiwyMC40YzQuMS0yLjksMTYuOS00LjcsMjYuMy01LjhjOC4yLTAuNiwzMy4yLDEyLjgsMzkuNywzNy45CgljMCwwLjYsMCwwLjYsMCwxLjJDMzE1LjgsNDM3LjcsMzEyLjksNDQ2LjUsMzA4LjIsNDUzLjV6IE0yNTMuNCw0NjAuNWM1LjMtNy42LDQuNy0yMC40LDUuMy0yNC41YzAuNi00LjEsMS43LTExLjcsNi40LTEyLjgKCWM0LjctMS4yLDE1LjgsMC42LDE1LjgsOC43YzAsNy42LTguMiw5LjMtMTQsMTQuNkMyNjIuNyw0NTAuNSwyNTQuNSw0NTkuMywyNTMuNCw0NjAuNXogTTQ4Ni4xLDM0OWM1LjgtMjkuNyw2LjQtNTUuNCw0LjctNzYuNAoJYzIyLjcsMzAuMywzNi43LDY3LjEsNDAuOCwxMDVjMC42LDQuNyw1LjIsOS4zLDkuOSwxNGM0LjEsMy41LDguOCw4LjIsOC44LDExLjFjMCwxMy40LTEuMiwyNi44LTMuNSw0MC4zYy0wLjYsMS43LTUuOCw0LjctOS45LDcKCWMtNS44LDIuOS0xMS4xLDUuOC0xMi4yLDEwLjVjLTEyLjgsNDQuOS00MC4zLDg0LjYtNzcsMTEyLjZDNTAxLjksNTE2LjUsNTI4LjEsNDIzLjEsNDg2LjEsMzQ5eiBNNDQ5LjQsNTc4LjMKCWMzNy45LTI5LjIsNjcuMS03MCw3OS45LTExNi4xYzAuNi0xLjcsNS44LTQuNyw5LjMtN2M1LjgtMi45LDExLjctNi40LDEyLjgtMTEuMWMyLjMtMTMuNCwzLjUtMjcuNCwzLjUtNDEuNAoJYzAtNS4yLTUuMy0xMC41LTEwLjUtMTUuN2MtMi45LTMuNS03LjYtNy42LTcuNi0xMC41Yy00LjctNDIuNi0yMS42LTgyLjgtNDcuOC0xMTYuMWMtMTEuNy03MC01OC4zLTkxLjYtNTkuNS05Mi4yCgljMS4yLDEuOCwzMS41LDQ1LjUsMTAuNSw5Ni44Yy0yMS42LDUxLjktNzcsNDMuOC04MS43LDQ0LjNjLTQuNywwLTIyLjcsMjMuMy00NS41LDY2LjVjLTIuOS0xLjItMTUuMi00LjEtMjkuMi0xLjcKCWMxMC41LTI5LjIsMjYuMy03MC42LDI5LjItNzQuMWMxLjItMS4yLDkuOS0zLjUsMTUuOC01LjJjMTEuMS0yLjksMTYuMy00LjcsMTguMS03YzEuMi0xLjgsNy0xNS4yLDEyLjgtMjkuMgoJYzUuMywwLDE4LjctMS4yLDE5LjgtMS44YzEuMi0xLjIsMTIuMy0yOS43LDEyLjMtMzMuMmMwLTIuOS0yMi44LTU5LjUtMzEuNS04MS4xYzQuMS00LjcsOC4yLTEwLjUsMTIuMi0xNi45CglDNDkxLjksMTM4LjUsNTg1LjMsMjQwLDU4NS4zLDM2M0M1ODUuMyw0NTcuNSw1MjkuOSw1MzkuOCw0NDkuNCw1NzguM3oiIHN0eWxlPSJmaWxsOiAjMUIzMTRGOyIvPgo8cGF0aCBkPSJNMjk0LjIsMjYzLjNjMTEuMS0xMi44LDUuMy0zNi43LTE1LjItNDAuOGM1LjMtMTIuMiwxMi44LTM2LjcsMTIuOC0zNi43cy01OS41LDkzLjMtNjQuNyw5NS4xCgljLTUuMywxLjgtMTAuNS0xOC43LTEwLjUtMTguN2MtMTEuMSw0Mi42LDE4LjcsNDguNCwyMi4yLDM1QzI1NS4xLDI5MywyODMuMSwyNzUuNSwyOTQuMiwyNjMuM3oiIHN0eWxlPSJmaWxsOiAjMUIzMTRGOyIvPgo8cGF0aCBkPSJNMjQzLjQsMjg2bDMwLjMtNTEuOWMwLDAsMTcuNSw4LjgsOC43LDIyLjhDMjcxLjQsMjczLjIsMjQzLjQsMjg2LDI0My40LDI4NnoiIHN0eWxlPSJmaWxsOiAjRkZEOTIzOyIvPgo8cGF0aCBkPSJNNjE4LjUsNTI2LjRjLTguOCwxMS43LTE4LjcsMjMuOS0zMC4zLDM1LjZjNzUuMi0xNDQuNywzLjUtMjc3LjEsMC42LTI4Mi4zYzUuMyw1LjMsMTAuNSwxMS4xLDE1LjIsMTYuMwoJQzY2MS43LDM2MC4xLDY2OC43LDQ1Ni40LDYxOC41LDUyNi40eiIgc3R5bGU9ImZpbGw6ICNEODIxMjI7Ii8+CjxwYXRoIGQ9Ik02ODguNSwzNDAuM2MtMjYuMy03MC42LTYzLjYtMTMwLjctMTQ1LjgtMTg0LjljLTc5LjMtNTIuNS0xNjQuNS00OC40LTE2OS4yLTQ3LjhjLTAuNiwwLTEuMiwwLTEuMiwwCgljMi45LTEuMiw1LjgtMS44LDguNy0yLjNjMTguMS01LjgsNDEuNC0xMC41LDY0LjgtMTMuNEM1MDcuNyw4Myw1NzAuMSwxMDQsNjEyLjcsMTQ5YzAuNiwwLjYsMC42LDAuNiwxLjIsMS4yCglDNjYyLjMsMjAxLjUsNjg3LjQsMjY1LjYsNjg4LjUsMzQwLjN6IiBzdHlsZT0iZmlsbDogI0Q4MjEyMjsiLz4KPHBhdGggZD0iTTUyNCw1MS41Yy04Ni45LTE2LjMtMTQyLjktOC4yLTE4My4yLDdjLTEuMi00LjctNS4zLTE0LTguOC0yMS42QzMxOS45LDUxLjUsMzA3LDY5LDI5OC45LDgwLjEKCWMtMjIuMiwxNS4yLTMxLjUsMjkuOC0zMS41LDI5LjhjMTIuOC00My44LDUwLjItNzYuNCw5NS43LTg0LjZjMTIuOC0yLjMsMjYuOC0zLjUsNDItMy41QzQ0NS4zLDIyLjQsNDg1LjUsMzIuMyw1MjQsNTEuNXoiIHN0eWxlPSJmaWxsOiAjRDgyMTIyOyIvPgo8cGF0aCBkPSJNMjAyLjYsMTYzLjVjLTY4LjItMi4zLTQ1LjUtODEuNy00NC4zLTg2LjNDMTU4LjMsNzcuOCwxNjIuOSwxMzkuNiwyMDIuNiwxNjMuNXoiIHN0eWxlPSJmaWxsOiAjRDgyMTIyOyIvPgo8cGF0aCBkPSJNMjY5LjcsMjAuNmMtNTIuNSwzMS41LTQyLDEwNi43LTQyLDEwNi43QzE3Ny41LDUxLDI2NS42LDIyLjQsMjY5LjcsMjAuNnoiIHN0eWxlPSJmaWxsOiAjRDgyMTIyOyIvPgo8cGF0aCBkPSJNMTgzLjQsMTg0LjVjMy41LDIuOSw3LDguMiwyLjksMTUuOGMtMi4zLDQuMS01LjgsMy41LTExLjEsMS4yYy03LTMuNS00OS0yOC04Ni45LTUzLjEKCWM0My4yLDE1LjIsODYuOSwzMS41LDkzLjksMzVDMTgyLjIsMTgzLjQsMTgyLjgsMTg0LDE4My40LDE4NC41eiIgc3R5bGU9ImZpbGw6ICNGRkZGRkY7Ii8+Cjwvc3ZnPgo=) */
export const OneInchColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-oneinch-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

OneInchColorful.displayName = 'OneInchColorful';