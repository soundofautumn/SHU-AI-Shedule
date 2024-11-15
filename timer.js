async function scheduleTimer() {
  return {
    totalWeek: 10, // 总周数：[1, 30]之间的整数
    startWithSunday: false, // 是否是周日为起始日，该选项为true时，会开启显示周末选项
    showWeekend: false, // 是否显示周末
    forenoon: 4, // 上午课程节数：[1, 10]之间的整数
    afternoon: 4, // 下午课程节数：[0, 10]之间的整数
    night: 4, // 晚间课程节数：[0, 10]之间的整数
    sections: [
      {
        section: 1, // 节次：[1, 30]之间的整数
        startTime: "08:00", // 开始时间：参照这个标准格式5位长度字符串
        endTime: "08:45", // 结束时间：同上
      },
      {
        section: 2,
        startTime: "08:55",
        endTime: "09:40",
      },
      {
        section: 3,
        startTime: "10:00",
        endTime: "10:45",
      },
      {
        section: 4,
        startTime: "10:55",
        endTime: "11:40",
      },
      {
        section: 5,
        startTime: "13:00",
        endTime: "13:45",
      },
      {
        section: 6,
        startTime: "13:55",
        endTime: "14:40",
      },
      {
        section: 7,
        startTime: "15:00",
        endTime: "15:45",
      },
      {
        section: 8,
        startTime: "15:55",
        endTime: "16:40",
      },
      {
        section: 9,
        startTime: "18:00",
        endTime: "18:45",
      },
      {
        section: 10,
        startTime: "18:55",
        endTime: "19:40",
      },
      {
        section: 11,
        startTime: "20:00",
        endTime: "20:45",
      },
      {
        section: 12,
        startTime: "20:55",
        endTime: "21:40",
      },
    ], // 课程时间表，注意：总长度要和上边配置的节数加和对齐
  };
}
