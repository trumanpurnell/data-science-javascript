export default class RawArrayUtils {

    static * flatten(rawArray) {
        for (let i = 0; i < rawArray.length; i++) {
            if (Array.isArray(rawArray[i]))
                yield* this.flatten(rawArray[i])

            else if (rawArray[i] instanceof Object)
                yield* this.flatten(rawArray[i].toRawFlat())

            else if (typeof rawArray[i] === 'number')
                yield rawArray[i]
        }
    }

    static getShape(rawArray, shape = []) {
        if (!rawArray.length) return shape

        return this.getShape(rawArray[0], shape.concat(rawArray.length))
    }

}