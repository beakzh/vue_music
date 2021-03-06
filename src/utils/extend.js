import { useNumberFormat } from './number'
import { first, last, sampleSize, sample } from 'lodash'

Array.prototype.first = function () {
	return first(this)
}

Array.prototype.last = function () {
	return last(this)
}

Array.prototype.sampleSize = function (size) {
	return sampleSize(this, size)
}

Array.prototype.sample = function () {
	return sample(this)
}

Number.prototype.NumberFormat = function () {
	return useNumberFormat(this)
}
