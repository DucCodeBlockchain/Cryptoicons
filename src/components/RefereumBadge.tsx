import React from 'react'
import { createIcon } from '../createIcon'

export const RefereumBadge = createIcon({
    rectFill: 'white',
    path: (
        <>
            <path
                d="M14.8696 10.5142L10.3122 13.7327V12.4711C10.2436 12.4196 9.99808 12.3475 9.56552 12.4711C9.02481 12.6256 7.09371 13.3465 6.45001 15.6896C5.93505 17.564 6.81907 19.4059 7.32544 20.0925H19.0408C18.5344 18.9081 17.4598 16.4311 17.2127 15.9986C16.9655 15.566 17.1097 15.2347 17.2127 15.1231C18.028 14.4708 19.4836 12.3063 18.7833 8.86637C18.0829 5.42644 14.9382 4.18882 13.4535 4H5.03387V10.6687C5.42009 10.3426 6.44486 9.61306 7.45418 9.30408C8.4635 8.99511 9.83158 8.9522 10.3895 8.96936V7.57897L14.8696 10.5142Z"
                fill="url(#RefereumBadge_a)"
            ></path>
            <defs>
                <linearGradient
                    id="RefereumBadge_a"
                    x1="5.03387"
                    y1="4"
                    x2="5.03387"
                    y2="20.0925"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E34D67"></stop>
                    <stop offset="1" stopColor="#7746F4"></stop>
                </linearGradient>
            </defs>
        </>
    ),
})
