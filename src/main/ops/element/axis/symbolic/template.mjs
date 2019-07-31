import { symloops, symindex, split } from '../../utils'
import { RESULT, OF } from '../../../../../resources'

export default function (args) {
    const [raxes, iaxes, aaxes] = split(Array.from(this.axes))

    return `
        ${args.global}
        
        ${symloops(raxes, OF, `
            const ri = ${symindex(raxes, RESULT, this.result)}
            ${args.init}
            
            ${symloops(iaxes, OF, `
                const ai = ${symindex(aaxes, OF, this.of)}
                ${args.reduce}
            `)}
            
            ${args.assign}
        `)}
            
        return args.result
    `
}
