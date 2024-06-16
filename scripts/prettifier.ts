import { format, Options } from 'prettier'
import { prettier } from '../package.json'

const prettierConfig = {
    ...prettier,
    parser: 'babel',
} as Options

/**
 * Formats string with Prettier
 */
export function pretty(string: string) {
    try {
        const formatted = format(string, prettierConfig)
        return formatted.replace(/;/g, '')
    } catch (error) {
        return string
    }
}
