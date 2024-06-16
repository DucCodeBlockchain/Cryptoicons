import React from 'react'
import { createIcon } from '../createIcon'

export const Waves = createIcon({
    path: (
        <>
            <g clipPath="url(#Waves_a)">
                <path
                    d="M2.00037 12L12.0002 2.00012L22.0001 12L12.0002 21.9999L2.00037 12Z"
                    fill="#0055FE"
                ></path>
            </g>
            <defs>
                <clipPath id="Waves_a">
                    <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(2 2)"
                    ></rect>
                </clipPath>
            </defs>
        </>
    ),
})
