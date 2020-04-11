import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from 'mastodon/components/icon';

const ColumnLink = ({ icon, text, to, href, method, badge, targetWindow }) => {
  const badgeElement = typeof badge !== 'undefined' ? <span className='column-link__badge'>{badge}</span> : null;

  if (href) {
    return (
      <a href={href} className='column-link' data-method={method} target={targetWindow}>
        <Icon id={icon} fixedWidth className='column-link__icon' />
        {text}
        {badgeElement}
      </a>
    );
  } else {
    return (
      <Link to={to} className='column-link'>
        <Icon id={icon} fixedWidth className='column-link__icon' />
        {text}
        {badgeElement}
      </Link>
    );
  }
};

ColumnLink.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  method: PropTypes.string,
  targetWindow: PropTypes.string,
  badge: PropTypes.node,
};

ColumnLink.defaultProps = {
  targetWindow: '_self',
};

export default ColumnLink;
