import React, {useEffect, useState} from "react";
import axios from 'axios';
import { DataRecord } from 'DataRecord';
import { OrionColumn } from "BaseStyles";

const youtubeDoc = {
    schema: {
        title: {
            type: "short-text",
            section: "meta",
            label: "Name",
            isTitle: true
        },
        description: {
            type: "short-text",
            section: "meta",
            label: "description"
        }
    },
    data: {
        title: "Youtube",
        description: "A simple test rendering youtube videos for 'artificial inteligence'. \n\nThis will not work until we implement OAUTH 2 authentication with Google to make the requests."
    }
}

const youtubeVideoSchema = {
    title: {
        type: "short-text",
        section: "meta",
        label: "title",
        isTitle: true
    },
    description: {
        type: "long-text",
        section: "meta",
        label: "description"
    },
    publishTime: {
        type: "date",
        variant: "age",
        section: "meta",
        label: "published at (ago)"
    },
    thumbnail: {
        type: "image",
        section: "video",
        label: "thumb"
    },
    url: {
        type: "url",
        section: "video",
        label: "url"
    }
}

interface youtubeVideo {
    title: string;
    description: string;
    thumbnail: string;
    url: string;
    publishTime: Date;
}

export const Youtube = () => {
    const [videos, setVideos] = useState<youtubeVideo[]>([]);

    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=artificial+inteligence&order=date&type=video&videoEmbeddable=true&key=AIzaSyDCZAbiHMEI2BfG7yY7iZO2voeCunCKUtA')
            .then((resp) => {
                const raw = resp.data.items;
                const response = raw.map((rawVideo:any) => {
                    return {
                        title: rawVideo.snippet.title,
                        description: rawVideo.snippet.description,
                        url: `https://www.youtube.com/watch?v=${rawVideo.id.videoId}`,
                        thumbnail: rawVideo.snippet.thumbnails.high.url,
                        publishTime: new Date(rawVideo.snippet.publishTime)
                    }
                });

                setVideos(response);
            })
    },[])

    return (
        <OrionColumn>
            <DataRecord data={youtubeDoc.data} schema={youtubeDoc.schema} entity="Youtube Widget"/>
            {videos.map((video:any) => {
                return <DataRecord data={video} schema={youtubeVideoSchema} entity="Youtube video"/>
            })}
        </OrionColumn>
    )
}