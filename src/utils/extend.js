import { useNumberFormat } from './number'
import { first, sampleSize } from 'lodash'

Array.prototype.first = function () {
	return first(this)
}
Array.prototype.sampleSize = function (size) {
	return sampleSize(this, size)
}

Number.prototype.NumberFormat = function () {
	return useNumberFormat(this)
}
