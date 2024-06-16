import { optimize } from 'svgo'

/**
 * Cleans and optimizes SVG string using SVGO
 */
export function clean(svgString: string | Buffer, fileName: string) {
    const result = optimize(svgString, {
        multipass: true,
        plugins: [
            'removeDimensions',
            'convertStyleToAttrs',
            {
                name: 'cleanupIDs',
                params: {
                    prefix: `${fileName}_`,
                },
            },
        ],
    })

    return result.data
}
