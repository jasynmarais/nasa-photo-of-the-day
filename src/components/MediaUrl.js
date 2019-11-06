import React from 'react';
import ReactPlayer from 'react-player';

export const MediaUrl = ({ mediaUrl, mediaType }) => {
    return (
        <div>
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
        </div>
    );
};