import React from 'react';

const BattlefyEmbed = ({ embedUrl, width = '100%', height = '500px' }) => (
  <iframe
    src={embedUrl}
    title="Battlefy Tournament"
    width={width}
    height={height}
    scrolling="no"
    frameBorder="0"
  ></iframe>
);

export default BattlefyEmbed;
