/**
 * Sorts export declarations alphabetically based on filename.
 * Filename string must be first element in array.
 */
export function sortByFilename(exportA: string[], exportB: string[]) {
    const [exportAFilename] = exportA
    const [exportBFilename] = exportB
    if (exportAFilename < exportBFilename) return -1
    return 1
}

/**
 * Creates an alphabetically sorted export file based on created components
 * @returns Formatted index.ts export file
 */
export function sort(params: string[][]) {
    const ordered = params.sort(sortByFilename).reduce((buffer, exportArr) => {
        const [_, exportStatement] = exportArr
        return `${buffer}${exportStatement}\r\n`
    }, String())

    return ordered
}
