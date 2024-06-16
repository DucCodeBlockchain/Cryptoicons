import React from 'react'
import { createIcon } from '../createIcon'

export const ThetaFuelBadge = createIcon({
    rectFill: 'url(#ThetaFuelBadge_a)',
    path: (
        <>
            <path
                d="M16.2241 8.63389C16.0855 8.79889 16.0943 9.16409 15.8721 9.05189C15.8721 9.05189 14.3255 8.46009 15.2781 6.71989C15.5355 6.31729 15.8017 6.29089 15.7621 5.31189C15.9997 5.67269 16.7785 6.39649 16.8401 7.53389C16.9017 8.29289 16.4485 8.39409 16.2241 8.63389Z"
                fill="white"
            ></path>
            <path
                d="M14.992 11.34C15.3726 11.2124 15.9886 11.01 16.026 9.71201C16.6134 10.6118 18.6066 11.8746 17.654 15.74C17.2668 17.247 15.8236 17.9796 14.464 18.534C13.6148 18.8948 12.748 19.4976 12.396 20.404C12.396 20.404 5.96985 19.5922 6.17005 13.21C6.33065 9.89901 9.43265 8.63401 10.746 6.21401C11.4456 4.68721 11.208 3.15601 11.208 3.15601C11.208 3.15601 15.3 5.70141 13.452 9.62401C12.8514 11.01 14.2858 11.4786 14.992 11.34Z"
                fill="white"
            ></path>
            <path
                d="M8.67804 12.4841V14.6181H10.944V16.8841H13.078V14.6181H15.344V12.4841H8.67804Z"
                fill="url(#ThetaFuelBadge_b)"
            ></path>
            <defs>
                <linearGradient
                    id="ThetaFuelBadge_a"
                    x1="0"
                    y1="12"
                    x2="24"
                    y2="12"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFA50D"></stop>
                    <stop offset="1" stopColor="#FE5413"></stop>
                </linearGradient>
                <linearGradient
                    id="ThetaFuelBadge_b"
                    x1="8.67804"
                    y1="14.6841"
                    x2="15.344"
                    y2="14.6841"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFA50D"></stop>
                    <stop offset="1" stopColor="#FE5413"></stop>
                </linearGradient>
            </defs>
        </>
    ),
})
