function scheduleHtmlParser(providerRes) {

  function parseWeeks(weekString) {
    const weeks = [];
    // 去除末尾的周字
    weekString = weekString.replace(/周$/, "");
    weekString.split(",").forEach((part) => {
      if (part.includes("-")) {
        const [start, end] = part.split("-").map(Number);
        for (let i = start; i <= end; i++) {
          weeks.push(i);
        }
      } else {
        weeks.push(Number(part));
      }
    });
    return weeks;
}

  const data = JSON.parse(providerRes);
  const result = [];
  data.xskb.forEach((course) => {
    const {
      KCM, // 课程名
      YPSJDD, // 上课地点
      SKJS, // 授课教师
      SKZCMC, // 上课周数
      SKXQ, // 上课星期
      KSJC, // 开始节次
      JSJC, // 结束节次
    } = course;
    const weeks = parseWeeks(SKZCMC);

    // 节次范围解析
    const begin_section = parseInt(KSJC);
    const end_section = parseInt(JSJC);
    const sections = Array.from(
      { length: end_section - begin_section + 1 },
      (_, i) => begin_section + i
    );

    result.push({
      name: KCM, // 课程名
      position: YPSJDD, // 上课地点
      teacher: SKJS, // 教室名称
      weeks, // 周数
      day: parseInt(SKXQ), // 星期
      sections, // 节次
    });
  });
  return result;
}
