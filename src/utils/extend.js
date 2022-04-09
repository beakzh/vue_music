import { useNumberFormat } from './number'
import { sampleSize } from 'lodash'

Array.prototype.sampleSize = function (size) {
	return sampleSize(this, size)
}

Number.prototype.NumberFormat = function () {
	return useNumberFormat(this)
}
