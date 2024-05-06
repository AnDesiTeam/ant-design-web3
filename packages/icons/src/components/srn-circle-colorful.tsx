// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/srn-circle-colorful.svg';

/**![SrnCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiBmaWxsPSIjMWMxYzFjIiByPSIxNiIvPjxwYXRoIGQ9Ik0xNS43MTUgMTMuNDMzYy4zMDYuMTI1LjYxMi4wNjIuODU3IDAgLjE4NC42MjQuNDkgMS4xODUuNzk1IDEuNDM0LS4xODMgMS41Ni0uNzM0IDIuMTIxLTEuMzQ2IDIuMTIxLS44NTYgMC0xLjI4NS0xLjgwOS0xLjI4NS0yLjEyLjE4NC0uMTI1LjczNS0uNS45OC0xLjQzNXptLS45MTggNS40ODljLjM2OC0uMzEyLjYxMi0uODExLjkxOC0xLjYyMi4yNDUuMTI1LjYxMi4wNjIuODU3IDAgLjE4NC44NzMuMzY3IDEuNDM1Ljc5NSAxLjY4NC0uMTIyLjk5OC0uNzM0IDEuNjg0LTEuMjg1IDEuNjg0LS43OTUgMC0xLjE2Mi0xLjI0Ny0xLjI4NS0xLjc0NnptLTQuODk1IDEuOTMzYy4yNDUtLjMxMi4yNDUtLjgxLjEyMy0xLjc0Ni4xODMuMDYyLjM2Ny4wNjIuNDkgMCAuMzY2Ljg3My42NzIgMS40MzQgMS4xNjIgMS43NDYuMDYxLjQzNyAwIC45MzYtLjE4NC45OTgtLjY3My4zMTItMS4yODUtLjQ5OS0xLjU5LS45OTh6bS0yLjU3LTEuNjg0Yy4xMjMgMCAuMTg0IDAgLjMwNi4wNjMuNDI5IDEuMTIyIDEuMTYzIDEuNzQ2IDEuMTYzIDEuNzQ2LjI0NS40OTkuMzY3Ljk5OC4xODMuOTk4LS41NS4wNjItLjk3OS0uMzEyLTEuNDA3LTEuMTIzLjA2MS0uMTg3IDAtLjMxMi0uMjQ1LTEuNjg0em0tMS42NTIgMGMuNjEyIDIuNjIgMS43NzUgMi40OTUgMS43MTQgMi4zNy0uMjQ1LS40MzYtLjQ5LS42MjMtLjczNS0uODEtLjU1LS41NjItLjk3OS0xLjc0Ny0uOTc5LTEuNTZ6bTcuNDY1IDEuNjg0Yy40MjktLjMxMi40OS0uOTk4LjU1MS0xLjg3LjI0NS4wNjEuNTUuMDYxLjczNCAwIC4xMjMuNTYuMzA2IDEuMzcxLjg1NyAxLjc0Ni0uMDYxLjY4Ni0uMjQ1IDEuMDYtLjY3MyAxLjEyMi0uMzA2LjEyNS0xLjE2My4xMjUtMS40NjktLjk5OHptLTUuMjYyLTEuOTMzYy4yNDUtLjMxMi4zMDYtLjgxMS4zNjctMS40OTcuMTg0LjA2Mi40MjkuMDYyLjU1IDAgLjE4NC44MS40OSAxLjMxLjg1OCAxLjU2LjEyMiAxLjMwOSAwIDEuNzQ2LS4yNDUgMS43NDYtLjU1IDAtMS4yODUtMS4xODYtMS41My0xLjgxem0tMS44OTcgMGMwLS4xMjUuMDYxLS45MzYuMTIzLTEuNDk3aC4yNDRjLjMwNiAxLjE4NS43MzUgMS41Ni43MzUgMS41Ni4zMDYgMS40MzQuMzA2IDEuODA4LjA2IDEuNjgzLS41NS0uMTg3LS45NzgtMS4yNDctMS4xNjItMS43NDZ6bTQuODk1IDBjLjMwNi0uMjUuNDktLjY4Ni42MTItMS40OTcuMzA2LjEyNC42MTIuMDYyLjc5NiAwIC4xODMuODEuNDkgMS4zMS45MTggMS41NiAwIC42ODUtLjA2MiAxLjgwOC0uOTE4IDEuNjItLjczNS0uMTg2LTEuMzQ2LTEuNDM0LTEuNDA4LTEuNjgzem0tLjU1LS4xODdjLS43MzUgMC0xLjE2My0xLjE4Ni0xLjE2My0xLjU2LjM2Ny0uMzc0LjU1LTEuMDYuNzM0LTIuMjQ1LjEyMy4wNjIuMzA2LjA2Mi40OSAwIC4wNjEgMS4zMS40MjggMS44NzEuNzM0IDIuMTgzLS4xMjIgMS4wNi0uNDI4IDEuNjIyLS43OTUgMS42MjJ6bS0zLjc5NC0xLjU2Yy4xMjItLjI1LjEyMi0uMzEyLjQ5LTIuMjQ1aC4zMDVjMCAxLjMxLjM2NyAxLjkzMy41NTEgMi4xODMtLjA2MS42ODYuMDYxIDEuNjIyLS40OSAxLjYyMi0uMjQ0IDAtLjU1LS4zMTItLjg1Ni0xLjU2em0tMS4yMjQtMi4xODNjLjE4NC4wNjMuMDYxIDEuNjg0LjMwNiAyLjI0NiAwIDAgMCAxLjU1OS0uMTIyIDEuNDM0LS45MTgtMS4xMjMtLjMwNi0zLjc0Mi0uMTg0LTMuNjh6bTcuMzQzIDIuMTgzYy40MjgtLjMxMi42NzMtLjk5OCAxLjA0LTIuMjQ1LjI0NS4wNjIuNTUuMDYyLjczNCAwIC4xMjMuOTM1LjM2NyAxLjYyMi44NTcgMi4xMi0uMTIyLjk5OC0uNjEyIDEuNjg1LTEuMjI0IDEuNjg1LS45NzkgMC0xLjM0Ni0xLjM3My0xLjQwNy0xLjU2em0tNS4wMTgtMi40MzJjLjQ5LS4xODcuNzk2LTEuMjQ4Ljg1Ny0xLjM3M2EuMzY3LjM2NyAwIDAgMCAuNDkgMGMwIC44MTEuMjQ0IDEuMTg2LjQyOCAxLjMxLS4xODQgMS4wNi0uNDI5IDIuMzA4LS45OCAyLjMwOC0uNDg5IDAtLjczNC0xLjEyMy0uNzk1LTIuMjQ1em0tMS41MyAyLjMwN2MtLjQyOCAwLS41NS0xLjYyMS0uNDI4LTIuMzA3IDAgMCAuMzY3LS41NjIuNjEyLTEuMzczLjA2MSAwIC4xODQuMDYzLjI0NSAwLS4wNjEuODExLjA2MSAxLjE4Ni4xODMgMS4zNzMgMCAwLS4zMDUgMi4zMDctLjYxMSAyLjMwN3ptNC42NTEtMi4zMDdjLjI0NS0uMTI1LjczNC0uODExLjk3OS0xLjQzNS4yNDUuMTI1LjQ5LjEyNS43OTUuMDYyLjEyMy42ODcuMzA2IDEuMTIzLjczNSAxLjM3My0uMTg0IDEuMTIyLS41NTEgMi4yNDUtMS4zNDYgMi4yNDUtLjczNSAwLTEuMTAyLTEuNDk3LTEuMTYzLTIuMjQ1em0uNTUtMS42ODRjLS4zNjYuOTk4LS43MzQgMS41NTktMS4yMjMgMS41NTktLjYxMiAwLS42NzMtMS4zMS0uNjczLTEuNDM1LjQ5LS4zNzQuODU2LTEuMTIyIDEuMTYyLTEuNzQ2aC40MjljLS4xMjMuOTM1LjEyMiAxLjM3Mi4zMDYgMS42MjJ6bS0yLjk5OC0xLjU2Yy0uMzA2Ljg3My0uMTgzIDEuMzEtLjA2IDEuNjIyLS40OSAxLjI0Ny0uNzM1IDEuNTYtMS4xMDIgMS41Ni0uMzY3LS4wNjMtLjM2Ny0uODEyLS4yNDUtMS40MzUuMzY3LS4yNSAxLjE2My0xLjY4NCAxLjE2My0xLjc0N3ptLTEuNzc0LjA2M2MuMTgzLS4wNjMtLjQ5Ljg3My0uNDI4IDEuMzEuMDYuNjIzLS42NzQgMS42ODQtLjczNSAxLjYyMS0uMjQ0LS4wNjIuMjQ1LTIuMzA4IDEuMTYzLTIuOTMxem04LjY4OSAxLjQ5N2MtLjE4NC42ODYtLjQyOSAxLjU1OS0xLjQ2OSAxLjU1OS0uNTUtLjA2Mi0uODU2LS44MS0uOTc5LTEuNDM1LjYxMi0uNDM2LjkxOC0xLjE4NSAxLjEwMi0xLjc0Ni4xODMuMDYyLjQ5LjA2Mi42NzMgMCAuMTIyLjkzNS40MjggMS4zNzIuNjczIDEuNjIyem0tOC4zMjItMS42ODVjLjEyMi0uMDYyLjkxOC0xLjEyMiAxLjM0Ni0xLjEyMi4yNDUuMDYyLS40MjguNjg2LS4zNjcuOTk4LS4xODQuMzEyLTEuMDQgMS44Ny0xLjM0NiAxLjg3LS4yNDUgMC0uMjQ1LS44MS4zNjctMS43NDZ6bTE1LjA1MyA3LjczNWMtLjA2Mi45MzUtLjA2MiAxLjQzNC4xMjIgMS43NDYtLjI0NS41LS45MTggMS4yNDgtMS41OS45OTgtLjI0Ni0uMDYyLS4yNDYtLjU2MS0uMTg1LS45OTguNTUxLS4zMTIuOTE4LS45MzUgMS4xNjMtMS43NDYuMTIyLjA2Mi4zMDYuMDYyLjQ5IDB6bTIuNDQ3IDBjLjA2MS4wNjIuMTg0LjA2Mi4zMDYtLjA2My0uMjQ1IDEuMzczLS4zMDYgMS40OTctLjI0NSAxLjY4NS0uNDI4LjgxLS44NTYgMS4xMjItMS40MDcgMS4xMjItLjI0NSAwLS4xMjItLjQzNi4xODQtLjk5OCAwIDAgLjczNC0uNjIzIDEuMTYyLTEuNzQ2em0uOTggMS42MjJjLS4yNDYuMjQ5LS40OS4zNzQtLjY3NC44MS0uMDYxLjEyNSAxLjEwMi4yNSAxLjcxMy0yLjM3LS4xMjItLjE4Ny0uNDkuOTk4LTEuMDQgMS41NnptLTcuMDM4LTEuNjIyYzAgLjc0OC4xODQgMS40MzQuNTUxIDEuODcxLS4zMDYgMS4wNi0xLjE2MiAxLjA2LTEuNDY4Ljk5OC0uNDI5LS4xMjUtLjU1MS0uNDk5LS42NzMtMS4xMjMuNDg5LS40MzYuNzM0LTEuMTg1Ljg1Ni0xLjc0Ni4yNDUuMDYyLjQ5LjA2Mi43MzQgMHptNS41MDctMS43NDdjMCAuNzQ5LjA2MiAxLjI0OC4zNjggMS40OTctLjI0NS42MjQtMS4wNCAxLjgxLTEuNTMgMS44MS0uMjQ1IDAtLjM2Ny0uNDM3LS4yNDUtMS43NDcuMzY3LS4yNS42NzMtLjg3NC44NTctMS41NmEuNTYyLjU2MiAwIDAgMCAuNTUgMHptMi4yMDMuMTI1YzAgLjUgMCAxLjMxLjEyMyAxLjQ5Ny0uMjQ1LjUtLjY3MyAxLjU2LTEuMTYzIDEuNzQ3LS4zMDYuMDYyLS4yNDUtLjMxMi4wNjEtMS42ODUgMCAwIC40MjktLjQzNi43MzUtMS41NTl6bS01LjQ0Ni0uMTI1Yy4xMjMuODc0LjI0NSAxLjMxLjYxMiAxLjQ5Ny0uMDYuMzEyLS43MzQgMS41Ni0xLjQwNyAxLjY4NC0uODU3LjE4OC0uOTE4LS45OTgtLjkxOC0xLjYyMS40MjgtLjI1LjczNC0uODExLjkxOC0xLjU2LjE4NC4wNjMuNDkuMTI1Ljc5NSAwem0yLjMyNi0uMTg3Yy0uMDYyLjM3NC0uNTUxIDEuNTYtMS4xNjMgMS41Ni0uMzY3IDAtLjY3My0uNjI0LS43OTUtMS42MjIuMzA2LS4yNS42NzMtLjg3My43MzQtMi4xODNhLjY2NC42NjQgMCAwIDAgLjQ5IDBjLjI0NCAxLjEyMy40MjggMS44NzEuNzM0IDIuMjQ1em0yLjE0MS0yLjI0NWMuMzA2IDEuOTMzLjM2NyAxLjk5Ni40OSAyLjI0NS0uMzA2IDEuMTg1LS42MTIgMS41Ni0uODU3IDEuNTYtLjU1IDAtLjQyOC0uOTk4LS40OS0xLjYyMi4yNDUtLjI1LjU1MS0uODczLjU1MS0yLjE4My4xMjMuMDYyLjE4NCAwIC4zMDYgMHptMS4yODUgMi4yNDVjLjMwNi0uNDk5LjE4NC0yLjEyLjMwNi0yLjI0NS4xODQtLjA2My43MzQgMi42ODItLjE4MyAzLjY4LS4xMjMuMTI1LS4xMjMtMS40MzUtLjEyMy0xLjQzNXpNMTguNTMgMTQuOTNjLjE4NCAxLjI0Ny40OSAxLjkzMyAxLjA0IDIuMjQ1LS4wNjEuMTg3LS41NSAxLjU2LTEuNDA3IDEuNTYtLjY3My4wNjItMS4wNC0uNzQ5LTEuMjI0LTEuNjg1LjQyOC0uNDk4LjczNC0xLjE4NS44NTctMi4xMi4xMjIuMDYyLjQyOC4wNjIuNzM0IDB6bTUuMDc5LTEuNTZjMCAuMTI1LjM2NyAxLjE4Ni43OTUgMS40OTcgMCAxLjA2LS4zMDYgMi4yNDYtLjc5NSAyLjI0Ni0uNTUxIDAtLjc5Ni0xLjE4NS0uOTgtMi4zMDguMTg0LS4xODcuNDI5LS42MjQuNDI5LTEuMzcyYS41ODUuNTg1IDAgMCAwIC41NS0uMDYzem0yLjc1MyAxLjM3M2MuMDYxLjY4Ni0uMDYxIDIuMzA3LS4zNjcgMi4yNDUtLjMwNiAwLS42MTItMi4zMDgtLjYxMi0yLjMwOC4xMjMtLjE4Ny4yNDUtLjYyMy4xODQtMS4zMWEuMTgzLjE4MyAwIDAgMCAuMjQ1IDBjLjI0NC44MTEuNTUgMS4zNzMuNTUgMS4zNzN6bS01Ljk5Ni0xLjM3M2MuMjQ0LjU2Mi42NzMgMS4yNDggMS4wNCAxLjQzNS0uMDYxLjc0OS0uNDkgMi4yNDUtMS4xNjMgMi4yNDUtLjkxOC4wNjMtMS4xNjItMS4wNi0xLjM0Ni0yLjI0NS4zNjctLjI1LjYxMi0uNzQ4LjY3My0xLjM3Mi4yNDUuMDYyLjU1LjA2Mi43OTYtLjA2M3ptMS41MyAxLjE4NmMtLjQyOS4wNjItLjc5Ni0uNS0xLjIyNC0xLjQ5Ny4yNDQtLjI1LjQyOC0uNzQ5LjMwNi0xLjYyMi4xODMuMDYyLjMwNi4wNjIuNDI4IDAgLjM2Ny42ODYuNzM0IDEuMzcyIDEuMTYyIDEuNjg0IDAgLjE4Ny0uMDYgMS40MzUtLjY3MyAxLjQzNXptMS45NTctMS40OTdjLjA2Mi0uMjUuMTg0LS42ODctLjE4My0xLjYyMmguMjQ1YzAgLjA2Mi44NTYgMS41NiAxLjE2MiAxLjc0Ni4xMjMuNjg2LjEyMyAxLjM3My0uMjQ1IDEuNDM1LS4zMDUgMC0uNTUtLjMxMi0uOTc5LTEuNTZ6bTIuMDgtLjE4OGMuMDYyLS40MzYtLjU1LTEuMzcyLS40ODktMS4zMS45OC42MjQgMS4zNDcgMi44NyAxLjE2MyAyLjkzMi0uMDYxLjA2My0uNzM0LTEuMDYtLjY3My0xLjYyMnptLTcuNzcgMS42ODVjLS45MTguMDYyLTEuMTYzLS44MTEtMS4zNDYtMS40OTcuMzA2LS4xODguNjEyLS43NDkuNjczLTEuNjIyLjE4My4wNjIuNDkuMDYyLjY3MyAwIC4xODMuNTYxLjQ5IDEuMzEuOTc5IDEuNjg0LS4wNjEuNzQ4LS4zNjcgMS4zNzItLjk4IDEuNDM1em01LjY5LTQuMzA0Yy4zMDYgMCAxLjIyNCAxLjA2IDEuMjg1IDEuMTIyLjY3NC45OTguNjc0IDEuNzQ3LjQyOSAxLjc0Ny0uMzY3IDAtMS4xNjMtMS41Ni0xLjM0Ni0xLjg3MS4wNi0uMzEyLS42MTItLjk5OC0uMzY4LS45OTh6bS0xMy41ODQuMTg3Yy0uMTIyLjM3NC0uMTgzLjc0OCAwIC45MzUtLjM2Ny43NDktLjk3OSAxLjgxLTEuNTMgMS43NDctLjYxMS0uMTI1LS4xMjItMS41Ni0uMDYtMS42ODQuMzY3LS4xODcgMS4yMjMtMS4zNzIgMS41My0xLjM3Mi4xODMuMDYyLjA2LjM3NC4wNi4zNzR6bTIuODc2LS4wNjJjMCAuMzc0LjA2Mi44MS4zNjcuOTk3LS4yNDQuNzQ5LS43MzQgMS43NDctMS41MyAxLjY4NS0uNTUtLjA2My0uNjcyLS45OTgtLjU1LTEuNjg1LjU1LS4xODcgMS4wNC0xLjM3MiAxLjQwNy0xLjM3Mi4zMDYgMCAuMzA2LjMxMi4zMDYuMzc1em04LjY5Ljk5N2MuMTIyLS4xODcuMTIyLS41NiAwLS45MzUgMC0uMDYyLS4xMjMtLjM3NC4wNi0uMzc0LjMwNiAwIDEuMTYzIDEuMTg1IDEuNTMgMS4zNzIuMDYxLjEyNS41NSAxLjU2LS4wNjEgMS42ODQtLjYxMi4wNjItMS4xNjMtMS4wNi0xLjUzLTEuNzQ3em0tMy4yNDQgMGMuMjQ1LS4xODcuMzA2LS42MjMuMzY3LS45OTcgMC0uMDYzIDAtLjM3NS4zMDYtLjM3NS4zMDYtLjA2Mi45MTggMS4xODUgMS40MDggMS4zNzIuMTgzLjgxMS4wNiAxLjYyMi0uNTUxIDEuNjg1LS44NTcuMTI0LTEuMjg1LS45OTgtMS41My0xLjY4NXptLTIuNTctMS4zNzJjLjYxMiAwIC42MTIgMS4xODUgMS4xMDIgMS40MzUgMCAuMzEyLS4xODQgMS42ODQtMS4xNjMgMS42ODQtLjg1NyAwLTEuMDQtMS4xMjMtMS4xMDEtMS42ODQuNzM0LS4zMTIuNDktMS40MzUgMS4xNjItMS40MzV6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+) */
export const SrnCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-srn-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

SrnCircleColorful.displayName = 'SrnCircleColorful';