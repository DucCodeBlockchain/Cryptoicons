import React from 'react'
import { createIcon } from '../createIcon'

export const ThetaBadge = createIcon({
    rectFill: '#1B1F2B',
    path: (
        <>
            <path
                d="M7.79443 4.79456H16.1342V19.1995H7.79443V4.79456Z"
                fill="#1B1F2B"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 4.7944L7.7944 4H16.1341L16.9285 4.7944V19.1994L16.1341 19.9938H7.7944L7 19.1994V4.7944ZM8.5888 5.5888V18.405H15.3397V5.5888H8.5888Z"
                fill="url(#ThetaBadge_a)"
            ></path>
            <path
                d="M14.4913 14.2713H12.7643V16.0806H11.206V14.2713H9.479V12.7129H14.4913V14.2713ZM14.4913 9.80637H12.7643V7.99707H11.206V9.80637H9.479V11.3647H14.4913V9.80637Z"
                fill="url(#ThetaBadge_b)"
            ></path>
            <defs>
                <linearGradient
                    id="ThetaBadge_a"
                    x1="5.88062"
                    y1="5.91325"
                    x2="18.0473"
                    y2="18.0799"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#2AB8E6"></stop>
                    <stop offset="0.53" stopColor="#29CAD2"></stop>
                    <stop offset="1" stopColor="#2EE4BE"></stop>
                </linearGradient>
                <linearGradient
                    id="ThetaBadge_b"
                    x1="889.395"
                    y1="1429.97"
                    x2="1487.7"
                    y2="1800.95"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#2AB8E6"></stop>
                    <stop offset="0.53" stopColor="#29CAD2"></stop>
                    <stop offset="1" stopColor="#2EE4BE"></stop>
                </linearGradient>
            </defs>
        </>
    ),
})
