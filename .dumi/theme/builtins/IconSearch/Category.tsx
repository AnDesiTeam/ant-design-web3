import * as React from 'react';
import { FireFilled } from '@ant-design/icons';
import { message } from 'antd';
import { useIntl } from 'dumi';

import CopyableIcon from './CopyableIcon';
import { type CategoriesKeys } from './fields';
import { type ThemeType } from './IconSearch';

interface CategoryProps {
  title: CategoriesKeys;
  icons: string[];
  theme: ThemeType;
  newIcons: string[];
}

const Category: React.FC<CategoryProps> = (props) => {
  const { icons, title, newIcons, theme } = props;
  const intl = useIntl();
  const [justCopied, setJustCopied] = React.useState<string | null>(null);
  const copyId = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const [messageApi, contextHolder] = message.useMessage();

  const onCopied = React.useCallback((type: string, text: string) => {
    messageApi.success(
      <span>
        <code className="copied-code">{text}</code> copied 🎉
      </span>,
    );
    setJustCopied(type);
    copyId.current = setTimeout(() => {
      setJustCopied(null);
    }, 200);
  }, []);
  React.useEffect(
    () => () => {
      if (copyId.current) {
        clearTimeout(copyId.current);
      }
    },
    [],
  );

  return (
    <div>
      {contextHolder}
      <h3>
        {title === 'hots' && <FireFilled style={{ color: 'orangered' }} />}{' '}
        {intl.formatMessage({ id: `app.docs.components.icon.category.${title}` })}
      </h3>
      <ul className="anticons-list">
        {icons.map((name) => (
          <CopyableIcon
            key={name}
            name={name}
            theme={theme}
            isNew={newIcons.includes(name)}
            justCopied={justCopied}
            onCopied={onCopied}
          />
        ))}
      </ul>
    </div>
  );
};

export default Category;
