import React from 'react'
import { createIcon } from '../createIcon'

export const ThorChainBadge = createIcon({
    rectFill: 'url(#ThorChainBadge_a)',
    path: (
        <>
            <path
                d="M5 20L16.2088 15.2964L12.6605 11.7108L5 20ZM9.11765 8.13081L12.666 11.7108L19 4L9.11765 8.13081Z"
                fill="white"
            ></path>
            <defs>
                <linearGradient
                    id="ThorChainBadge_a"
                    x1="0.000417276"
                    y1="12.0003"
                    x2="23.9966"
                    y2="12.0003"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#00CCFF"></stop>
                    <stop offset="1" stopColor="#33FF99"></stop>
                </linearGradient>
            </defs>
        </>
    ),
})
