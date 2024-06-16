import React from 'react'
import { createIcon } from '../createIcon'

export const RevainBadge = createIcon({
    rectFill: 'url(#RevainBadge_a)',
    path: (
        <>
            <path
                d="M7 5.29181V20.2329L10.1936 18.5221V7.11668L14.7558 9.73993L11.3341 11.5648V15.3286L18.9758 20.5751V17.0394L14.2996 13.7318L18.1774 11.6789V8.02912L10.1936 3.58099L7 5.29181Z"
                fill="white"
            ></path>
            <defs>
                <linearGradient
                    id="RevainBadge_a"
                    x1="5.80788"
                    y1="4.20315"
                    x2="20.725"
                    y2="23.0042"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#771A4E"></stop>
                    <stop offset="0.5" stopColor="#5E1953"></stop>
                    <stop offset="0.875" stopColor="#430F4E"></stop>
                    <stop offset="1" stopColor="#3A0C4C"></stop>
                </linearGradient>
            </defs>
        </>
    ),
})
