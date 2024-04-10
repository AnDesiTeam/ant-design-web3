// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/steem-circle-colorful.svg';

/**![SteemCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NDQo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMi4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+DQ0KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZlcnNpb249IjEuMSIgaWQ9ImFudC13ZWIzLWljb24tc3RlZW0tY2lyY2xlLWNvbG9yZnVsLUxvZ28iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTkwLjkgNTkwLjkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU5MC45IDU5MC45OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQ0KDQ0KPGc+DQ0KCTxwYXRoIGQ9Ik0yOTUuNSwwQzEzMi4zLDAsMCwxMzIuMywwLDI5NS41czEzMi4zLDI5NS41LDI5NS41LDI5NS41czI5NS41LTEzMi4zLDI5NS41LTI5NS41UzQ1OC43LDAsMjk1LjUsMHoNDQoJCSBNMjIxLjYsMzk3LjZsLTIuOCwyLjhjLTUuOCw1LjgtMTIsMTEuMy0xOC40LDE2LjRsLTcuNCw1LjhjLTAuNSwwLjQtMS4xLDAuNi0xLjcsMC42Yy0wLjUsMC0xLTAuMS0xLjQtMC40DQ0KCQljLTEtMC42LTEuNS0xLjctMS4yLTIuOWwyLjktMTMuMWMzLjItMTQuMiwyLjUtMjkuMS0yLTQzbC0xLjYtNC44Yy0xLjgtNS42LTQtMTEuMS02LjMtMTYuNWwwLDBMMTQ3LjYsMjYybC0zLjctMTENDQoJCWMtMS4xLTMuNC0xLjktNi45LTIuMy0xMC41bC0wLjYtNS41Yy0xLjctMTUuNSwzLjYtMzAuNywxNC42LTQxLjdsMi44LTIuOGM1LjgtNS44LDEyLTExLjMsMTguNC0xNi40bDcuNC01LjgNDQoJCWMwLjktMC43LDIuMS0wLjgsMy4xLTAuMmMxLDAuNiwxLjUsMS43LDEuMiwyLjlsLTIuOSwxMy4xYy0zLjIsMTQuMi0yLjUsMjkuMSwyLDQzbDEuNiw0LjhjMS44LDUuNiw0LDExLjEsNi4zLDE2LjVsMzQuMiw4MC41DQ0KCQlsMy43LDExYzEuMSwzLjQsMS45LDYuOSwyLjMsMTAuNWwwLjYsNS41QzIzNy45LDM3MS4zLDIzMi42LDM4Ni42LDIyMS42LDM5Ny42eiBNMzM3LDQyNGwtMy42LDMuNmMtNy4zLDcuMy0xNS4xLDE0LjMtMjMuMiwyMC42DQ0KCQlsLTkuNiw3LjZjLTAuNSwwLjQtMS4yLDAuNi0xLjgsMC42Yy0wLjUsMC0xLjEtMC4yLTEuNi0wLjVjLTEuMS0wLjctMS42LTEuOS0xLjMtMy4xbDMuOC0xNi45YzQtMTgsMy4xLTM2LjgtMi42LTU0LjNsLTItNi4xDQ0KCQljLTIuMy03LjEtNS0xNC4xLTgtMjAuOWwwLDBMMjQ0LDI1My4xbC00LjYtMTMuOGMtMS40LTQuMi0yLjQtOC43LTIuOS0xMy4xbC0wLjgtN2MtMi4yLTE5LjQsNC41LTM4LjQsMTguMi01Mi4zbDMuNi0zLjYNDQoJCWM3LjMtNy4zLDE1LjEtMTQuMywyMy4yLTIwLjZsOS42LTcuNmMxLTAuOCwyLjMtMC45LDMuNC0wLjJjMS4xLDAuNywxLjYsMS45LDEuMywzLjFsLTMuOCwxNi45Yy00LDE4LTMuMSwzNi44LDIuNiw1NC4zbDIsNi4xDQ0KCQljMi4zLDcsNSwxNC4xLDgsMjAuOWw0My4xLDEwMS42bDQuNiwxMy44YzEuNCw0LjIsMi40LDguNywyLjksMTMuMWwwLjgsN0MzNTcuNCwzOTEuMSwzNTAuNyw0MTAuMiwzMzcsNDI0eiBNNDM1LjQsMzk3LjZsLTIuOCwyLjgNDQoJCWMtNS44LDUuOC0xMiwxMS4zLTE4LjQsMTYuNGwtNy40LDUuOGMtMC41LDAuNC0xLjEsMC42LTEuNywwLjZjLTAuNSwwLTEtMC4xLTEuNC0wLjRjLTEtMC42LTEuNS0xLjctMS4yLTIuOWwyLjktMTMuMQ0NCgkJYzMuMi0xNC4yLDIuNS0yOS4xLTItNDNsLTEuNi00LjhjLTEuOC01LjYtNC0xMS4xLTYuMy0xNi41bDAsMEwzNjEuMywyNjJsLTMuNy0xMWMtMS4xLTMuNC0xLjktNi45LTIuMy0xMC41bC0wLjYtNS41DQ0KCQljLTEuNy0xNS41LDMuNi0zMC43LDE0LjYtNDEuN2wyLjgtMi44YzUuOC01LjgsMTItMTEuMywxOC40LTE2LjRsNy40LTUuOGMwLjktMC43LDIuMS0wLjgsMy4xLTAuMmMxLDAuNiwxLjUsMS43LDEuMiwyLjkNDQoJCWwtMi45LDEzLjFjLTMuMiwxNC4yLTIuNSwyOS4xLDIsNDNsMS42LDQuOGMxLjgsNS42LDQsMTEuMSw2LjMsMTYuNWwzNC4yLDgwLjVsMy43LDExYzEuMSwzLjQsMS45LDYuOSwyLjMsMTAuNWwwLjYsNS41DQ0KCQlDNDUxLjcsMzcxLjMsNDQ2LjQsMzg2LjYsNDM1LjQsMzk3LjZ6IiBzdHlsZT0iZmlsbDogIzE3MUZDOTsiLz4NDQo8L2c+DQ0KPC9zdmc+DQ0K) */
export const SteemCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-steem-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

SteemCircleColorful.displayName = 'SteemCircleColorful';
