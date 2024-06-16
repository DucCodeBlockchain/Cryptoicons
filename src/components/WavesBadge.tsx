import React from 'react'
import { createIcon } from '../createIcon'

export const WavesBadge = createIcon({
    rectFill: '#0055FE',
    path: (
        <>
            <g clipPath="url(#WavesBadge_a)">
                <path
                    d="M4.00031 12L12.0002 4.0001L20.0001 12L12.0002 19.9999L4.00031 12Z"
                    fill="white"
                ></path>
            </g>
            <defs>
                <clipPath id="WavesBadge_a">
                    <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(4 4)"
                    ></rect>
                </clipPath>
            </defs>
        </>
    ),
})
