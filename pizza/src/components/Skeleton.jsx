import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = props => (
  <ContentLoader
    speed={2}
    width={300}
    height={160}
    animate={true}
    viewBox="0 0 400 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="4" y="347" rx="2" ry="2" width="95" height="30" />
    <rect x="-3" y="216" rx="21" ry="21" width="260" height="18" />
    <rect x="21" y="-5" rx="100" ry="100" width="209" height="209" />
    <rect x="174" y="364" rx="0" ry="0" width="14" height="3" />
    <rect x="-8" y="248" rx="16" ry="16" width="280" height="80" />
    <rect x="205" y="345" rx="0" ry="0" width="3" height="12" />
    <rect x="180" y="346" rx="10" ry="10" width="95" height="30" />
  </ContentLoader>
);

export default Skeleton;
