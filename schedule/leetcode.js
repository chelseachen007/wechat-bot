var readBinaryWatch = function (turnedOn) {
	const result = [];
	const arr = [1, 2, 4, 8, 1, 2, 4, 8, 16, 32];
	// nums 还剩几个空位
	// i 取到第几位了
	// temp [时针,分针]
	const backTrace = function (nums, i, temp) {
		if (temp[0] > 12 || temp[1] > 60) return;
		if (nums === 0) {
			const minute = temp[1] < 10 ? `0${temp[1]}` : temp[1];
			result.push(`${temp[0]}:${minute}`);
			return;
		}
		for (let j = i; j < arr.length; j++) {
			if (j <= 3) {
				temp[0] = temp[0] + arr[j];
			} else {
				temp[1] = temp[1] + arr[j];
			}
			nums = nums - 1;
			backTrace(nums, j + 1, temp);
			nums = nums + 1;

			if (j <= 3) {
				temp[0] = temp[0] - arr[j];
			} else {
				temp[1] = temp[1] - arr[j];
			}
		}
	};
	backTrace(turnedOn, 0, [0, 0]);
	console.log(result, result.length);
	return result;
};

const result = readBinaryWatch(2);

const ans = [
	"0:03",
	"0:05",
	"0:06",
	"0:09",
	"0:10",
	"0:12",
	"0:17",
	"0:18",
	"0:20",
	"0:24",
	"0:33",
	"0:34",
	"0:36",
	"0:40",
	"0:48",
	"1:01",
	"1:02",
	"1:04",
	"1:08",
	"1:16",
	"1:32",
	"2:01",
	"2:02",
	"2:04",
	"2:08",
	"2:16",
	"2:32",
	"3:00",
	"4:01",
	"4:02",
	"4:04",
	"4:08",
	"4:16",
	"4:32",
	"5:00",
	"6:00",
	"8:01",
	"8:02",
	"8:04",
	"8:08",
	"8:16",
	"8:32",
	"9:00",
	"10:00",
];
console.log(ans.length);
const fil = result.filter((v) => !ans.includes(v));
console.log(fil);
