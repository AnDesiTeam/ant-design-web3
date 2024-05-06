// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/shib-colorful.svg';

/**![ShibColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1zaGliLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjQxLjcgNjQ5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NDEuNyA2NDk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCjxnIGlkPSJhbnQtd2ViMy1pY29uLXNoaWItY29sb3JmdWwtR3JvdXBfOTM4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTUzLjM0OCAtMjMyLjAwMykiPgoJPGcgaWQ9ImFudC13ZWIzLWljb24tc2hpYi1jb2xvcmZ1bC1Hcm91cF85MzEiPgoJCTxwYXRoIGlkPSJhbnQtd2ViMy1pY29uLXNoaWItY29sb3JmdWwtUGF0aF84NTczIiBkPSJNMTQyMy4yLDI4OS4xYy0xNi43LDE2LjctMzIsMzQuOC00NS42LDU0LjFsLTQuMy0xLjRjLTI0LjgtOC4xLTUwLjUtMTMuMS03Ni40LTE0LjgKCQkJYy03LjgtMC42LTM2LjktMC42LTQ2LjQsMGMtMjguNywxLjktNTAuNyw2LjItNzUuNywxNC45Yy0xLDAuNC0xLjksMC43LTIuOCwxYy0xNC4xLTE5LjItMjkuOC0zNy4yLTQ3LjEtNTMuNwoJCQljODMtNDIuNSwxODAuMS00Ny42LDI2Ny0xNC4xYzkuMywzLjUsMTguNCw3LjYsMjcuMywxMkwxNDIzLjIsMjg5LjF6IiBzdHlsZT0iZmlsbDogI0YwMDUwMDsiLz4KCQk8cGF0aCBpZD0iYW50LXdlYjMtaWNvbi1zaGliLWNvbG9yZnVsLVBhdGhfODU3NCIgZD0iTTE1NzgsNjY4LjRjLTEyLjYsMzUuOS0zMS41LDY5LjItNTYsOTguMmMtMTMuMywxNS42LTI4LDI5LjktNDMuOCw0Mi45CgkJCWMtMzcsMjkuOC04MC4yLDUxLjEtMTI2LjMsNjIuM2MtNTEsMTIuMy0xMDQuMiwxMi4zLTE1NS4yLDBjLTQ2LjItMTEuMi04OS4zLTMyLjUtMTI2LjMtNjIuM2MtMTUuOC0xMy0zMC41LTI3LjMtNDMuOC00Mi45CgkJCWMtNzAuNS04My4zLTkxLjktMTk3LjctNTYtMzAwLjhjNi44LTE5LjEsMTUuMy0zNy41LDI1LjUtNTVjNC43LTgsMTAuNS0xNywxMy4zLTIwLjdjOS42LDQxLjMsMjEuNCw3Ny42LDI1LjgsOTAuNwoJCQljLTAuMywwLjctMC43LDEuNS0xLjEsMi4yYy0yMy4zLDQ3LjItMzUuOSw5Mi43LTM4LjksMTQxLjFjMCwwLjYtMC4xLDEuMy0wLjEsMS45Yy0wLjgsMTQuNS0wLjQsMjEuNCwyLDMwLjUKCQkJYzcuNSwyOC41LDMwLjYsNTkuOSw2Ni44LDkwLjdjNTkuMyw1MC40LDEzOS43LDg2LjgsMjAwLjYsOTFjNjMuNSw0LjMsMTU3LjItMzIuOCwyMTkuNi04N2M5LjgtOC43LDE5LTE3LjksMjcuNi0yNy43CgkJCWM2LjItNy4yLDE1LjQtMTkuNiwxNC43LTE5LjZjLTAuMiwwLDAtMC4yLDAuNC0wLjRjMC4zLTAuMiwwLjYtMC41LDAuNC0wLjdjLTAuMS0wLjEsMC4xLTAuNCwwLjQtMC41YzAuMy0wLjEsMC41LTAuMywwLjQtMC41CgkJCXMwLTAuNCwwLjQtMC41YzAuMy0wLjEsMC40LTAuNCwwLjMtMC42Yy0wLjEtMC4yLDAtMC40LDAuMi0wLjRjMC4yLDAsMC40LTAuMywwLjQtMC41czAuMi0wLjUsMC40LTAuNWMwLjIsMCwwLjQtMC4yLDAuNC0wLjQKCQkJYzAuMy0wLjgsMC44LTEuNiwxLjMtMi4zYzEuNS0yLjMsNy41LTEzLDguMy0xNC44YzUuNy0xMi45LDkuMy0yNC40LDExLTM1LjljMC44LTUuNSwxLjMtMTUuNiwwLjktMThjLTAuMS0wLjQtMC4xLTEuMS0wLjItMi4yCgkJCWMtMC4yLTItMC4zLTUtMC41LThjLTAuMi00LjUtMC42LTEwLjgtMC45LTEzLjljLTQuMy00NS40LTE1LjktODIuNS0zNy45LTEyMS44Yy0wLjktMS41LTEuNy0zLTIuMi00LjJjLTAuMi0wLjMtMC4zLTAuNi0wLjQtMC44CgkJCXYwYzMuMS05LjMsMTUuOC00OC4yLDI1LjktOTIuN2wwLjIsMC4ybDEuNSwyYzIuNiwzLjUsOS41LDEzLjksMTIuNiwxOC45YzE0LjEsMjMsMjUuMSw0Ny43LDMyLjksNzMuNQoJCQlDMTYwMC43LDU0MSwxNTk5LjIsNjA3LjIsMTU3OCw2NjguNHoiIHN0eWxlPSJmaWxsOiAjRjAwNTAwOyIvPgoJCTxwYXRoIGlkPSJhbnQtd2ViMy1pY29uLXNoaWItY29sb3JmdWwtUGF0aF84NTc1IiBkPSJNMTQ0OC4yLDU0OC45Yy0wLjMsMS42LTUsNi40LTkuNyw5LjljLTEzLjgsMTAuMS0zOC41LDE5LjUtNjMuNiwyNGMtMTQuMywyLjYtMjguNiwzLTMyLjksMC45CgkJCWMtMi44LTEuNC0zLjItMi41LTIuMi02LjFjMi4xLTcuNSw4LjktMTUuNywxOS41LTIzLjRjNS40LTMuOSwyNy4zLTE3LjIsMzcuNS0yMi44YzE2LjgtOS4yLDMwLjQtMTQuNywzOS42LTE2CgkJCWMyLjktMC40LDYuNC0wLjUsNy41LDBjMS44LDAuNywzLjgsNiw0LjYsMTIuNEMxNDQ4LjksNTMxLjIsMTQ0OC43LDU0Ni4yLDE0NDguMiw1NDguOXoiLz4KCQk8cGF0aCBpZD0iYW50LXdlYjMtaWNvbi1zaGliLWNvbG9yZnVsLVBhdGhfODU3NiIgZD0iTTEyMTIuNiw1ODJjLTAuNiwxLjItMy42LDIuNS03LDNjLTMuNCwwLjUtMTMuOCwwLjItMTkuNy0wLjVjLTIxLjItMi44LTQzLjctOS4zLTYwLjEtMTcuMwoJCQljLTkuMi00LjUtMTUuOC05LTIwLjctMTMuOWwtMi44LTIuOWwtMC4zLTMuOGMtMC41LTYuNi0wLjQtMTcsMC40LTIwLjdjMC41LTMuMSwxLjYtNi4xLDMuMS04LjhjMC44LTEsMC44LTEsNC40LTEKCQkJYzQuNCwwLDguMSwwLjcsMTQuMSwyLjZjMTIuMywzLjgsMzAuNiwxMyw1Mi45LDI2LjRjMTguNCwxMSwyNS4zLDE2LjQsMzAuNiwyMy44QzEyMTEuMSw1NzMuNSwxMjEzLjUsNTgwLDEyMTIuNiw1ODJ6Ii8+CgkJPHBhdGggaWQ9ImFudC13ZWIzLWljb24tc2hpYi1jb2xvcmZ1bC1QYXRoXzg1NzciIGQ9Ik0xMzU0LjIsNzIxLjJjMCwwLjMtMS4yLDUuMS0yLjcsMTAuOGMtMS41LDUuNy0yLjcsMTAuMy0yLjcsMTAuNWMtMS4xLDAuMS0yLjEsMC4yLTMuMiwwLjFoLTMuMkwxMzM4LDc1MwoJCQljLTIuNCw1LjctNC42LDExLTQuOSwxMS44bC0wLjYsMS40bC0yLjEtMy40bC0yLjEtMy40di0yNy43bC0wLjgsMC4yYy0xLjcsMC40LTEzLjgsMi0xOS4xLDIuNWMtMjEuOSwyLjItNDMuOSwxLjctNjUuNy0xLjQKCQkJYy0zLjUtMC41LTYuNS0wLjktNi42LTAuOGMtMC4xLDAuMSwwLDYuNSwwLjIsMTQuNGwwLjMsMTQuMmwtMS43LDIuNmMtMC45LDEuNC0xLjgsMi42LTEuOCwyLjdjLTAuMywwLjMtMS4zLTEuMy0zLjYtNS45CgkJCWMtMi41LTQuOC00LjMtOS45LTUuNi0xNS4ybC0wLjctMi45bC0zLjEsMC4ybC0zLjEsMC4zbC0wLjgtMy43Yy0wLjQtMi0wLjktNS4xLTEuMS02LjhsLTAuMy0zLjJsLTIuNi0yLjMKCQkJYy0xLjUtMS4zLTMtMi42LTMuMy0yLjhjLTAuNS0wLjQtMC43LTEuMS0wLjctMS43di0xLjJsMTIuNSwwLjFsMTIuNSwwLjFsMC40LDEuM2wwLjQsMS4zbDQuMywwLjJjMi40LDAuMSwxMCwwLjMsMTYuOCwwLjUKCQkJbDEyLjUsMC4zbDMuMi01bDMuMy01aDQuMmwtMC4xLTEwLjRsLTAuMS0xMC40bC01LjUtMi40Yy0xNy43LTcuOC0yOC4xLTE2LjctMzItMjcuNWMtMC44LTIuMi0wLjgtMy0xLTEzCgkJCWMtMC4xLTkuOS0wLjEtMTAuOCwwLjYtMTNjMS40LTUsNS4zLTguOSwxMC4zLTEwLjJjMS43LTAuNSw2LjItMC41LDI5LjgtMC41bDI3LjgsMC4xbDMuMSwxLjVjMy43LDEuOCw1LjQsMy4xLDcuNSw1LjkKCQkJYzIuNCwzLjIsMy4xLDUuNywzLjEsMTEuOGMwLDguNy0wLjYsMTYuMi0xLjUsMTkuMmMtMS4zLDQuMS0zLjMsOC01LjgsMTEuNWMtNSw2LjQtMTQuMSwxMi44LTIyLjQsMTUuN2wtMi40LDAuOWwwLjEsMTAuNQoJCQlsMC4xLDEwLjVsMi4yLDAuMmwyLjIsMC4ybDMsNC41bDIuOSw0LjVsMTMuNCwwYzcuNCwwLDEzLjksMC4xLDE0LjUsMC4yYzEsMC4yLDEuMiwwLjEsMi4yLTEuNmwxLjItMS44aDExLjUKCQkJQzEzNTEuNiw3MjAuNywxMzU0LjIsNzIwLjksMTM1NC4yLDcyMS4yeiIvPgoJCTxwYXRoIGlkPSJhbnQtd2ViMy1pY29uLXNoaWItY29sb3JmdWwtUGF0aF84NTc4IiBkPSJNMTMwMS40LDc0OS45Yy0xLjksMS4xLTMuMiwxLjYtMy41LDEuNGMtMC4zLTAuMS0xLjctMS4zLTMuMi0yLjRsLTIuNy0yLjJsLTIuOCwzYy02LjEsNi42LTYuMyw2LjktOC4xLDcKCQkJYy0yLjgsMC4zLTMuNC0wLjItNi44LTUuM2MtMS44LTIuNi0zLjItNC44LTMuMi00LjhjMCwwLTEuMy0wLjItMi44LTAuM2wtMi44LTAuM2wtMS4zLDIuN2wtMS4zLDIuN2wtMi4zLTAuNwoJCQljLTEuOC0wLjYtMy42LTEuMy01LjMtMi4xbC0zLTEuNXYtNS43bDI2LjYsMC4xbDI2LjYsMC4xbDAuMSwyLjdDMTMwNS43LDc0Ny41LDEzMDUuOCw3NDcuNCwxMzAxLjQsNzQ5Ljl6Ii8+Cgk8L2c+Cgk8cGF0aCBpZD0iYW50LXdlYjMtaWNvbi1zaGliLWNvbG9yZnVsLVBhdGhfODU3OSIgZD0iTTE1NTEuNCw2MjcuOWMtMC4xLTAuNC0wLjEtMS4xLTAuMi0yLjJjLTI0LTIuNi05Mi41LTQuMi0xNTYuMSw0OC4zYzAsMC0yMC41LTk0LTExNi41LTk0CgkJcy0xMzEuNiw5NC0xMzEuNiw5NGMtNTMuOC01Ny45LTEyNS44LTUzLjctMTUxLjgtNDkuOWMwLDAuNi0wLjEsMS4zLTAuMSwxLjljLTAuOCwxNC41LTAuNCwyMS40LDIsMzAuNQoJCWM3LjUsMjguNSwzMC42LDU5LjksNjYuOCw5MC43YzU5LjMsNTAuNCwxMzkuNyw4Ni44LDIwMC42LDkxYzYzLjUsNC4zLDE1Ny4yLTMyLjgsMjE5LjYtODdjOS44LTguNywxOS0xNy45LDI3LjYtMjcuNwoJCWM2LjItNy4yLDE1LjQtMTkuNiwxNC43LTE5LjZjLTAuMiwwLDAtMC4yLDAuNC0wLjRjMC4zLTAuMiwwLjYtMC41LDAuNC0wLjdjLTAuMS0wLjEsMC4xLTAuNCwwLjQtMC41YzAuMy0wLjEsMC41LTAuMywwLjQtMC41CgkJczAtMC40LDAuNC0wLjVjMC4zLTAuMSwwLjQtMC40LDAuMy0wLjZjLTAuMS0wLjIsMC0wLjQsMC4yLTAuNGMwLjIsMCwwLjQtMC4zLDAuNC0wLjVzMC4yLTAuNSwwLjQtMC41YzAuMiwwLDAuNC0wLjIsMC40LTAuNAoJCWMwLjMtMC44LDAuOC0xLjYsMS4zLTIuM2MxLjUtMi4zLDcuNS0xMyw4LjMtMTQuOGM1LjctMTIuOSw5LjMtMjQuNCwxMS0zNS45QzE1NTEuMyw2NDAuNCwxNTUxLjgsNjMwLjMsMTU1MS40LDYyNy45egoJCSBNMTMwMS40LDc0OS45Yy0xLjksMS4xLTMuMiwxLjYtMy41LDEuNGMtMC4zLTAuMS0xLjctMS4zLTMuMi0yLjRsLTIuNy0yLjJsLTIuOCwzYy02LjEsNi42LTYuMyw2LjktOC4xLDcKCQljLTIuOCwwLjMtMy40LTAuMi02LjgtNS4zYy0xLjgtMi42LTMuMi00LjgtMy4yLTQuOGMwLDAtMS4zLTAuMi0yLjgtMC4zbC0yLjgtMC4zbC0xLjMsMi43bC0xLjMsMi43bC0yLjMtMC43CgkJYy0xLjgtMC42LTMuNi0xLjMtNS4zLTIuMWwtMy0xLjV2LTUuN2wyNi42LDAuMWwyNi42LDAuMWwwLjEsMi43QzEzMDUuNyw3NDcuNSwxMzA1LjgsNzQ3LjQsMTMwMS40LDc0OS45eiBNMTM1MS40LDczMS45CgkJYy0xLjUsNS43LTIuNywxMC4zLTIuNywxMC41Yy0xLjEsMC4xLTIuMSwwLjItMy4yLDAuMWgtMy4yTDEzMzgsNzUzYy0yLjQsNS43LTQuNiwxMS00LjksMTEuOGwtMC42LDEuNGwtMi4xLTMuNGwtMi4xLTMuNHYtMjcuNwoJCWwtMC44LDAuMmMtMS43LDAuNC0xMy44LDItMTkuMSwyLjVjLTIxLjksMi4yLTQzLjksMS43LTY1LjctMS40Yy0zLjUtMC41LTYuNS0wLjktNi42LTAuOGMtMC4xLDAuMSwwLDYuNSwwLjIsMTQuNGwwLjMsMTQuMgoJCWwtMS43LDIuNmMtMC45LDEuNC0xLjgsMi42LTEuOCwyLjdjLTAuMywwLjMtMS4zLTEuMy0zLjYtNS45Yy0yLjUtNC44LTQuMy05LjktNS42LTE1LjJsLTAuNy0yLjlsLTMuMSwwLjJsLTMuMSwwLjNsLTAuOC0zLjcKCQljLTAuNC0yLTAuOS01LjEtMS4xLTYuOGwtMC4zLTMuMmwtMi42LTIuM2MtMS41LTEuMy0zLTIuNi0zLjMtMi44Yy0wLjUtMC40LTAuNy0xLjEtMC43LTEuN3YtMS4ybDEyLjUsMC4xbDEyLjUsMC4xbDAuNCwxLjMKCQlsMC40LDEuM2w0LjMsMC4yYzIuNCwwLjEsMTAsMC4zLDE2LjgsMC41bDEyLjUsMC4zbDMuMi01bDMuMy01aDQuMmwtMC4xLTEwLjRsLTAuMS0xMC40bC01LjUtMi40Yy0xNy43LTcuOC0yOC4xLTE2LjctMzItMjcuNQoJCWMtMC44LTIuMi0wLjgtMy0xLTEzYy0wLjEtOS45LTAuMS0xMC44LDAuNi0xM2MxLjQtNSw1LjMtOC45LDEwLjMtMTAuMmMxLjctMC41LDYuMi0wLjUsMjkuOC0wLjVsMjcuOCwwLjFsMy4xLDEuNQoJCWMzLjcsMS44LDUuNCwzLjEsNy41LDUuOWMyLjQsMy4yLDMuMSw1LjcsMy4xLDExLjhjMCw4LjctMC42LDE2LjItMS41LDE5LjJjLTEuMyw0LjEtMy4zLDgtNS44LDExLjVjLTUsNi40LTE0LjEsMTIuOC0yMi40LDE1LjcKCQlsLTIuNCwwLjlsMC4xLDEwLjVsMC4xLDEwLjVsMi4yLDAuMmwyLjIsMC4ybDMsNC41bDIuOSw0LjVsMTMuNCwwYzcuNCwwLDEzLjksMC4xLDE0LjUsMC4yYzEsMC4yLDEuMiwwLjEsMi4yLTEuNmwxLjItMS44aDExLjUKCQljOC45LDAsMTEuNSwwLjEsMTEuNSwwLjRDMTM1NC4yLDcyMS40LDEzNTIuOSw3MjYuMywxMzUxLjQsNzMxLjl6IiBzdHlsZT0iZmlsbDogI0ZGRkZGRjsiLz4KCTxwYXRoIGlkPSJhbnQtd2ViMy1pY29uLXNoaWItY29sb3JmdWwtUGF0aF84NTgwIiBkPSJNOTk1LDYyNC4xYy02LjMsMC45LTEwLDEuOS0xMCwxLjkiIHN0eWxlPSJmaWxsOiBub25lOyIvPgoJPHBhdGggaWQ9ImFudC13ZWIzLWljb24tc2hpYi1jb2xvcmZ1bC1QYXRoXzg1ODEiIGQ9Ik0xNTYwLjEsNjI3YzAsMC0zLjItMC43LTguOS0xLjMiIHN0eWxlPSJmaWxsOiBub25lOyIvPgoJPHBhdGggaWQ9ImFudC13ZWIzLWljb24tc2hpYi1jb2xvcmZ1bC1QYXRoXzg1ODIiIGQ9Ik0xNTUwLjYsNjE3LjdjLTAuMi00LjUtMC42LTEwLjgtMC45LTEzLjljLTQuMy00NS40LTE1LjktODIuNS0zNy45LTEyMS44CgkJYy0wLjktMS41LTEuNy0zLTIuMi00LjJjLTAuMi0wLjMtMC4zLTAuNi0wLjQtMC44djBjMy4xLTkuMywxNS44LTQ4LjIsMjUuOS05Mi43YzEzLjctNjAuNCwyMi40LTEzMS00LjItMTUyLjIKCQljMCwwLTQ2LTMuNC0xMDcuNiw1N2MtMTYuNywxNi43LTMyLDM0LjgtNDUuNiw1NC4xbC00LjMtMS40Yy0yNC44LTguMS01MC41LTEzLjEtNzYuNC0xNC44Yy03LjgtMC42LTM2LjktMC42LTQ2LjQsMAoJCWMtMjguNywxLjktNTAuNyw2LjItNzUuNywxNC45Yy0xLDAuNC0xLjksMC43LTIuOCwxYy0xNC4xLTE5LjItMjkuOC0zNy4yLTQ3LjEtNTMuN2MtNjQuMS02MC43LTExMS44LTU3LjItMTExLjgtNTcuMgoJCWMtMjguMiwyMS45LTE4LjYsOTUuNy00LDE1OC4xYzkuNiw0MS4zLDIxLjQsNzcuNiwyNS44LDkwLjdjLTAuMywwLjctMC43LDEuNS0xLjEsMi4yYy0yMy4zLDQ3LjItMzUuOSw5Mi43LTM4LjksMTQxLjEKCQljMjYuMS0zLjgsOTgtOC4xLDE1MS45LDQ5LjljMCwwLDM1LjYtOTQsMTMxLjYtOTRzMTE2LjUsOTQsMTE2LjUsOTRjNjMuNi01Mi41LDEzMi4xLTUwLjgsMTU2LjEtNDguMwoJCUMxNTUxLDYyMy43LDE1NTAuOCw2MjAuNywxNTUwLjYsNjE3Ljd6IE0xMDUzLjksNDQzLjFjMCwwLTM3LjQtOTMuNS0yNy44LTE0Ni45YzAsMCwwLDAsMCwwYzEuNi05LDQuNi0xNi45LDkuMy0yMi45CgkJYzAsMCw0Mi40LDQuMiwxMTAuOCw4MC4yYzAsMC0xMyw2LjMtMzAuNCwxOS43YzAsMC0wLjEsMC4xLTAuMiwwLjFDMTA5Ni43LDM4Ny44LDEwNzIuNSw0MTAuOCwxMDUzLjksNDQzLjFMMTA1My45LDQ0My4xegoJCSBNMTIxMi42LDU4MmMtMC42LDEuMi0zLjYsMi41LTcsM2MtMy40LDAuNS0xMy44LDAuMi0xOS43LTAuNWMtMjEuMi0yLjgtNDMuNy05LjMtNjAuMS0xNy4zYy05LjItNC41LTE1LjgtOS0yMC43LTEzLjlsLTIuOC0yLjkKCQlsLTAuMy0zLjhjLTAuNS02LjYtMC40LTE3LDAuNC0yMC43YzAuNS0zLjEsMS42LTYuMSwzLjEtOC44YzAuOC0xLDAuOC0xLDQuNC0xYzQuNCwwLDguMSwwLjcsMTQuMSwyLjZjMTIuMywzLjgsMzAuNiwxMyw1Mi45LDI2LjQKCQljMTguNCwxMSwyNS4zLDE2LjQsMzAuNiwyMy44QzEyMTEuMSw1NzMuNSwxMjEzLjUsNTgwLDEyMTIuNiw1ODJ6IE0xNDQ4LjIsNTQ4LjljLTAuMywxLjYtNSw2LjQtOS43LDkuOQoJCWMtMTMuOCwxMC4xLTM4LjUsMTkuNS02My42LDI0Yy0xNC4zLDIuNi0yOC42LDMtMzIuOSwwLjljLTIuOC0xLjQtMy4yLTIuNS0yLjItNi4xYzIuMS03LjUsOC45LTE1LjcsMTkuNS0yMy40CgkJYzUuNC0zLjksMjcuMy0xNy4yLDM3LjUtMjIuOGMxNi44LTkuMiwzMC40LTE0LjcsMzkuNi0xNmMyLjktMC40LDYuNC0wLjUsNy41LDBjMS44LDAuNywzLjgsNiw0LjYsMTIuNAoJCUMxNDQ4LjksNTMxLjIsMTQ0OC43LDU0Ni4yLDE0NDguMiw1NDguOXogTTE0MzEuNiwzNzMuMmwtMC4yLTAuMWMtMTYuOC0xMy40LTI5LjQtMTkuNy0yOS40LTE5LjdjNjYuMS03NiwxMDctODAuMiwxMDctODAuMgoJCWM0LjUsNi4xLDcuNCwxMy45LDksMjIuOWMwLDAsMCwwLDAsMGM5LjMsNTMuNC0yNi44LDE0Ny0yNi44LDE0N0MxNDc2LjEsNDE2LjIsMTQ1NS44LDM5Mi40LDE0MzEuNiwzNzMuMkwxNDMxLjYsMzczLjJ6IiBzdHlsZT0iZmlsbDogI0ZGQTQwOTsiLz4KCTxwYXRoIGlkPSJhbnQtd2ViMy1pY29uLXNoaWItY29sb3JmdWwtUGF0aF84NTgzIiBkPSJNMTM3Ny42LDM0My4yYy0wLjIsMC4yLTAuMywwLjUtMC41LDAuNyIgc3R5bGU9ImZpbGw6IG5vbmU7Ii8+Cgk8cGF0aCBpZD0iYW50LXdlYjMtaWNvbi1zaGliLWNvbG9yZnVsLVBhdGhfODU4NCIgZD0iTTE1MDkuMSw0NzYuOWMtMC41LDEuNC0wLjcsMi4xLTAuNywyLjEiIHN0eWxlPSJmaWxsOiBub25lOyIvPgoJPGcgaWQ9ImFudC13ZWIzLWljb24tc2hpYi1jb2xvcmZ1bC1Hcm91cF85MzQiPgoJCTxnIGlkPSJhbnQtd2ViMy1pY29uLXNoaWItY29sb3JmdWwtR3JvdXBfOTMzIj4KCQkJPGcgaWQ9ImFudC13ZWIzLWljb24tc2hpYi1jb2xvcmZ1bC1Hcm91cF85MzIiPgoJCQkJPHBhdGggaWQ9ImFudC13ZWIzLWljb24tc2hpYi1jb2xvcmZ1bC1QYXRoXzg1ODUiIGQ9Ik0xNTE4LjEsMjk2LjFjLTcuOC0xLTQ0LjctMS4yLTg2LjUsNzcuMWwtMC4yLTAuMWMtMTYuOC0xMy40LTI5LjQtMTkuNy0yOS40LTE5LjcKCQkJCQljNjYuMS03NiwxMDctODAuMiwxMDctODAuMkMxNTEzLjYsMjc5LjMsMTUxNi41LDI4Ny4xLDE1MTguMSwyOTYuMXoiIHN0eWxlPSJmaWxsOiAjRkY5MzAwOyIvPgoJCQk8L2c+CgkJCTxwYXRoIGlkPSJhbnQtd2ViMy1pY29uLXNoaWItY29sb3JmdWwtUGF0aF84NTg2IiBkPSJNMTQ5MS4zLDQ0My4xYy0xNS4yLTI3LTM1LjQtNTAuNy01OS43LTY5LjljNDEuOC03OC4zLDc4LjYtNzguMSw4Ni41LTc3LjFjMCwwLDAsMCwwLDAKCQkJCUMxNTI3LjQsMzQ5LjYsMTQ5MS4zLDQ0My4xLDE0OTEuMyw0NDMuMXoiIHN0eWxlPSJmaWxsOiAjRkY4MzAwOyIvPgoJCQk8cGF0aCBpZD0iYW50LXdlYjMtaWNvbi1zaGliLWNvbG9yZnVsLVBhdGhfODU4NyIgZD0iTTE1MTkuNiwyOTYuNGMtMC41LTAuMS0xLTAuMi0xLjUtMC4zTDE1MTkuNiwyOTYuNHoiIHN0eWxlPSJmaWxsOiAjRkY4MzAwOyIvPgoJCTwvZz4KCTwvZz4KCTxwYXRoIGlkPSJhbnQtd2ViMy1pY29uLXNoaWItY29sb3JmdWwtUGF0aF84NTg4IiBkPSJNMTE3NS4xLDM0Ny4xYy0xLTEuNC0yLjEtMi44LTMuMS00LjIiIHN0eWxlPSJmaWxsOiBub25lOyIvPgoJPHBhdGggaWQ9ImFudC13ZWIzLWljb24tc2hpYi1jb2xvcmZ1bC1QYXRoXzg1ODkiIGQ9Ik0xMDM1LDQ4MC44YzEuMSwzLjQsMS44LDUuMiwxLjgsNS4yIiBzdHlsZT0iZmlsbDogbm9uZTsiLz4KCTxnIGlkPSJhbnQtd2ViMy1pY29uLXNoaWItY29sb3JmdWwtR3JvdXBfOTM3Ij4KCQk8ZyBpZD0iYW50LXdlYjMtaWNvbi1zaGliLWNvbG9yZnVsLUdyb3VwXzkzNiI+CgkJCTxnIGlkPSJhbnQtd2ViMy1pY29uLXNoaWItY29sb3JmdWwtR3JvdXBfOTM1Ij4KCQkJCTxwYXRoIGlkPSJhbnQtd2ViMy1pY29uLXNoaWItY29sb3JmdWwtUGF0aF84NTkwIiBkPSJNMTE0Ni4yLDM1My40YzAsMC0xMyw2LjMtMzAuNCwxOS43YzAsMC0wLjEsMC4xLTAuMiwwLjFjLTQzLjMtNzguNC04MS40LTc4LjEtODkuNi03Ny4xCgkJCQkJYzEuNi05LDQuNi0xNi45LDkuMy0yMi45QzEwMzUuNCwyNzMuMiwxMDc3LjgsMjc3LjQsMTE0Ni4yLDM1My40eiIgc3R5bGU9ImZpbGw6ICNGRjkzMDA7Ii8+CgkJCTwvZz4KCQkJPHBhdGggaWQ9ImFudC13ZWIzLWljb24tc2hpYi1jb2xvcmZ1bC1QYXRoXzg1OTEiIGQ9Ik0xMTE1LjcsMzczLjJjLTE5LDE0LjYtNDMuMiwzNy41LTYxLjgsNjkuOWMwLDAtMzcuNC05My41LTI3LjgtMTQ3YzAsMCwwLDAsMCwwCgkJCQlDMTAzNC4yLDI5NS4xLDEwNzIuNCwyOTQuOSwxMTE1LjcsMzczLjJ6IiBzdHlsZT0iZmlsbDogI0ZGODMwMDsiLz4KCQkJPHBhdGggaWQ9ImFudC13ZWIzLWljb24tc2hpYi1jb2xvcmZ1bC1QYXRoXzg1OTIiIGQ9Ik0xMDI2LjEsMjk2LjFjLTAuNSwwLjEtMS4xLDAuMi0xLjYsMC4zTDEwMjYuMSwyOTYuMXoiIHN0eWxlPSJmaWxsOiAjRkY4MzAwOyIvPgoJCTwvZz4KCTwvZz4KCTxwYXRoIGlkPSJhbnQtd2ViMy1pY29uLXNoaWItY29sb3JmdWwtUGF0aF84NTkzIiBkPSJNMTM5MC4xLDQ5NWMwLDAtMzIsMi0yOC0yM3MyOS0yOCwzNi0yN3MzNSwxMSwzMCwzMnMtMTIsMTctMTYsMThTMTM5MC4xLDQ5NSwxMzkwLjEsNDk1eiIgc3R5bGU9ImZpbGw6ICNGRkZGRkY7Ii8+Cgk8cGF0aCBpZD0iYW50LXdlYjMtaWNvbi1zaGliLWNvbG9yZnVsLVBhdGhfODU5NCIgZD0iTTExNTQuMSw0OTVjMCwwLTMyLDItMjgtMjNzMjktMjgsMzYtMjdzMzUsMTEsMzAsMzJzLTEyLDE3LTE2LDE4UzExNTQuMSw0OTUsMTE1NC4xLDQ5NXoiIHN0eWxlPSJmaWxsOiAjRkZGRkZGOyIvPgo8L2c+Cjwvc3ZnPgo=) */
export const ShibColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-shib-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

ShibColorful.displayName = 'ShibColorful';