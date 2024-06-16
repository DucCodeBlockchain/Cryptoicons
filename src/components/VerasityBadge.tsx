import React from 'react'
import { createIcon } from '../createIcon'

export const VerasityBadge = createIcon({
    rectFill: 'white',
    path: (
        <>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.4823 7.35712L3.94658 8.57138H12.5178L13.0178 7.35712H9.5179L8.83934 6H4.12515L4.62514 7.35712H3.4823ZM17.9106 10.3928L14.4463 18.1069H9.51785L6.41077 11.4999H11.2678L11.9107 12.7856L14.982 6H19.8748L19.1605 7.35712H20.5176L19.8748 8.57138H18.732L18.3748 9.24994H19.6962L19.1605 10.3928H17.9106ZM4.76804 10.3927L4.33948 9.24988H12.1608L11.6608 10.3927H4.76804Z"
                fill="url(#VerasityBadge_a)"
            ></path>
            <defs>
                <linearGradient
                    id="VerasityBadge_a"
                    x1="3.4823"
                    y1="6"
                    x2="3.4823"
                    y2="18.1069"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#EE4927"></stop>
                    <stop offset="1" stopColor="#BA0A51"></stop>
                </linearGradient>
            </defs>
        </>
    ),
})
