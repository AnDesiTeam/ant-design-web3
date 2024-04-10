// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/rlc-circle-colorful.svg';

/**![RlcCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIwMy4yMyAyMDEuODEiPjxkZWZzLz48ZyBpZD0iYW50LXdlYjMtaWNvbi1ybGMtY2lyY2xlLWNvbG9yZnVsLUNhbHF1ZV8yIj48ZyBpZD0iYW50LXdlYjMtaWNvbi1ybGMtY2lyY2xlLWNvbG9yZnVsLUNhbHF1ZV8zIj48ZyBpZD0iYW50LXdlYjMtaWNvbi1ybGMtY2lyY2xlLWNvbG9yZnVsLUNsaXAtMiI+PHBhdGggaWQ9ImFudC13ZWIzLWljb24tcmxjLWNpcmNsZS1jb2xvcmZ1bC1wYXRoLTIiIGQ9Ik0xMzQuNzcsODguOTFoLTEuNDFjLTcuMDUuNy0xMiw2LjM1LTExLjI5LDEzLjRoMGMwLDEuNDItLjcsMy41My0yLjEyLDQuMjRoMGMtLjcuNy0xLjQxLjctMi44Mi43aDBhMi41OSwyLjU5LDAsMCwxLTIuMTEtLjdoMGExMiwxMiwwLDAsMC03LjA2LTIuMTJoLTEuNDFjLTcuMDYuNzEtMTIsNi4zNS0xMS4yOSwxMy40MWgwYzAsMi4xMS0uNzEsMy41My0yLjEyLDQuMjNoMGMtLjcuNzEtMS40MS43MS0yLjgyLjcxaDBhMi41OSwyLjU5LDAsMCwxLTIuMTItLjcxaDBBMTEuMzcsMTEuMzcsMCwwLDAsODEuODUsMTIwaDBhMTIuNjYsMTIuNjYsMCwwLDAtMTIuNywxMi43MWgwYTEyLjY1LDEyLjY1LDAsMCwwLDEyLjcsMTIuN2gxLjQxYTEyLjc2LDEyLjc2LDAsMCwwLDExLjI5LTExLjI5aDBWMTMyaDBjMC0xLjQxLjcxLTMuNTMsMi4xMi00LjIzaDBjLjcxLS43MSwxLjQxLS43MSwyLjgyLS43MWgwYTIuNTksMi41OSwwLDAsMSwyLjEyLjcxaDBhMTEuOTMsMTEuOTMsMCwwLDAsNy4wNiwyLjExaDEuNDFhMTIuNzUsMTIuNzUsMCwwLDAsMTEuMjktMTEuMjloMHYtMi4xMWgwcTAtMy4xOCwyLjExLTQuMjRoMGMuNzEtLjcsMS40MS0uNywyLjgzLS43aDBhMi41OSwyLjU5LDAsMCwxLDIuMTEuN2gwYTEyLDEyLDAsMCwwLDcuMDYsMi4xMmgwYTEyLjY1LDEyLjY1LDAsMCwwLDEyLjctMTIuN2gwYy0uNzEtNy4wNi02LjM1LTEyLjctMTMuNDEtMTIuN2gwIiBzdHlsZT0iZmlsbDogI2ZjZDE1YTsgZmlsbC1ydWxlOiBldmVub2RkOyIvPjwvZz48cGF0aCBpZD0iYW50LXdlYjMtaWNvbi1ybGMtY2lyY2xlLWNvbG9yZnVsLUZpbGwtMSIgZD0iTTEzNC43Nyw4OC45MWgtMS40MWMtNy4wNS43LTEyLDYuMzUtMTEuMjksMTMuNGgwYzAsMS40Mi0uNywzLjUzLTIuMTIsNC4yNGgwYy0uNy43LTEuNDEuNy0yLjgyLjdoMGEyLjU5LDIuNTksMCwwLDEtMi4xMS0uN2gwYTEyLDEyLDAsMCwwLTcuMDYtMi4xMmgtMS40MWMtNy4wNi43MS0xMiw2LjM1LTExLjI5LDEzLjQxaDBjMCwyLjExLS43MSwzLjUzLTIuMTIsNC4yM2gwYy0uNy43MS0xLjQxLjcxLTIuODIuNzFoMGEyLjU5LDIuNTksMCwwLDEtMi4xMi0uNzFoMEExMS4zNywxMS4zNywwLDAsMCw4MS44NSwxMjBoMGExMi42NiwxMi42NiwwLDAsMC0xMi43LDEyLjcxaDBhMTIuNjUsMTIuNjUsMCwwLDAsMTIuNywxMi43aDEuNDFhMTIuNzYsMTIuNzYsMCwwLDAsMTEuMjktMTEuMjloMFYxMzJoMGMwLTEuNDEuNzEtMy41MywyLjEyLTQuMjNoMGMuNzEtLjcxLDEuNDEtLjcxLDIuODItLjcxaDBhMi41OSwyLjU5LDAsMCwxLDIuMTIuNzFoMGExMS45MywxMS45MywwLDAsMCw3LjA2LDIuMTFoMS40MWExMi43NSwxMi43NSwwLDAsMCwxMS4yOS0xMS4yOWgwdi0yLjExaDBxMC0zLjE4LDIuMTEtNC4yNGgwYy43MS0uNywxLjQxLS43LDIuODMtLjdoMGEyLjU5LDIuNTksMCwwLDEsMi4xMS43aDBhMTIsMTIsMCwwLDAsNy4wNiwyLjEyaDBhMTIuNjUsMTIuNjUsMCwwLDAsMTIuNy0xMi43aDBjLS43MS03LjA2LTYuMzUtMTIuNy0xMy40MS0xMi43aDAiIHN0eWxlPSJmaWxsOiAjZmNkMTVhOyBmaWxsLXJ1bGU6IGV2ZW5vZGQ7Ii8+PGcgaWQ9ImFudC13ZWIzLWljb24tcmxjLWNpcmNsZS1jb2xvcmZ1bC1DbGlwLTUiPjxwYXRoIGlkPSJhbnQtd2ViMy1pY29uLXJsYy1jaXJjbGUtY29sb3JmdWwtcGF0aC01IiBkPSJNMTA4LDcyLjY4aC0xLjQxYy03LjA2LjctMTIsNi4zNS0xMS4yOSwxMy40MWgwcTAsMy4xNi0yLjEyLDQuMjNoMGMtLjcuNy0xLjQxLjctMi44Mi43aDBhMi42MSwyLjYxLDAsMCwxLTIuMTItLjdoMGExMS45LDExLjksMCwwLDAtNy0yLjEySDc5LjczYTEyLjkzLDEyLjkzLDAsMCwwLTExLjI5LDEyLjdoMGExMi42NSwxMi42NSwwLDAsMCwxMi43MSwxMi43aDEuNDFhMTIuNzUsMTIuNzUsMCwwLDAsMTEuMjktMTEuMjloMFYxMDAuMmgwUTkzLjg1LDk3LDk2LDk2aDBjLjcxLS43LDEuNDItLjcsMi44My0uN2gwYTIuNTksMi41OSwwLDAsMSwyLjExLjdoMEExMS44OSwxMS44OSwwLDAsMCwxMDgsOTguMDhoMS40MWExMi45MiwxMi45MiwwLDAsMCwxMS4yOS0xMi43aDBBMTIuNjQsMTIuNjQsMCwwLDAsMTA4LDcyLjY4aDAiIHN0eWxlPSJmaWxsOiAjZmNkMTVhOyBmaWxsLXJ1bGU6IGV2ZW5vZGQ7Ii8+PC9nPjxwYXRoIGlkPSJhbnQtd2ViMy1pY29uLXJsYy1jaXJjbGUtY29sb3JmdWwtRmlsbC00IiBkPSJNMTA4LDcyLjY4aC0xLjQxYy03LjA2LjctMTIsNi4zNS0xMS4yOSwxMy40MWgwcTAsMy4xNi0yLjEyLDQuMjNoMGMtLjcuNy0xLjQxLjctMi44Mi43aDBhMi42MSwyLjYxLDAsMCwxLTIuMTItLjdoMGExMS45LDExLjksMCwwLDAtNy0yLjEySDc5LjczYTEyLjkzLDEyLjkzLDAsMCwwLTExLjI5LDEyLjdoMGExMi42NSwxMi42NSwwLDAsMCwxMi43MSwxMi43aDEuNDFhMTIuNzUsMTIuNzUsMCwwLDAsMTEuMjktMTEuMjloMFYxMDAuMmgwUTkzLjg1LDk3LDk2LDk2aDBjLjcxLS43LDEuNDItLjcsMi44My0uN2gwYTIuNTksMi41OSwwLDAsMSwyLjExLjdoMEExMS44OSwxMS44OSwwLDAsMCwxMDgsOTguMDhoMS40MWExMi45MiwxMi45MiwwLDAsMCwxMS4yOS0xMi43aDBBMTIuNjQsMTIuNjQsMCwwLDAsMTA4LDcyLjY4aDAiIHN0eWxlPSJmaWxsOiAjZmNkMTVhOyBmaWxsLXJ1bGU6IGV2ZW5vZGQ7Ii8+PGcgaWQ9ImFudC13ZWIzLWljb24tcmxjLWNpcmNsZS1jb2xvcmZ1bC1DbGlwLTgiPjxwYXRoIGlkPSJhbnQtd2ViMy1pY29uLXJsYy1jaXJjbGUtY29sb3JmdWwtcGF0aC04IiBkPSJNMTAxLjYxLDBDNDUuODcsMCwwLDQ1LjE2LDAsMTAwLjlIMGMwLDU1Ljc1LDQ1Ljg3LDEwMC45MSwxMDEuNjEsMTAwLjkxaDBBMTA5LjM3LDEwOS4zNywwLDAsMCwxNDEuMTIsMTk0aDBjMzcuNC0xNS41Miw2Mi4xLTUyLjIxLDYyLjEtOTIuNDNoMEMyMDMuOTIsNDUuMTYsMTU4LjA2LDAsMTAxLjYxLDBabS03MiwxMDAuMmMwLTM5LjUyLDMyLjQ1LTcxLjI3LDcyLTcxLjI3aDBhNzIuMTEsNzIuMTEsMCwwLDEsNTAuOCwyMS4xN2gwYzEzLjQxLDEzLjQxLDIxLjE3LDMxLjc1LDIxLjE3LDUwLjFoMGMwLDM5LjUxLTMyLjQ2LDcxLjI2LTcyLDcxLjI2aDBjLTM5LjUyLDAtNzItMzEuNzUtNzItNzEuMjZaIiBzdHlsZT0iZmlsbDogI2ZjZDE1YTsgZmlsbC1ydWxlOiBldmVub2RkOyIvPjwvZz48cGF0aCBpZD0iYW50LXdlYjMtaWNvbi1ybGMtY2lyY2xlLWNvbG9yZnVsLUZpbGwtNyIgZD0iTTEwMS42MSwwQzQ1Ljg3LDAsMCw0NS4xNiwwLDEwMC45SDBjMCw1NS43NSw0NS44NywxMDAuOTEsMTAxLjYxLDEwMC45MWgwQTEwOS4zNywxMDkuMzcsMCwwLDAsMTQxLjEyLDE5NGgwYzM3LjQtMTUuNTIsNjIuMS01Mi4yMSw2Mi4xLTkyLjQzaDBDMjAzLjkyLDQ1LjE2LDE1OC4wNiwwLDEwMS42MSwwWm0tNzIsMTAwLjJjMC0zOS41MiwzMi40NS03MS4yNyw3Mi03MS4yN2gwYTcyLjExLDcyLjExLDAsMCwxLDUwLjgsMjEuMTdoMGMxMy40MSwxMy40MSwyMS4xNywzMS43NSwyMS4xNyw1MC4xaDBjMCwzOS41MS0zMi40Niw3MS4yNi03Miw3MS4yNmgwYy0zOS41MiwwLTcyLTMxLjc1LTcyLTcxLjI2WiIgc3R5bGU9ImZpbGw6ICNmY2QxNWE7IGZpbGwtcnVsZTogZXZlbm9kZDsiLz48cGF0aCBkPSJNOTAuNiw3Ny4yOWwtLjU1LTIuNjZoLjA2YTEuNzgsMS43OCwwLDAsMCwxLTIuMzNoMGwyLjA2LTEuMzZjLjExLjExLjIyLjE2LjI3LjI3bC0yLjU1LDYuMTRhLjY2LjY2LDAsMCwwLS4yNy0uMDZtLjA1LTkuNzIsMi4wNiwxLjM2YTIsMiwwLDAsMCwwLDEuMzZoMGwtMi4wNiwxLjM1YTEuODIsMS44MiwwLDAsMC0yLjM5LS4xNmwtMS4wOC0xYTEuNjMsMS42MywwLDAsMCwwLTEuODRsMS4wOC0xYTIsMiwwLDAsMCwxLjA5LjM4LDEuNTksMS41OSwwLDAsMCwxLjMtLjQ5bS01LjI3LTQuNDUuMzMtLjE2LDIuMjMsMi4yOGExLjcsMS43LDAsMCwwLS4yMiwxLjY4aDBjMCwuMTEsMCwuMTYuMTEuMjdsLTEuMDksMWExLjc4LDEuNzgsMCwwLDAtMi4xMiwwbC0xLjg0LTEuODVhMS44LDEuOCwwLDAsMC0uMDYtMi4xMmwxLTEuMTlhMS43MywxLjczLDAsMCwwLDEuNjIuMTZNOTEsNjdhMS43OCwxLjc4LDAsMCwwLTEtMi4zM2gwbC41NC0yLjc3YS43LjcsMCwwLDAsLjMyLDBsMi41LDYuM2MtLjExLDAtLjIyLjE2LS4zMi4yMWgwWk03Mi44NCw2Mi4wOWMuMjItLjExLjg3LS40NCwxLTFsMi40NC40OWEyLjI1LDIuMjUsMCwwLDAsLjI3LDFsLTIuMjIsMi4yM2ExLjc4LDEuNzgsMCwwLDAtMS0uMzNabTEzLjMuMzhhMiwyLDAsMCwwLC4zMy0xLjE0bDIuMzktLjU0YTEuNjIsMS42MiwwLDAsMCwxLC45MmwtLjU1LDIuNzdhMi44MywyLjgzLDAsMCwwLS43LjExLjgzLjgzLDAsMCwwLS4yNy4xNlpNODIsNTguMThsMS40MiwyYTEuNzksMS43OSwwLDAsMC0uMTEsMi4zM2wtMSwxLjJhMS44NSwxLjg1LDAsMCwwLTEuODUsMGwtLjkyLTFhMS44MiwxLjgyLDAsMCwwLS4xNy0yLjM5bDEuMzYtMi4wN2ExLjczLDEuNzMsMCwwLDAsLjU0LjExLDEuNjcsMS42NywwLDAsMCwuNzYtLjE2bS04LDIuMjh2LS4zM2w1LjgxLTIuNTVjLjExLjExLjIyLjI3LjMyLjM4TDc4LjcxLDYwYTEuNzgsMS43OCwwLDAsMC0yLjM0LDFabTguNTgtMi42NmExLDEsMCwwLDAsLjIxLS4zM2gwbDYsMi4yOHYuMzhsLTIuMzkuNkExLjc3LDEuNzcsMCwwLDAsODQsNTkuODFIODRabS0xLjMxLTNhMS44LDEuOCwwLDAsMC0xLjczLDEuNDYsMS42NiwxLjY2LDAsMCwwLDAsLjc3bC01LjgxLDIuNDlhMS45MSwxLjkxLDAsMCwwLS4yNy0uMzIsMS44MSwxLjgxLDAsMCwwLTIuNTYsMi41NWMuMDYsMCwuMTEuMTEuMTcuMTFhMTIuNTQsMTIuNTQsMCwwLDAtMi41Niw2LjQ2djEuM2ExMywxMywwLDAsMCwxMywxM2gwYTExLjIxLDExLjIxLDAsMCwwLDEuMy0uMTEsMTIuNzksMTIuNzksMCwwLDAsNi42My0yLjcyYzAsLjA2LjA1LjA2LjA1LjExYTEuNTMsMS41MywwLDAsMCwyLjE3LTIuMTcuNjMuNjMsMCwwLDAtLjIxLS4xNmwyLjU1LTYuMTRhMS43OSwxLjc5LDAsMSwwLC44Ny0zLjQ3aC0uMDZhMS4wNywxLjA3LDAsMCwwLS40My0uMDYuNjUuNjUsMCwwLDAtLjMzLjA2bC0yLjQ5LTYuM2ExLjgyLDEuODIsMCwwLDAtMS45MS0zLjA5LDEuNTgsMS41OCwwLDAsMC0uNTkuNTlsLTYtMi4yOGExLjc0LDEuNzQsMCwwLDAtMS40MS0yLjA2Yy0uMTEsMC0uMjItLjA2LS4zMy0uMDZoMFoiIHN0eWxlPSJmaWxsOiAjZmNkMTVhOyIvPjwvZz48L2c+PC9zdmc+) */
export const RlcCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-rlc-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

RlcCircleColorful.displayName = 'RlcCircleColorful';
