import chalk from 'chalk'
import Table from 'cli-table'
import fs from 'fs/promises'
import { sortByFilename } from './sortify'

const header = chalk.white.bold
const red = chalk.redBright
const green = chalk.greenBright
const grey = chalk.gray

const tableConfig = {
    head: [header('Icon Name'), header('File Size')],
    colWidths: [30, 20],
}

/**
 * Converts bytes to kilobytes and conditionally styles based on file size
 */
function bToKb(bytes: number) {
    const kilobytes = bytes / 100
    const sizeString = `${kilobytes} kb`

    switch (true) {
        case kilobytes > 50:
            return red(sizeString)

        case kilobytes < 15:
            return green(sizeString)

        default:
            return grey(sizeString)
    }
}

/**
 * Make icon build statistics all nice and pretty in the console
 */
export async function consolify(consoleData: string[][]) {
    const table = new Table(tableConfig)

    const data = await Promise.all(
        consoleData.map(async (componentData) => {
            const [fileName, svgFilePath] = componentData
            const { size: svgFileSize } = await fs.stat(svgFilePath)
            return [fileName, bToKb(svgFileSize)]
        })
    )

    table.push(...data)
    table.sort(sortByFilename)
    console.log(table.toString())
}
