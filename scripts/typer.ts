/**
 * Creates type definitions for icon names used in Logo and Badge components
 */
export function typify(filenames: string[]) {
    const badges = [] as string[]
    const logos = [] as string[]

    filenames.forEach((iconName) => {
        switch (iconName.includes('Badge')) {
            case true:
                badges.push(`'${iconName}'`)

            case false:
                logos.push(`'${iconName}'`)
        }
    })

    return `
      export type LogoNames = ${logos.sort().join(' | ')}

      export type BadgeNames = ${badges.sort().join(' | ')}

      export type CryptoconNames = LogoNames | BadgeNames
      `
}
