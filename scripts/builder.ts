import fs from 'fs/promises'
import path from 'path'
import {
    badger,
    clean,
    componentize,
    consolify,
    parse,
    pretty,
    sort,
    stringify,
    transform,
    typify,
} from '.'

const svgDirPath = path.join(__dirname, '../src/svg')
const componentDirPath = path.join(__dirname, '../src/components')
const exportFilePath = path.join(componentDirPath, '/index.ts')
const typeFilePath = path.join(__dirname, '../src/types.ts')

;(async () => {
    const svgDirectory = await fs.readdir(svgDirPath)

    console.log(`Starting to build icon components from ${svgDirPath}`)

    const consoleData: string[][] = []
    const componentNames: string[] = []

    await fs.rm(componentDirPath, { recursive: true })
    await fs.mkdir(componentDirPath)

    Promise.all(
        svgDirectory.map(async (file) => {
            const componentName = file.slice(0, -4)
            const svgFilePath = `${svgDirPath}/${componentName}.svg`
            const componentFilePath = `${componentDirPath}/${componentName}.tsx`
            const exportString = `export * from './${componentName}'`

            const svg = await fs.readFile(svgFilePath)
            const cleaned = clean(svg, componentName)
            const parsed = parse(cleaned)
            const transformed = transform(parsed)
            const processed = badger(transformed, componentName)
            const stringified = stringify(processed.element)
            const componentized = componentize(
                stringified,
                componentName,
                processed.rectFill
            )

            const prettiedSvg = pretty(cleaned)
            const prettiedComponent = pretty(componentized)
            await fs.writeFile(svgFilePath, prettiedSvg)
            await fs.writeFile(componentFilePath, prettiedComponent)

            componentNames.push(componentName)
            consoleData.push([componentName, svgFilePath])

            return [componentName, exportString]
        })
    ).then((exportData) => {
        const sortedExportData = sort(exportData)
        const typed = pretty(typify(componentNames))

        fs.writeFile(exportFilePath, sortedExportData)
        fs.writeFile(typeFilePath, typed)
        consolify(consoleData)
    })
})()
