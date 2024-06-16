import React from 'react'
import { createIcon } from '../createIcon'

export const NGraveBadge = createIcon({
    rectFill: 'white',
    path: (
        <>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.2301 4.09998L13.3459 6.4919L10.4616 8.88533L11.1677 14.1431L12.0002 19.7535L17.1626 14.1431L22 8.99173L19.1142 6.4919L16.2301 4.09998Z"
                fill="url(#NGraveBadge_a)"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.76916 4.09998L4.8847 6.4919L2 8.88533L6.83646 14.1431L11.9998 19.7535L12.8321 14.1431L13.5383 8.88533L10.6537 6.4919L7.76916 4.09998Z"
                fill="url(#NGraveBadge_b)"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.128 4.09998L9.24345 6.4919L6.35883 8.88533L9.24345 14.1431L11.9999 19.7535L15.0126 14.1431L17.8971 8.88533L15.0126 6.4919L12.128 4.09998Z"
                fill="url(#NGraveBadge_c)"
            ></path>
            <defs>
                <linearGradient
                    id="NGraveBadge_a"
                    x1="10.4616"
                    y1="4.09998"
                    x2="10.4616"
                    y2="19.4023"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#2E65A0"></stop>
                    <stop offset="1" stopColor="#EED782"></stop>
                </linearGradient>
                <linearGradient
                    id="NGraveBadge_b"
                    x1="2"
                    y1="4.09998"
                    x2="2"
                    y2="19.4023"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#2E65A0"></stop>
                    <stop offset="1" stopColor="#F9E7A5"></stop>
                </linearGradient>
                <linearGradient
                    id="NGraveBadge_c"
                    x1="6.35883"
                    y1="4.09998"
                    x2="6.35883"
                    y2="19.4023"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#010408"></stop>
                    <stop offset="1" stopColor="#EED782"></stop>
                </linearGradient>
            </defs>
        </>
    ),
})
