import { useNumberFormat } from './number'

Number.prototype.NumberFormat = function () {
	return useNumberFormat(this)
}
