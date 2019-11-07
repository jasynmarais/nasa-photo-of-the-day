import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const StyledMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    box-shadow: 5px 5px 5px #323330;
    border-radius: 1px;
  }
`;

const MediaUrl = ({ mediaUrl, mediaType }) => {
    return (
        <StyledMediaContainer>
            {mediaType === 'video' ? (
                <ReactPlayer
                    className="media-video media"
                    url={mediaUrl}
                    alt="A NASA video of the day"
                    />
            ) : (
                <img
                className="media-image media"
                src={mediaUrl}
                alt="A NASA photo of the day"
                />
            )}
        </StyledMediaContainer>
    );
};

export default MediaUrl;