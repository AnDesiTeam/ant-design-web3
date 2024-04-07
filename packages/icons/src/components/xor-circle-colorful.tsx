// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/xor-circle-colorful.svg';

/**![XorCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi14b3ItY2lyY2xlLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjI2LjEgMjI2LjEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIyNi4xIDIyNi4xOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8cGF0aCBkPSJNMjM3LjYsOTQuNGwtMjAuNS00LjVsMTMuOS0xNi4yYy0xMi4xLTEyLTM4LTE1LjEtNjQuNy02LjVjLTMuOCwxLjItNy41LDIuNy0xMS4xLDQuMwoJYzAuNC0zLjksMC43LTcuOSwwLjctMTEuOGMwLTI4LTExLTUxLjctMjYuMS01OS41bC0xMS4xLDE4LjJMMTA3LjksMC4zQzkyLjgsOC4xLDgxLjgsMzEuOCw4MS44LDU5LjhjMCw0LDAuMiw3LjksMC43LDExLjgKCWMtMy42LTEuNy03LjQtMy4xLTExLjEtNC4zYy0yNi43LTguNy01Mi42LTUuNS02NC43LDYuNWwxMy45LDE2LjJMMCw5NC40YzIuOCwxNi44LDIxLjksMzQuNSw0OC41LDQzLjJjMy43LDEuMiw3LjUsMi4yLDExLjQsMwoJYy0yLjYsMi45LTUuMSw1LjktNy40LDkuMUMzNiwxNzIuNCwzMSwxOTgsMzguNiwyMTMuMmwxOS43LTguMmwtMi4xLDIwLjljMTYuOCwyLjYsMzkuNi0xMC4xLDU2LjEtMzIuOGMyLjQtMy4zLDQuNS02LjcsNi41LTEwLjIKCWMyLDMuNSw0LjIsNi45LDYuNSwxMC4yYzE2LjUsMjIuNywzOS4zLDM1LjQsNTYuMSwzMi44bC0yLjEtMjAuOWwxOS43LDguMmM3LjctMTUuMiwyLjYtNDAuOC0xMy44LTYzLjVjLTIuMy0zLjItNC44LTYuMi03LjQtOS4xCgljMy44LTAuOCw3LjYtMS44LDExLjQtM0MyMTUuNywxMjguOSwyMzQuOCwxMTEuMiwyMzcuNiw5NC40TDIzNy42LDk0LjR6IiBzdHlsZT0iZGlzcGxheTogbm9uZTsgZmlsbDogI0U0MjMyRDsiLz4KPGcgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij4KCTxwYXRoIGQ9Ik0xNzkuNiwxNDEuNGwtNTguOCw0Mi41TDYyLDE0MS40bDIyLjUtNjguOGg3Mi42TDE3OS42LDE0MS40eiIgc3R5bGU9ImRpc3BsYXk6IGlubGluZTsgZmlsbDogbm9uZTsgc3Ryb2tlOiAjRkZGRkZGOyBzdHJva2Utd2lkdGg6IDEuNDM4OyIvPgoJPHBhdGggZD0iTTEyMC41LDE0Ny43bDM0LjktMy4xIE04NS42LDE0NC42bDM0LjksMy4xIiBzdHlsZT0iZGlzcGxheTogaW5saW5lOyBmaWxsOiBub25lOyBzdHJva2U6ICNGRkZGRkY7IHN0cm9rZS13aWR0aDogMS40NDU7Ii8+Cgk8ZyBzdHlsZT0iZGlzcGxheTogaW5saW5lOyI+CgkJPHBhdGggZD0iTTE1NS4zLDE0NC42bC0zNC45LDIwLjFsLTM0LjktMjAuMXYtNDAuM2wzNC45LTIwLjFsMzQuOSwyMC4xVjE0NC42eiBNMTU1LjMsMTA0LjJsLTM0LjktMyBNODUuNiwxMDQuMwoJCQlsMzQuOS0zLjIgTTE1NS4zLDEwNC4zbC0xNC43LDMxLjcgTTEyMC41LDE2NC43bDIwLjEtMjguNyBNODUuNiwxMDQuM2wxNC43LDMxLjcgTTEyMC41LDE2NC43bC0yMC4xLTI4LjciIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2U6ICNGRkZGRkY7IHN0cm9rZS13aWR0aDogMS40Mzg7Ii8+CgkJPHBhdGggZD0iTTE0MC42LDEzNi4xbC0yMC4xLTM0LjlsLTIwLjEsMzQuOUgxNDAuNnoiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2U6ICNGRkZGRkY7IHN0cm9rZS13aWR0aDogMS40Mzg7Ii8+CgkJPHBhdGggZD0iTTEwMC4zLDExMi42bDIwLjEsMzQuOWwyMC4xLTM0LjlIMTAwLjN6IE04NS42LDEwNC4zbDE0LjcsOC4yIE0xNDAuNiwxMTIuNmwxNC43LTguMiBNMTIwLjUsMTQ3LjR2MTcuMyIgc3R5bGU9ImZpbGw6IG5vbmU7IHN0cm9rZTogI0ZGRkZGRjsgc3Ryb2tlLXdpZHRoOiAxLjQzODsiLz4KCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MSA4MykiPgoJCQk8Y2lyY2xlIGN4PSIzOS41IiBjeT0iODEuNyIgcj0iMi40IiBzdHlsZT0iZmlsbDogI0ZGRkZGRjsgc3Ryb2tlOiAjRkZGRkZGOyBzdHJva2Utd2lkdGg6IDEuNDM4OyIvPgoJCQk8Y2lyY2xlIGN4PSI0LjYiIGN5PSIyMS4zIiByPSIyLjQiIHN0eWxlPSJmaWxsOiAjRkZGRkZGOyBzdHJva2U6ICNGRkZGRkY7IHN0cm9rZS13aWR0aDogMS40Mzg7Ii8+CgkJCTxjaXJjbGUgY3g9IjE5LjMiIGN5PSI1My4xIiByPSIyLjQiIHN0eWxlPSJmaWxsOiAjRkZGRkZGOyBzdHJva2U6ICNGRkZGRkY7IHN0cm9rZS13aWR0aDogMS40Mzg7Ii8+CgkJCTxjaXJjbGUgY3g9IjU5LjYiIGN5PSI1My4xIiByPSIyLjQiIHN0eWxlPSJmaWxsOiAjRkZGRkZGOyBzdHJva2U6ICNGRkZGRkY7IHN0cm9rZS13aWR0aDogMS40Mzg7Ii8+CgkJCTxjaXJjbGUgY3g9IjM5LjUiIGN5PSIxOC4yIiByPSIyLjQiIHN0eWxlPSJmaWxsOiAjRkZGRkZGOyBzdHJva2U6ICNGRkZGRkY7IHN0cm9rZS13aWR0aDogMS40Mzg7Ii8+CgkJCTxjaXJjbGUgY3g9Ijc0LjMiIGN5PSIyMS4zIiByPSIyLjQiIHN0eWxlPSJmaWxsOiAjRkZGRkZGOyBzdHJva2U6ICNGRkZGRkY7IHN0cm9rZS13aWR0aDogMS40Mzg7Ii8+CgkJPC9nPgoJCTxwYXRoIGQ9Ik0xNTUuMywxNDQuNmwtMTQuNy0zMiBNMTIwLjUsODQuMmwyMC4xLDI4LjMgTTg1LjYsMTQ0LjZsMTQuNy0zMiBNMTIwLjUsODQuMmwtMjAuMSwyOC4zIE0xMjAuNSwxNjQuNwoJCQlsLTI5LjEtMi4zIE0xNDkuNSwxNjNsLTI5LjEsMS44IE03My4yLDEwNy4zbDEyLjQtMi45IE0xNjguNCwxMDcuM2wtMTMuMS0yLjkgTTg1LjYsMTQ0LjZMNjIsMTQxLjMgTTE1NS4zLDE0NC42bDI0LjItMy4zCgkJCSBNODQuNSw3Mi41bDM2LDExLjcgTTE1Ny4xLDcyLjVsLTM2LjYsMTEuNyIgc3R5bGU9ImZpbGw6IG5vbmU7IHN0cm9rZTogI0ZGRkZGRjsgc3Ryb2tlLXdpZHRoOiAxLjQzODsiLz4KCTwvZz4KCTxwYXRoIGQ9Ik0xMjAuOCw3Mi42bC0wLjMtNTQuMSBNNzMuMiwxMDcuM0wyMi41LDg5LjkgTTYwLjMsMjA1bDMxLjEtNDIuNSBNMTgxLjMsMjA1TDE0OS41LDE2MyBNMjE5LjEsODkuOQoJCWwtNTAuNywxNy40IE0xNzkuNiwxNDEuNGwzOS41LTUxLjUgTTE1Ny4xLDcyLjZsNjIsMTcuNCBNODQuNSw3Mi42bDM2LTU0LjEgTTE1Ny4xLDcyLjZsLTM2LjYtNTQuMSBNNjEuOSwxNDAuNkwyMi41LDg5LjkKCQkgTTg0LjUsNzIuNmwtNjIsMTcuNCBNNjEuOSwxNDAuNkw2MC4zLDIwNSBNMTIwLjgsMTgzLjlMNjAuMywyMDUgTTE3OS42LDE0MS40bDEuNyw2My42IE0xMjAuOCwxODMuOWw2MC41LDIxLjEiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmU7IGZpbGw6IG5vbmU7IHN0cm9rZTogI0ZGRkZGRjsgc3Ryb2tlLXdpZHRoOiAxLjQzODsiLz4KPC9nPgo8cGF0aCBkPSJNMjkxLjQsMTguNGwxMS43LTAuMWwwLjEsMTkuOEwzMjYsMzhsLTAuMS0xOS44bDExLjctMC4xbDAuMyw1My4xbC0xMS43LDAuMUwzMjYsNDguNGwtMjIuNywwLjFsMC4xLDIyLjkKCWwtMTEuNywwLjFMMjkxLjQsMTguNHogTTM2MC44LDQ4LjVsLTIwLjEtMzAuM2wxNC42LTAuMWwxMS40LDE5LjhMMzc4LjQsMThsMTMuOS0wLjFsLTE5LjgsMzAuNWwwLjEsMjIuNmwtMTEuNywwLjFMMzYwLjgsNDguNXoKCSBNMzk1LjUsMTcuOWwxOS43LTAuMWMyLjYsMCw1LjIsMC4yLDcuOCwwLjdjMi4zLDAuNCw0LjUsMS4zLDYuNCwyLjVjMS45LDEuMiwzLjQsMi45LDQuNCw0LjljMS4yLDIuNCwxLjcsNS4xLDEuNyw3LjgKCWMwLjEsMi43LTAuNCw1LjMtMS41LDcuOGMtMC45LDItMi4zLDMuNy00LjEsNWMtMS45LDEuMy00LDIuMi02LjIsMi43Yy0yLjYsMC42LTUuMiwwLjgtNy44LDAuOGwtOC42LDBsMC4xLDIwLjdMMzk1LjcsNzEKCUwzOTUuNSwxNy45TDM5NS41LDE3Ljl6IE00MDcuMyw0MC4zbDcuOCwwYzEsMCwyLTAuMSwzLTAuM2MwLjktMC4yLDEuOC0wLjUsMi42LTFjMC44LTAuNSwxLjQtMS4yLDEuOS0yYzAuNS0xLDAuNy0yLDAuNy0zLjEKCWMwLTEuMi0wLjMtMi4zLTEtMy4zYy0wLjYtMC44LTEuNS0xLjUtMi40LTEuOWMtMS0wLjUtMi4xLTAuNy0zLjMtMC44Yy0xLjEtMC4xLTIuMy0wLjItMy41LTAuMmwtNiwwTDQwNy4zLDQwLjN6IE00NDIuNCwxNy42CglsMzYuMS0wLjJsMC4xLDEwLjhsLTI0LjQsMC4xbDAuMSw5LjlsMjMtMC4xbDAuMSwxMC44bC0yMywwLjFsMC4xLDEwLjhsMjUuNy0wLjFsMC4xLDEwLjhsLTM3LjQsMC4yTDQ0Mi40LDE3LjZ6IE00ODguNSwxNy40CglsMjAuNi0wLjFjMi42LDAsNS4yLDAuMiw3LjcsMC43YzIuMywwLjUsNC40LDEuMyw2LjQsMi42YzEuOSwxLjIsMy40LDIuOSw0LjQsNC45YzEuMiwyLjQsMS43LDUuMSwxLjcsNy43YzAuMSwzLjQtMC45LDYuOC0yLjksOS42CgljLTIuMSwyLjctNS4xLDQuNS04LjUsNWwxMy42LDIyLjNsLTE0LDAuMWwtMTEuMi0yMS4ybC01LjgsMGwwLjEsMjEuMmwtMTEuNywwLjFMNDg4LjUsMTcuNEw0ODguNSwxNy40TDQ4OC41LDE3LjR6IE01MDAuMywzOS4zCglsNi45LDBjMS4xLDAsMi4yLTAuMSwzLjMtMC4xYzEuMS0wLjEsMi4yLTAuMywzLjItMC43YzAuOS0wLjQsMS43LTEsMi40LTEuOGMwLjctMSwxLTIuMiwwLjktMy40YzAuMS0xLjEtMC4yLTIuMy0wLjgtMy4yCgljLTAuNS0wLjgtMS4zLTEuNC0yLjEtMS44Yy0wLjktMC40LTEuOS0wLjctMi45LTAuOGMtMS4xLTAuMS0yLjEtMC4yLTMuMi0wLjJsLTcuNywwTDUwMC4zLDM5LjN6IE01MzYuOCwxNy4xbDExLjctMC4xbDAuMiw0Mi4zCglsMjEuNy0wLjFsMC4xLDEwLjhsLTMzLjQsMC4yTDUzNi44LDE3LjF6IE01NzYuMywxNi45bDM2LjEtMC4ybDAuMSwxMC44bC0yNC40LDAuMWwwLjEsOS45bDIzLTAuMWwwLjEsMTAuOGwtMjMsMC4xbDAuMSwxMC44CglMNjE0LDU5bDAuMSwxMC44TDU3Ni42LDcwTDU3Ni4zLDE2Ljl6IE02MjIuNCwxNi43bDE3LjYtMC4xYzQuMSwwLDguMiwwLjQsMTIuMSwxLjRjMy42LDAuOCw3LDIuNCwxMCw0LjZjMi45LDIuMiw1LjIsNSw2LjgsOC4yCgljMS44LDMuOSwyLjcsOC4xLDIuNiwxMi40YzAuMSwzLjktMC43LDcuOC0yLjQsMTEuNGMtMS41LDMuMi0zLjgsNi02LjUsOC4zYy0yLjgsMi4zLTYsNC05LjUsNS4xYy0zLjcsMS4yLTcuNSwxLjgtMTEuMywxLjgKCWwtMTkuMSwwLjFMNjIyLjQsMTYuN3ogTTYzNC4zLDU4LjlsNi4xLDBjMi41LDAsNS4xLTAuMyw3LjUtMC45YzIuMi0wLjUsNC4yLTEuNCw2LTIuOGMxLjctMS4zLDMuMS0zLjEsNC01YzEtMi40LDEuNS01LDEuNC03LjYKCWMwLTIuMy0wLjUtNC43LTEuNS02LjhjLTAuOS0xLjktMi4zLTMuNS00LTQuN2MtMS44LTEuMy0zLjctMi4yLTUuOC0yLjhjLTIuMy0wLjYtNC42LTAuOS03LTAuOWwtNi45LDBMNjM0LjMsNTguOXogTTcyNi45LDY1LjUKCWMtMy40LDEuOC03LDMuMS0xMC44LDRjLTMuOCwwLjgtNy42LDEuMi0xMS41LDEuM2MtMy45LDAuMS03LjgtMC42LTExLjUtMS45Yy0zLjQtMS4yLTYuNS0zLjEtOS4xLTUuNWMtMi42LTIuNS00LjctNS41LTYtOC44CgljLTEuNS0zLjctMi4yLTcuNi0yLjItMTEuNWMtMC4xLTQsMC42LTcuOSwyLjEtMTEuNmMxLjMtMy4zLDMuMy02LjMsNS45LTguOGMyLjYtMi41LDUuNy00LjQsOS01LjZjMy43LTEuNCw3LjYtMiwxMS41LTIKCWM0LTAuMSw3LjksMC40LDExLjcsMS41YzMuNSwxLDYuOCwyLjgsOS40LDUuMmwtOC4yLDljLTEuNS0xLjYtMy40LTIuOS01LjQtMy43Yy0yLjQtMC45LTQuOS0xLjMtNy41LTEuMmMtMi4zLDAtNC42LDAuNC02LjgsMS4zCgljLTIsMC44LTMuNywyLTUuMiwzLjZjLTEuNSwxLjYtMi42LDMuNC0zLjMsNS41Yy0xLjUsNC40LTEuNSw5LjMsMC4xLDEzLjdjMC43LDIsMS45LDMuOCwzLjQsNS40YzEuNSwxLjUsMy4zLDIuNyw1LjIsMy41CgljMi4yLDAuOSw0LjUsMS4zLDYuOCwxLjJjMi4yLDAsNC41LTAuMyw2LjYtMC45YzEuNS0wLjUsMy0xLDQuNC0xLjhsMC04LjZsLTkuNSwwTDcwNiwzNy44bDIwLjgtMC4xTDcyNi45LDY1LjV6IE03MzYuNywxNi4xCglsMzYuMS0wLjJsMC4xLDEwLjhsLTI0LjQsMC4xbDAuMSw5LjlsMjMtMC4xbDAuMSwxMC44bC0yMywwLjFsMC4xLDEwLjhsMjUuNy0wLjFsMC4xLDEwLjhsLTM3LjQsMC4yTDczNi43LDE2LjF6IE03ODIuNywxNS45CglsMjAuNi0wLjFjMi42LDAsNS4yLDAuMiw3LjcsMC43YzIuMywwLjUsNC40LDEuMyw2LjQsMi42YzEuOSwxLjIsMy40LDIuOSw0LjQsNC45YzEuMiwyLjQsMS43LDUuMSwxLjcsNy44YzAuMSwzLjQtMC45LDYuOC0yLjksOS42CgljLTIuMSwyLjctNS4xLDQuNS04LjUsNWwxMy42LDIyLjNsLTE0LDAuMWwtMTEuMi0yMS4ybC01LjgsMGwwLjEsMjEuMkw3ODMsNjguOUw3ODIuNywxNS45TDc4Mi43LDE1Ljl6IE03OTQuNSwzNy44bDYuOSwwCgljMS4xLDAsMi4yLDAsMy4zLTAuMWMxLjEtMC4xLDIuMi0wLjMsMy4yLTAuN2MwLjktMC40LDEuNy0xLDIuNC0xLjhjMC43LTEsMS0yLjIsMC45LTMuNGMwLTEuMS0wLjItMi4zLTAuOC0zLjIKCWMtMC41LTAuOC0xLjMtMS40LTIuMS0xLjhjLTAuOS0wLjQtMS45LTAuNy0yLjktMC44Yy0xLjEtMC4xLTIuMS0wLjItMy4yLTAuMmwtNy43LDBMNzk0LjUsMzcuOHoiIHN0eWxlPSJkaXNwbGF5OiBub25lOyBmaWxsOiAjMkYzMDM0OyIvPgo8cGF0aCBkPSJNMjkxLjQsMTAwLjloMTQuMXYxMDMuN2gtMTQuMVYxMDAuOXogTTMyOC4zLDEwMC45aDM2LjVjMjYuNSwwLDMzLjMsMTYsMzMuMywyOWMwLDEzLjItOS44LDI1LjYtMjUuNSwyNy40CglsMjkuNCw0Ny4zaC0xNy42TDM1OCwxNTguOWgtMTUuN3Y0NS43aC0xNC4xVjEwMC45eiBNMzQyLjMsMTQ2LjZoMTguNWMxMS4xLDAsMjIuMy0yLjYsMjIuMy0xNi43YzAtMTQuMS0xMS4xLTE2LjctMjIuMy0xNi43aC0xOC41CglWMTQ2LjZ6IE00MDcuNCwxNTIuOGMwLTMwLjgsMjIuNC01NC41LDU0LjEtNTQuNWMzMS42LDAsNTQuMSwyMy43LDU0LjEsNTQuNXMtMjIuNCw1NC41LTU0LjEsNTQuNQoJQzQyOS45LDIwNy4zLDQwNy40LDE4My41LDQwNy40LDE1Mi44eiBNNTAwLjYsMTUyLjhjMC0yMi43LTE1LjQtNDEuMy0zOS4xLTQxLjNjLTIzLjcsMC0zOS4xLDE4LjYtMzkuMSw0MS4zczE1LjQsNDEuMywzOS4xLDQxLjMKCUM0ODUuMiwxOTQuMSw1MDAuNiwxNzUuNSw1MDAuNiwxNTIuOHogTTUzMi41LDEwMC45aDE0LjFWMTQ0aDUzLjh2LTQzLjFoMTQuMXYxMDMuN2gtMTQuMXYtNDcuNWgtNTMuOHY0Ny41aC0xNC4xVjEwMC45egoJIE02NzAuOSwxMDAuOWgxMi43bDQ0LjQsMTAzLjdoLTE2LjRMNzAxLjMsMTc5aC00OS40bC0xMC4zLDI1LjZoLTE2LjRMNjcwLjksMTAwLjl6IE02OTYuMSwxNjYuN2wtMTkuMy00Ny42aC0wLjNsLTE5LjYsNDcuNkg2OTYuMQoJTDY5Ni4xLDE2Ni43eiIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7IGZpbGw6ICNFNDIzMkQ7Ii8+CjxnIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+Cgk8cGF0aCBkPSJNMTcyLjUsNzguM2MtNS40LDAtOS43LTQuNC05LjctOS43aC0yMi42aC03LjhjLTUuNCwwLTkuNy00LjQtOS43LTkuN3M0LjQtOS43LDkuNy05LjdoNy44aDY1LjgKCQljLTIwLjQtMjkuNS01NC40LTQ4LjgtOTMtNDguOEM1OS41LDAuMywxNC44LDM3LjMsMyw4Ny4yaDg2LjVoNy44YzUuNCwwLDkuNyw0LjQsOS43LDkuN3MtNC40LDkuNy05LjcsOS43aC03LjhINjYuOQoJCWMwLDUuNC00LjQsOS43LTkuNyw5LjdoLTcuOEgwYzAuMSw0LjksMC42LDkuNywxLjMsMTQuNGgwLjFjMzQuNCw2LjMsNzMuNiw5LjgsMTE1LjEsOS44YzM4LjcsMCw3NS4zLTMuMSwxMDcuOS04LjYKCQljMS02LjEsMS41LTEyLjMsMS41LTE4LjdjMC0xMi4yLTEuOS0yNC01LjUtMzVoLTQwLjJMMTcyLjUsNzguM0wxNzIuNSw3OC4zeiIgc3R5bGU9ImRpc3BsYXk6IGlubGluZTsgZmlsbDogI0ZGMDAwMDsiLz4KCTxwYXRoIGQ9Ik00Mi41LDE5MXYxMC42YzE5LjMsMTUuNCw0My44LDI0LjcsNzAuNSwyNC43YzI2LjcsMCw1MS4yLTkuMiw3MC41LTI0LjdWMTkxSDQyLjV6IiBzdHlsZT0iZGlzcGxheTogaW5saW5lOyBmaWxsOiAjRkYwMDAwOyIvPgoJPHBhdGggZD0iTTE5LjcsMTc3LjFoODEuNnYtMTMuNGMtMjguOSwwLjItNTYuNiwxLjEtODIuMSwyLjZ2MTBDMTkuMywxNzYuNiwxOS41LDE3Ni44LDE5LjcsMTc3LjEiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmU7IGZpbGw6ICNGRjAwMDA7Ii8+Cgk8cGF0aCBkPSJNMjA2LjMsMTc3LjFjMC4yLTAuMiwwLjMtMC41LDAuNS0wLjd2LTEwYy0yNS41LTEuNS01My4yLTIuNC04Mi4xLTIuNnYxMy40TDIwNi4zLDE3Ny4xTDIwNi4zLDE3Ny4xeiIgc3R5bGU9ImRpc3BsYXk6IGlubGluZTsgZmlsbDogI0ZGMDAwMDsiLz4KPC9nPgo8Zz4KCTxnIGlkPSJhbnQtd2ViMy1pY29uLXhvci1jaXJjbGUtY29sb3JmdWwtUGFnZS0xIj4KCQk8ZyBpZD0iYW50LXdlYjMtaWNvbi14b3ItY2lyY2xlLWNvbG9yZnVsLURlc2t0b3AiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01MzIuMDAwMDAwLCAtMTIzMS4wMDAwMDApIj4KCQkJPGcgaWQ9ImFudC13ZWIzLWljb24teG9yLWNpcmNsZS1jb2xvcmZ1bC1NYW5pZmVzdCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDkwMC4wMDAwMDApIj4KCQkJCTxnIGlkPSJhbnQtd2ViMy1pY29uLXhvci1jaXJjbGUtY29sb3JmdWwtU09SQU1JVFNVLU1BTklGRVNUTyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTMyLjAwMDAwMCwgMzMxLjAwMDAwMCkiPgoJCQkJCTxwYXRoIGlkPSJhbnQtd2ViMy1pY29uLXhvci1jaXJjbGUtY29sb3JmdWwtU2hhcGVfMTFfIiBkPSJNNzY4LjcsMTc1LjJjNy44LDAuOSwxNS40LDIuNywyMi45LDUuNUw3OTAsMTg1Yy00LTEuNy03LjktMy4xLTEyLjItMy44CgkJCQkJCWMtMy41LTAuOS03LjItMS41LTEwLjgtMkw3NjguNywxNzUuMnogTTc3MS40LDE2NS41YzYuMSwwLjgsMTIsMi4xLDE3LjgsNGwtMS40LDQuM2MtMy0xLjItNi4zLTIuMS05LjUtMi43CgkJCQkJCWMtMi45LTAuNi01LjgtMS4yLTguNy0xLjVMNzcxLjQsMTY1LjV6IE03NzEuOSwxNTZjNi4zLDAuOCwxMi41LDIsMTguNiwzLjdsLTEuNCw0LjNjLTYuMS0yLTEyLjQtMy40LTE4LjgtNEw3NzEuOSwxNTZ6IiBzdHlsZT0iZGlzcGxheTogbm9uZTsgZmlsbDogI0UzMjQyRDsiLz4KCQkJCQk8cGF0aCBpZD0iYW50LXdlYjMtaWNvbi14b3ItY2lyY2xlLWNvbG9yZnVsLVNoYXBlXzEyXyIgZD0iTTgwMC4xLDE1OC42YzEuOCwzLjIsMy4yLDYuNyw0LjMsMTAuNGwtNC4zLDEuNGMtMC45LTMuNy0yLjEtNy4yLTQtMTAuNUw4MDAuMSwxNTguNnoKCQkJCQkJIE04MjUsMTU4LjhjLTAuNSwxLjEtMC44LDIuMy0wLjksMy40Yy0yLjQsMTEuNC04LjEsMTguNS0xOC42LDIzLjZjLTAuOC0xLjUtMS44LTIuOS0zLjEtNGMzLjctMS40LDctMy40LDkuOS02LjEKCQkJCQkJYzIuNy0yLjcsNC45LTUuOSw2LjEtOS44YzEuMS0yLjYsMS43LTUuNSwxLjgtOC40TDgyNSwxNTguOHogTTgwOS4yLDE1Ni45YzEuOCwzLjIsMy4yLDYuNiw0LjMsMTAuMWwtNC4zLDEuNAoJCQkJCQljLTAuOS0zLjUtMi4xLTctNC0xMC4yTDgwOS4yLDE1Ni45eiIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7IGZpbGw6ICNFMzI0MkQ7Ii8+CgkJCQk8L2c+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8cGF0aCBkPSJNNjEyLjEsODEuNHY2NS4yaC0xMS40Vjk0LjNsLTE2LjYsMzguOWgtMTIuMmwtMTYuNS0zOC44djUyLjJoLTEwLjVWODEuNGgxNS41bDE3LjIsNDAuM2gxLjZsMTcuMS00MC4zCgkJTDYxMi4xLDgxLjRMNjEyLjEsODEuNHoiIHN0eWxlPSJkaXNwbGF5OiBub25lOyBmaWxsOiAjRTMyNDJEOyIvPgoJPHBhdGggZD0iTTYyOS4zLDgxLjRoMTEuNXY2NS4yaC0xMS41VjgxLjRMNjI5LjMsODEuNHoiIHN0eWxlPSJkaXNwbGF5OiBub25lOyBmaWxsOiAjRTMyNDJEOyIvPgoJPHBhdGggZD0iTTcwMS4zLDkxLjZoLTE5LjF2NTVoLTExLjV2LTU1aC0xOS4xVjgxLjRoNDkuOEw3MDEuMyw5MS42TDcwMS4zLDkxLjZ6IiBzdHlsZT0iZGlzcGxheTogbm9uZTsgZmlsbDogI0UzMjQyRDsiLz4KCTxwYXRoIGQ9Ik03MDUuNiwxMjcuMWgxMS4zYzAsNS41LDQsMTEuMiwxNS4xLDExLjJjMTAuMSwwLDE0LjgtNC43LDE0LjgtMTAuNWMwLTQuOC00LjEtOC0xMi41LTguOGwtNi4yLTAuNQoJCWMtMTIuMi0xLTIwLjEtOC0yMC4xLTE4LjdjMC0xMi4yLDkuMy0yMC4yLDIzLjUtMjAuMmMxNC40LDAsMjMuNyw4LjEsMjMuNywyMC43aC0xMS4zYzAtNS40LTMuOS0xMC42LTEyLjMtMTAuNgoJCWMtOC4zLDAtMTIuMiw0LjctMTIuMiwxMC4xYzAsNC4zLDMuMSw3LjksOS44LDguNGw2LjIsMC41YzEzLjgsMS4zLDIyLjksNy44LDIyLjksMTljMCwxMi4yLTEwLjMsMjAuNi0yNi4yLDIwLjYKCQlDNzE1LDE0OC4zLDcwNS42LDEzOS40LDcwNS42LDEyNy4xeiIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7IGZpbGw6ICNFMzI0MkQ7Ii8+Cgk8cGF0aCBkPSJNNzY5LjUsMTIwLjV2LTM5SDc4MXYzOS44YzAsOS45LDUuOCwxNi4zLDE2LjMsMTYuM2MxMC40LDAsMTYuMi02LjMsMTYuMi0xNi4zVjgxLjRIODI1djM5CgkJYzAsMTYuOC05LjYsMjcuOS0yNy43LDI3LjlDNzc5LjIsMTQ4LjMsNzY5LjUsMTM3LjMsNzY5LjUsMTIwLjV6IiBzdHlsZT0iZGlzcGxheTogbm9uZTsgZmlsbDogI0UzMjQyRDsiLz4KPC9nPgo8Zz4KCTxwYXRoIGQ9Ik00My45LDExMi45Vjk0LjNoNTkuOFY3NS4ySDQzLjlWNTYuN2gxMzguMnYxOC42aC01OS44djE5LjFoNTkuOHYxOC42aC01OS44bDYwLjEsODkuNAoJCWMyNi42LTIwLjcsNDMuNy01Myw0My43LTg5LjNDMjI2LjEsNTAuNiwxNzUuNSwwLDExMy4xLDBDNTAuNiwwLDAsNTAuNiwwLDExMy4xYzAsMzYuMywxNy4xLDY4LjYsNDMuNyw4OS4zbDYwLjEtODkuNAoJCUMxMDMuOCwxMTIuOSw0My45LDExMi45LDQzLjksMTEyLjl6IiBzdHlsZT0iZmlsbDogI0UzMjQyRDsiLz4KCTxwYXRoIGQ9Ik01OS4yLDIxMi41YzE2LDguNywzNC4zLDEzLjYsNTMuOCwxMy42YzE5LjUsMCwzNy44LTQuOSw1My44LTEzLjZsLTUzLjgtODAuMkw1OS4yLDIxMi41eiIgc3R5bGU9ImZpbGw6ICNFMzI0MkQ7Ii8+CjwvZz4KPC9zdmc+Cg==) */
export const XorCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-xor-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

XorCircleColorful.displayName = 'XorCircleColorful';
