import { ConfigContext } from 'antd/es/config-provider';
import useStyle from './style';
import type { ReactNode } from 'react';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import type { ImageProps } from 'antd';
import { Button, Divider, Image } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as ETHSvg } from './icons/eth.svg';
import { ReactComponent as HeartSvg } from './icons/heart.svg';
import { ReactComponent as HeartFilledSvg } from './icons/heart-filled.svg';
import useToken from 'antd/es/theme/useToken';
import { formatNumUnit, isDarkTheme } from '../utils';

const customizePrefixCls = 'ant-nft-card';

interface NFTCardProps {
  actionText?: ReactNode;
  antdImageProps?: ImageProps;
  className?: string;
  description?: ReactNode;
  image: string | ReactNode;
  like?: {
    liked?: boolean;
    totalLikes?: number;
    onLikeChange?: (isLike: boolean) => void;
  };
  price?: number;
  footer?: ReactNode;
  name?: string;
  tokenId?: number;
  style?: React.CSSProperties;
  showAction?: boolean;
  type?: 'default' | 'pithy';
  onActionChange?: () => void;
}

const NFTCard: React.FC<NFTCardProps> = ({
  style,
  antdImageProps,
  className,
  description,
  type = 'default',
  image,
  name,
  tokenId,
  price = 0,
  like: likeConfig,
  showAction,
  actionText = 'Buy Now',
  footer,
}) => {
  const { liked, totalLikes = 0, onLikeChange } = likeConfig || {};
  const [, token] = useToken();
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('nft-card', customizePrefixCls);
  //================== Style ==================
  const [wrapSSR, hashId] = useStyle(prefixCls);
  const mergeCls = classNames(
    `${prefixCls}-container`,
    {
      [`${prefixCls}-pithy`]: type === 'pithy',
      [`${prefixCls}-theme-dark`]: isDarkTheme(token),
    },
    className,
    hashId,
  );

  const [like, setLike] = useState(false);

  const handleLikeChange = () => {
    const likeValue = !like;
    if (liked === undefined) {
      setLike(likeValue);
    }
    onLikeChange?.(likeValue);
  };

  const iconLikeGroup = (
    <div
      className={`${prefixCls}-like-icon-group`}
      style={{
        position: 'absolute',
        top: 5,
        right: -2,
      }}
    >
      <Icon component={HeartFilledSvg} />
      <Icon
        component={HeartFilledSvg}
        style={{
          transform: 'scale(0.4)',
          position: 'absolute',
          right: -8,
          top: -12,
        }}
      />
      <Icon
        component={HeartFilledSvg}
        style={{
          transform: 'scale(0.3)',
          position: 'absolute',
          right: 10,
          top: -16,
        }}
      />
    </div>
  );

  useEffect(() => {
    if (liked !== undefined) {
      setLike(liked);
    }
  }, [liked]);

  return wrapSSR(
    <div className={mergeCls} style={style}>
      <div className={`${prefixCls}-inner`}>
        <div className={`${prefixCls}-content`}>
          {type !== 'pithy' && tokenId !== undefined ? (
            <div className={`${prefixCls}-serial-number`}>{`#${tokenId}`}</div>
          ) : null}
          {typeof image === 'string' ? (
            <Image width="100%" src={image} {...antdImageProps} />
          ) : (
            image
          )}
        </div>
        <div className={`${prefixCls}-body`}>
          {tokenId !== undefined && type === 'pithy' ? (
            <div className={`${prefixCls}-serial-number`}>No:{tokenId}</div>
          ) : null}
          {name ? <div className={`${prefixCls}-name`}>{name}</div> : null}
          {description ? <div className={`${prefixCls}-description`}>{description}</div> : null}
          <div className={`${prefixCls}-info`}>
            <div className={`${prefixCls}-price`}>
              <div className={`${prefixCls}-price-icon`}>
                <Icon component={ETHSvg} />
              </div>
              <span className={`${prefixCls}-price-value`}>{formatNumUnit(price)}</span>
              <span className={`${prefixCls}-price-unit`}>ETH</span>
            </div>
            <div className={`${prefixCls}-likes`}>
              <div
                className={classNames(`${prefixCls}-like-icon`, {
                  [`${prefixCls}-like-icon-liked`]: like,
                })}
                onClick={handleLikeChange}
              >
                {iconLikeGroup}
                {!like ? (
                  <Icon component={HeartSvg} className={`${prefixCls}-like-icon-icon-heart`} />
                ) : null}
              </div>
              <span className={`${prefixCls}-like-value`}>{formatNumUnit(totalLikes)}</span>
            </div>
          </div>
          {showAction ? (
            <div className={`${prefixCls}-action`}>
              <Button
                style={{
                  width: '100%',
                }}
              >
                {actionText}
              </Button>
            </div>
          ) : null}
          {footer ? (
            <div className={`${prefixCls}-footer`}>
              <Divider dashed />
              {footer}
            </div>
          ) : null}
        </div>
      </div>
    </div>,
  );
};

export default NFTCard;
